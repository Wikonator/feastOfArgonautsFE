function createPlayerUI() {

    textOptions.fill = "black";
    textOptions.fontFamily = "conthrax";
    textOptions.fontSize = 18;

    let buyPanel = new PIXI.Sprite( // [objectCOMiDosiel[description] + "_hover.png"]
        PIXI.loader.resources['buyPanel'].textures["buy_panel.png"]
        ),
        buyButton = new PIXI.Sprite(
            PIXI.loader.resources["buyPanel"].textures['buy_buttn_usual.png']
        ),
        buyButtonText = new PIXI.Text("BUY", textOptions),

        tradePanel = new PIXI.Sprite(
            PIXI.loader.resources["tradePanel"].textures['trade_panel.png']
        ),
        tradeButton = new PIXI.Sprite(
            PIXI.loader.resources["tradePanel"].textures["trade_buttn_usual.png"]
        ),
        tradeButtonText = new PIXI.Text("CHANGE", textOptions),

        scarab = new PIXI.Sprite(
            PIXI.loader.resources["scarab"].textures['Scarab_logo.png']
        );

    let negPanelBottom1 = new PIXI.Sprite(
        PIXI.loader.resources["negativePanel"].textures["dark_bottom_panel.png"]
        ),
        negPanelBottom2 = new PIXI.Sprite(
            PIXI.loader.resources["negativePanel"].textures["dark_bottom_panel.png"]
        ),
        negPanelBottom3 = new PIXI.Sprite(
            PIXI.loader.resources["negativePanel"].textures["dark_bottom_panel.png"]
        ),
        negPanelBottom4 = new PIXI.Sprite(
            PIXI.loader.resources["negativePanel"].textures["dark_bottom_panel.png"]
        ),

        vaultPanel = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultPanel"].textures['buttn_panel.png']
        ),
        vaultPanelIcon = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultPanel"].textures['vault_icon.png']
        ),
        vaultPanelButton = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultPanel"].textures['buttn_usual.png']
        );
    textOptions.fill = "white";
    textOptions.fontSize = 22;
    let vaultButtonText = new PIXI.Text("VAULT", textOptions),

        campsPanel = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultPanel"].textures['buttn_panel.png']
        ),
        campsPanelButton = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultPanel"].textures['buttn_usual.png']
        ),
        campsPanelIcon = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultPanel"].textures['camp_icon.png']
        );
    let campsButtonText = new PIXI.Text("CAMPS", textOptions),

        messagePanel = new PIXI.Sprite(
            PIXI.loader.resources["messagePanel"].textures['messages_panel.png']
        ),
        messagePanelButton = new PIXI.Sprite(
            PIXI.loader.resources["messagePanel"].textures['messages_buttn_usual.png']
        ),
        messageButtonText = new PIXI.Text("MESSAGES", textOptions)

    ; // PIXI.loader.resources["buyPanel"].textures['.png'];
    let vaultTabDiamonds = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']            // refactor into a loop... <<<<<<
        ),
        vaultTabSteles = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
        ),
        vaultTabScrews = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
        ),
        vaultTabNula = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
        ),
        vaultTabArtefacts = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
        ),
        vaultTabBtnDiamonds = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png']
        ),
        vaultTabBtnStelae = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png']
        ),
        vaultTabBtnNula = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png']
        ),
        vaultTabBtnArtefacts = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png']
        ),
        vaultTabBtnScrews = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png']
        ),
        vaultTabTable = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['items_panel.png']
        ),
        campsTabCamps = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
        ),
        campsTabCampSites = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
        ),
        campsTabInventory = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
        ),
        campsTabOperators = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
        ),
        campsTabExos = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
        ),
        campsTabRents = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
        ),
        campsTabBtnCamps = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png']
        ),
        campsTabBtnCampSites = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png']
        ),
        campsTabBtnInventory = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_disabled.png']
        ),
        campsTabBtnOperators = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_disabled.png']
        ),
        campsTabBtnExos = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_disabled.png']
        ),
        campsTabBtnRents = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_disabled.png']
        ),
        campsTabTable = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['items_panel.png']
        ),
        messageTabTable = new PIXI.Sprite(
            PIXI.loader.resources["messageTable"].textures['message_table.png']
        ),
        messageTabLines = new PIXI.Sprite(
            PIXI.loader.resources["messageTable"].textures['message_table_top_panel.png']
        ),
        messageTabSlider = new PIXI.Sprite(
            PIXI.loader.resources["messageTable"].textures['message_table_scroll.png']
        );



    buyButton.hover = PIXI.loader.resources["buyPanel"].textures['buy_buttn_hovered.png'];              // Button States
    buyButton.pressed = PIXI.loader.resources["buyPanel"].textures['buy_buttn_pressed.png'];
    buyButton.normal = PIXI.loader.resources["buyPanel"].textures['buy_buttn_usual.png'];
    tradeButton.hover = PIXI.loader.resources["tradePanel"].textures['trade_buttn_hovered.png'];
    tradeButton.pressed = PIXI.loader.resources["tradePanel"].textures['trade_buttn_pressed.png'];
    tradeButton.normal = PIXI.loader.resources["tradePanel"].textures['trade_buttn_usual.png'];
    vaultPanelButton.hover = PIXI.loader.resources["campsVaultPanel"].textures['buttn_hovered.png'];
    vaultPanelButton.pressed = PIXI.loader.resources["campsVaultPanel"].textures['buttn_pressed.png'];
    vaultPanelButton.normal = PIXI.loader.resources["campsVaultPanel"].textures['buttn_usual.png'];
    campsPanelButton.hover = vaultPanelButton.hover;
    campsPanelButton.pressed = vaultPanelButton.pressed;
    campsPanelButton.normal = vaultPanelButton.normal;
    messagePanelButton.hover = PIXI.loader.resources["messagePanel"].textures['messages_buttn_hovered.png'];
    messagePanelButton.pressed = PIXI.loader.resources["messagePanel"].textures['messages_buttn_pressed.png'];
    messagePanelButton.normal = PIXI.loader.resources["messagePanel"].textures['messages_buttn_usual.png'];


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



    //////////////////////////////////////////// Left panel button functions / /////////////// / / / / / /

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

    function openVaultTab() {
        display.removeEventListener("wheel", scrollSelectedTab, false);
        scrollContainerSelector = vaultScrollContainer;

        if (!vaultPanelButton.isClicked) {
            vaultPanelButton.isClicked = true;
            display.addEventListener("wheel", scrollSelectedTab, false);
            GUIArea.removeChild(vaultPanel);
            GUIArea.addChild(vaultContainer);
            GUIArea.addChild(vaultPanel);

            if (campsPanelButton.isClicked || messagePanelButton.isClicked) {
                messagePanelButton.isClicked = false;
                campsPanelButton.isClicked = false;
                messagePanelButton.isdown = false;
                messagePanelButton.texture = messagePanelButton.normal;
                campsPanelButton.isdown = false;
                campsPanelButton.texture = campsPanelButton.normal;
                GUIArea.removeChild(campsContainer);
                GUIArea.removeChild(messageContainer);
            }
        } else {

            vaultPanelButton.texture = vaultPanelButton.hover;
            vaultPanelButton.isClicked = false;
            GUIArea.removeChild(vaultContainer);
        }
    }

    function openCampsTab() {
        display.removeEventListener("wheel", scrollSelectedTab, false);
        scrollContainerSelector = campScrollContainer;
        if (!campsPanelButton.isClicked) {
            campsPanelButton.isClicked = true;
            GUIArea.addChild(campsContainer);
            display.addEventListener("wheel", scrollSelectedTab, false);
            this.bringToFront();

            if (vaultPanelButton.isClicked || messagePanelButton.isClicked) {
                vaultPanelButton.isClicked = false;
                messagePanelButton.isClicked = false;
                vaultPanelButton.isdown = false;
                messagePanelButton.isdown = false;
                vaultPanelButton.texture = vaultPanelButton.normal;
                messagePanelButton.texture = messagePanelButton.normal;
                GUIArea.removeChild(vaultContainer);
                GUIArea.removeChild(messageContainer);
            }
        } else {
            campsPanelButton.texture = campsPanelButton.hover;
            campsPanelButton.isClicked = false;
            GUIArea.removeChild(campsContainer);
        }

    }

    ///////////////////////////// Arrays of Elements ////////////////////////////////////

    let scaleArray = [
        buyPanel, buyButton, tradePanel, tradeButton, scarab,
        // miningPanelButtonBigFirst, miningPanelButtonBigSecond, miningPanelButtonBigThird, miningPanelButtonBigFourth,
        // userPanel, levelBar,
        negPanelBottom1, negPanelBottom2, negPanelBottom3,
        negPanelBottom4, vaultPanel, campsPanel, campsPanelButton, campsPanelIcon, messagePanel
    ];

    let UITextArray = [
        buyButtonText, tradeButtonText,
        // miningTextFirst, miningTextSecond, miningTextThird, miningTextFourth,
        vaultButtonText, campsButtonText, messageButtonText
    ];

    for (let i = 1; i <= UITextArray.lenght; ++i) {
        UITextArray[i].anchor.x = 0.5;
        UITextArray[i].anchor.y = 0.5;
    }

    let buttonArray = [buyButton, tradeButton, vaultPanelButton, campsPanelButton, messagePanelButton];


    let negaMoveArray = [negPanelBottom2, negPanelBottom3, negPanelBottom4, vaultPanel,
        campsPanel, campsPanelButton, campsPanelIcon, messagePanel, campsContainer, vaultContainer, messageContainer];

    for (let i in scaleArray) {

        scaleArray[i].scale.x = 0.4;
        scaleArray[i].scale.y = 0.4;
    }

    for (let i in buttonArray) {
        buttonArray[i].interactive = true;
        buttonArray[i].on('click', onClick);
        buttonArray[i].on('mouseover', onButtonOver);
        buttonArray[i].on('mouseout', onButtonOut);
    }

    buyPanel.position.x = 830;
    buyButton.position ={x:886,y:43};
    buyButtonText.position={x:920,y:46};
    buyButtonText.scale ={x:0.6,y:0.6};
    tradePanel.position={x:463,y:0};
    tradeButton.position ={x:563,y:44};
    tradeButtonText.position={x:579,y:46};
    tradeButtonText.scale ={x:0.6,y:0.6}
    scarab.position.x = 686;


    negPanelBottom1.position = {x : 30, y: 80};
    negPanelBottom2.position = {x: 35, y: 80};
    vaultPanel.position = {x: 22, y: 88};
    vaultPanelButton.position = {x: 210, y: 17};
    vaultPanelButton.on("click", openVaultTab);
    vaultPanelButton.isClicked = false;
    vaultButtonText.position = {x: 385, y: 35};
    vaultButtonText.scale = {x: 1.5, y: 1.5};
    vaultPanelIcon.position = {x: 65, y: 7};
    vaultPanelIcon.scale = {x: 1.2, y: 1.2};

    negPanelBottom3.position.x = 35;
    negPanelBottom3.position.y = 123;

    campsPanel.position.x = 22;
    campsPanel.position.y = 127;
    campsPanelButton.position.x = 106;
    campsPanelButton.position.y = 135;
    campsPanelButton.on("click", openCampsTab);
    campsPanelButton.isClicked = false;
    campsButtonText.position.x = (campsPanelButton.width - 25);
    campsButtonText.position.y = (campsPanelButton.height - 15);
    campsButtonText.scale = {x: 1.5, y: 1.5};
    campsPanelIcon.position.x = 50;
    campsPanelIcon.position.y = 134;


    negPanelBottom4.position.y = 163;
    negPanelBottom4.position.x = 35;
    messagePanel.position.x = 22;
    messagePanel.position.y = 168;
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


    GUIArea.addChild(scarab, buyPanel, buyButton, buyButtonText, negPanelBottom1, negPanelBottom2,
        negPanelBottom3, negPanelBottom4, tradePanel, tradeButton, tradeButtonText,
        negativePanelContainer
        // ,userPanel, levelBar
    );


    vaultPanel.addChild(vaultPanelButton, vaultButtonText, vaultPanelIcon);
    campsPanelButton.addChild(campsButtonText);
    messagePanel.addChild(messagePanelButton, messageButtonText, messagesUnreadTxt);
    GUIArea.addChild(vaultPanel, campsPanel, campsPanelIcon, campsPanelButton, messagePanel
        // , textLayer
    );

    app.stage.addChild(GUIArea);

    vaultContainer.position = {x: 250, y: 92};            // Container Positions
    vaultContainer.scale = {x: 0.5, y: 0.42};



    campsContainer.position = {x: 250, y: 132};
    campsContainer.scale = {x: 0.5, y: 0.42};

    messageContainer.position = {x: 220, y: 168};
    messageContainer.scale = {x : 0.4, y: 0.4};

    //////////// //////////// //////////// //////////// //////////// //////////// ////////////  ////////////
    vaultTabSteles.position.x = 370;                              // Container children
    vaultTabScrews.position.x = 760;
    vaultTabArtefacts.position.x = 1150;
    vaultTabNula.position.x = 1540;
    vaultTabTable.position.y = 55;
    vaultTabTable.scale.x = 0.9;
    vaultTabTable.scale.y = 1;


    vaultTabBtnDiamonds.position.x = 120;                             // Vault tab Buttons
    vaultTabBtnDiamonds.btn = {name: 1, isDown: false};
    vaultTabBtnStelae.position.x = 490;
    vaultTabBtnStelae.btn = {name: 4, isDown: false};
    vaultTabBtnScrews.position.x = 876;
    vaultTabBtnScrews.btn = {name: 3, isDown: false};
    vaultTabBtnArtefacts.position.x = 1268;
    vaultTabBtnArtefacts.btn = {name: 2, isDown: false};
    vaultTabBtnNula.position.x = 1658;
    vaultTabBtnNula.btn = {name: 5, isDown: false};

    textOptions.fontSize = 20;                                           // Vault tab button Texts
    textOptions.fill = "white";
    let
        vaultTabDiamondsTxt = new PIXI.Text("DIAMONDS", textOptions),
        vaultTabStelaesTxt = new PIXI.Text('STELES', textOptions),
        vaultTabScrewsTxt = new PIXI.Text('SCREWS', textOptions),
        vaultTabArtefactsTxt = new PIXI.Text('ARTEFACTS', textOptions),
        vaultTabNullTxt = new PIXI.Text('NULA', textOptions);


    let vaultTabTextArrays = [
        vaultTabDiamondsTxt, vaultTabStelaesTxt, vaultTabScrewsTxt, vaultTabArtefactsTxt, vaultTabNullTxt
    ];

    for (let i = 0; i < vaultTabTextArrays.length; ++i) {
        vaultTabTextArrays[i].scale.x = 1.5;
        vaultTabTextArrays[i].scale.y = 1.5;
        vaultTabTextArrays[i].anchor.x = 0.5;
        vaultTabTextArrays[i].anchor.y = 0.5;
        vaultTabTextArrays[i].position.y = 40;
    }

    vaultTabDiamondsTxt.position.x = 300;
    vaultTabStelaesTxt.position.x = 675;
    vaultTabScrewsTxt.position.x = 1060;
    vaultTabArtefactsTxt.position.x = 1455;
    vaultTabNullTxt.position.x = 1845;

    // Vault tab grey Lines
    let tabLineY = 170,
        tabLineX = 85,
        vaultTabLine = PIXI.loader.resources["campsVaultTable"].textures['panel_for_text_a.png'];

    for (let i = 0; i < 6; ++i) {
        let greyTabLine = new PIXI.Sprite(vaultTabLine);
        greyTabLine.position.y = tabLineY;
        greyTabLine.position.x = tabLineX;
        greyTabLine.scale.x = 0.9;
        tabLineY += 120;
        vaultContainer.addChild(greyTabLine);
    }

// // // //////////// //////////// //////////// //////////// //////////// //////////// //////////// //////////// ////////////
    campsTabTable.position.y = 55;                   // Camps Tab
    // campsTabTable.scale.x = 0.9;
    campsTabCampSites.position.x = 390;
    campsTabInventory.position.x = 760;
    campsTabOperators.position.x = 1130;
    campsTabExos.position.x = 1500;
    campsTabRents.position.x = 1870;

    campsTabBtnCamps.position.x = 120;           // Btns
    campsTabBtnCamps.btn = {name: "camps", isDown: false};
    campsTabBtnCampSites.position.x = 514;
    campsTabBtnCampSites.btn = {name: "campSite", isDown: false};
    campsTabBtnInventory.position.x = 880;
    campsTabBtnInventory.btn = {name: "inventory", isDown: false};
    campsTabBtnOperators.position.x = 1247;
    campsTabBtnOperators.btn = {name: "operators", isDown: false};
    campsTabBtnExos.position.x = 1620;
    campsTabBtnExos.btn = {name: "exos", isDown: false};
    campsTabBtnRents.position.x = 1990;
    campsTabBtnRents.btn = {name: "rents", isDown: false};


    let onFilterButtonOver = function () {
        if (this.isDisabled) {
            return
        }
        this.isOver = true;
        if (this.isdown) {
            return;
        }
        this.texture = this.hover;
    };

    let onFilterButtonOut = function () {
        if (this.isDisabled) {
            return
        }
        this.isOver = false;
        if (this.isdown) {
            return;
        }
        this.texture = this.normal
    };

    let campFilterBtnClick = function () {
        let button = this.btn;
        if (this.isDisabled) {
            return
        }
        if (button.isDown == false) {

            for (let butt in campsTabFiltersArray) {
                campsTabFiltersArray[butt].texture = campsTabFiltersArray[butt].normal;
                campsTabFiltersArray[butt].btn.isDown = false;
                campsTabFiltersArray[butt].isdown = false;
            }
            button.isDown = true;
            this.isdown = true;
            this.texture = this.pressed;
            this.alpha = 1;
            unfoldPosition.btn = button.name;
            unfoldPosition.isDown = button.isDown;
            unfoldPosition.isText = false;
            unFoldCamp(unfoldPosition);
        } else {
            button.isDown = false;
            this.isdown = false;
            this.texture = this.hover;
            unfoldPosition.isDown = button.isDown;
            unFoldCamp(unfoldPosition);
        }


    };

    let campOrCampSiteBtnClick = function () {
        let button = this.btn;
        if (button.isDown === false) {
            campsTabBtnCamps.texture = campsTabBtnCamps.normal;
            campsTabBtnCampSites.texture = campsTabBtnCampSites.normal;
            campsTabBtnCamps.btn.isDown = false;
            campsTabBtnCamps.isdown = false;
            campsTabBtnCampSites.isdown = false;
            campsTabBtnCampSites.btn.isDown = false;

            button.isDown = true;
            this.isdown = true;
            this.texture = this.pressed;
            this.alpha = 1;
            let campsOrAreas = {vault: {camps: []}};
            if (this.btn.name == "camps") {
                campsOrAreas.vault.camps = dataFromBack.vault.camps.filter( camp => camp.uLevel > 0);
                createCampsTable(campsOrAreas.vault.camps);
            }
            else {
                campsOrAreas.vault.camps = dataFromBack.vault.camps.filter( camp => camp.uLevel <= 0);
                createCampsTable(campsOrAreas.vault.camps);
            }
        } else {
            button.isDown = false;
            this.isdown = false;
            this.texture = this.hover;
            createCampsTable(dataFromBack.vault.camps);
        }
    };

    let campOrSiteButtArray = [campsTabBtnCamps, campsTabBtnCampSites],
        campsTabFiltersArray = [campsTabBtnInventory, campsTabBtnOperators,
            campsTabBtnExos, campsTabBtnRents];


    let campTabLineY = 170,                                                     // Camps tab grey lines
        campTabLineX = 90;
    let campTabLineTexture = PIXI.loader.resources["campsVaultTable"].textures['panel_for_text_a.png'];
    for (let i = 0; i < 6; ++i) {
        let campTabLine = new PIXI.Sprite(campTabLineTexture);
        campTabLine.position.y = campTabLineY;
        campTabLine.position.x = campTabLineX;
        campTabLineY += 120;
        campsContainer.addChild(campTabLine);
    }

    textOptions.fontSize = 22;

    let                                                   // Button Texts
        campTabCampsTxt = new PIXI.Text("CAMPS", textOptions),
        campTabCampAreaTxt = new PIXI.Text('CAMP SITES', textOptions),
        campTabInventoryTxt = new PIXI.Text('INVENTORY', textOptions),
        campTabOperatorsTxt = new PIXI.Text('OPERATORS', textOptions),
        campTabExosTxt = new PIXI.Text('EXOS', textOptions),
        campTabRentsTxt = new PIXI.Text('RENTS', textOptions);

    campTabCampsTxt.position.x = 310;
    campTabCampAreaTxt.position.x = 695;
    campTabInventoryTxt.position.x = 1070;
    campTabOperatorsTxt.position.x = 1435;
    campTabExosTxt.position.x = 1809;
    campTabRentsTxt.position.x = 2185;

    let campTabTxtArray = [campTabCampsTxt, campTabCampAreaTxt, campTabInventoryTxt, campTabOperatorsTxt,
        campTabOperatorsTxt, campTabExosTxt, campTabRentsTxt];


    ////////// ////////// ///// ////////// ////////// ///// ////////// ////////// ///// ////////// //////////

    userNameTxt.position.x = 35;                // User Interfae Text
    userNameTxt.position.y = 24;
    userCitizenTxt.position.y = 42;
    userCitizenTxt.position.x = 40;
    userCasteTxt.position.y = 57;
    userCasteTxt.position.x = 45;
    progressLvlTxt.position.x = 335;
    progressLvlTxt.position.y = 21;
    progressExpTxt.position.x = 320;
    progressExpTxt.position.y = 42;
    nextLvlExpTxt.position.x = 345;             //// REfactor this into a single Text Sprite
    nextLvlExpTxt.position.y = 42;
    softCurTxt.position.x = 575;
    softCurTxt.position.y = 20;
    hardCurTxt.position.x = 880;
    hardCurTxt.position.y = 19;



    let vaultBtnClick = function () {
        // let findContainer =
        scrollContainerSelector = vaultScrollContainer;
        let button = this.btn;
        if (button.isDown == false) {           // ak nebol stlaceny predtym
            for (let butt in vaultTabButtonArray) {
                vaultTabButtonArray[butt].texture = vaultTabButtonArray[butt].normal;
                vaultTabButtonArray[butt].btn.isDown = false;
                vaultTabButtonArray[butt].isdown = false;
            }
            button.isDown = true;
            this.isdown = true;
            this.texture = this.pressed;
            this.alpha = 1;
            createVaultTable(dataFromBack.vault.items, button);

        } else {                        // ak bol stralceny predtym
            this.btn.isDown = false;
            this.isdown = false;
            this.texture = this.hover;
            createVaultTable(dataFromBack.vault.items, button);
        }


    };
    let vaultTabButtonArray = [
        vaultTabBtnDiamonds, vaultTabBtnStelae, vaultTabBtnScrews, vaultTabBtnArtefacts,
        vaultTabBtnNula
    ];

    vaultContainer.addChild(vaultTabTable, vaultTabDiamonds, vaultTabSteles, vaultTabScrews,
        vaultTabArtefacts, vaultTabNula);

    for (let button in vaultTabButtonArray) {
        vaultTabButtonArray[button].position.y = 12;
        vaultTabButtonArray[button].hover = PIXI.loader.resources["campsVaultTable"].textures['buttn_hovered.png'];
        vaultTabButtonArray[button].normal = PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png'];
        vaultTabButtonArray[button].pressed = PIXI.loader.resources["campsVaultTable"].textures['buttn_pressed.png'];
        vaultTabButtonArray[button].disabled = PIXI.loader.resources["campsVaultTable"].textures['buttn_disabled.png'];
        vaultTabButtonArray[button].interactive = true;
        vaultTabButtonArray[button].isdown = false;
        vaultTabButtonArray[button].on('mouseover', onButtonOver);
        vaultTabButtonArray[button].on('mouseout', onButtonOut);
        vaultTabButtonArray[button].on("click", vaultBtnClick);
        vaultContainer.addChild(vaultTabButtonArray[button]);
    }

    vaultContainer.addChild(vaultTabDiamondsTxt, vaultTabStelaesTxt, vaultTabScrewsTxt,
        vaultTabArtefactsTxt, vaultTabNullTxt);

    campsContainer.addChild(campsTabTable, campsTabCamps, campsTabCampSites, campsTabInventory, campsTabOperators, campsTabExos,
        campsTabRents,
    );

    for (let button in campOrSiteButtArray) {
        campOrSiteButtArray[button].position.y = 12;
        campOrSiteButtArray[button].hover = PIXI.loader.resources["campsVaultTable"].textures['buttn_hovered.png'];
        campOrSiteButtArray[button].normal = PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png'];
        campOrSiteButtArray[button].pressed = PIXI.loader.resources["campsVaultTable"].textures['buttn_pressed.png'];
        campOrSiteButtArray[button].disabled = PIXI.loader.resources["campsVaultTable"].textures['buttn_disabled.png'];
        campOrSiteButtArray[button].interactive = true;
        campOrSiteButtArray[button].on('mouseover', onButtonOver);
        campOrSiteButtArray[button].on('mouseout', onButtonOut);
        campOrSiteButtArray[button].on("click", campOrCampSiteBtnClick);
        campsContainer.addChild(campOrSiteButtArray[button]);
    }

    for (let button in campsTabFiltersArray) {
        campsTabFiltersArray[button].position.y = 12;
        campsTabFiltersArray[button].hover = PIXI.loader.resources["campsVaultTable"].textures['buttn_hovered.png'];
        campsTabFiltersArray[button].normal = PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png'];
        campsTabFiltersArray[button].pressed = PIXI.loader.resources["campsVaultTable"].textures['buttn_pressed.png'];
        campsTabFiltersArray[button].disabled = PIXI.loader.resources["campsVaultTable"].textures['buttn_disabled.png'];
        campsTabFiltersArray[button].interactive = true;
        campsTabFiltersArray[button].isDisabled = true;
        campsTabFiltersArray[button].isText = false;
        campsTabFiltersArray[button].on('mouseover', onFilterButtonOver);
        campsTabFiltersArray[button].on('mouseout', onFilterButtonOut);
        campsTabFiltersArray[button].on("click", campFilterBtnClick);

        campsContainer.addChild(campsTabFiltersArray[button]);
    }

    for (let idx in campTabTxtArray) {
        campTabTxtArray[idx].position.y = 42;
        campTabTxtArray[idx].scale.x = 1.5;
        campTabTxtArray[idx].scale.y = 1.5;
        campTabTxtArray[idx].anchor.x = 0.5;
        campTabTxtArray[idx].anchor.y = 0.5;
        campsContainer.addChild(campTabTxtArray[idx]);
    }

    ////////// ////////// ///// ////////// ////////// ///// ////////// ////////// ///// ////////// //////////

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




    setupIsDone = true;

    function returnNameOfvaultKey(number, buttonName) {
        if (buttonName) {
            number = buttonName;
        }
        number = number + "";
        switch (number) {
            case '1':
                return "Diamond";
            case '2':
                return "Artefact";
            case '3':
                return "Screw";
            case '4':
                return "Stela";
            case '5':
                return "Nula";
            default:
                console.log(number);
                return "";

        }
    }

    function iconOfCamp(key) {
        // console.log("icon of camp");
        if (key.uLevel == 0) {
            return PIXI.loader.resources["campsVaultTable"].textures['camp_site_icon.png'];
        }
        else {
            return PIXI.loader.resources["campsVaultTable"].textures['camp_icon.png'];
        }
    }

    function campOrArea(key) {

        if (key.uLevel == 0) {
            return "Camp Site <<" + key.label + ">>"
        }
        else {
            return "Camp <<" + key.label + ">>"
        }
    }

    let vaultTabContents = [], iconArray = [], campsTabContents = [], messageTabContents = [];
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
    // ////// ////// ////// layout group and scroll container ////// ////// ////// //////


///////////////////////////////////////// create camp table for the Camps tab ////////////////////////////////
    let getCampItemIcon = function (itemGroup) {
        switch (itemGroup) {
            case "inventory":
                return PIXI.loader.resources["campsVaultTable"].textures['inventory_icon.png'];
            case "operators":
                return PIXI.loader.resources["campsVaultTable"].textures['operator_icon.png'];
            case "exos":
                return PIXI.loader.resources["campsVaultTable"].textures['exoskeleton_icon.png'];
            case "rents" :
                return PIXI.loader.resources["campsVaultTable"].textures['camp_site_icon.png'];
            default:
                console.log(itemGroup);
                return
        }
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // seckoCoNapisalIvo();

    let callUnFoldCamp = function () {

        unfoldPosition = this;
        unfoldPosition.isText = true;
        unFoldCamp(unfoldPosition);
    };

    let clickedCampArray = [];
    let campScroller, campLayoutGroup, campMaskingRectangle;
    let unFoldCamp = function (position) {          // what happens after Camp site click
        // console.log("position: "); console.log(position);
        let cleanUpTheCampTab = function (buttonWasPressed) {           // cleanup function

            if (buttonWasPressed) {
                // console.log("button was pressed during cleanup");
                for (let i = 0; i < clickedCampArray.length; ++i) {
                    campLayoutGroup.removeChild(clickedCampArray[i]);
                }
                clickedCampArray = [];
            } else {
                createCampsTable(dataFromBack.vault.camps);
                // console.log("clicked camp flag is true");
                for (let i = 0; i < clickedCampArray.length; ++i) {
                    campLayoutGroup.removeChild(clickedCampArray[i]);
                }
                clickedCampArray = [];
            }
        };

        let nameOfThisObject = position;            // set the global object to the PIXI.object that was clicked
        function moveCampsBelowClick(lastArrayLength, thisArrayLength) {                // moves the camps and campsites up or down after clicks
            let thisObject = campsTabContents.indexOf(nameOfThisObject);    //expand
            lastArrayLength /= 4;
            thisArrayLength /= 4;
            if (thisArrayLength == undefined ) {
                let moveSpritesY = lastArrayLength * 60;
                for (let idx = thisObject + 5; idx < campsTabContents.length; ++idx) {
                    campsTabContents[idx].position.y += moveSpritesY;
                }
            } else {
                let moveSpritesY = (lastArrayLength - thisArrayLength)*60;
                if (lastArrayLength >= thisArrayLength) {
                    for (let idx = thisObject + 5; idx < campsTabContents.length; ++idx) {
                        campsTabContents[idx].position.y -= moveSpritesY;
                    }
                } else {
                    for (let idx = thisObject + 5; idx < campsTabContents.length; ++idx) {
                        campsTabContents[idx].position.y += moveSpritesY;
                    }
                }
            }

        }
        if (nameOfThisObject.isText != true && nameOfThisObject.isDown == true) {              // filter button press

            let ButtonWasPressed = true;
            // console.log(clickedCampArray); // previous clicked camp array
            let lastArrayLength = clickedCampArray.length;
            cleanUpTheCampTab(ButtonWasPressed);

            let clickedCampX = nameOfThisObject.position.x + 45, clickedCampY = nameOfThisObject.position.y + 30;
            let campItemIconName = getCampItemIcon(nameOfThisObject.btn);
            let campItemIconTxtName = capitalizeFirstLetter(nameOfThisObject.btn);
            for (let item in nameOfThisObject.all[nameOfThisObject.btn]) {
                clickedCampY += 65;                 // spacing of rows

                let campItemIcon = new PIXI.Sprite(campItemIconName),
                    campItemIconTxt = new PIXI.Text(campItemIconTxtName, textOptions),
                    campItemName = new PIXI.Text(nameOfThisObject.all[nameOfThisObject.btn][item].label, textOptions),
                    campItemDescription = new PIXI.Text(nameOfThisObject.all[nameOfThisObject.btn][item].description, textOptions);

                campItemIcon.position = {x: clickedCampX, y: clickedCampY};
                campItemIconTxt.position = {x:  clickedCampX + 70, y: clickedCampY};
                campItemName.position = {x: clickedCampX + 315, y: clickedCampY};
                campItemDescription.position = {x:  clickedCampX + 650, y: clickedCampY};
                campItemIcon.scale = {x:1.5, y:1.5};
                campItemIconTxt.scale = {x:1.5, y:1.5};
                campItemName.scale = {x:1.5, y:1.5};
                campItemDescription.scale = {x:1.5, y:1.5};

                clickedCampArray.push(campItemIcon, campItemIconTxt, campItemName, campItemDescription);
                campLayoutGroup.addChild(campItemIcon, campItemIconTxt, campItemName, campItemDescription);

            }
            nameOfThisObject = campsTabContents.find(function(e) {
                return e.id === nameOfThisObject.id;
            });

            moveCampsBelowClick(lastArrayLength, clickedCampArray.length);

        } else {
            if (nameOfThisObject.clickedCampFlag != true) {         // if this is the 1st time a campSite is clicked
                console.log("text position before cleanup: "+ nameOfThisObject.position.y);
                cleanUpTheCampTab();
                console.log("text position after cleanup but before find: "+ nameOfThisObject.position.y);

                console.log("text position after cleanup and find: "+ nameOfThisObject.position.y);
                console.log(campScroller.verticalScrollPosition);
                let kam = {};
                kam.deltaY = nameOfThisObject.position.y;
                // campScroller._startTouch.y = campScroller.verticalScrollPosition - kam.deltaY;

                nameOfThisObject = campsTabContents.find(function(e) {
                    return e.id === nameOfThisObject.id;
                });
                console.log(kam);
                console.log(campScroller._startTouch.y);
                console.log(campScroller._scrollPosition);
                console.log(campScroller._startScrollPosition);
                campScroller.updateVerticalScrollFromTouchPosition(kam.deltaY, true);

                console.log(campScroller.verticalScrollPosition);
                // scrollSelectedTab(kam);

                for (let i in campsTabFiltersArray) {               // make all the buttons enabled
                    campsTabFiltersArray[i].isDisabled = false;
                    campsTabFiltersArray[i].isDown = false;
                    campsTabFiltersArray[i].texture = campsTabFiltersArray[i].normal;
                }
                // console.log("this texts positionY: " + nameOfThisObject.position.y);

                let clickedCampX = nameOfThisObject.position.x + 45, clickedCampY = nameOfThisObject.position.y ;
                for (let all in nameOfThisObject.all) {        // array = inventory, operators, exos, rents

                    let itemGroup = all;
                    for (let item in nameOfThisObject.all[all]) {
                        clickedCampY += 60;
                        let campItemIcon = new PIXI.Sprite(getCampItemIcon(itemGroup)),
                            campItemIconTxt = new PIXI.Text(capitalizeFirstLetter(itemGroup), textOptions),
                            campItemName = new PIXI.Text(nameOfThisObject.all[all][item].label, textOptions),
                            campItemDescription = new PIXI.Text(nameOfThisObject.all[all][item].description, textOptions);

                        campItemIcon.position = {x: clickedCampX, y: clickedCampY};
                        campItemIcon.scale = {x:1.5, y: 1.5};
                        campItemIconTxt.position = {x: clickedCampX + 70, y: clickedCampY};
                        campItemIconTxt.scale = {x:1.5, y: 1.5};
                        campItemName.position = {x: clickedCampX + 325, y: clickedCampY};
                        campItemName.scale = {x:1.5, y: 1.5};
                        campItemDescription.position = {x: clickedCampX + 650, y: clickedCampY};
                        campItemDescription.scale = {x:1.5, y: 1.5};

                        clickedCampArray.push(campItemIcon, campItemIconTxt, campItemName, campItemDescription);
                        campLayoutGroup.addChild(campItemIcon, campItemIconTxt, campItemName, campItemDescription);
                    }
                }
                nameOfThisObject.clickedCampFlag = true;
                nameOfThisObject.isDown = false;

                moveCampsBelowClick(clickedCampArray.length);

            } else {
                console.log("close the camp and disable buttons: now comes the cleanup");
                cleanUpTheCampTab();            // close the camp panel
                for (let i in campsTabFiltersArray) {               // make all the buttons disabled
                    campsTabFiltersArray[i].isDisabled = true;
                    campsTabFiltersArray[i].isDown = false;
                    campsTabFiltersArray[i].texture = campsTabFiltersArray[i].disabled;
                }

            }
        }
    };

    /////////////////////////// camps table creation //////////////////////////////////////

    campLayoutGroup = new PIXI.Container;
    campScroller = new GOWN.ScrollContainer();
    campScroller.id = 10;
    campScroller._verticalScrollPolicy = GOWN.Scroller.INTERACTION_MOUSE;
    campScroller.viewPort = campLayoutGroup;
    campScroller.x = 0;
    campScroller.y = 0;
    campScroller.height = (windowHeight / 2); //270
    campScroller.width =(windowWidth / 2) ; //900
    campMaskingRectangle = new PIXI.Graphics();
    campMaskingRectangle.beginFill(0xFFFFFF);
    campMaskingRectangle.drawRect(0, 0, 2050, 715); // x,y,width and height << this clips everything outside of this rectangle and determines what is visible
    campMaskingRectangle.hitArea = new PIXI.Rectangle( 0, 0, 2050, 715);
    campMaskingRectangle.endFill();
    campScrollContainer.addChild(campScroller, campLayoutGroup, campMaskingRectangle);
    campScrollContainer.mask = campMaskingRectangle;
    campScrollContainer.position = {x: 65, y: 85};
    campsContainer.addChild(campScrollContainer);

    createCampsTable = function (data) {            // make the Camps Tab
        textOptions.fontSize = 18;
        // this is where the make camp starts

        if (changeTheTab == true) {
            console.log("changed the tab was true");
            for (let i = 0; i <= campsTabContents.length; ++i) {
                campLayoutGroup.removeChild(campsTabContents[i]);
            }
            campsTabContents = [];
            for (let pop in clickedCampArray) {
                campLayoutGroup.removeChild(clickedCampArray[pop]);
            }
        }

        let lastSpriteY = 20,
            lastSpriteX = 80;
        textOptions.fontSize = 18;
        textOptions.fill = "white";

        for (let key in data) {     // break
            textOptions.fill = "#33ffbd";
            let iconToDisplay = new PIXI.Sprite(iconOfCamp(data[key])),
                nameToDisplay = new PIXI.Text(campOrArea(data[key]), textOptions);
            nameToDisplay.interactive = true;
            nameToDisplay.clickedCampFlag = false;
            nameToDisplay.isDown = false;
            nameToDisplay.all = data[key].all;
            textOptions.fill = "white";
            let upgradeLevel = new PIXI.Text("Upgrade level | " + data[key].uLevel, textOptions),
                maintenanceLevel = new PIXI.Text("Maintenance level | " + data[key].mLevel, textOptions),
                areaAndSubarea = new PIXI.Text((((data[key].areaLabel).toUpperCase()) + data[key].subAreaLabel), textOptions);
            textOptions.fill = "#33ffbd";
            let campQuadrant = new PIXI.Text("Quadrant " + data[key].quadrantLabel, textOptions);

            lastSpriteY += 60;
            nameToDisplay.position.y = lastSpriteY;
            nameToDisplay.position.x = lastSpriteX + 85;
            nameToDisplay.id = key;
            nameToDisplay.on("click", callUnFoldCamp);
            nameToDisplay.isText = true;
            iconToDisplay.position.y = lastSpriteY;
            iconToDisplay.position.x = lastSpriteX;
            upgradeLevel.position.x = lastSpriteX + 600;
            upgradeLevel.position.y = lastSpriteY;
            maintenanceLevel.position.x = lastSpriteX + 950;
            maintenanceLevel.position.y = lastSpriteY;
            areaAndSubarea.position.x = lastSpriteX + 1400;
            areaAndSubarea.position.y = lastSpriteY;
            campQuadrant.position.x = lastSpriteX + 1650;
            campQuadrant.position.y = lastSpriteY;


            campLayoutGroup.addChild(iconToDisplay, nameToDisplay, upgradeLevel, maintenanceLevel, campQuadrant, areaAndSubarea);
            campsTabContents.push(iconToDisplay, nameToDisplay, upgradeLevel, maintenanceLevel, campQuadrant, areaAndSubarea);
            for (let i in campsTabContents) {campsTabContents[i].scale = {x:1.5, y:1.5}};
            textOptions.fill = "white";
        }
        changeTheTab = true;
    };

    negativePanelUI(negaMoveArray);
    miningAreaUI();
    playerPanel();
}
