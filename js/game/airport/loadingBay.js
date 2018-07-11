function loadingBayOpen(sceneLoader, backGroundSprite){
    let loadingBay = new PIXI.Container()
    var seatCounter = 0;
    let topPanel = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['top_panel_LB.png']
    ), diplya_bckg = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['display.png']
    ), ui_panel_bottom = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['ui_panel_bottom.png']
    ), ui_panel_top = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['ui_panel_top.png']
    ), items_main_panel_green = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['items_main_panel_green.png']
    ), line_divider = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['line_divider.png']
    ), text_amount = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_amount.png']

    ), text_load = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_load.png']
    ), text_load_all_usual = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_load_all_usual.png']
    ), text_unload = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_unload.png']
    ), unloadButtn = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['unload_usual.png']
    ), loadAllButtn = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['Buttn_usual.png']
    ), loadButtn = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['Buttn_usual.png']
    ), text_plan_flight = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_plan_flight.png']
    ), text_Shiping_Cost = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_Shiping_Cost.png']
    ), text_sigma_usual = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_sigma_usual.png']
    ), buttn01 = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['01_buttn.png']
    ), buttn03 = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['03_buttn.png']
    ), buttn04 = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['04_buttn.png']
    ), arrow_buttn2 = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['arrow_buttn copy 2.png']
    ), arrow_buttn = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['arrow_buttn copy.png']
    ), Camp_buttn_green = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['Camp_buttn_green.png']
    ), cancel_buttn = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['cancel_buttn.png']
    ), text_cancel = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_cancel.png']
    ), plan_flight_buttn = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['plan_flight_buttn.png']
    ), line = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['line.png']
    ), line_above = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['line_above.png']
    ), camps_main_panel = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['camps_main_panel.png']
    ), text_item = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_item.png']
     ), Camp_buttn_yellow = new PIXI.Sprite (
         sceneLoader.resources["cargo"].textures['Camp_buttn_yellow.png']
    ), minningArea1 = new PIXI.Sprite (
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

    cancel_buttn.hover = sceneLoader.resources["cargo"].textures['cancel_buttn_hovered.png'];
    cancel_buttn.normal = sceneLoader.resources["cargo"].textures['cancel_buttn.png'];
    cancel_buttn.x = 1797;
    cancel_buttn.y = 1799;
    cancel_buttn.interactive = true;
    cancel_buttn.on('mouseover', ButtonOver)
    cancel_buttn.on('mouseout', ButtonOut)
    cancel_buttn.on('click', onClickCancel)

    plan_flight_buttn.hover = sceneLoader.resources["cargo"].textures['plan_flight_buttn_hovered.png'];
    plan_flight_buttn.normal = sceneLoader.resources["cargo"].textures['plan_flight_buttn.png'];
    plan_flight_buttn.x = 711;
    plan_flight_buttn.y = 1799;
    plan_flight_buttn.interactive = true;
    plan_flight_buttn.on('mouseover', ButtonOver)
    plan_flight_buttn.on('mouseout', ButtonOut)
    //cancel_buttn.on('click', onClickCancel)


    loadAllButtn.hover = sceneLoader.resources["cargo"].textures['Buttn_hovered.png'];
    loadAllButtn.normal = sceneLoader.resources["cargo"].textures['Buttn_usual.png'];
    loadAllButtn.x = 1336;
    loadAllButtn.y = 1126;
    loadAllButtn.interactive = true;
    loadAllButtn.on('mouseover', ButtonOver)
    loadAllButtn.on('mouseout', ButtonOut)
    loadAllButtn.on('click', loadAll)

    loadButtn.hover = sceneLoader.resources["cargo"].textures['Buttn_hovered.png'];
    loadButtn.normal = sceneLoader.resources["cargo"].textures['Buttn_usual.png'];
    loadButtn.x = 1336;
    loadButtn.y = 1221; // +95
    loadButtn.interactive = true;
    loadButtn.on('mouseover', ButtonOver)
    loadButtn.on('mouseout', ButtonOut)
    loadButtn.on('click', load)

    unloadButtn.hover = sceneLoader.resources["cargo"].textures['unload_hovered.png'];
    unloadButtn.normal = sceneLoader.resources["cargo"].textures['unload_usual.png'];
    unloadButtn.x = 1336;
    unloadButtn.y = 1288; 
    unloadButtn.interactive = true;
    unloadButtn.on('mouseover', ButtonOver)
    unloadButtn.on('mouseout', ButtonOut)
    unloadButtn.on('click', unload)
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
                console.log("buttn is down")     
                this.texture = this.hover;
                this.isdown = false;

                for (let subArea in this.children) {
                    if (this.children[subArea].isdown) {
                        console.log(this.children[subArea])
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
                            console.log(miningAreaButtons[i].children[subArea].visible);
                        }
                    }
                }
                this.texture = this.pressed;
                this.isdown = true;
                for (let subArea in this.children) {
                    console.log(this.children[subArea])
                    this.children[subArea].visible = true;
                }
            }
        }
    
        function onMiningOver() {
            console.log("hover tlacitka")
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

    loadingBay.addChild(topPanel, diplya_bckg, ui_panel_bottom, ui_panel_top, items_main_panel_green, text_amount, text_load, text_load
        , text_load_all_usual, text_unload, unloadButtn, loadAllButtn, plan_flight_buttn, text_plan_flight, text_Shiping_Cost, text_sigma_usual, buttn01, buttn03, 
        buttn04, arrow_buttn, arrow_buttn2, Camp_buttn_green, cancel_buttn, text_cancel, line, line_above, camps_main_panel, 
        text_item, line_divider, Camp_buttn_yellow, numCamp,  minningArea1, minningArea2, minningArea3, minningArea3, minningArea4, sigma, gamma, delta, zetta, loadButtn)

        
        
        
        /////////     VOLANIE FUNKCII NA LOADING  ////////////////          ////////////// 
    let arrayOfSeats = [];
    let arrayOfCargo = [];
    arrayOfSeats = griffin_seats_loading(loadingBay, sceneLoader);
    arrayOfCargo = griffin_cargo_loading(loadingBay, sceneLoader);
    

    ///////////// //////////////      onclick       //////////////////////    buttonover        ////////////
    function ButtonOver() {
        this.texture = this.hover;
    }
    function ButtonOut() {
        if (this.isdown) {
            return;
        }
        this.texture = this.normal;
    }
    function onClickCancel(){
        backGroundSprite.removeChild(loadingBay)
    }
    //////////////////      ///////////////////////  LOAD FUNCKCIA-onclick   ////////////////////////      ////      ///        //////////////
    function load(){
        loadPassanger(arrayOfSeats, 1, seatCounter++);
        //loadCargo(arrayOfCargo, 1)

    }
    function unload(){
        loadPassanger(arrayOfSeats, 0, --seatCounter)
    }
    function loadAll(){
        
    }

    ////////////     ADD TO BACKGROUNDSPRITE       ////////////////                //////////////////            ///////
    
    backGroundSprite.addChild(loadingBay);


}