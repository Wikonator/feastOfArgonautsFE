function enterTownMap(){
    

    playArea.removeChild(playArea.children[0]);
    
    let backGroundSprite = new PIXI.Sprite(
        PIXI.loader.resources["noSheet"].texture
    ),
    airportBuilding = new PIXI.Sprite(
        PIXI.loader.resources["townMap"].textures["airport.png"]
    ),
    PSecBuilding = new PIXI.Sprite(
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
    GeneralSupplyBuilding = new PIXI.Sprite(
        PIXI.loader.resources["townMap"].textures["research.png"]
    ),
    templeBuilding = new PIXI.Sprite(
        PIXI.loader.resources["townMap"].textures["temple.png"]
    );
    
    function buildingOverEnter() {

    }

    function buildingOverEnd() {
    }



    let buildingArray = [ airportBuilding, PSecBuilding, governorsHouseBuilding,
        marketBuilding, playerHouseBuilding, ragnarBuilding, researchTrainingBuilding,
        GeneralSupplyBuilding, templeBuilding ];


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


    GeneralSupplyBuilding.sceneId = 3;
    GeneralSupplyBuilding.on("click", enterGeneralSupplyBuilding);
    GeneralSupplyBuilding.on("mouseover", buildingOverEnter);
    GeneralSupplyBuilding.on("mouseout", buildingOverEnd);
    GeneralSupplyBuilding.interactive = true;

    function enterPlayerBuilding() {
        playerHouseScene(buildingArray, playerHouseBuilding.sceneId);
    }

    function enterAirportBuilding(){
        airportScene(buildingArray, playerHouseBuilding.sceneId);
    }

    function enterGeneralSupplyBuilding() {
        console.log("enter the general store");
        generalSupplyCoScene();
    }

    backGroundSprite.addChild(airportBuilding, PSecBuilding, governorsHouseBuilding,
        marketBuilding, playerHouseBuilding, ragnarBuilding, templeBuilding, researchTrainingBuilding, GeneralSupplyBuilding );
    playArea.addChild(backGroundSprite);

    for (let i in buildingArray) {
        buildingArray[i].interactive = true;
        buildingArray[i].cursor = "wait";
        buildingArray[i].hitArea = new PIXI.Rectangle( buildingArray[i].texture.trim.x, buildingArray[i].texture.trim.y, buildingArray[i].texture.trim.width, buildingArray[i].texture.trim.height);
        buildingArray[i].on("mouseover", buildingOverEnter);
        // buildingArray[i].on("mouseout", buildingOverEnd);
    }

    enterGeneralSupplyBuilding();  // <<<<<< temporary dont forget to erase before commiting

    resize();



}