function tradePanelUI(){
    textOptions.fill = "black";
    textOptions.fontFamily = "conthrax";
    textOptions.fontSize = 18;
    let tradePanel = new PIXI.Sprite(
        PIXI.loader.resources["tradePanel"].textures['trade_panel.png']
    ),
    tradeButton = new PIXI.Sprite(
        PIXI.loader.resources["tradePanel"].textures["trade_buttn_usual.png"]
    ),
    tradeButtonText = new PIXI.Text("CHANGE", textOptions);

    tradeButton.hover = PIXI.loader.resources["tradePanel"].textures['trade_buttn_hovered.png'];
    tradeButton.pressed = PIXI.loader.resources["tradePanel"].textures['trade_buttn_pressed.png'];
    tradeButton.normal = PIXI.loader.resources["tradePanel"].textures['trade_buttn_usual.png'];
 
    
    let scaleArray = [
        tradePanel, tradeButton
    ];
    
    let UITextArray = [
        tradeButtonText, tradePanel, tradeButton
    ];
    for (let i in scaleArray) {
    
        scaleArray[i].scale.x = 0.4;
        scaleArray[i].scale.y = 0.4;
    }
    
    for (let i = 1; i <= UITextArray.lenght; ++i) {
        UITextArray[i].anchor.x = 0.5;
        UITextArray[i].anchor.y = 0.5;
    }

    tradeButton.interactive = true;
    tradeButton.on('click', onClick);
    tradeButton.on('mouseover', onButtonOver);
    tradeButton.on('mouseout', onButtonOut);
    
    tradePanel.position={x:463,y:0};
    tradeButton.position ={x:563,y:44};
    tradeButtonText.position={x:579,y:46};
    tradeButtonText.scale ={x:0.6,y:0.6}


    GUIArea.addChild(tradePanel, tradeButton, tradeButtonText);
}