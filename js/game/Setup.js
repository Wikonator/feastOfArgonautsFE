function setup(dataFromBack) {

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
        )
        ;


    //////////////////////////////////////////// Town Map Building Functions / /////////////// / / / / / /
    function buildingOverEnter() {

    }

    function buildingOverEnd() {
    }




    // function enterPlayerBuilding() {
    //     let sceneId = this.sceneId;
    //     for (let i in buildingArray) {
    //         backGroundSprite.removeChild(buildingArray[i]);
    //     }
    //         // fog transition
    //         // add loading screen here
    //     let sceneLoader = new PIXI.loaders.Loader();
    //     sceneLoader.add("houseInterior", 'images/' + resolutionParameter + '/playerHouse/interior.png')
    //         .add("stelaTable", "images/" + resolutionParameter + '/playerHouse/tableView.png')
    //     .load((sceneLoader, resources, sceneId ) => {
    //         loadNextScene(sceneLoader, resources, sceneId);
    //     });
    //     // loadNextScene(sceneId);
    // }

    // lights testing
    // playArea.addChild(new PIXI.display.Layer(PIXI.lights.normalGroup));
    // playArea.addChild(new PIXI.display.Layer(PIXI.lights.diffuseGroup));
    // playArea.addChild(new new PIXI.display.Layer(PIXI.lights.lightGroup));

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

    app.stage.addChild(playArea
        // , GUIArea
    );



    resize();
    // enterPlayerBuilding();      // <<< Enter player house automatically
    createPlayerUI()
}