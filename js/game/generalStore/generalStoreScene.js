function generalStoreScene() {

    let selectionSquaresArray = [],
        backGroundSprite = app.stage.children[0].children[0];

    if (backGroundSprite.children[0]) {
        while (backGroundSprite.children[0]) {
            backGroundSprite.removeChild(backGroundSprite.children[0]);
        }
    }

    // fog transition
    // add loading screen here
    let sceneLoader = new PIXI.loaders.Loader();

    sceneLoader
        .add("storeInterior", 'images/' + resolutionParameter + '/generalSupplyCo/generalStoreBack.png')
        .add("supplyButtons", "images/" + resolutionParameter + "/generalSupplyCo/genSupplyButtons.json")
        .load((sceneLoader, resources) => {
            loadNextScene(sceneLoader, resources);
        });

    function loadNextScene(sceneLoader, resources) {
        console.log("load the GS");
        backGroundSprite.texture = resources.storeInterior.texture;

        let squaresContainer = new PIXI.Container();

        squaresContainer.position = {x: 526, y: 222};
        playArea.addChild(squaresContainer);

        let posX = 0, posY = 0, aId = 1;
        for (let xi = 0; xi <= 1; ++xi) {
            for (let yi = 0; yi < 4; ++yi) {
                let square = new PIXI.Sprite(resources.supplyButtons.textures["normal.png"]);
                square.position = {x: posX, y: posY};
                square.scale = {x:0.435, y:0.5};
                square.interactive = true;
                square.isDown = false;
                square.actionId = aId;
                square.normal = square.texture;
                square.hovered = resources.supplyButtons.textures["hover.png"];
                square.clicked = resources.supplyButtons.textures["clicked.png"];
                square.on("mouseover", overSquare) .on("mouseout", outOfSquare) . on("click", squareClick)

                selectionSquaresArray.push();
                squaresContainer.addChild(square);
                posY += 60;
                aId += 1;
            }
            posY = 0;
            posX += 168;
        }
    }

    function overSquare() {
        if (this.isDown) {
            return;
        }
        this.texture = this.hovered;
    }
    
    function outOfSquare() {
        if (this.isDown) {
            return;
        }
        this.texture = this.normal;

    }
    
    function squareClick() {
        if(this.isDown) {
            this.isDown = false;
            this.texture = this.hover;
            return;
        }
        this.isDown = true;
        this.texture = this.clicked;
        this.width = 174.75; this.height = 71;
        for(let i in selectionSquaresArray) {selectionSquaresArray[i].texture = this.normal};
    }
}