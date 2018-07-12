function loadAvailableHower(backGroundSprite, sceneLoader, dataFromBack){

    console.log("hower");

    let availableHovers = new PIXI.Container();

    let leftClick = new PIXI.Sprite (
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

    // rightClick.anchor = {x: 0.5, y: 0.5};
    // rightClick.hover = sceneLoader.resources["availableHovers"].textures['arrow_hover.png'];
    // rightClick.normal = sceneLoader.resources["availableHovers"].textures['arrow.png'];
    // rightClick.interactive = true;
    // rightClick.on('mouseover', ButtonOver)
    // rightClick.on('mouseout', ButtonOut)
    // rightClick.on('click', onClickRight)


    //leftClick.anchor = {x: 0.5, y: 0.5};
    leftClick.hover = sceneLoader.resources["availableHovers"].textures['arrow_hover.png'];
    leftClick.normal = sceneLoader.resources["availableHovers"].textures['arrow.png'];
    // leftClick.interactive = true;
    // leftClick.on('mouseover', ButtonOver)
    // leftClick.on('mouseout', ButtonOut)
    // leftClick.on('click', onClickLeft)

    console.log(dataFromBack);
   
    //  //  //  //  //  //  // /// //

    availableHovers.addChild(text_Available_howecrafts, text_Griffin_042, line, name_panel, hover_blue, line_yellow);
    backGroundSprite.addChild(availableHovers);
    
}