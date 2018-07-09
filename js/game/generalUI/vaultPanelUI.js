function vaultPanelUI(vaultPanel, vaultButtonText, vaultPanelButton, vaultPanelIcon, campsPanelButton, messagePanelButton){

    let vaultTabDiamonds = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']            // refactor into a loop... <<<<<<
        ),
        vaultTabSteles = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
        ),
        vaultTabScrews = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
        ),
        vaultTabNula = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
        ),
        vaultTabArtefacts = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
        ),
        vaultTabBtnDiamonds = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png']
        ),
        vaultTabBtnStelae = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png']
        ),
        vaultTabBtnNula = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png']
        ),
        vaultTabBtnArtefacts = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png']
        ),
        vaultTabBtnScrews = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png']
        );
        let vaultTabTable = new PIXI.Sprite(
            PIXI.loader.resources["campsVaultTable"].textures['items_panel.png']
        );

        
        function openVaultTab() {
            display.removeEventListener("wheel", scrollSelectedTab, false);
            scrollContainerSelector = vaultScrollContainer;
            
            if (!vaultPanelButton.isClicked) {
                vaultPanelButton.isClicked = true;
                //GUIArea.removeChild(vaultPanel, vaultButtonText);
                GUIArea.addChild(vaultContainer);
                
                GUIArea.addChild(vaultPanel );
                display.addEventListener("wheel", scrollSelectedTab, false);
                
                if (campsPanelButton.isClicked || messagePanelButton.isClicked) {
                    messagePanelButton.isClicked = false;
                    campsPanelButton.isClicked = false;
                    messagePanelButton.isdown = false;
                    messagePanelButton.texture = messagePanelButton.normal;
                    campsPanelButton.isdown = false;
                    campsPanelButton.texture = campsPanelButton.normal;
                    GUIArea.removeChild(campsContainer);
                    GUIArea.removeChild(messageContainer);
                }

            }    
             else {
                vaultPanelButton.texture = vaultPanelButton.hover;
                vaultPanelButton.isClicked = false;
                GUIArea.removeChild(vaultContainer);
            }
        }
        


        vaultPanel.addChild(vaultPanelButton, vaultButtonText, vaultPanelIcon);
        vaultTabSteles.position.x = 370;                              // Container children
vaultTabScrews.position.x = 760;
vaultTabArtefacts.position.x = 1150;
vaultTabNula.position.x = 1540;
vaultTabTable.position.y = 55;
vaultTabTable.scale.x = 0.9;
vaultTabTable.scale.y = 1;

vaultPanelButton.hover = PIXI.loader.resources["campsVaultPanel"].textures['buttn_hovered.png'];
vaultPanelButton.pressed = PIXI.loader.resources["campsVaultPanel"].textures['buttn_pressed.png'];
vaultPanelButton.normal = PIXI.loader.resources["campsVaultPanel"].textures['buttn_usual.png'];


vaultTabBtnDiamonds.position.x = 120;                             // Vault tab Buttons
vaultTabBtnDiamonds.btn = {name: 1, isDown: false};
vaultTabBtnStelae.position.x = 490;
vaultTabBtnStelae.btn = {name: 4, isDown: false};
vaultTabBtnScrews.position.x = 876;
vaultTabBtnScrews.btn = {name: 3, isDown: false};
vaultTabBtnArtefacts.position.x = 1268;
vaultTabBtnArtefacts.btn = {name: 2, isDown: false};
vaultTabBtnNula.position.x = 1658;
vaultTabBtnNula.btn = {name: 5, isDown: false};

vaultPanel.position.x = 22;
vaultPanel.position.y = 88;
vaultPanelButton.position = {x: 210, y: 17};
vaultPanelButton.on("click", openVaultTab);
vaultPanelButton.isClicked = false;
vaultButtonText.position = {x: 385, y: 35};
vaultButtonText.scale = {x: 1.5, y: 1.5};
vaultPanelIcon.position = {x: 65, y: 7};
vaultPanelIcon.scale = {x: 1.2, y: 1.2};
//////////// //////////// //////////// //////////// //////////// //////////// ////////////  ////////////


textOptions.fontSize = 20;                                           // Vault tab button Texts
textOptions.fill = "white";
let
    vaultTabDiamondsTxt = new PIXI.Text("DIAMONDS", textOptions),
    vaultTabStelaesTxt = new PIXI.Text('STELES', textOptions),
    vaultTabScrewsTxt = new PIXI.Text('SCREWS', textOptions),
    vaultTabArtefactsTxt = new PIXI.Text('ARTEFACTS', textOptions),
    vaultTabNullTxt = new PIXI.Text('NULA', textOptions);


let vaultTabTextArrays = [
    vaultTabDiamondsTxt, vaultTabStelaesTxt, vaultTabScrewsTxt, vaultTabArtefactsTxt, vaultTabNullTxt
];

for (let i = 0; i < vaultTabTextArrays.length; ++i) {
    vaultTabTextArrays[i].scale.x = 1.5;
    vaultTabTextArrays[i].scale.y = 1.5;
    vaultTabTextArrays[i].anchor.x = 0.5;
    vaultTabTextArrays[i].anchor.y = 0.5;
    vaultTabTextArrays[i].position.y = 40;
}

vaultTabDiamondsTxt.position.x = 300;
vaultTabStelaesTxt.position.x = 675;
vaultTabScrewsTxt.position.x = 1060;
vaultTabArtefactsTxt.position.x = 1455;
vaultTabNullTxt.position.x = 1845;

// Vault tab grey Lines
let tabLineY = 170,
    tabLineX = 85,
    vaultTabLine = PIXI.loader.resources["campsVaultTable"].textures['panel_for_text_a.png'];

for (let i = 0; i < 6; ++i) {
    let greyTabLine = new PIXI.Sprite(vaultTabLine);
    greyTabLine.position.y = tabLineY;
    greyTabLine.position.x = tabLineX;
    greyTabLine.scale.x = 0.9;
    tabLineY += 120;
    vaultContainer.addChild(greyTabLine);
}

let vaultBtnClick = function () {
    // let findContainer =
    scrollContainerSelector = vaultScrollContainer;
    let button = this.btn;
    if (button.isDown == false) {           // ak nebol stlaceny predtym
        for (let butt in vaultTabButtonArray) {
            vaultTabButtonArray[butt].texture = vaultTabButtonArray[butt].normal;
            vaultTabButtonArray[butt].btn.isDown = false;
            vaultTabButtonArray[butt].isdown = false;
        }
        button.isDown = true;
        this.isdown = true;
        this.texture = this.pressed;
        this.alpha = 1;
        createVaultTable(dataFromBack.vault.items, button);

    } else {                        // ak bol stralceny predtym
        this.btn.isDown = false;
        this.isdown = false;
        this.texture = this.hover;
        createVaultTable(dataFromBack.vault.items, button);
    }


};

let vaultTabButtonArray = [
    vaultTabBtnDiamonds, vaultTabBtnStelae, vaultTabBtnScrews, vaultTabBtnArtefacts,
    vaultTabBtnNula
];

vaultContainer.addChild(vaultTabTable, vaultTabDiamonds, vaultTabSteles, vaultTabScrews,
    vaultTabArtefacts, vaultTabNula);

for (let button in vaultTabButtonArray) {
    vaultTabButtonArray[button].position.y = 12;
    vaultTabButtonArray[button].hover = PIXI.loader.resources["campsVaultTable"].textures['buttn_hovered.png'];
    vaultTabButtonArray[button].normal = PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png'];
    vaultTabButtonArray[button].pressed = PIXI.loader.resources["campsVaultTable"].textures['buttn_pressed.png'];
    vaultTabButtonArray[button].disabled = PIXI.loader.resources["campsVaultTable"].textures['buttn_disabled.png'];
    vaultTabButtonArray[button].interactive = true;
    vaultTabButtonArray[button].isdown = false;
    vaultTabButtonArray[button].on('mouseover', onButtonOver);
    vaultTabButtonArray[button].on('mouseout', onButtonOut);
    vaultTabButtonArray[button].on("click", vaultBtnClick);
    vaultContainer.addChild(vaultTabButtonArray[button]);
}

vaultContainer.addChild(vaultTabDiamondsTxt, vaultTabStelaesTxt, vaultTabScrewsTxt,
    vaultTabArtefactsTxt, vaultTabNullTxt);

    let vaultTabContents = [], iconArray = [];
// ////// ////// ////// layout group and scroll container ////// ////// ////// //////

let vaultScroller, VaultLayoutGroup, vaultMaskingRectangle;

createVaultTable = function (data, button) {
    let clickFlag = false;
    changeTheTab = true;
    if (button) {

        vaultScrollContainer.removeChild(vaultScroller, VaultLayoutGroup, vaultMaskingRectangle);
        vaultContainer.removeChild(vaultScrollContainer);
        if (button.isDown) {
            data = {0: data[button.name]};
            clickFlag = true;
        }
    }
    VaultLayoutGroup = new PIXI.Container;
    vaultScroller = new GOWN.ScrollContainer();
    vaultScroller.id = 10;
    vaultScroller._verticalScrollPolicy = GOWN.Scroller.INTERACTION_MOUSE;
    vaultScroller.interactive = false;
    vaultScroller.viewPort = VaultLayoutGroup;
    vaultScroller.x = 205;
    vaultScroller.y = 70;
    vaultScroller.height = (windowHeight / 2); //270
    vaultScroller.width =(windowWidth / 2) ; //900
    vaultMaskingRectangle = new PIXI.Graphics();
    vaultMaskingRectangle.drawRect(0, 0, 850, 400); // x,y,width and height << this clips everything outside of this rectangle and determines what is visible
    vaultScrollContainer.scale = {x:2, y:2};
    vaultScrollContainer.addChild(vaultScroller, VaultLayoutGroup, vaultMaskingRectangle);
    vaultScrollContainer.mask = vaultMaskingRectangle;
    vaultScrollContainer.position = {x: 100, y: 105};
    vaultContainer.addChild(vaultScrollContainer);

    for (let i = 0; i <= vaultTabContents.length; ++i) {
        VaultLayoutGroup.removeChild(vaultTabContents[i]);
    }
    vaultTabContents = [];
    for (let i in iconArray) {
        VaultLayoutGroup.removeChild(iconArray[i])
    }
    iconArray = [];
    let lastSpriteY = 8,
        lastSpriteX = 0;

    textOptions.fontSize = 18;
    textOptions.fill = "#E2E9E9";

    function createAScroller(data, buttonName) {        // creates the scroll container
        for (let key in data) {     // break
            for (let i in data[key]) {
                let iconToDisplay = new PIXI.Sprite(nameOfKey(key, buttonName));
                let textOfIcon = new PIXI.Text(returnNameOfvaultKey(key, buttonName), textOptions);
                textOptions.fill = ("#" + data[key][i][1].colour);
                let textOfType = new PIXI.Text(data[key][i][1].text, textOptions);

                textOptions.fill = "#E2E9E9";
                let textOfAmount = new PIXI.Text(data[key][i][3].text, textOptions);

                lastSpriteY += 30;
                // iconToDisplay.anchor = {x:0.5, y:0.5};
                iconToDisplay.position.y = lastSpriteY;
                iconToDisplay.position.x = lastSpriteX + 35;
                iconToDisplay.height = 50;
                iconToDisplay.width = 50;
                textOfIcon.position.y = lastSpriteY;
                textOfIcon.position.x = lastSpriteX + 95;
                textOfType.position.x = lastSpriteX + 350;
                textOfType.position.y = lastSpriteY;
                textOfAmount.position.x = lastSpriteX + 650;
                textOfAmount.position.y = lastSpriteY;

                vaultTabContents.push(textOfType, textOfAmount, textOfIcon);
                for (let i in vaultTabContents) {
                    VaultLayoutGroup.addChild(vaultTabContents[i]);
                }
                iconToDisplay.width = 25;
                iconToDisplay.height = 25;
                VaultLayoutGroup.addChild(iconToDisplay);
                iconArray.push(iconToDisplay);
                textOptions.fill = "white";
            }
        }

        //vaultTabContents.push(layoutGroup, scroller, vaultScrollContainer, maskingRectangle);
    }
    //////////////////// if three starts here ///////////////
    if (clickFlag == true) {       // when filter applied
        createAScroller(data, button.name);
        clickFlag = false;                  // filter not applied
    } else {
        createAScroller(data);
    }
};


function returnNameOfvaultKey(number, buttonName) {
    if (buttonName) {
        number = buttonName;
    }
    number = number + "";
    switch (number) {
        case '1':
            return "Diamond";
        case '2':
            return "Artefact";
        case '3':
            return "Screw";
        case '4':
            return "Stela";
        case '5':
            return "Nula";
        default:
            console.log(number);
            return "";

    }
}

vaultContainer.position = {x: 250, y: 92};            // Container Positions
vaultContainer.scale = {x: 0.5, y: 0.42};
}