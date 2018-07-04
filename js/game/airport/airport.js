function airportScene(buildingArray, sceneID, stage) {

    let backGroundSprite = stage.children[0].children[0];

    for (let i in buildingArray) {
        backGroundSprite.removeChild(buildingArray[i]);
    }
            // fog transition
            // add loading screen here
        let sceneLoader = new PIXI.loaders.Loader();

        sceneLoader
            .add("airport", 'images/' + resolutionParameter + '/airport/cargo-airport.png')
          .load((sceneLoader, resources) => {
            loadNextScene(sceneLoader, resources);
        });

    function loadNextScene (sceneLoader, resources) {

        backGroundSprite.texture = resources["airport"].texture;
        let backButton = new PIXI.Graphics;
        backButton.lineStyle(2, 0x0000FF, 1);
        backButton.beginFill(0x00000, 1);
        backButton.drawRect(200, 1300, 500, 200);
        backButton.interactive = true;
        backButton.on("click", () => {
            goBack(resources);
        } );
        backGroundSprite.addChild(backButton);



    }
}

function goBack(){
    console.log("idem naspat")
    enterTownMap();
}