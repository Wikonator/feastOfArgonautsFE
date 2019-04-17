function showUrgentNeeds(resources, backSprite) {
    let backGroundSprite = backSprite,
        needsContainer = new PIXI.Container(),
        urgentWindow = new PIXI.Sprite(
            resources["catsAndUrgentNeeds"].textures["urgentNeedsWindow.png"]
        );

    needsContainer.position = {x:666, y:30}; // oh noes the devul! 3:D fugg
    urgentWindow.position = {x:0,y:0};
    backGroundSprite.addChild(needsContainer);
    needsContainer.addChild(urgentWindow);

    /////////////  Top Panel ///////////////// ///////////////// ///////////////// ///////////////// /////////////////

    let leftArrow = new PIXI.Sprite(resources["catsAndUrgentNeeds"].textures["arrowLeftNormal.png"]);
    leftArrow.normal = leftArrow.texture;
    leftArrow.hover = resources["catsAndUrgentNeeds"].textures["arrowLeftHover.png"];
    leftArrow.pressed = resources["catsAndUrgentNeeds"].textures["arrowLeftPressed.png"];
    leftArrow.interactive = true;   leftArrow.isDown = false;
    leftArrow.on("mouseover", hoverOver) .on("mouseout", hoverOut) .on("pointerdown", arrowDown) .on("pointerup", arrowUp);
    leftArrow.anchor = {x:0.5, y:0.5};  leftArrow.position = {x:980,y:410}; leftArrow.scale = {x:1, y:1};

    let rightArrow = new PIXI.Sprite(resources["catsAndUrgentNeeds"].textures["arrowRightNormal.png"]);
    rightArrow.normal = rightArrow.texture;
    rightArrow.hover = resources["catsAndUrgentNeeds"].textures["arrowRightHover.png"];
    rightArrow.pressed = resources["catsAndUrgentNeeds"].textures["arrowRightPressed.png"];
    rightArrow.interactive = true;      rightArrow.isDown = false;
    rightArrow.on("mouseover", hoverOver) .on("mouseout", hoverOut) .on("pointerdown", arrowDown) .on("pointerup", arrowUp);
    rightArrow.anchor = {x:0.5, y:0.5};  rightArrow.position = {x:2630,y:410}; rightArrow.scale = {x:1, y:1};

    textOptions.fill = '#ffd000'; textOptions.fontSize = 40 ; textOptions.align = "center";
    let selectedCampText = new PIXI.Text("Camp \n <<Amundsen>>", textOptions);
    selectedCampText.position = {x:1445 ,y:410};   selectedCampText.anchor = {x:0.5,y:0.5};

    textOptions.fill = '#00fe12'; textOptions.fontSize = 40 ; textOptions.align = "center";
    let upgradePointsAmountText = new PIXI.Text("420", textOptions);
    upgradePointsAmountText.position = {x:2120,y:385}; upgradePointsAmountText.anchor = {x:0.5, y:0.5};

    textOptions.fill = '#ffeb90';
    let pointsText = new PIXI.Text("POINTS", textOptions), currentlevelText = new PIXI.Text("LEVEL ", textOptions);
    pointsText.anchor = {x:0.5,y:0.5}; currentlevelText.anchor = {x:0.5, y:0.5};
    pointsText.position = {x:2290,y:385}; currentlevelText.position = {x:2230,y:435};

    ////////////////////////    ////////////////////////  Buttons   ////////////////////////     ////////////////////////

    let campEquipmentButton = new PIXI.Sprite (resources["catsAndUrgentNeeds"].textures["categoriesCampButtonNormal.png"]);
    campEquipmentButton.position = {x:730, y: 700};
    textOptions.fill = "#bef7ff";   textOptions.fontSize = 25;
    let campEquipBtnText = new PIXI.Text("CAMP EQUIPMENT", textOptions); campEquipBtnText.anchor = {x:0.5, y:0.5};
    campEquipBtnText.position = {x:0, y:0};
    campEquipmentButton.addChild(campEquipBtnText);


    let foodSupplyButton = new PIXI.Sprite (resources["catsAndUrgentNeeds"].textures["categoriesCampButtonNormal.png"]);
    foodSupplyButton.position = {x:1520, y: 700};
    let foodSupplyBtnText = new PIXI.Text("FOOD SUPPLIES", textOptions); foodSupplyBtnText.anchor = {x:0.5, y:0.5};
    foodSupplyBtnText.position = {x:0, y:0};
    foodSupplyButton.addChild(foodSupplyBtnText);

    let EXOParts =  new PIXI.Sprite (resources["catsAndUrgentNeeds"].textures["categoriesCampButtonNormal.png"]);
    EXOParts.position = {x:2250, y: 700};
    let EXOPartsBtnText = new PIXI.Text("EXO PARTS", textOptions); EXOPartsBtnText.anchor = {x:0.5, y:0.5};
    EXOPartsBtnText.position = {x:0, y:0};
    EXOParts.addChild(EXOPartsBtnText);

    let topButtonArray = [campEquipmentButton, foodSupplyButton, EXOParts];
    for (let i in topButtonArray) {
        topButtonArray[i].anchor = {x: 0.5, y:0.5}; topButtonArray[i].scale = {x:1.3,y:1.3};
        topButtonArray[i].normal = topButtonArray[i].texture;
        topButtonArray[i].hover = resources["catsAndUrgentNeeds"].textures["categoriesCampButtonHover.png"];
        topButtonArray[i].pressed = resources["catsAndUrgentNeeds"].textures["categoriesCampButtonPressed.png"];
        topButtonArray[i].interactive = true;   topButtonArray[i].isDown = false;
        topButtonArray[i].on("mouseover", hoverOver) .on("mouseout", hoverOut) .on("click", buttonClick);
        needsContainer.addChild(topButtonArray[i]);
    }

////////////////////////    ////////////////////////  urgent texts & bars ////////////////////////   /////////////////

    textOptions.fill= '#00d2ff'; textOptions.fontSize = 22;
    let caloriesText = new PIXI.Text('CALORIES / Kcal. /', textOptions);
    caloriesText.position = {x:460,y:880};
    let proteinsText = new PIXI.Text('PROTEINS / g. /', textOptions);
    proteinsText.position = {x:1270, y:880};
    let carbsText = new PIXI.Text('CARBS / g. /', textOptions);
    carbsText.position = {x:2040,y:880};
    let vitaminText = new PIXI.Text('VITAMINS', textOptions);
    vitaminText.position = {x:460, y:980};
    let mentalBoostText =  new PIXI.Text('MENTAL BOOST', textOptions);
    mentalBoostText.position = {x:1270,y:990};
    let varietyText = new PIXI.Text('VARIETY', textOptions);
    varietyText.position = {x:2040,y:1000};

    let barPanelTextures = resources["catsAndUrgentNeeds"].textures["urgentBarPanel.png"],
        blueBarTexture = resources["catsAndUrgentNeeds"].textures["urgentBarFull.png"],
        greenBarTexture = resources["catsAndUrgentNeeds"].textures["urgentBarGreen.png"],
        caloriesBarPanel = new PIXI.Sprite(barPanelTextures), proteinBarPanel = new PIXI.Sprite(barPanelTextures),
        carbsBarPanel = new PIXI.Sprite(barPanelTextures), vitaminBarPanel = new PIXI.Sprite(barPanelTextures),
        MentalBoostBarPanel = new PIXI.Sprite(barPanelTextures), varietyBarPanel = new PIXI.Sprite(barPanelTextures),

        caloriesBlueBar = new PIXI.Sprite(blueBarTexture), proteinBlueBar = new PIXI.Sprite(blueBarTexture),
        carbsBlueBar = new PIXI.Sprite(blueBarTexture), vitaminBlueBar = new PIXI.Sprite(blueBarTexture),
        MentalBoostBlueBar = new PIXI.Sprite(blueBarTexture), varietyBlueBarl = new PIXI.Sprite(blueBarTexture),

        caloriesGreenBar = new PIXI.Sprite(greenBarTexture), proteinGreenBar = new PIXI.Sprite(greenBarTexture),
        carbsGreenBar = new PIXI.Sprite(greenBarTexture), vitaminGreenBar = new PIXI.Sprite(greenBarTexture),
        MentalBoostGreenBar = new PIXI.Sprite(greenBarTexture), varietyGreenBarl = new PIXI.Sprite(greenBarTexture),



        urgentBarPanelsArray = [caloriesBarPanel, proteinBarPanel, carbsBarPanel, vitaminBarPanel, MentalBoostBarPanel, varietyBarPanel],
        urgentBarsTextArray = [caloriesText, proteinsText, carbsText, vitaminText, mentalBoostText, varietyText],
        blueBarArray = [caloriesBlueBar, proteinBlueBar, carbsBlueBar, vitaminBlueBar, MentalBoostBlueBar, varietyBlueBarl],
        greenBarArray = [caloriesGreenBar, proteinGreenBar, carbsGreenBar, vitaminGreenBar, MentalBoostGreenBar, varietyGreenBarl];

    for (let i in urgentBarsTextArray) {
        urgentBarsTextArray[i].anchor = {x:0.5, y:0.5};
        urgentBarPanelsArray[i].anchor = {x:0.5,y:0.5};
        blueBarArray[i].anchor.y = 0.5;                     // blue bars have empty texture space to the left
        greenBarArray[i].anchor = {x:0.1, y: 0.5};          // beware the dodgy x anchor on the green bars, same as blue empty tex
        urgentBarsTextArray[i].scale = {x:1.6,y:1.6};
        urgentBarPanelsArray[i].position = {x: urgentBarsTextArray[i].position.x + 410, y: urgentBarsTextArray[i].position.y};
        blueBarArray[i].position = {x: urgentBarsTextArray[i].position.x + 59, y: urgentBarsTextArray[i].position.y};
        greenBarArray[i].position = {x: urgentBarsTextArray[i].position.x, y: urgentBarsTextArray[i].position.y};
        needsContainer.addChild( urgentBarsTextArray[i], urgentBarPanelsArray[i], blueBarArray[i], greenBarArray[i]);
    }

    textOptions.fill = '#b2f1ff';
    let itemColumnHeaderText = new PIXI.Text("ITEM", textOptions), amountColumnHeaderText = new PIXI.Text("AMOUNT", textOptions),
        priceColumnHeaderText = new PIXI.Text("PRICE", textOptions);
    itemColumnHeaderText.scale = {x: 1.6, y:1.6};

    itemColumnHeaderText.position = {x:920,y:1065};

    needsContainer.addChild(leftArrow, rightArrow, selectedCampText, upgradePointsAmountText, pointsText, currentlevelText,
        itemColumnHeaderText, amountColumnHeaderText, priceColumnHeaderText
    );


    function hoverOver() {
        if (this.isDown) {
            return;
        }
        this.texture = this.hover;
    }

    function hoverOut() {
        if (this.isDown) {
            return;
        }
        this.texture = this.normal;
    }
    function arrowDown() {
        this.isDown = true;
        this.texture = this.pressed;
    }
    function arrowUp() {
        this.isDown =false;
        this.texture = this.hover;
    }

    function buttonClick() {
        console.log("click");
        if (this.isDown) {
            console.log("was down");
            // set to default set is down to false
            this.texture = this.hover;
            this.isDown = false;
            this.children[0].scale = {x:1, y:1};
            return;
        }
        console.log("was not down");
        // unclick all buttons
        for(let i in topButtonArray) {
            topButtonArray[i].isDown = false;
            topButtonArray[i].texture = topButtonArray[i].normal;
            topButtonArray[i].children[0].scale = {x:1, y:1};
        }
        console.log(this.children[0]);
        this.children[0].scale = {x:1.1, y:1.1};
        // this.children[0].filters = [new GlowFilter(15, 2,1, 0xFF0000, 0.5)];
        this.texture = this.pressed;
        this.isDown = true;
        // switch texture to clicked
    }


}