function miningAreaUI() {

    let miningPanel = new PIXI.Sprite(
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
        miningTextFourth = new PIXI.Text("ZETTA", textOptions);


    let miningAreaButtons = [miningPanelButtonBigFirst, miningPanelButtonBigSecond, miningPanelButtonBigThird, miningPanelButtonBigFourth]

    let subareaTexture = PIXI.loader.resources["miningPanel"].textures['sub_area_buttn_usual.png'];
    textOptions.fill = "#141513";
    textOptions.fontSize = 22;

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

    let scaleArray = [ miningPanelButtonBigFirst, miningPanelButtonBigSecond, miningPanelButtonBigThird, miningPanelButtonBigFourth ];
    let UITextArray = [miningTextFirst, miningTextSecond, miningTextThird, miningTextFourth];

    for (let i in scaleArray) {
        scaleArray[i].scale.x = 0.4;
        scaleArray[i].scale.y = 0.4;
    }

    for (let i = 1; i <= UITextArray.lenght; ++i) {
        UITextArray[i].anchor.x = 0.5;
        UITextArray[i].anchor.y = 0.5;
    }

    GUIArea.addChild( miningPanel, miningPanelButtonBigFirst, miningTextFirst,
        miningPanelButtonBigSecond, miningTextSecond, miningPanelButtonBigThird, miningTextThird,
        miningPanelButtonBigFourth, miningTextFourth);

        //////////////////////////// /  Mining area button functions /////////////////////////////
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

    function onSubAreaOut() {
        if (this.state === 1) {
            return
        }
        if (this.isdown) {
            return;
        }
        this.texture = this.normal;
    }

}