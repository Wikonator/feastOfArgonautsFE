function createPlayerUI() {


    textOptions.fill = "black";
    textOptions.fontFamily = "conthrax";
    textOptions.fontSize = 18;

    let buyPanel = new PIXI.Sprite( // [objectCOMiDosiel[description] + "_hover.png"]
        PIXI.loader.resources['buyPanel'].textures["buy_panel.png"]
        ),
        messagePanel = new PIXI.Sprite(
            PIXI.loader.resources["messagePanel"].textures['messages_panel.png']
        ),
        messagePanelButton = new PIXI.Sprite(
            PIXI.loader.resources["messagePanel"].textures['messages_buttn_usual.png']
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
        messageButtonText = new PIXI.Text("MESSAGES", textOptions),
        
        campsPanel = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultPanel"].textures['buttn_panel.png']
        ),
        campsPanelButton = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultPanel"].textures['buttn_usual.png']
        ),
        campsPanelIcon = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultPanel"].textures['camp_icon.png']
        );
    let campsButtonText = new PIXI.Text("CAMPS", textOptions);



    // PIXI.loader.resources["buyPanel"].textures['.png'];
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



    function openVaultTab() {
        console.log(vaultPanelButton.isClicked);
        display.removeEventListener("wheel", scrollSelectedTab, false);
        scrollContainerSelector = vaultScrollContainer;

        if (!vaultPanelButton.isClicked) {
            console.log("wasnt clicked before, open it");
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
            GUIArea.addChild(vaultContainer);
            vaultPanelButton.isClicked = true;
            display.addEventListener("wheel", scrollSelectedTab, false);

        } else {
            console.log("close it");
            vaultPanelButton.texture = vaultPanelButton.hover;
            vaultPanelButton.isClicked = false;
            GUIArea.removeChild(vaultContainer);
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
        buyButtonText, tradeButtonText, vaultButtonText, campsButtonText, messageButtonText,
        buyPanel, buyButton, tradePanel, tradeButton, scarab, negPanelBottom1, negPanelBottom2,
        negPanelBottom3, negPanelBottom4, vaultPanel, campsPanel, campsPanelButton, campsPanelIcon
    ];

    for (let i = 1; i <= UITextArray.lenght; ++i) {
        UITextArray[i].anchor.x = 0.5;
        UITextArray[i].anchor.y = 0.5;
    }

    let buttonArray = [buyButton, tradeButton, vaultPanelButton, campsPanelButton];

    
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


    negPanelBottom4.position.y = 163;
    negPanelBottom4.position.x = 35;

    


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
    





    
    textOptions.fontSize = 22;




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

    



    ////////// ////////// ///// ////////// ////////// ///// ////////// ////////// ///// ////////// //////////




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




    // ////// ////// ////// layout group and scroll container ////// ////// ////// //////

    
///////////////////////////////////////// create camp table for the Camps tab ////////////////////////////////

    // seckoCoNapisalIvo();


    

    

    negativePanelUI(negaMoveArray);
    miningAreaUI();
    playerPanel();

    messages(vaultPanelButton, GUIArea, vaultContainer, messagePanel, messagePanelButton, messageButtonText, campsPanelButton);
    camps(campsPanel, campsPanelButton, campsPanelIcon, campsButtonText, vaultPanelButton, messagePanelButton)
}
