function miningAreaLoading(loadingBay, sceneLoader){

   
    let minningArea1 = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['buttn_usual.png']
    ), minningArea2 = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['buttn_usual.png']
    ), minningArea3 = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['buttn_usual.png']
    ), minningArea4 = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['buttn_usual.png']
    ), numCamp = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['small_buttn_usual.png']

    );


        ///////////   ///////////////       //////////////// AREAS ///////////////         /////////////////////            //////////////////////
    minningArea1.x = 329; 
    minningArea1.y = 627;
    minningArea2.x = 652;
    minningArea2.y = 627;
    minningArea3.x = 975; 
    minningArea3.y = 627;
    minningArea4.x = 1298;  
    minningArea4.y = 627;

    textOptions.fill = '#11d1de';
    textOptions.fontSize = 30;
    let sigma = new PIXI.Text("SIGMA", textOptions);
    sigma.x = 423;  // 1298 , 1084
    sigma.y = 653;

    let gamma = new PIXI.Text("GAMMA", textOptions);
    gamma.x = 737;  // 1298 , 1084
    gamma.y = 653;

    let delta = new PIXI.Text("DELTA", textOptions);
    delta.x = 1075;  // 1298 , 1084
    delta.y = 653;

    let zetta = new PIXI.Text("ZETTA", textOptions);
    zetta.x = 1400;  // 1298 , 1084
    zetta.y = 653;
    ////////////////////////// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / // 
    let miningAreaButtons = [minningArea1, minningArea2, minningArea3, minningArea4];
    let subareaTexture = sceneLoader.resources["cargo"].textures['small_buttn_usual.png'];
    textOptions.fontSize = 10;
    for (let i in miningAreaButtons) {
        
        let subButtonX = 40,
        subButtonY = 100;
        miningAreaButtons[i].interactive = true;
        miningAreaButtons[i].on("click", miningClick);
        miningAreaButtons[i].on('mouseover', onMiningOver);
        miningAreaButtons[i].on('mouseout', onMiningOut);
        miningAreaButtons[i].hover = sceneLoader.resources["cargo"].textures['buttn_hovered.png'];
        miningAreaButtons[i].normal = sceneLoader.resources["cargo"].textures['buttn_usual.png'];
        miningAreaButtons[i].pressed = sceneLoader.resources["cargo"].textures['buttn_hovered.png'];
        miningAreaButtons[i].disabled = sceneLoader.resources["cargo"].textures['buttn_usual.png'];
        miningAreaButtons[i].isDisabled = dataFromBack.areas.btn[i].state;
        
        for (let subArea in dataFromBack.areas.btn[i].btn) {
            let subAreaButton = new PIXI.Sprite(subareaTexture);
            let subAreaText = new PIXI.Text(dataFromBack.areas.btn[i].btn[subArea].text, textOptions);
            subAreaText.anchor = {x: 0.5, y: 0.5};
            subAreaText.scale = {x: 1.5, y: 1.5};
            subAreaButton.addChild(subAreaText);
            subAreaButton.scale = {x: 1.5, y: 1.5};
            subAreaButton.anchor = {x: 0.5, y: 0.5};
            subAreaButton.state = dataFromBack.areas.btn[i].btn[subArea].state;
            subAreaButton.position = {x: subButtonX, y: subButtonY};
            subAreaButton.normal = subAreaButton.texture;
            subAreaButton.hover = sceneLoader.resources["cargo"].textures['small_buttn_pressed_enlarged.png'];
            subAreaButton.pressed = sceneLoader.resources["cargo"].textures['small_buttn_pressed_enlarged.png'];
            subAreaButton.disabled = sceneLoader.resources["cargo"].textures['small_buttn_usual.png'];
            subAreaButton.width = 60;
            subAreaButton.height = 60;
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
        //////////////////////////// /  Mining area button functions /////////////////////////////
        function miningClick() {
            if (this.isDisabled === 1) {
                return
            }
            if (this.isdown) {     
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
    
    



/////////////////         ///////////////////////         END AREAS        //////////////////////               /////////////////             ///////////


    loadingBay.addChild(numCamp,  minningArea1, minningArea2, minningArea3, minningArea3, minningArea4, sigma, gamma, delta, zetta)
}