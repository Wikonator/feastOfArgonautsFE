function generalSupplyCoScene() {

    let selectionSquaresArray = [], buttonNameArray = ["TENTS & CAMPS", "FOOD", "MEDICINE", "OPERATORS HQ", "CAMP SAFETY", "EXO SPARES", "FUEL", "H2O"],
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
        backGroundSprite.texture = resources.storeInterior.texture;

        let squaresContainer = new PIXI.Container();

        squaresContainer.position = {x: 1470, y: 605};
        backGroundSprite.addChild(squaresContainer);

        //  declaring elements on the background
        let urgentNeeds = new PIXI.Sprite(resources.supplyButtons.textures["urgentNeeds.png"]),
            actionGuideSprite = new PIXI.Sprite(resources.supplyButtons.textures["ActionGuide.png"]),
            specialOffer = new PIXI.Sprite(resources.supplyButtons.textures["specialOffer.png"]),
            emergencycatapult = new PIXI.Sprite(resources.supplyButtons.textures["deliverySystem.png"]),
            emergencyCapsules = new PIXI.Sprite(resources.supplyButtons.textures["capsuleTypes.png"])

        ;
        urgentNeeds.position = {x:1435,y:250};
        actionGuideSprite.position = {x: 990, y:642};
        actionGuideSprite.scale = {x:0.9, y:0.9};
        specialOffer.position = {x:265,y:1025};
        emergencycatapult.position = {x:1590, y:1410};
        emergencyCapsules.position = {x:1309,y:1755};


        backGroundSprite.addChild(urgentNeeds, actionGuideSprite, specialOffer, emergencycatapult, emergencyCapsules);


        let posX = 0, posY = 0, aId = 0;
        for (let xi = 0; xi <= 1; ++xi) {
            for (let yi = 0; yi < 4; ++yi) {
                let square = new PIXI.Sprite(resources.supplyButtons.textures["normal.png"]);
                square.position = {x: posX, y: posY};
                square.width = 465; square.height = 200;
                square.interactive = true;
                square.isDown = false;
                square.actionId = aId;
                square.normal = square.texture;
                square.hovered = resources.supplyButtons.textures["hover.png"];
                square.clicked = resources.supplyButtons.textures["clicked.png"];
                square.on("mouseover", overSquare) .on("mouseout", outOfSquare) . on("click", squareClick)

                textOptions.fill = "#10e711"; textOptions.fontSize = 22; textOptions.align = "center";
                let squareText = new PIXI.Text(buttonNameArray[aId], textOptions);
                squareText.anchor = { x:0.5, y:0.5 };
                squareText.scale = { x:1.3, y: 1.3 };
                squareText.position = { x: 202.17, y: 71.42 }; //w/2.3 h/2.8

                square.wordYo = squareText;
                selectionSquaresArray.push(square);
                squaresContainer.addChild(square);
                square.addChild(squareText);
                posY += 167;
                aId += 1;
            }
            posY = 0;
            posX += 450;
        }

        let backButton = new PIXI.Graphics;
        backButton.lineStyle(2, 0x0000FF, 1);
        backButton.beginFill(0x00000, 1);
        backButton.drawRect(200, 1600, 400, 60);
        backButton.interactive = true;
        backButton.on("click", () => {
            goBack(resources);
        } );
        backGroundSprite.addChild(backButton);

        textOptions.fill = "white";
        textOptions.fontSize = 55;
        let vaultButtonText = new PIXI.Text("GO BACK", textOptions);
        vaultButtonText.x = 200;
        vaultButtonText.y = 1600;
        backGroundSprite.addChild(vaultButtonText);

    }


    function overSquare() {
        if (this.isDown) {
            return;
        }
        this.texture = this.hovered;
        this.wordYo.style.fill = "#84ff84";
    }
    
    function outOfSquare() {
        if (this.isDown) {
            return;
        }
        this.texture = this.normal;
        this.wordYo.style.fill = "#10e711";
    }
    
    function squareClick() {
        if(this.isDown) {
            this.isDown = false;
            this.texture = this.hovered;
            this.wordYo.style.fill = "#84ff84";
            this.width = 465; this.height = 200;
            return;

        }

        for(let i in selectionSquaresArray) {
            selectionSquaresArray[i].texture = selectionSquaresArray[i].normal;
            selectionSquaresArray[i].wordYo.style.fill = "#10e711";
            selectionSquaresArray[i].isDown = false;
        }
        this.isDown = true;
        this.texture = this.clicked;
        this.wordYo.style.fill = "#fdff48";
        this.width = 465; this.height = 200;
    }


    function goBack(){
        enterTownMap();
    }
}