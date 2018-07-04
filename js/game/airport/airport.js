function airportScene(buildingArray, sceneID) {
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
            .add("airport", 'images/' + resolutionParameter + '/airport/Cargo-background.png')
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
    enterTownMap();
}