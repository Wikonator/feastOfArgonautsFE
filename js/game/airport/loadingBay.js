function loadingBayOpen(sceneLoader, backGroundSprite){
    let loadingBay = new PIXI.Container()

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
    ), text_capacity = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_capacity.png']
    ), text_Capacity = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_Capacity.png']
    ), text_load = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_load.png']
    ), text_load_all_usual = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_load_all_usual.png']
    ), text_unload = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_unload.png']
    ), unload_usual = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['unload_usual.png']
    ), Buttn_usual = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['Buttn_usual.png']
    ), griffin_load_scheme = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['griffin_load_scheme.png']
    ), text_Griffin = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_Griffin-042.png']
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
    ), griffin_passengers_scheme = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['griffin_passengers_scheme.png']
    ), camps_main_panel = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['camps_main_panel.png']
    ), text_passengers_seats = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_passengers seats.png']
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

    // treba lepsie urcit pozicie
    numCamp.hover = sceneLoader.resources["cargo"].textures['small_buttn_pressed_enlarged.png'];
    numCamp.normal = sceneLoader.resources["cargo"].textures['small_buttn_usual.png'];
    numCamp.x = 326; //326 // 365
    numCamp.y = 358; // 358
    numCamp.interactive = true;
    numCamp.on('mouseover', ButtonOver)
    numCamp.on('mouseout', ButtonOut)


    ///////////   ///////////////       //////////////// AREAS ///////////////         /////////////////////            //////////////////////
    // minningArea1.hover = sceneLoader.resources["cargo"].textures['buttn_hovered.png'];
    // minningArea1.normal = sceneLoader.resources["cargo"].textures['buttn_usual.png'];
    // minningArea1.pressed = sceneLoader.resources["cargo"].textures['mining_area_pressed']
    minningArea1.x = 329; 
    minningArea1.y = 627;
    // minningArea1.interactive = true;
    // minningArea1.on('mouseover', ButtonOver)
    // minningArea1.on('mouseout', ButtonOut)
    // minningArea1.on('click', function() {onClickCamps(this) } )

    // minningArea2.hover = sceneLoader.resources["cargo"].textures['buttn_hovered.png'];
    // minningArea2.normal = sceneLoader.resources["cargo"].textures['buttn_usual.png'];
    // minningArea2.pressed = sceneLoader.resources["cargo"].textures['mining_area_pressed']
    minningArea2.x = 652;
    minningArea2.y = 627;
    // minningArea2.interactive = true;
    // minningArea2.on('mouseover', ButtonOver)
    // minningArea2.on('mouseout', ButtonOut)
    // minningArea2.on('click', function() {onClickCamps(this) } )

    // minningArea3.hover = sceneLoader.resources["cargo"].textures['buttn_hovered.png'];
    // minningArea3.normal = sceneLoader.resources["cargo"].textures['buttn_usual.png'];
    // minningArea3.pressed = sceneLoader.resources["cargo"].textures['mining_area_pressed']
    minningArea3.x = 975; 
    minningArea3.y = 627;
    // minningArea3.interactive = true;
    // minningArea3.on('mouseover', ButtonOver)
    // minningArea3.on('mouseout', ButtonOut)
    // minningArea3.on('click', function() {onClickCamps(this) } )

    // minningArea4.hover = sceneLoader.resources["cargo"].textures['buttn_hovered.png'];
    // minningArea4.normal = sceneLoader.resources["cargo"].textures['buttn_usual.png'];
    // minningArea4.pressed = sceneLoader.resources["cargo"].textures['mining_area_pressed']
    minningArea4.x = 1298;  
    minningArea4.y = 627;
    // minningArea4.interactive = true;
    // minningArea4.on('mouseover', ButtonOver)
    // minningArea4.on('mouseout', ButtonOut)
    // minningArea4.on('click', function() {onClickCamps(this) } )


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

    // function onClickCamps(clickedObj){
    //     if (this.isdown) {
    //         this.isdown = false;
    //         this.texture = this.hover;
    //     } else {

    //         this.isdown = true;
    //         this.texture = this.pressed;
    //         this.alpha = 1;
    //     }

    //     console.log(clickedObj);
    // }
    ////////////////////////// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / // 
    let miningAreaButtons = [minningArea1, minningArea2, minningArea3, minningArea4];
    let subareaTexture = sceneLoader.resources["cargo"].textures['small_buttn_usual.png'];

    console.log(subareaTexture);
    console.log(dataFromBack.areas.btn[0].state);
    for (let i in miningAreaButtons) {
        
        let subButtonX = -65,
        subButtonY = 70;
        miningAreaButtons[i].interactive = true;
        miningAreaButtons[i].on("click", miningClick);
        miningAreaButtons[i].on('mouseover', onMiningOver);
        miningAreaButtons[i].on('mouseout', onMiningOut);
        miningAreaButtons[i].hover = sceneLoader.resources["cargo"].textures['buttn_hovered.png'];
        miningAreaButtons[i].normal = sceneLoader.resources["cargo"].textures['buttn_usual.png'];
        miningAreaButtons[i].pressed = sceneLoader.resources["cargo"].textures['area_buttn_pressed.png'];
        miningAreaButtons[i].disabled = sceneLoader.resources["cargo"].textures['buttn_usual.png'];
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
            subAreaButton.hover = sceneLoader.resources["cargo"].textures['small_buttn_pressed_enlarged.png'];
            subAreaButton.pressed = sceneLoader.resources["cargo"].textures['small_buttn_pressed_enlarged.png'];
            subAreaButton.disabled = sceneLoader.resources["cargo"].textures['small_buttn_usual.png'];
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
                console.log("buttn is down")            // uz stlaceny bol
                this.texture = this.hover;
                this.isdown = false;

                // tu je pes zakopany
            //     for (let subArea in this.children) {
            //         if (this.children[subArea].isdown) {
            //             this.children[subArea].isdown = false;
            //             this.children[subArea].texture = this.children[subArea].normal;
            //         }
            //         this.children[subArea].visible = false;
            //     }
            // } else {
            //     console.log("button was not down")
            //     for (let i in miningAreaButtons) {
            //         console.log(i);
            //         if (miningAreaButtons[i].isDisabled == 1) {
            //             break;
            //         } else {
            //             console.log("button was not pressed before")
            //             console.log(miningAreaButtons[i].children)
            //             miningAreaButtons[i].texture = miningAreaButtons[i].normal;
            //             miningAreaButtons[i].isdown = false;
            //             for (let subArea in miningAreaButtons[i].children) {
            //                 miningAreaButtons[i].children[subArea].visible = false;
            //                 console.log(miningAreaButtons[i].children[subArea].visible);
            //             }
            //         }
            //     }
            //     console.log("after the subarea for")
                this.texture = this.pressed;
                this.isdown = true;
                // for (let subArea in this.children) {
                //     this.children[subArea].visible = true;
                //}
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

    loadingBay.addChild(topPanel, diplya_bckg, ui_panel_bottom, ui_panel_top, items_main_panel_green, text_amount, text_capacity, text_Capacity, text_load, text_load
        , text_load_all_usual, text_unload, unload_usual, Buttn_usual, griffin_load_scheme, text_Griffin, plan_flight_buttn, text_plan_flight, text_Shiping_Cost, text_sigma_usual, buttn01, buttn03, 
        buttn04, arrow_buttn, arrow_buttn2, Camp_buttn_green, cancel_buttn, text_cancel, line, line_above, griffin_passengers_scheme, camps_main_panel,
        text_passengers_seats, text_item, line_divider, Camp_buttn_yellow, numCamp,  minningArea1, minningArea2, minningArea3, minningArea3, minningArea4, sigma, gamma, delta, zetta)

    backGroundSprite.addChild(loadingBay);





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

    ////////////            ////////////////                //////////////////            ///////
}