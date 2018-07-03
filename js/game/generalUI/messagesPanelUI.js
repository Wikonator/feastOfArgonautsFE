function messages(vaultPanelButton, GUIArea, vaultContainer,messagePanel, messagePanelButton, messageButtonText, campsPanelButton){
    
    messageTabLines = new PIXI.Sprite(
        PIXI.loader.resources["messageTable"].textures['message_table_top_panel.png']
    ),
    messageTabSlider = new PIXI.Sprite(
        PIXI.loader.resources["messageTable"].textures['message_table_scroll.png']
    )        
    messageTabTable = new PIXI.Sprite(
        PIXI.loader.resources["messageTable"].textures['message_table.png']
    );

    messagePanelButton.hover = PIXI.loader.resources["messagePanel"].textures['messages_buttn_hovered.png'];
    messagePanelButton.pressed = PIXI.loader.resources["messagePanel"].textures['messages_buttn_pressed.png'];
    messagePanelButton.normal = PIXI.loader.resources["messagePanel"].textures['messages_buttn_usual.png'];
    campsPanelButton.hover = vaultPanelButton.hover;
    campsPanelButton.pressed = vaultPanelButton.pressed;
    campsPanelButton.normal = vaultPanelButton.normal;


    function openMessageTab() {
        scrollContainerSelector = messageScrollContainer;
        display.removeEventListener("wheel", scrollSelectedTab, false);

        if (messagePanelButton.isClicked == true) {
            GUIArea.removeChild(messageContainer);
            messagePanelButton.isClicked = false;
            messagePanelButton.isdown = false;
            messagePanelButton.texture = messagePanelButton.normal;

        } else {
            messagePanelButton.isClicked = true;
            GUIArea.removeChild(messagePanel);
            GUIArea.addChild(messageContainer);
            GUIArea.addChild(messagePanel);
            display.addEventListener("wheel", scrollSelectedTab, false);
            if (campsPanelButton.isClicked || vaultPanelButton.isClicked) {
                vaultPanelButton.isClicked = false;
                vaultPanelButton.isdown = false;
                vaultPanelButton.texture = vaultPanelButton.normal;
                campsPanelButton.isClicked = false;
                campsPanelButton.isdown = false;
                campsPanelButton.texture = campsPanelButton.normal;
                GUIArea.removeChild(campsContainer);
                GUIArea.removeChild(vaultContainer);
            }
            messagePanelButton.isClicked = true;
            campsPanelButton.isdown = false;
        }
    }


    messagePanel.position.x = 22;
    messagePanel.position.y = 168;

    messagePanel.scale.x = 0.4;
    messagePanel.scale.y = 0.4;

    messageButtonText.anchor.x = 0.5;
    messageButtonText.anchor.y = 0.5;

    messagePanelButton.interactive = true;
    messagePanelButton.on('click', onClick);
    messagePanelButton.on('mouseover', onButtonOver);
    messagePanelButton.on('mouseout', onButtonOut);
    function onClick() {
        if (this.isdown) {
            this.isdown = false;
            this.texture = this.hover;
        } else {

            this.isdown = true;
            this.texture = this.pressed;
            this.alpha = 1;
        }
    }
    function onButtonOver() {
        if (this.isdown) {
            return;
        }
        this.texture = this.hover;
    }

    function onButtonOut() {
        if (this.isdown) {
            return;
        }
        this.texture = this.normal;
    }

    messagePanelButton.position = {x: messagePanel.width - 20, y: messagePanel.height + 10};
    messagePanelButton.anchor = {x: 0.5, y: 0.5};
    messagePanelButton.scale = {x: 1, y: 1};
    messagePanelButton.on("click", openMessageTab);
    messagePanelButton.isClicked = false;
    messageButtonText.anchor = {x: 0.5, y: 0.5};
    messageButtonText.position = {x: messagePanelButton.width - 160, y: messagePanelButton.height - 20};
    messageButtonText.scale = {x: 1.5, y: 1.5};
    messagesUnreadTxt.anchor = {x: 0.5, y: 0.5};
    messagesUnreadTxt.position = {x: 445, y: 50};
    messagesUnreadTxt.scale = {x: 1.5, y: 1.5};


    
    messageTabLines.position.x = 222;
    messageTabLines.position.y = 50;
    messageTabSlider.position.x = 2457;
    messageTabSlider.position.y = 390;

    let headerMessageFrom = new PIXI.Text("Message from", {
            fontFamily: 'bariol',
            fontSize: 20,
            fill: "#0BF780",
            textBaseline: "alphabet"
        }),
        headerText = new PIXI.Text("Text", {
            fontFamily: 'bariol',
            fontSize: 20,
            fill: "#0BF780",
            textBaseline: "alphabet"
        });
    headerMessageFrom.position.x = 305;
    headerMessageFrom.position.y = 78;
    headerMessageFrom.scale.x = 1.5;
    headerMessageFrom.scale.y = 1.5;
    headerText.position.x = 565;
    headerText.position.y = 78;
    headerText.scale.x = 1.5;
    headerText.scale.y = 1.5;


    messageContainer.addChild(messageTabTable, messageTabLines, messageTabSlider, headerMessageFrom, headerText);


    messageTabContents = [];
    let messageScroller, messageLayoutGroup, messageMaskingRectangle;

    createMessageTable = function (data) {

        let messageTextOptions = {
            wordWrap: true,
            wordWrapWidth: 1250,
            fontFamily: 'bariol',
            fontSize: 21,
            fill: "#18A763",
            align: 'center',
            textBaseline: "alphabet"
        };

        if (changeTheTab === true) {                          // deleting previous
            for (let i = 0; i <= messageTabContents.length; ++i) {
                messageContainer.removeChild(messageTabContents[i]);
            }
            messageTabContents = [];
            messageScrollContainer.removeChild(messageScroller, messageLayoutGroup, messageMaskingRectangle);

        }
        messageLayoutGroup = new PIXI.Container;
        messageScroller = new GOWN.ScrollContainer();
        messageScroller.id = 10;
        messageScroller._verticalScrollPolicy = GOWN.Scroller.INTERACTION_MOUSE;
        messageScroller.interactive = false;
        messageScroller.viewPort = messageLayoutGroup;
        messageScroller.x = 250;
        messageScroller.y = 350;
        messageScroller.height = (windowHeight / 2); //270
        messageScroller.width =(windowWidth / 2) ; //900
        messageMaskingRectangle = new PIXI.Graphics();
        messageMaskingRectangle.drawRect(0, 0, 2050, 715); // x,y,width and height << this clips everything outside of this rectangle and determines what is visible

        messageScrollContainer.addChild(messageScroller, messageLayoutGroup, messageMaskingRectangle);
        messageScrollContainer.mask = messageMaskingRectangle;
        messageScrollContainer.position = {x: 285, y: 145};
        messageContainer.addChild(messageScrollContainer);
        let lastLineY = 0; //145
        for (let message in data) {
            // if (counter > 11) break;
            messageTextOptions.fill = ("#" + data[message][1].colour);
            let messageFrom = new PIXI.Text(data[message][1].text, messageTextOptions);
            messageTextOptions.fill = ("#" + data[message][2].colour);
            let messageTxt = new PIXI.Text(data[message][2].text, messageTextOptions);

            messageFrom.position.y = lastLineY;
            messageFrom.position.x = 0; //305
            messageFrom.scale = {x: 1.5, y: 1.5};
            messageTxt.position.y = lastLineY;
            messageTxt.position.x = 150;    //540
            messageTxt.scale = {x:1.5, y:1.5};

            lastLineY += (messageFrom.height + messageTxt.height);

            messageLayoutGroup.addChild(messageFrom, messageTxt);
            messageTabContents.push(messageFrom, messageTxt);
        }
        changeTheTab = true;
        dataCameSwitch = false;
    };


    messagePanel.addChild(messagePanelButton, messageButtonText, messagesUnreadTxt);

    messageContainer.position = {x: 220, y: 168};
    messageContainer.scale = {x : 0.4, y: 0.4};
}