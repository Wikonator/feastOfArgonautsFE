function playerHouseScene(buildingArray, sceneId, stage) {

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
            .add("houseInterior", 'images/' + resolutionParameter + '/playerHouse/spritesheet_home/home.json')
            .add("stelaAssets", "images/" + resolutionParameter + '/playerHouse/spritesheet_stela/stela.json')
            .add("stelaTable", "images/" + resolutionParameter + '/playerHouse/tableView.png')
            .add("splashRed", "images/" + resolutionParameter + '/playerHouse/spritesheet_stela/splash_red.json')
            .add("splashGreen", "images/" + resolutionParameter + '/playerHouse/spritesheet_stela/splash_green.json')
            .add("blueLine", "images/" + resolutionParameter + '/playerHouse/spritesheet_stela/animatedLinesSmall.json')
            .add("greenLine", "images/" + resolutionParameter + '/playerHouse/spritesheet_stela/animatedLinesBig.json')
            .add("tokenAndActive", "images/" + resolutionParameter + '/playerHouse/spritesheet_stela/temporaryTokenActiv.json')
            .add("23_combi", "images/" + resolutionParameter + '/playerHouse/spritesheet_stela/placeholder02_03.png')
            .add("45_combi", "images/" + resolutionParameter + '/playerHouse/spritesheet_stela/placeholder04_05.png')
          .load((sceneLoader, resources) => {
            loadNextScene(sceneLoader, resources);
        });

    function loadNextScene (sceneLoader, resources) {

        backGroundSprite.texture = resources["houseInterior"].textures['home_bg.png'];
        let table = new PIXI.Graphics;
        table.beginFill();
        table.drawPolygon([400,0,1600,0,1800, 500, 0, 500]);
        table.endFill();
        table.alpha = 0;
        table.position = {x:600, y:1660};
        table.interactive = true;
        table.on("click", () => {
            showStelaContainer(resources, backGroundSprite);
        } );
        backGroundSprite.addChild(table);



        let backButton = new PIXI.Graphics();
        backButton.lineStyle(0);
        backButton.beginFill(0x000000, 0.5);
        backButton.drawCircle(470, 90,60);
        backButton.endFill();
        backButton.position = {x:2500, y:1660};
        backButton.interactive = true;
        backButton.on("click", () => {
            enterTownMap();
        } );
        backGroundSprite.addChild(backButton);
    
   }

    // function setup() {
    //     var placehol_11, placehol_12, placehol_21, placehol_22, placehol_23, placehol_31, placehol_32, placehol_33;
    //     var anim;
    //     let background = PIXI.Texture.fromImage("images/01_layout_01.png")
    //     let bg = new PIXI.Sprite(background)
    //     stage.addChild(bg);
    //     add_placeholder();
    //     add_lines();
    //     add_diamonds();
    //
    //
    //     app.ticker.add(delta => gameloop(delta));
    // }
}