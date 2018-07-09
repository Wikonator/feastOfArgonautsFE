function enterTownMap(){
    

    playArea.removeChild(playArea.children[0]);
    
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

    airportBuilding.sceneId = 2;
    airportBuilding.on("click", enterAirportBuilding);
    airportBuilding.on("mouseover", buildingOverEnter);
    airportBuilding.on("mouseout", buildingOverEnd);
    airportBuilding.interactive = true;


    generalStoreBuilding.sceneId = 3;
    generalStoreBuilding.on("click", enterGeneralStoreBuilding);
    generalStoreBuilding.on("mouseover", buildingOverEnter);
    generalStoreBuilding.on("mouseout", buildingOverEnd);
    generalStoreBuilding.interactive = true;

    function enterPlayerBuilding() {
        playerHouseScene(buildingArray, playerHouseBuilding.sceneId);
    }

    function enterAirportBuilding(){
        airportScene(buildingArray, playerHouseBuilding.sceneId);
    }

    function enterGeneralStoreBuilding() {
        console.log("enter the general store");
        generalStoreScene();
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

    resize();



}