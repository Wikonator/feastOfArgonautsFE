function buyPanelUI(){
    textOptions.fill = "black";
    textOptions.fontFamily = "conthrax";
    textOptions.fontSize = 18;
    let buyPanel = new PIXI.Sprite( // [objectCOMiDosiel[description] + "_hover.png"]
    PIXI.loader.resources['buyPanel'].textures["buy_panel.png"]
    ),
    buyButton = new PIXI.Sprite(
        PIXI.loader.resources["buyPanel"].textures['buy_buttn_usual.png']
    ),
    buyButtonText = new PIXI.Text("BUY", textOptions);

    let scaleArray = [
        buyPanel, buyButton
    ];
    
    let UITextArray = [
        buyButtonText, buyPanel, buyButton
    ];
    for (let i in scaleArray) {
    
        scaleArray[i].scale.x = 0.4;
        scaleArray[i].scale.y = 0.4;
    }
    
    for (let i = 1; i <= UITextArray.lenght; ++i) {
        UITextArray[i].anchor.x = 0.5;
        UITextArray[i].anchor.y = 0.5;
    }


    buyButton.interactive = true;
    buyButton.on('click', onClick);
    buyButton.on('mouseover', onButtonOver);
    buyButton.on('mouseout', onButtonOut);



    buyButton.hover = PIXI.loader.resources["buyPanel"].textures['buy_buttn_hovered.png'];              // Button States
    buyButton.pressed = PIXI.loader.resources["buyPanel"].textures['buy_buttn_pressed.png'];
    buyButton.normal = PIXI.loader.resources["buyPanel"].textures['buy_buttn_usual.png'];

    buyPanel.position.x = 830;
    buyButton.position ={x:886,y:43};
    buyButtonText.position={x:920,y:46};
    buyButtonText.scale ={x:0.6,y:0.6};

    softCurTxt.position.x = 575;
    softCurTxt.position.y = 20;
    hardCurTxt.position.x = 880;
    hardCurTxt.position.y = 19;

    GUIArea.addChild(buyPanel, buyButton, buyButtonText,
        );
 
       
}