function enterTownMap(){

    if(app.stage.children[0].children[0])
    {
    while (app.stage.children[0].children[0].firstChild) {
        app.stage.children[0].children[0].removeChild(app.stage.children[0].children[0].firstChild);        
    }
    resize();
    }

    let backGroundSprite = new PIXI.Sprite(
        PIXI.loader.resources["noSheet"].texture
    ),
    airportBuilding = new PIXI.Sprite(
        PIXI.loader.resources["townMap"].textures["airport.png"]
    ),
    generalStoreBuilding = new PIXI.Sprite(
        PIXI.loader.resources["townMap"].textures["OQ.png"]
    ),
    governorsHouseBuilding = new PIXI.Sprite(
        PIXI.loader.resources["townMap"].textures["house.png"]
    ),
    marketBuilding = new PIXI.Sprite(
        PIXI.loader.resources["townMap"].textures["market.png"]
    ),
    playerHouseBuilding = new PIXI.Sprite(
        PIXI.loader.resources["townMap"].textures["player_house.png"]
    ),
    ragnarBuilding = new PIXI.Sprite(
        PIXI.loader.resources["townMap"].textures["ragnar.png"]
    ),
    researchTrainingBuilding = new PIXI.Sprite(
        PIXI.loader.resources["townMap"].textures["research_training.png"]
    ),
    secCoBuilding = new PIXI.Sprite(
        PIXI.loader.resources["townMap"].textures["research.png"]
    ),
    templeBuilding = new PIXI.Sprite(
        PIXI.loader.resources["townMap"].textures["temple.png"]
    );

    function buildingOverEnter() {

    }

    function buildingOverEnd() {
    }



    let buildingArray = [ airportBuilding, generalStoreBuilding, governorsHouseBuilding,
        marketBuilding, playerHouseBuilding, ragnarBuilding, researchTrainingBuilding,
        secCoBuilding, templeBuilding ];


    playerHouseBuilding.sceneId = 1;
    playerHouseBuilding.on("click", enterPlayerBuilding);
    playerHouseBuilding.on("mouseover", buildingOverEnter);
    playerHouseBuilding.on("mouseout", buildingOverEnd);
    playerHouseBuilding.interactive = true;

    function enterPlayerBuilding() {
        playerHouseScene(buildingArray, playerHouseBuilding.sceneId, app.stage)
    }

    backGroundSprite.addChild(airportBuilding, generalStoreBuilding, governorsHouseBuilding,
        marketBuilding, playerHouseBuilding, ragnarBuilding, templeBuilding, researchTrainingBuilding, secCoBuilding );
    playArea.addChild(backGroundSprite);
    for (let i in buildingArray) {
        buildingArray[i].interactive = true;
        buildingArray[i].cursor = "wait";
        buildingArray[i].hitArea = new PIXI.Rectangle( buildingArray[i].texture.trim.x, buildingArray[i].texture.trim.y, buildingArray[i].texture.trim.width, buildingArray[i].texture.trim.height);
        buildingArray[i].on("mouseover", buildingOverEnter);
        // buildingArray[i].on("mouseout", buildingOverEnd);
    };




}