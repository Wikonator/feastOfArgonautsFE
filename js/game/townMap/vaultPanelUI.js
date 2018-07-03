function vaultPanelUI() {


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
    }