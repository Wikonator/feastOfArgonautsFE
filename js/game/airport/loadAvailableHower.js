function loadAvailableHower(backGroundSprite, sceneLoader, dataFromBack){

    let availableHovers = new PIXI.Container();

    let leftClick = new PIXI.Sprite (
        sceneLoader.resources["availableHovers"].textures['arrow.png']
    ), rightClick = new PIXI.Sprite (
        sceneLoader.resources["availableHovers"].textures['arrow.png']
    ), line_yellow = new PIXI.Sprite (
        sceneLoader.resources["availableHovers"].textures['line+mask.png']
    ), name_panel = new PIXI.Sprite (
        sceneLoader.resources["availableHovers"].textures['name_panel.png']
    ), hover_blue = new PIXI.Sprite (
        sceneLoader.resources["availableHovers"].textures['right click + edit contents.png']
    ), line = new PIXI.Sprite (
        sceneLoader.resources["availableHovers"].textures['Shape 2.png']
    ), text_Available_howecrafts = new PIXI.Sprite (
        sceneLoader.resources["availableHovers"].textures['text_Available_howecrafts.png']
    ), text_Griffin_042 = new PIXI.Sprite (
        sceneLoader.resources["availableHovers"].textures['text_Griffin_042.png']
    );

    
    rightClick.anchor = {x: 0.5, y: 0.5};
    rightClick.scale = {x:-2, y:2};
    rightClick.position = {x:1300, y:1550}
    rightClick.hover = sceneLoader.resources["availableHovers"].textures['arrow_hover.png'];
    rightClick.normal = sceneLoader.resources["availableHovers"].textures['arrow.png'];
    rightClick.interactive = true;
    rightClick.on('mouseover', ButtonOver)
    rightClick.on('mouseout', ButtonOut)
    rightClick.on('click', onClickRight)


    leftClick.anchor = {x: 0.5, y: 0.5};
    leftClick.scale = {x:2, y:2};
    leftClick.position = {x:740, y:1550}
    leftClick.hover = sceneLoader.resources["availableHovers"].textures['arrow_hover.png'];
    leftClick.normal = sceneLoader.resources["availableHovers"].textures['arrow.png'];
    leftClick.interactive = true;
    leftClick.on('mouseover', ButtonOver)
    leftClick.on('mouseout', ButtonOut)
    leftClick.on('click', onClickLeft)

    text_Available_howecrafts.position = {x:795 , y:1415};
    text_Available_howecrafts.scale = {x:2, y:2};

    line.position = {x:700 , y:1422};
    line.scale = {x:2, y:2};

    name_panel.position = {x:800 , y:1600};
    name_panel.scale = {x:2, y:2};

    hover_blue.position = {x:900 , y:1450};
    hover_blue.scale = {x:2, y:2};

    // text_Griffin_042.position = {x:870 , y:1620};
    // text_Griffin_042.scale = {x:2, y:2};


    // text nazov HC //
    let hovers = [];
    for(let i in dataFromBack.available){
        hovers[i] = "hover" + i;
    }

    textOptions.fill = '#0ef3ee';
    textOptions.fontSize = 30;
    for(let index in dataFromBack.available){
        let help = dataFromBack.available[index].label.toUpperCase();
        hovers[index] = new PIXI.Text(help, textOptions);
    }
    for(let i in hovers){
        hovers[i].num = i;
        hovers[i].x = 900;
        hovers[i].y = 1645;
        hovers[i].alpha = 0;
    }
    hovers[0].alpha = 1;

    //  //  //  //  //  //  // /// //
    for(let i in hovers){
        availableHovers.addChild(hovers[i]);
    }
    availableHovers.addChild(text_Available_howecrafts, text_Griffin_042, line, name_panel, hover_blue, line_yellow, leftClick, rightClick);
    backGroundSprite.addChild(availableHovers);
    

    // // // // //  //  //  //  // //  //  
    function ButtonOver() {
        this.texture = this.hover;
        // this.y -= 17;
        // this.x += 6;
        this.scale.x *= -1; 
    }
    function ButtonOut() {
        // this.y += 17;
        // this.x -= 6;
        this.scale.x *= -1; 
        this.texture = this.normal;
    }
    function onClickLeft(){
        let svici;
        for(let i in hovers){
            if(hovers[i].alpha === 1){
                hovers[i].alpha = 0;
                svici = i;
                svici--;
            }
        }
        if(svici == -1){
            svici = hovers.length-1;
        }
        hovers[svici].alpha = 1;
    }
    function onClickRight(){
        let svici;
        for(let i in hovers){
            if(hovers[i].alpha === 1){
                hovers[i].alpha = 0;
                svici = i;
                svici++;
            }
        }
        if(svici == hovers.length){
            svici = 0;
        }
        hovers[svici].alpha = 1;
    }
    //  //  //  //  //  //  // /// //
}