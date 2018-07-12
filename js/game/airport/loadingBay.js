function loadingBayOpen(sceneLoader, backGroundSprite){
    let dataFromBack_onBay;
    socket.emit("cargo:onBay");

    socket.on("cargo:onBay", function (jsonFromBack) {
        dataFromBack_onBay = jsonFromBack;
        console.log(dataFromBack_onBay);
    })

    let loadingBay = new PIXI.Container()
    var seatCounter = 0, ammount = 0;
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
    );

    diplya_bckg.interactive = true;
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
    /////     ///////////// /////////                //         ITEM LIST                    //////////// ///////////////             //////////////////////////                /////////////////////////          /////////////////////////// /

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

    // console.log(dataFromBack)  // s tymto idem pracovat

    // definujem nazvy premennych 
    textOptions.fill = '#25d36c';
    textOptions.fontSize = 30;
    let items = [];
    for(let i in dataFromBack.vault.camps){
        items.push("item"+i);
    }
    let ammountOfItems = [];
    for(let i in dataFromBack.vault.camps){
        ammountOfItems.push("ammountOfItems"+i);
    }
    let capacityOfItems = [];
    for(let i in dataFromBack.vault.camps){
        capacityOfItems.push("capacityOfItems"+i);
    }

    for(let index in dataFromBack.vault.camps){
        items[index] = new PIXI.Text(dataFromBack.vault.camps[index].label, textOptions);
        ammountOfItems[index] = new PIXI.Text(dataFromBack.vault.camps[index].label, textOptions);
        capacityOfItems[index] = new PIXI.Text(dataFromBack.vault.camps[index].label, textOptions)
    }
    for(let i in items){
        items[i].num = i;
        items[i].x = 376;
        items[i].y = 1246 + (i * 100);
        items[i].interactive = true;
        items[i].on('click', function () { onClickText(items[i]) } );
    }
    for(let i in ammountOfItems){
        ammountOfItems[i].num = i;
        ammountOfItems[i].x = 600;
        ammountOfItems[i].y = 1246 + (i * 100);
        ammountOfItems[i].interactive = true;
        ammountOfItems[i].on('click', function () { onClickText(items[i]) } );
    }
    for(let i in capacityOfItems){
        capacityOfItems[i].num = i;
        capacityOfItems[i].x = 900;
        capacityOfItems[i].y = 1246 + (i * 100);
        capacityOfItems[i].interactive = true;
        capacityOfItems[i].on('click', function () { onClickText(items[i]) } );
    }



/////////////////             ////////////////////      CAMPS PANEL /////////////             ///////////////////              ////////////
    textOptions.fill = '#e8d21f';
    textOptions.fontSize = 35;
    let amundsen = new PIXI.Text("AMUNDSEN", textOptions)
    amundsen.x = 548; //448
    amundsen.y = 900;

    textOptions.fill = '#13e859';
    textOptions.fontSize = 35;
    let columb = new PIXI.Text("COLUMB", textOptions)
    columb.x = 1108;
    columb.y = 900;



/////       //////          /////           /////           /////           /////           ////    /////   ////    ////    /////   /////   /////   /////
    loadingBay.addChild(topPanel, diplya_bckg, ui_panel_bottom, ui_panel_top, items_main_panel_green, text_amount, text_load, text_load
        , text_load_all_usual, text_unload, unloadButtn, loadAllButtn, plan_flight_buttn, text_plan_flight, text_Shiping_Cost, text_sigma_usual, buttn01, buttn03, 
        buttn04, arrow_buttn, arrow_buttn2, Camp_buttn_green, cancel_buttn, text_cancel, line, line_above, camps_main_panel, 
        text_item, line_divider, Camp_buttn_yellow, loadButtn, amundsen, columb)


    for(var i in items){
        loadingBay.addChild(items[i], ammountOfItems[i], capacityOfItems[i])
    }       
        
        
        /////////     VOLANIE FUNKCII NA LOADING  ////////////////          ////////////// 
    miningAreaLoading(loadingBay, sceneLoader);

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

    function onClickText(clickedObj){
        // app.ticker.remove(movetext)
        // textOptions.fill = '0xd2123c';
        // textOptions.fontSize = 30;
        for(let i in capacityOfItems){
            capacityOfItems[i].style.fill = '#25d36c';
        }
        for(let i in ammountOfItems){
            ammountOfItems[i].style.fill = '#25d36c';
        }
        for(let i in items){
            if(items[i].style.fill === '#d2123c' && items[i] != clickedObj)
                items[i].style.fill = '#25d36c';
            for(var k in ammountOfItems){
                if(ammountOfItems[k].num === clickedObj.num && ammountOfItems[k] != clickedObj)
                clickedObj2 = ammountOfItems[k];
            }
            for(var p in capacityOfItems){
                if(capacityOfItems[p].num === clickedObj.num && capacityOfItems[p] != clickedObj)
                clickedObj3 = capacityOfItems[p];
            }
        }
        clickedObj.style.fill = '#d2123c'
        clickedObj2.style.fill = '#d2123c'
        clickedObj3.style.fill = '#d2123c'

    }
    //////////////////      ///////////////////////  LOAD FUNCKCIA-onclick   ////////////////////////      ////      ///        //////////////
    function load(){
        loadPassanger(arrayOfSeats, 1, seatCounter++);
        ammount = loadCargo(arrayOfCargo, 1, 50, ammount) // pole naplne griffina, stav(1 nakladam), velkost nakaldanej veci, kolko uz som toho nalozil

    }
    function unload(){
        loadPassanger(arrayOfSeats, 0, --seatCounter)
        ammount = loadCargo(arrayOfCargo, 0, 50, ammount)
    }
    function loadAll(){
        
    }

    ////////////     ADD TO BACKGROUNDSPRITE       ////////////////                //////////////////            ///////
    
    backGroundSprite.addChild(loadingBay);

    //  function emitStuff(json) {
    //         console.log("emmiting", json);
    //         json.idStela = stelaId;
    //         socket.emit("stela:onAction", json);
    //     }


    socket.on()

}