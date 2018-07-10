function generalStoreScene() {
    console.log("lets go shoppin");
    let backGroundSprite = app.stage.children[0].children[0];
    if(backGroundSprite.children[0])
    {
        while (backGroundSprite.children[0]) {
            backGroundSprite.removeChild(backGroundSprite.children[0]);
        }
    }

    // fog transition
    // add loading screen here
    let sceneLoader = new PIXI.loaders.Loader();

    sceneLoader
        .add("storeInterior", 'images/' + resolutionParameter + '/generalSupplyCo/generalStoreBack.png')
        .add("supplyButtons","images/" + resolutionParameter + "/generalSupplyCo/genSupplyButtons.json")
        .load((sceneLoader, resources) => {
            loadNextScene(sceneLoader, resources);
        });

    function loadNextScene (sceneLoader, resources) {
        console.log("load the GS");
        backGroundSprite.texture = resources.storeInterior.texture;
    }
}