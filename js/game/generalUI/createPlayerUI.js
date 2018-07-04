function createPlayerUI() {


textOptions.fill = "black";
textOptions.fontFamily = "conthrax";
textOptions.fontSize = 18;


    let messagePanel = new PIXI.Sprite(
        PIXI.loader.resources["messagePanel"].textures['messages_panel.png']
    ),
    messagePanelButton = new PIXI.Sprite(
        PIXI.loader.resources["messagePanel"].textures['messages_buttn_usual.png']
    ),
    scarab = new PIXI.Sprite(
        PIXI.loader.resources["scarab"].textures['Scarab_logo.png']
    );    

    vaultPanel = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultPanel"].textures['buttn_panel.png']
    ),
    vaultPanelIcon = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultPanel"].textures['vault_icon.png']
    ),
    vaultPanelButton = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultPanel"].textures['buttn_usual.png']
    );
    textOptions.fill = "white";
    textOptions.fontSize = 22;
    let vaultButtonText = new PIXI.Text("VAULT", textOptions),
    messageButtonText = new PIXI.Text("MESSAGES", textOptions),

    campsPanel = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultPanel"].textures['buttn_panel.png']
    ),
    campsPanelButton = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultPanel"].textures['buttn_usual.png']
    ),
    campsPanelIcon = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultPanel"].textures['camp_icon.png']
    );
    let campsButtonText = new PIXI.Text("CAMPS", textOptions);




///////////////////////////// Arrays of Elements ////////////////////////////////////

let scaleArray = [
     scarab,
    vaultPanel, campsPanel, campsPanelButton, campsPanelIcon, messagePanel
];

let UITextArray = [
    vaultButtonText, campsButtonText, messageButtonText,
    scarab, 
    vaultPanel, campsPanel, campsPanelButton, campsPanelIcon
];
for (let i in scaleArray) {

    scaleArray[i].scale.x = 0.4;
    scaleArray[i].scale.y = 0.4;
}

for (let i = 1; i <= UITextArray.lenght; ++i) {
    UITextArray[i].anchor.x = 0.5;
    UITextArray[i].anchor.y = 0.5;
}

let buttonArray = [vaultPanelButton, campsPanelButton];




for (let i in buttonArray) {
    buttonArray[i].interactive = true;
    buttonArray[i].on('click', onClick);
    buttonArray[i].on('mouseover', onButtonOver);
    buttonArray[i].on('mouseout', onButtonOut);
}



scarab.position.x = 686;

GUIArea.addChild(scarab);


vaultPanel.addChild(vaultPanelButton, vaultButtonText, vaultPanelIcon);
campsPanelButton.addChild(campsButtonText);


app.stage.addChild(GUIArea);


////////// ////////// ///// ////////// ////////// ///// ////////// ////////// ///// ////////// //////////

////////// ////////// ///// ////////// ////////// ///// ////////// ////////// ///// ////////// //////////




buyPanelUI();
tradePanelUI();
miningAreaUI();
playerPanel();
vaultPanelUI(vaultPanel, vaultButtonText, vaultPanelButton, vaultPanelIcon, campsPanelButton, messagePanelButton);
negativePanelUI(vaultPanel, campsPanel, campsPanelButton, campsPanelIcon, messagePanel, campsContainer, vaultContainer, messageContainer);
camp(campsPanel, campsPanelButton, campsButtonText, campsPanelIcon, messagePanelButton, vaultPanelButton);
messages(vaultPanelButton, GUIArea, vaultContainer, messagePanel, messagePanelButton, messageButtonText, campsPanelButton);

GUIArea.addChild(vaultPanel, campsPanel, campsPanelIcon, campsPanelButton, messagePanel);
setupIsDone = true;
}
