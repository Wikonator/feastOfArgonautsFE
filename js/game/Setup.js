function setup(dataFromBack) {

    console.log("now entering setup");
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
        ),

        miningPanel = new PIXI.Sprite(
            PIXI.loader.resources["miningPanel"].textures['area_panel.png']
        ),
        miningPanelButtonBigFirst = new PIXI.Sprite(
            PIXI.loader.resources["miningPanel"].textures['area_buttn_usual.png']
        );
    textOptions.fill = "white";
    textOptions.fontSize = 13;
    let miningTextFirst = new PIXI.Text("SIGMA", textOptions),

        miningPanelButtonBigSecond = new PIXI.Sprite(
            PIXI.loader.resources["miningPanel"].textures['area_buttn_usual.png']
        ),
        miningTextSecond = new PIXI.Text("GAMMA", textOptions),

        miningPanelButtonBigThird = new PIXI.Sprite(
            PIXI.loader.resources["miningPanel"].textures['area_buttn_usual.png']
        ),
        miningTextThird = new PIXI.Text("DELTA", textOptions),

        miningPanelButtonBigFourth = new PIXI.Sprite(
            PIXI.loader.resources["miningPanel"].textures['area_buttn_disabled.png']
        ),
        miningTextFourth = new PIXI.Text("ZETTA", textOptions),


        userPanel = new PIXI.Sprite(
            PIXI.loader.resources["userPanel"].textures["user_info_panel.png"]
        ),
        levelBar = new PIXI.Sprite(
            PIXI.loader.resources["userPanel"].textures["level_bar_empty.png"]
        );
    levelBarFill = new PIXI.Graphics();


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
        ),
        townMapSprite = new PIXI.Sprite(
            PIXI.loader.resources["townMap"].texture
        ),
        airportBuilding = new PIXI.Sprite(
            PIXI.loader.resources["airport"].texture
        ),
        generalStoreBuilding = new PIXI.Sprite(
            PIXI.loader.resources["generalStore"].texture
        ),
        governorsHouseBuilding = new PIXI.Sprite(
            PIXI.loader.resources["governorsHouse"].texture
        ),
        marketBuilding = new PIXI.Sprite(
            PIXI.loader.resources["market"].texture
        ),
        playerHouseBuilding = new PIXI.Sprite(
            PIXI.loader.resources["playerHouse"].texture
        ),
        ragnarBuilding = new PIXI.Sprite(
            PIXI.loader.resources["ragnar"].texture
        ),
        researchTrainingBuilding = new PIXI.Sprite(
            PIXI.loader.resources["researchTraining"].texture
        ),
        secCoBuilding = new PIXI.Sprite(
            PIXI.loader.resources["secCo"].texture
        ),
        templeBuilding = new PIXI.Sprite(
            PIXI.loader.resources["temple"].texture
        )
        ;

    //// level bar fill //// //// ////////
    drawLevelBar = function () {
        levelBarFill.clear();
        let fg_color = 0xF2BC29;
        let length = 150;
        let height = 21;
        let skew = 11;
        let x = 0;
        let y = 0;


        let pt_total = parseInt(dataFromBack.profile.progress.nextlevel, 10);
        let pt_mine = parseInt(dataFromBack.profile.progress.exp, 10);
        let percent = pt_mine / pt_total;

        levelBarFill.beginFill(fg_color); // Yellow

        levelBarFill.drawPolygon([x + skew, y,
            length * percent + skew, y,
            length * percent, y + height,
            x, y + height

        ]);
        levelBarFill.endFill();
    };


    let textLayer = new PIXI.Container();
    drawLevelBar();

    textLayer.addChild(levelBarFill);
    textLayer.addChild(userNameTxt, userCitizenTxt, userCasteTxt, progressLvlTxt, progressExpTxt, nextLvlExpTxt, softCurTxt, hardCurTxt);

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

    /////////////////////////////////////// /  Mining area button functions //////////////////
    function miningClick() {
        if (this.isDisabled === 1) {
            return
        }
        if (this.isdown) {              // uz stlaceny bol
            this.texture = this.hover;
            this.isdown = false;
            for (let subArea in this.children) {
                if (this.children[subArea].isdown) {
                    this.children[subArea].isdown = false;
                    this.children[subArea].texture = this.children[subArea].normal;
                }
                this.children[subArea].visible = false;
            }
        } else {
            for (let i in miningAreaButtons) {
                if (miningAreaButtons[i].isDisabled == 1) {
                    break;
                } else {
                    miningAreaButtons[i].texture = miningAreaButtons[i].normal;
                    miningAreaButtons[i].isdown = false;
                    for (let subArea in miningAreaButtons[i].children) {
                        miningAreaButtons[i].children[subArea].visible = false;
                    }
                }
            }
            this.texture = this.pressed;
            this.isdown = true;
            for (let subArea in this.children) {
                this.children[subArea].visible = true;
            }
        }
    }

    function onMiningOver() {
        if (this.isDisabled === 1) {
            return
        }
        if (this.isdown) {
            return;
        }
        this.texture = this.hover;
    }

    function onMiningOut() {
        if (this.isDisabled === 1) {
            return
        }
        if (this.isdown) {
            return;
        }
        this.texture = this.normal;
    }

    function onSubAreaOver() {
        if (this.state === 1) {
            return
        }
        if (this.isdown) {
            return;
        }
        this.texture = this.hover;
    }

    function onSubAreaOut() {
        if (this.state === 1) {
            return
        }
        if (this.isdown) {
            return;
        }
        this.texture = this.normal;
    }

    function subAreaClick() {
        if (this.state === 1) {
            return
        }
        if (this.isdown) {
            this.texture = this.hover;
            this.isdown = false;
        } else {
            let subArray = this.parent.children;
            for (let i in subArray) {
                if (subArray[i].state === 1) {
                    break;
                } else {
                    subArray[i].texture = subArray[i].normal;
                    subArray[i].isdown = false;
                }
            }
            this.texture = this.pressed;
            this.isdown = true;
        }

    }


    //////////////////////////////////////////// Left panel button functions / /////////////// / / / / / /

    function openMessageTab() {
        display.removeEventListener("wheel", scrollyScrolly, false);

        if (messagePanelButton.isClicked == true) {
            stage.removeChild(messageContainer);
            messagePanelButton.isClicked = false;
            messagePanelButton.isdown = false;
            messagePanelButton.texture = messagePanelButton.normal;

        } else {
            messagePanelButton.isClicked = true;
            stage.removeChild(messagePanel);
            stage.addChild(messageContainer);
            stage.addChild(messagePanel);
            display.addEventListener("wheel", scrollyScrolly, false);
            if (campsPanelButton.isClicked || vaultPanelButton.isClicked) {
                vaultPanelButton.isClicked = false;
                vaultPanelButton.isdown = false;
                vaultPanelButton.texture = vaultPanelButton.normal;
                campsPanelButton.isClicked = false;
                campsPanelButton.isdown = false;
                campsPanelButton.texture = campsPanelButton.normal;
                stage.removeChild(campsContainer);
                stage.removeChild(vaultContainer);
            }
            messagePanelButton.isClicked = true;
            campsPanelButton.isdown = false;
        }

    }

    function openVaultTab() {
        display.removeEventListener("wheel", scrollyScrolly, false);

        if (!vaultPanelButton.isClicked) {
            vaultPanelButton.isClicked = true;
            display.addEventListener("wheel", scrollyScrolly, false);
            stage.removeChild(vaultPanel);
            stage.addChild(vaultContainer);
            stage.addChild(vaultPanel);

            if (campsPanelButton.isClicked || messagePanelButton.isClicked) {
                messagePanelButton.isClicked = false;
                campsPanelButton.isClicked = false;
                messagePanelButton.isdown = false;
                messagePanelButton.texture = messagePanelButton.normal;
                campsPanelButton.isdown = false;
                campsPanelButton.texture = campsPanelButton.normal;
                stage.removeChild(campsContainer);
                stage.removeChild(messageContainer);
            }
        } else {

            vaultPanelButton.texture = vaultPanelButton.hover;
            vaultPanelButton.isClicked = false;
            stage.removeChild(vaultContainer);
        }
    }

    function openCampsTab() {
        display.removeEventListener("wheel", scrollyScrolly, false);

        if (!campsPanelButton.isClicked) {
            campsPanelButton.isClicked = true;
            stage.addChild(campsContainer);
            display.addEventListener("wheel", scrollyScrolly, false);
            this.bringToFront();

            if (vaultPanelButton.isClicked || messagePanelButton.isClicked) {
                vaultPanelButton.isClicked = false;
                messagePanelButton.isClicked = false;
                vaultPanelButton.isdown = false;
                messagePanelButton.isdown = false;
                vaultPanelButton.texture = vaultPanelButton.normal;
                messagePanelButton.texture = messagePanelButton.normal;
                stage.removeChild(vaultContainer);
                stage.removeChild(messageContainer);
            }
        } else {
            campsPanelButton.texture = campsPanelButton.hover;
            campsPanelButton.isClicked = false;
            stage.removeChild(campsContainer);
        }

    }

    let negaSwap = function() {
        if (this.up === true || this.children === 1) {
            return
        }
        let ary = this.children;
        if (ary.length >= 3) {
            ary[0].visible = false;
            ary.push(ary.shift());
            ary[0].position.x = 100; ary[1].position.x = 50; ary[2].position.x = 0;
            ary[0].visible = true; ary[1].visible = true; ary[2].visible = true;
        } else
        if (ary.length === 2)
        {
            ary.push(ary.shift());
            ary[0].position.x = 50; ary[1].position.x = 0;
        }

    };

    ///////////////////////////// Arrays of Elements ////////////////////////////////////

    let scaleArray = [
        buyPanel, buyButton, tradePanel, tradeButton, scarab, miningPanelButtonBigFirst,
        miningPanelButtonBigSecond, miningPanelButtonBigThird, miningPanelButtonBigFourth,
        userPanel, levelBar, negPanelBottom1, negPanelBottom2, negPanelBottom3,
        negPanelBottom4, vaultPanel, campsPanel, campsPanelButton, campsPanelIcon, messagePanel
    ];

    let UITextArray = [
        buyButtonText, tradeButtonText, miningTextFirst, miningTextSecond, miningTextThird, miningTextFourth,
        vaultButtonText, campsButtonText, messageButtonText
    ];

    for (let i = 1; i <= UITextArray.lenght; ++i) {
        UITextArray[i].anchor.x = 0.5;
        UITextArray[i].anchor.y = 0.5;
    }

    let buttonArray = [buyButton, tradeButton, vaultPanelButton, campsPanelButton, messagePanelButton];

    let miningAreaButtons = [miningPanelButtonBigFirst, miningPanelButtonBigSecond, miningPanelButtonBigThird, miningPanelButtonBigFourth]

    let subareaTexture = PIXI.loader.resources["miningPanel"].textures['sub_area_buttn_usual.png'];
    textOptions.fill = "#141513";
    textOptions.fontSize = 22;

    for (let i in miningAreaButtons) {

        let subButtonX = -65,
            subButtonY = 70;
        miningAreaButtons[i].on("click", miningClick);
        miningAreaButtons[i].on('mouseover', onMiningOver);
        miningAreaButtons[i].on('mouseout', onMiningOut);
        miningAreaButtons[i].anchor = {x: 0.5, y: 0.5};
        miningAreaButtons[i].interactive = true;
        miningAreaButtons[i].hover = PIXI.loader.resources["miningPanel"].textures['area_buttn_hovered.png'];
        miningAreaButtons[i].normal = miningAreaButtons[i].texture;
        miningAreaButtons[i].pressed = PIXI.loader.resources["miningPanel"].textures['area_buttn_pressed.png'];
        miningAreaButtons[i].disabled = PIXI.loader.resources["miningPanel"].textures['area_buttn_disabled.png'];
        miningAreaButtons[i].isDisabled = dataFromBack.areas.btn[i].state;
        for (let subArea in dataFromBack.areas.btn[i].btn) {
            let subAreaButton = new PIXI.Sprite(subareaTexture);
            let subAreaText = new PIXI.Text(dataFromBack.areas.btn[i].btn[subArea].text, textOptions);
            subAreaText.anchor = {x: 0.5, y: 0.5};
            subAreaText.scale = {x: 1.5, y: 1.5};
            subAreaButton.addChild(subAreaText);
            subAreaButton.scale = {x: 0.7, y: 0.7};
            subAreaButton.anchor = {x: 0.5, y: 0.5};
            subAreaButton.state = dataFromBack.areas.btn[i].btn[subArea].state;
            subAreaButton.position = {x: subButtonX, y: subButtonY};
            subAreaButton.normal = subAreaButton.texture;
            subAreaButton.hover = PIXI.loader.resources["miningPanel"].textures['sub_area_buttn_hovered.png'];
            subAreaButton.pressed = PIXI.loader.resources["miningPanel"].textures['sub_area_buttn_pressed.png'];
            subAreaButton.disabled = PIXI.loader.resources["miningPanel"].textures['sub_area_buttn_disabled.png'];
            subAreaButton.isDisabled = false;
            subAreaButton.interactive = true;
            subAreaButton.on("click", subAreaClick);
            subAreaButton.on("mouseover", onSubAreaOver);
            subAreaButton.on("mouseout", onSubAreaOut);
            subAreaButton.click = function (e) {
                e.stopPropagation()
            };
            subAreaButton.visible = false;
            if (subAreaButton.state === 1) {
                subAreaButton.texture = subAreaButton.disabled;
                subAreaButton.isDisabled = true;
            }
            subButtonX += 55;
            miningAreaButtons[i].addChild(subAreaButton);
        }
    }


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
    buyButton.position.x = 886;
    buyButton.position.y = 43;
    buyButtonText.position.x = 920;
    buyButtonText.position.y = 46;
    buyButtonText.scale.x = 0.6;
    buyButtonText.scale.y = 0.6;
    tradePanel.position.x = 463;
    tradePanel.position.y = 0;
    tradeButton.position.x = 563;
    tradeButton.position.y = 44;
    tradeButtonText.position.x = 579;
    tradeButtonText.position.y = 46;
    tradeButtonText.scale.x = 0.6;
    tradeButtonText.scale.y = 0.6;
    scarab.position.x = 686;
    miningPanel.scale.x = 0.37;
    miningPanel.scale.y = 0.37;
    miningPanel.position.x = 1092;
    miningPanelButtonBigFirst.position.x = 1167;    //1120
    miningPanelButtonBigFirst.position.y = 65;      //48
    // miningPanelButtonBigFirst.buttonMode = true;

    miningTextFirst.position.x = 1142;
    miningTextFirst.position.y = 58;
    miningTextFirst.scale.x = 0.9;
    miningTextFirst.scale.y = 0.9;

    miningPanelButtonBigSecond.position.x = 1257;
    miningPanelButtonBigSecond.position.y = 65;
    miningTextSecond.position.x = 1227;
    miningTextSecond.position.y = 58;
    miningTextSecond.scale.x = 0.9;
    miningTextSecond.scale.y = 0.9;

    miningPanelButtonBigThird.position.x = 1347;
    miningPanelButtonBigThird.position.y = 65;
    miningTextThird.position.x = 1325;
    miningTextThird.position.y = 58;
    miningTextThird.scale.x = 0.9;
    miningTextThird.scale.y = 0.9;

    miningPanelButtonBigFourth.position.x = 1437;
    miningPanelButtonBigFourth.position.y = 65;
    miningTextFourth.position.x = 1414;
    miningTextFourth.position.y = 58;
    miningTextFourth.scale.x = 0.9;
    miningTextFourth.scale.y = 0.9;

    userPanel.position.x = -1;              // username panel
    levelBar.position.x = 272;
    levelBar.position.y = 40;

    levelBarFill.position.x = 272;                  // level bar needs to be interactive
    levelBarFill.position.y = 40;

    negativePanelContainer.position = {x: 10, y: 47};
    negativePanelContainer.scale = {x: 0.38, y:0.35};
    negativePanelContainer.interactive = true;
    negativePanelContainer.on("click", negaSwap);

    negPanelBottom1.position.x = 30;
    negPanelBottom1.position.y = 80;
    negPanelBottom2.position.y = 80;
    negPanelBottom2.position.x = 35;
    vaultPanel.position.x = 22;
    vaultPanel.position.y = 88;
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

    let buildingArray = [ airportBuilding, generalStoreBuilding, governorsHouseBuilding,
        marketBuilding, playerHouseBuilding, ragnarBuilding, researchTrainingBuilding,
        secCoBuilding, templeBuilding ];

    for (let i in buildingArray) {
        buildingArray[i].scale = {x:0.24, y:0.23};
        buildingArray[i].anchor = {x:0.5, y:0.5};
    };

    airportBuilding.position = {x:950, y:690};
    airportBuilding.scale = {x: 0.33, y:0.33};

    generalStoreBuilding.position = {x:1260, y:860};
    generalStoreBuilding.scale = {x: 0.33, y:0.33};

    governorsHouseBuilding.position = {x:800, y:900};
    governorsHouseBuilding.scale = {x: 0.33, y:0.33};

    marketBuilding.position = {x:1475, y:785};
    marketBuilding.scale = {x: 0.33, y:0.33};

    playerHouseBuilding.position = {x:325, y:740}; // old x260 y537
    playerHouseBuilding.scale = {x: 0.33, y:0.33};

    ragnarBuilding.position = {x:440, y:235};
    ragnarBuilding.scale = {x:-0.23,y: 0.19};

    researchTrainingBuilding.position = {x:1700, y:690};
    researchTrainingBuilding.scale = {x: 0.33, y:0.33};

    secCoBuilding.position = {x:1500, y:610};
    secCoBuilding.scale = {x:0.125, y:0.125};

    templeBuilding.position = {x: 1065, y:515};
    templeBuilding.scale = {x:0.18, y:0.18};

    townMapSprite.width = windowWidth / playArea.scale.x;
    townMapSprite.height = windowHeight / playArea.scale.y;

    playArea.addChild(townMapSprite, airportBuilding, generalStoreBuilding, governorsHouseBuilding,
        marketBuilding, playerHouseBuilding, ragnarBuilding, researchTrainingBuilding, secCoBuilding, templeBuilding);
    GUIArea.addChild(scarab, buyPanel, buyButton, buyButtonText,
        negPanelBottom1, negPanelBottom2, negPanelBottom3, negPanelBottom4, tradePanel,
        tradeButton, tradeButtonText, miningPanel, miningPanelButtonBigFirst, miningTextFirst,
        miningPanelButtonBigSecond, miningTextSecond, miningPanelButtonBigThird, miningTextThird,
        miningPanelButtonBigFourth, miningTextFourth, negativePanelContainer, userPanel,
        levelBar);


    vaultPanel.addChild(vaultPanelButton, vaultButtonText, vaultPanelIcon);
    campsPanelButton.addChild(campsButtonText);
    messagePanel.addChild(messagePanelButton, messageButtonText, messagesUnreadTxt);
    GUIArea.addChild(vaultPanel, campsPanel, campsPanelIcon, campsPanelButton, messagePanel, textLayer);

    stage.addChild(playArea, GUIArea);

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
            let campsOrAreas = [];
            if (this.btn.name == "camps") {
                campsOrAreas = dataFromBack.camps.filter( camp => camp.uLevel > 0);
                createCampsTable(campsOrAreas);
            }
            else {
                campsOrAreas = dataFromBack.camps.filter( camp => camp.uLevel <= 0);
                createCampsTable(campsOrAreas);
            }
        } else {
            button.isDown = false;
            this.isdown = false;
            this.texture = this.hover;
            createCampsTable(dataFromBack.camps);
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
            createVaultTable(dataFromBack.vault, button);

            // redoTab(this.btn);
        } else {                        // ak bol stralceny predtym
            this.btn.isDown = false;
            this.isdown = false;
            this.texture = this.hover;
            createVaultTable(dataFromBack.vault, button);
            // redoTab(this.btn);
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
        // vaultTabButtonArray[button].on('click', onClick);
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
        // campButtArray[button].on('click', onClick);
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
            fill: "#18A763",
            textBaseline: "alphabet"
        }),
        headerText = new PIXI.Text("Text", {
            fontFamily: 'bariol',
            fontSize: 20,
            fill: "#18A763",
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

    // renderer.render(stage);

    let count;
    let hours;
    let minutes;
    let seconds;

    app.ticker.add(function (deltaTime) {
        for (let i in runningArtifacts) {
            runningArtifacts[i].negaTime.duration -= (16.67 * deltaTime);
            hours = Math.floor((runningArtifacts[i].negaTime.duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((runningArtifacts[i].negaTime.duration % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((runningArtifacts[i].negaTime.duration % (1000 * 60)) / 1000);
            runningArtifacts[i].negaTime.text = hours + " : " + minutes + " : " + seconds;
        }
    });

    // app.ticker.speed = 0.01;

    setupIsDone = true;


    function returnNameOfvaultKey(number) {
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
        // return number.charAt(0).toUpperCase() + number.slice(1);
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

    createMessageTable = function (data) {
        // console.log("creating message table");

        let messageTextOptions = {
            wordWrap: true,
            wordWrapWidth: 1250,
            fontFamily: 'bariol',
            fontSize: 21,
            fill: "#18A763",
            align: 'center',
            textBaseline: "alphabet"
        };

        if (changeTheTab == true) {
            for (let i = 0; i <= messageTabContents.length; ++i) {
                messageContainer.removeChild(messageTabContents[i]);

            }
            messageTabContents = [];
        }
        // if (counter > 11) break;
        let lastLineY = 145;
        for (let message in data) {
            // if (counter > 11) break;
            messageTextOptions.fill = ("#" + data[message][1].colour);
            let messageFrom = new PIXI.Text(data[message][1].text, messageTextOptions);
            messageTextOptions.fill = ("#" + data[message][2].colour);
            let messageTxt = new PIXI.Text(data[message][2].text, messageTextOptions);

            messageFrom.position.y = lastLineY;
            messageFrom.position.x = 305;
            messageFrom.scale = {x: 1.5, y: 1.5};
            messageTxt.position.y = lastLineY;
            messageTxt.position.x = 540;
            messageTxt.scale.x = 1.5;
            messageTxt.scale.y = 1.5;

            lastLineY += (messageFrom.height + messageTxt.height);

            if ((lastLineY - messageFrom.height) >= 920) {
                messageTabContents.push(messageFrom, messageTxt);
                break
            } else {
                messageContainer.addChild(messageFrom, messageTxt);
                messageTabContents.push(messageFrom, messageTxt);
            }
        }
        changeTheTab = true;
        dataCameSwitch = false;
    };

    createVaultTable = function (data, button) {
        console.log("create vault tab");
        // console.log("create vault table");7

        let clickFlag = false;
        let layoutGroup = new PIXI.Container(); // x y width height
        let scrollContainer = new GOWN.ScrollContainer();
        scrollContainer._verticalScrollPolicy = GOWN.Scroller.INTERACTION_MOUSE;
        scrollContainer.id = 10;
        scrollContainer.viewPort = layoutGroup;
        scrollContainer.x = 205;
        scrollContainer.y = 130;
        scrollContainer.height = 270;
        scrollContainer.width = 900;

        changeTheTab = true;
        vaultContainer.addChild(scrollContainer);

        if (button) {
            if (button.isDown) {
                data = data[button.name];
                clickFlag = true;
            }
        }
        for (let i = 0; i <= vaultTabContents.length; ++i) {
            vaultContainer.removeChild(vaultTabContents[i]);
        }
        vaultTabContents = [];
        for (let i in iconArray) {
            vaultContainer.removeChild(iconArray[i])
        }
        iconArray = [];

        let lastSpriteY = 0,
            lastSpriteX = 0;
        textOptions.fontSize = 18;
        textOptions.fill = "#E2E9E9";
        if (clickFlag == true) {       // when filter applied
            console.log("clickflag true");
            for (let idx in data) {
                let iconToDisplay = new PIXI.Sprite(nameOfKey(button.name));
                let textOfIcon = new PIXI.Text(returnNameOfvaultKey(button.name), textOptions);

                if (button.name === 1) {
                    textOptions.fill = ("#" + data[idx][1].colour);
                }
                let textOfType = new PIXI.Text(data[idx][1].text, textOptions);
                textOptions.fill = "#E2E9E9";
                let textOfAmount = new PIXI.Text(data[idx][3].count, textOptions);
                let textOfOther = new PIXI.Text(data[idx][2].text, textOptions);
                lastSpriteY += 61;

                iconToDisplay.position.y = lastSpriteY;
                iconToDisplay.position.x = lastSpriteX;
                textOfIcon.position.y = lastSpriteY;
                textOfIcon.position.x = lastSpriteX + 55; //85
                // textOfIcon.scale.x = 1.5; textOfIcon.scale.y = 1.5;
                // iconToDisplay.scale.x = 1.5; iconToDisplay.scale.y = 1.5;
                textOfAmount.position.x = lastSpriteX + 120;//750;
                textOfAmount.position.y = lastSpriteY;
                textOfType.position.x = lastSpriteX + 200; //400;
                textOfType.position.y = lastSpriteY;
                // textOfType.scale.x = 1.5; textOfType.scale.y = 1.5;
                // textOfAmount.scale.x = 1.5; textOfAmount.scale.y = 1.5;
                // textOfOther.scale.x = 1.5;
                textOfOther.position.x = lastSpriteX + 300;// + 950;
                textOfOther.position.y = lastSpriteY;

                // vaultContainer.addChild(iconToDisplay, textOfType, textOfAmount, textOfIcon, textOfOther);
                vaultTabContents.push(textOfType, textOfAmount, textOfIcon, textOfOther);
                for (let i in vaultTabContents) {
                    vaultTabContents[i].scale.x = 1.5;
                    vaultTabContents[i].scale.y = 1.5;
                    layoutGroup.addChild(vaultTabContents[i])
                }
                layoutGroup.addChild(iconToDisplay);
                iconArray.push(iconToDisplay);
                textOptions.fill = "#E2E9E9";
            }

            clickFlag = false;                  // filter not applied
        } else {
            console.log("clickflag false");
            for (let key in data) {     // break
                for (let i in data[key]) {
                    let iconToDisplay = new PIXI.Sprite(nameOfKey(key));
                    let textOfIcon = new PIXI.Text(returnNameOfvaultKey(key), textOptions);
                    // console.log(data[key][i]); // riadok
                    // console.log(data[key][i][1]); // stlpec
                    textOptions.fill = ("#" + data[key][i][1].colour);
                    let textOfType = new PIXI.Text(data[key][i][1].text, textOptions);

                    textOptions.fill = "#E2E9E9";
                    let textOfAmount = new PIXI.Text(data[key][i][3].text, textOptions);

                    lastSpriteY += 61;
                    // lastSpriteX += 250;
                    // iconToDisplay.scale = {x:0.2, y:0.2};
                    iconToDisplay.height = 5;
                    iconToDisplay.anchor = {x:0.5, y:0.5};
                    iconToDisplay.position.y = lastSpriteY + 15;
                    iconToDisplay.position.x = lastSpriteX + 35;
                    textOfIcon.position.y = lastSpriteY;
                    textOfIcon.position.x = lastSpriteX + 95;
                    // textOfIcon.scale.x = 1.5;
                    // textOfIcon.scale.y = 1.5;
                    // iconToDisplay.scale.x = 1.5;
                    // iconToDisplay.scale.x = 1.5;
                    textOfType.position.x = lastSpriteX + 400;
                    textOfType.position.y = lastSpriteY;
                    textOfAmount.position.x = lastSpriteX + 750;
                    textOfAmount.position.y = lastSpriteY;
                    // textOfType.scale.x = 1.5;
                    // textOfType.scale.y = 1.5;
                    // textOfAmount.scale.x = 1.5;
                    // textOfAmount.scale.y = 1.5;


                    vaultTabContents.push(iconToDisplay ,textOfType, textOfAmount, textOfIcon);
                    for (let i in vaultTabContents) {
                        vaultTabContents[i].scale.x = 1.5;
                        vaultTabContents[i].scale.y = 1.5;
                        // vaultTabContents[i].height = 15;
                        // vaultTabContents[i].width = 15;
                        layoutGroup.addChild(vaultTabContents[i]);
                    }
                    // layoutGroup.addChild(iconToDisplay);
                    iconArray.push(iconToDisplay);
                    textOptions.fill = "white";
                }
            }
        }
    };

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

    let callUnFoldCamp = function () {

        unfoldPosition = this;
        unfoldPosition.isText = true;
        unFoldCamp(unfoldPosition);
    };

    let clickedCampArray = [];

    let unFoldCamp = function (position) {          // what happens after Camp site click

        let cleanUpTheCampTab = function (buttonWasPressed) {           // cleanup function

            for (let i = 0; i < clickedCampArray.length; ++i) {
                campsContainer.removeChild(clickedCampArray[i]);
            }
            clickedCampArray = [];
            if (buttonWasPressed) {     // cleanup on button click

                let thisObject = campsTabContents.indexOf(nameOfThisObject);
                for (let idx = thisObject + 5; idx < campsTabContents.length; ++idx) {
                    campsTabContents[idx].visible = false;
                }
            } else {                                                // cleanup on camp click
                nameOfThisObject.clickedCampFlag = false;
                let thisObject = campsTabContents.indexOf(nameOfThisObject);
                for (let idx = thisObject + 5; idx < campsTabContents.length; ++idx) {
                    campsTabContents[idx].visible = true;
                }
            }
        };

        let nameOfThisObject = position;            // set the global object to the PIXI.object that was clicked
        console.log(nameOfThisObject.isDown);
        if (nameOfThisObject.isText != true && nameOfThisObject.isDown == true) {              // filter button press
            let ButtonWasPressed = true;
            cleanUpTheCampTab(ButtonWasPressed);

            let clickedCampX = nameOfThisObject.position.x + 30, clickedCampY = nameOfThisObject.position.y;
            for (let item in nameOfThisObject.all[nameOfThisObject.btn]) {
                clickedCampY += 60;
                if (clickedCampY >= 845) {
                    break
                }
                let campItemIcon = new PIXI.Sprite(getCampItemIcon(nameOfThisObject.btn)),
                    campItemIconTxt = new PIXI.Text(capitalizeFirstLetter(nameOfThisObject.btn), textOptions),
                    campItemDescription = new PIXI.Text(nameOfThisObject.all[nameOfThisObject.btn][item].label, textOptions)
                ;

                campItemIcon.position.x = clickedCampX;
                campItemIcon.position.y = clickedCampY;
                campItemIcon.scale.x = 1.5;
                campItemIcon.scale.y = 1.5;
                campItemIconTxt.position.x = clickedCampX + 70;
                campItemIconTxt.position.y = clickedCampY;
                campItemIconTxt.scale.x = 1.5;
                campItemIconTxt.scale.y = 1.5;
                campItemDescription.position.x = clickedCampX + 315;
                campItemDescription.position.y = clickedCampY;
                campItemDescription.scale.x = 1.5;
                campItemDescription.scale.y = 1.5;

                campsContainer.addChild(campItemIcon, campItemIconTxt, campItemDescription);
                clickedCampArray.push(campItemIcon, campItemIconTxt, campItemDescription);

            }
        } else {
            if (nameOfThisObject.clickedCampFlag != true) {         // if this is the 1st time a campSite is clicked
                cleanUpTheCampTab();
                nameOfThisObject.clickedCampFlag = true;
                nameOfThisObject.isDown = false;

                for (let i in campsTabFiltersArray) {               // make all the buttons enabled
                    campsTabFiltersArray[i].isDisabled = false;
                    campsTabFiltersArray[i].isDown = false;
                    campsTabFiltersArray[i].texture = campsTabFiltersArray[i].normal;
                }

                let thisObject = campsTabContents.indexOf(nameOfThisObject);
                for (let idx = thisObject + 5; idx < campsTabContents.length; ++idx) {
                    campsTabContents[idx].visible = false;
                }

                let clickedCampX = nameOfThisObject.position.x + 30, clickedCampY = nameOfThisObject.position.y;
                for (let all in nameOfThisObject.all) {        // array = inventory, operators, exos, rents

                    let itemGroup = all;

                    for (let item in nameOfThisObject.all[all]) {
                        clickedCampY += 60;
                        if (clickedCampY >= 845) {
                            break
                        }
                        let campItemIcon = new PIXI.Sprite(getCampItemIcon(itemGroup)),
                            campItemIconTxt = new PIXI.Text(capitalizeFirstLetter(itemGroup), textOptions),
                            campItemDescription = new PIXI.Text(nameOfThisObject.all[all][item].label, textOptions)
                        ;

                        campItemIcon.position.x = clickedCampX;
                        campItemIcon.position.y = clickedCampY;
                        campItemIcon.scale.x = 1.5;
                        campItemIcon.scale.y = 1.5;
                        campItemIconTxt.position.x = clickedCampX + 70;
                        campItemIconTxt.position.y = clickedCampY;
                        campItemIconTxt.scale.x = 1.5;
                        campItemIconTxt.scale.y = 1.5;
                        campItemDescription.position.x = clickedCampX + 315;
                        campItemDescription.position.y = clickedCampY;
                        campItemDescription.scale.x = 1.5;
                        campItemDescription.scale.y = 1.5;

                        campsContainer.addChild(campItemIcon, campItemIconTxt, campItemDescription);
                        clickedCampArray.push(campItemIcon, campItemIconTxt, campItemDescription);

                    }

                }
            } else {

                cleanUpTheCampTab();            // close the camp panel
                for (let i in campsTabFiltersArray) {               // make all the buttons disabled
                    campsTabFiltersArray[i].isDisabled = true;
                    campsTabFiltersArray[i].isDown = false;
                    campsTabFiltersArray[i].texture = campsTabFiltersArray[i].disabled;
                }

            }
        }
    };

    createCampsTable = function (data) {            // make the Camps Tab
        console.log("create me a camps table");
        textOptions.fontSize = 18;

        // this is where the make camp starts
        if (changeTheTab == true) {
            for (let i = 0; i <= campsTabContents.length; ++i) {
                campsContainer.removeChild(campsTabContents[i]);

            }
            campsTabContents = [];
            for (let pop in clickedCampArray) {
                campsContainer.removeChild(clickedCampArray[pop]);
            }
        }
        let lastSpriteY = 120,
            lastSpriteX = 200;
        let counter = 0;
        textOptions.fontSize = 18;
        textOptions.fill = "white";

        for (let key in data) {     // break
            if (counter > 11) break;
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
            nameToDisplay.on("click", callUnFoldCamp);
            nameToDisplay.isText = true;
            nameToDisplay.scale.x = 1.5;
            nameToDisplay.scale.y = 1.5;
            iconToDisplay.position.y = lastSpriteY;
            iconToDisplay.position.x = lastSpriteX;
            iconToDisplay.scale.x = 1.5;
            iconToDisplay.scale.x = 1.5;
            upgradeLevel.position.x = lastSpriteX + 600;
            upgradeLevel.position.y = lastSpriteY;
            upgradeLevel.scale.x = 1.5;
            upgradeLevel.scale.y = 1.5;
            maintenanceLevel.position.x = lastSpriteX + 950;
            maintenanceLevel.position.y = lastSpriteY;
            maintenanceLevel.scale.x = 1.5;
            maintenanceLevel.scale.y = 1.5;
            areaAndSubarea.scale.x = 1.5;
            areaAndSubarea.scale.y = 1.5;
            areaAndSubarea.position.x = lastSpriteX + 1400;
            areaAndSubarea.position.y = lastSpriteY;
            campQuadrant.scale.x = 1.5;
            campQuadrant.scale.y = 1.5;
            campQuadrant.position.x = lastSpriteX + 1650;
            campQuadrant.position.y = lastSpriteY;


            campsContainer.addChild(iconToDisplay, nameToDisplay, upgradeLevel, maintenanceLevel, campQuadrant, areaAndSubarea);
            campsTabContents.push(iconToDisplay, nameToDisplay, upgradeLevel, maintenanceLevel, campQuadrant, areaAndSubarea);
            textOptions.fill = "white";
            counter++;
        }
        changeTheTab = true;
    };

    let runningArtifacts = [];
    let moveNegPanel = function (up) {
        let displayArray = negativePanelContainer.parent.children;
        if (up === true) {
            negativePanelContainer.up = true;
            displayArray.unshift(displayArray.pop(displayArray.find(function (child){
                return child === negativePanelContainer;
            })));
            let counter = 0; let increment = 1; let positionY = 47;
            app.ticker.add( function tickerMover() {
                counter += increment;
                if (counter >= positionY) {
                    app.ticker.remove(tickerMover);
                    return;
                }
                negativePanelContainer.position.y -= increment;
                for (let i in negaMoveArray) {
                    negaMoveArray[i].position.y -= increment;
                }
            });

        } else {
            negativePanelContainer.up = false;
            // displayArray.unshift(displayArray.pop(displayArray.find(function (child){
            //     return child === negativePanelContainer;
            // })));
            let counter = 0; let increment = 1; let positionY = 43;
            app.ticker.add( function tickerMover () {
                counter += increment;
                if (counter >= positionY) {
                    app.ticker.remove ( tickerMover );
                    return;
                }
                negativePanelContainer.position.y += increment;
                for (let i in negaMoveArray) {
                    negaMoveArray[i].position.y += increment;
                }
            });
        }
    };

    let makeTheContainer = function (daemon, no) {
        let negativePanel = PIXI.loader.resources["negativePanel"].textures['negative_artefact_panel.png'];
        let negativeArtefactIcon = PIXI.loader.resources["negativePanel"].textures["artefact_example_with_mask.png"];
        if (no === 1) {
            console.log("its 1");
            let negaTextOptions = textOptions;
            negaTextOptions.fill = "red";
            negaTextOptions.align = "left";
            negaTextOptions.fontSize = 30;
            negaTextOptions.fontFamily = "conthrax";
            let xPosition = 0,
                currentSprite = 1,
                timePosition = {x: 460, y: 40},
                timeScale = {x: 1.5, y: 1.5}                   // XD lol
            ;
            if (daemon.artefact.length >= 3) {
                xPosition = 150;
            } else if (daemon.artefact.length == 2) {
                xPosition = 100;
            } else {
                xPosition = 50;
            }
            for (let artefact in daemon.artefact) {
                let negaSprite = new PIXI.Sprite(negativePanel);
                negaSprite.name = daemon.artefact[artefact].info.text;
                let negaTime = new PIXI.Text(daemon.artefact[artefact].countdown, negaTextOptions);
                negaTime.duration = daemon.artefact[artefact].countdown;
                let negaTempNo = new PIXI.Text(currentSprite, negaTextOptions);  // << Temporális
                currentSprite += 1;
                let negaIcon = new PIXI.Sprite(negativeArtefactIcon);
                let negaObject = {negaSprite, negaTime, negaIcon};
                runningArtifacts.push(negaObject);
                xPosition -= 50;
                negaSprite.position = {x: xPosition, y: 0};
                if (negativePanelContainer.children.length >= 3) {
                    negaSprite.visible = false;
                }
                negativePanelContainer.addChild(negaSprite);

                negaTime.position = timePosition;
                negaTime.scale = timeScale;
                negaTempNo.position = {x: timePosition.x - 150, y: timePosition.y};
                negaTempNo.scale = timeScale;
                negaIcon.position = {x: 120,y: 25};
                negaSprite.addChild(negaTime, negaTempNo, negaIcon);
            }
        } else{
            let negaSprite = new PIXI.Sprite(negativePanel);
            negativePanelContainer.addChild(negaSprite);
        }
    };

    createArtifacts = function (daemon) {
        for (let i in runningArtifacts) {
            negativePanelContainer.removeChild(runningArtifacts[i].negaSprite);
            negativePanelContainer.removeChild(runningArtifacts[i].negaTime);
        }
        if (daemon.state != 2) {
            if (negativePanelContainer.up) {
                return
            } else {
                negativePanelContainer.up = tru;
                makeTheContainer(daemon, 0);
                let up = true;
                moveNegPanel(up)
            }
        } else {
            if (negativePanelContainer.up) {
                negativePanelContainer.up = false;
                let down = false;
                moveNegPanel(down);
                makeTheContainer(daemon, 1);
            } else {
                negativePanelContainer.up = false;
                makeTheContainer(daemon, 1);
            }
        }
        // if (daemon.artefact.length > 0) {   /// must be more than
        //
        // } else {
        //     let negaSprite = new PIXI.Sprite(negativePanel);
        //     negativePanelContainer.addChild(negaSprite);
        //     stage.addChild(negativePanelContainer);
        //     let up = true;
        //     moveNegPanel(up);
    }

}