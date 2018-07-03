function camps(campsPanel, campsPanelButton, campsPanelIcon, campsButtonText, vaultPanelButton, messagePanelButton){
    let campsTabCamps = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
    ),
    campsTabCampSites = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
    ),
    campsTabInventory = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
    ),
    campsTabOperators = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
    ),
    campsTabExos = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
    ),
    campsTabRents = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['buttn_panel.png']
    ),
    campsTabBtnCamps = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png']
    ),
    campsTabBtnCampSites = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png']
    ),
    campsTabBtnInventory = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['buttn_disabled.png']
    ),
    campsTabBtnOperators = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['buttn_disabled.png']
    ),
    campsTabBtnExos = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['buttn_disabled.png']
    ),
    campsTabBtnRents = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['buttn_disabled.png']
    ),
    campsTabTable = new PIXI.Sprite(
        PIXI.loader.resources["campsVaultTable"].textures['items_panel.png']
    );


    function openCampsTab() {
        display.removeEventListener("wheel", scrollSelectedTab, false);
        scrollContainerSelector = campScrollContainer;
        if (!campsPanelButton.isClicked) {
            campsPanelButton.isClicked = true;
            GUIArea.addChild(campsContainer);
            display.addEventListener("wheel", scrollSelectedTab, false);
            this.bringToFront();

            if (vaultPanelButton.isClicked || messagePanelButton.isClicked) {
                vaultPanelButton.isClicked = false;
                messagePanelButton.isClicked = false;
                vaultPanelButton.isdown = false;
                messagePanelButton.isdown = false;
                vaultPanelButton.texture = vaultPanelButton.normal;
                messagePanelButton.texture = messagePanelButton.normal;
                GUIArea.removeChild(vaultContainer);
                GUIArea.removeChild(messageContainer);
            }
        } else {
            campsPanelButton.texture = campsPanelButton.hover;
            campsPanelButton.isClicked = false;
            GUIArea.removeChild(campsContainer);
        }

    }

    let campOrCampSiteBtnClick = function () {
        let button = this.btn;
        if (button.isDown === false) {
            campsTabBtnCamps.texture = campsTabBtnCamps.normal;
            campsTabBtnCampSites.texture = campsTabBtnCampSites.normal;
            campsTabBtnCamps.btn.isDown = false;
            campsTabBtnCamps.isdown = false;
            campsTabBtnCampSites.isdown = false;
            campsTabBtnCampSites.btn.isDown = false;

            button.isDown = true;
            this.isdown = true;
            this.texture = this.pressed;
            this.alpha = 1;
            let campsOrAreas = {vault: {camps: []}};
            if (this.btn.name == "camps") {
                campsOrAreas.vault.camps = dataFromBack.vault.camps.filter( camp => camp.uLevel > 0);
                createCampsTable(campsOrAreas.vault.camps);
            }
            else {
                campsOrAreas.vault.camps = dataFromBack.vault.camps.filter( camp => camp.uLevel <= 0);
                createCampsTable(campsOrAreas.vault.camps);
            }
        } else {
            button.isDown = false;
            this.isdown = false;
            this.texture = this.hover;
            createCampsTable(dataFromBack.vault.camps);
        }
    };

    let onFilterButtonOver = function () {
        if (this.isDisabled) {
            return
        }
        this.isOver = true;
        if (this.isdown) {
            return;
        }
        this.texture = this.hover;
    };

    let onFilterButtonOut = function () {
        if (this.isDisabled) {
            return
        }
        this.isOver = false;
        if (this.isdown) {
            return;
        }
        this.texture = this.normal
    };

    let campFilterBtnClick = function () {
        let button = this.btn;
        if (this.isDisabled) {
            return
        }
        if (button.isDown == false) {

            for (let butt in campsTabFiltersArray) {
                campsTabFiltersArray[butt].texture = campsTabFiltersArray[butt].normal;
                campsTabFiltersArray[butt].btn.isDown = false;
                campsTabFiltersArray[butt].isdown = false;
            }
            button.isDown = true;
            this.isdown = true;
            this.texture = this.pressed;
            this.alpha = 1;
            unfoldPosition.btn = button.name;
            unfoldPosition.isDown = button.isDown;
            unfoldPosition.isText = false;
            unFoldCamp(unfoldPosition);
        } else {
            button.isDown = false;
            this.isdown = false;
            this.texture = this.hover;
            unfoldPosition.isDown = button.isDown;
            unFoldCamp(unfoldPosition);
        }


    };

    let getCampItemIcon = function (itemGroup) {
        switch (itemGroup) {
            case "inventory":
                return PIXI.loader.resources["campsVaultTable"].textures['inventory_icon.png'];
            case "operators":
                return PIXI.loader.resources["campsVaultTable"].textures['operator_icon.png'];
            case "exos":
                return PIXI.loader.resources["campsVaultTable"].textures['exoskeleton_icon.png'];
            case "rents" :
                return PIXI.loader.resources["campsVaultTable"].textures['camp_site_icon.png'];
            default:
                console.log(itemGroup);
                return
        }
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    textOptions.fill = "white";
    campsTabTable.position.y = 55;                   // Camps Tab
    // campsTabTable.scale.x = 0.9;
    campsTabCampSites.position.x = 390;
    campsTabInventory.position.x = 760;
    campsTabOperators.position.x = 1130;
    campsTabExos.position.x = 1500;
    campsTabRents.position.x = 1870;

    campsTabBtnCamps.position.x = 120;           // Btns
    campsTabBtnCamps.btn = {name: "camps", isDown: false};
    campsTabBtnCampSites.position.x = 514;
    campsTabBtnCampSites.btn = {name: "campSite", isDown: false};
    campsTabBtnInventory.position.x = 880;
    campsTabBtnInventory.btn = {name: "inventory", isDown: false};
    campsTabBtnOperators.position.x = 1247;
    campsTabBtnOperators.btn = {name: "operators", isDown: false};
    campsTabBtnExos.position.x = 1620;
    campsTabBtnExos.btn = {name: "exos", isDown: false};
    campsTabBtnRents.position.x = 1990;
    campsTabBtnRents.btn = {name: "rents", isDown: false};


    let campOrSiteButtArray = [campsTabBtnCamps, campsTabBtnCampSites],
        campsTabFiltersArray = [campsTabBtnInventory, campsTabBtnOperators,
            campsTabBtnExos, campsTabBtnRents];


    let campTabLineY = 170,                                                     // Camps tab grey lines
        campTabLineX = 90;
    let campTabLineTexture = PIXI.loader.resources["campsVaultTable"].textures['panel_for_text_a.png'];
    for (let i = 0; i < 6; ++i) {
        let campTabLine = new PIXI.Sprite(campTabLineTexture);
        campTabLine.position.y = campTabLineY;
        campTabLine.position.x = campTabLineX;
        campTabLineY += 120;
        campsContainer.addChild(campTabLine);
    }


    campsContainer.addChild(campsTabTable, campsTabCamps, campsTabCampSites, campsTabInventory, campsTabOperators, campsTabExos,
        campsTabRents,
    );

    for (let button in campOrSiteButtArray) {
        campOrSiteButtArray[button].position.y = 12;
        campOrSiteButtArray[button].hover = PIXI.loader.resources["campsVaultTable"].textures['buttn_hovered.png'];
        campOrSiteButtArray[button].normal = PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png'];
        campOrSiteButtArray[button].pressed = PIXI.loader.resources["campsVaultTable"].textures['buttn_pressed.png'];
        campOrSiteButtArray[button].disabled = PIXI.loader.resources["campsVaultTable"].textures['buttn_disabled.png'];
        campOrSiteButtArray[button].interactive = true;
        campOrSiteButtArray[button].on('mouseover', onButtonOver);
        campOrSiteButtArray[button].on('mouseout', onButtonOut);
        campOrSiteButtArray[button].on("click", campOrCampSiteBtnClick);
        campsContainer.addChild(campOrSiteButtArray[button]);
    }
    for (let button in campsTabFiltersArray) {
        campsTabFiltersArray[button].position.y = 12;
        campsTabFiltersArray[button].hover = PIXI.loader.resources["campsVaultTable"].textures['buttn_hovered.png'];
        campsTabFiltersArray[button].normal = PIXI.loader.resources["campsVaultTable"].textures['buttn_usual.png'];
        campsTabFiltersArray[button].pressed = PIXI.loader.resources["campsVaultTable"].textures['buttn_pressed.png'];
        campsTabFiltersArray[button].disabled = PIXI.loader.resources["campsVaultTable"].textures['buttn_disabled.png'];
        campsTabFiltersArray[button].interactive = true;
        campsTabFiltersArray[button].isDisabled = true;
        campsTabFiltersArray[button].isText = false;
        campsTabFiltersArray[button].on('mouseover', onFilterButtonOver);
        campsTabFiltersArray[button].on('mouseout', onFilterButtonOut);
        campsTabFiltersArray[button].on("click", campFilterBtnClick);

        campsContainer.addChild(campsTabFiltersArray[button]);
    }

    let                                                   // Button Texts
    campTabCampsTxt = new PIXI.Text("CAMPS", textOptions),
    campTabCampAreaTxt = new PIXI.Text('CAMP SITES', textOptions),
    campTabInventoryTxt = new PIXI.Text('INVENTORY', textOptions),
    campTabOperatorsTxt = new PIXI.Text('OPERATORS', textOptions),
    campTabExosTxt = new PIXI.Text('EXOS', textOptions),
    campTabRentsTxt = new PIXI.Text('RENTS', textOptions);

    campTabCampsTxt.position.x = 310;
    campTabCampAreaTxt.position.x = 695;
    campTabInventoryTxt.position.x = 1070;
    campTabOperatorsTxt.position.x = 1435;
    campTabExosTxt.position.x = 1809;
    campTabRentsTxt.position.x = 2185;

    let campTabTxtArray = [campTabCampsTxt, campTabCampAreaTxt, campTabInventoryTxt, campTabOperatorsTxt,
        campTabOperatorsTxt, campTabExosTxt, campTabRentsTxt];

    for (let idx in campTabTxtArray) {
        campTabTxtArray[idx].position.y = 42;
        campTabTxtArray[idx].scale.x = 1.5;
        campTabTxtArray[idx].scale.y = 1.5;
        campTabTxtArray[idx].anchor.x = 0.5;
        campTabTxtArray[idx].anchor.y = 0.5;
        campsContainer.addChild(campTabTxtArray[idx]);
    }


    let clickedCampArray = [];
    let campScroller, campLayoutGroup, campMaskingRectangle;
    let unFoldCamp = function (position) {          // what happens after Camp site click
        // console.log("position: "); console.log(position);
        let cleanUpTheCampTab = function (buttonWasPressed) {           // cleanup function

            if (buttonWasPressed) {
                // console.log("button was pressed during cleanup");
                for (let i = 0; i < clickedCampArray.length; ++i) {
                    campLayoutGroup.removeChild(clickedCampArray[i]);
                }
                clickedCampArray = [];
            } else {
                createCampsTable(dataFromBack.vault.camps);
                // console.log("clicked camp flag is true");
                for (let i = 0; i < clickedCampArray.length; ++i) {
                    campLayoutGroup.removeChild(clickedCampArray[i]);
                }
                clickedCampArray = [];
            }
        };

        let nameOfThisObject = position;            // set the global object to the PIXI.object that was clicked
        function moveCampsBelowClick(lastArrayLength, thisArrayLength) {                // moves the camps and campsites up or down after clicks
            let thisObject = campsTabContents.indexOf(nameOfThisObject);    //expand
            lastArrayLength /= 4;
            thisArrayLength /= 4;
            if (thisArrayLength == undefined ) {
                let moveSpritesY = lastArrayLength * 60;
                for (let idx = thisObject + 5; idx < campsTabContents.length; ++idx) {
                    campsTabContents[idx].position.y += moveSpritesY;
                }
            } else {
                let moveSpritesY = (lastArrayLength - thisArrayLength)*60;
                if (lastArrayLength >= thisArrayLength) {
                    for (let idx = thisObject + 5; idx < campsTabContents.length; ++idx) {
                        campsTabContents[idx].position.y -= moveSpritesY;
                    }
                } else {
                    for (let idx = thisObject + 5; idx < campsTabContents.length; ++idx) {
                        campsTabContents[idx].position.y += moveSpritesY;
                    }
                }
            }

        }
        if (nameOfThisObject.isText != true && nameOfThisObject.isDown == true) {              // filter button press

            let ButtonWasPressed = true;
            // console.log(clickedCampArray); // previous clicked camp array
            let lastArrayLength = clickedCampArray.length;
            cleanUpTheCampTab(ButtonWasPressed);

            let clickedCampX = nameOfThisObject.position.x + 45, clickedCampY = nameOfThisObject.position.y + 30;
            let campItemIconName = getCampItemIcon(nameOfThisObject.btn);
            let campItemIconTxtName = capitalizeFirstLetter(nameOfThisObject.btn);
            for (let item in nameOfThisObject.all[nameOfThisObject.btn]) {
                clickedCampY += 65;                 // spacing of rows

                let campItemIcon = new PIXI.Sprite(campItemIconName),
                    campItemIconTxt = new PIXI.Text(campItemIconTxtName, textOptions),
                    campItemName = new PIXI.Text(nameOfThisObject.all[nameOfThisObject.btn][item].label, textOptions),
                    campItemDescription = new PIXI.Text(nameOfThisObject.all[nameOfThisObject.btn][item].description, textOptions);

                campItemIcon.position = {x: clickedCampX, y: clickedCampY};
                campItemIconTxt.position = {x:  clickedCampX + 70, y: clickedCampY};
                campItemName.position = {x: clickedCampX + 315, y: clickedCampY};
                campItemDescription.position = {x:  clickedCampX + 650, y: clickedCampY};
                campItemIcon.scale = {x:1.5, y:1.5};
                campItemIconTxt.scale = {x:1.5, y:1.5};
                campItemName.scale = {x:1.5, y:1.5};
                campItemDescription.scale = {x:1.5, y:1.5};

                clickedCampArray.push(campItemIcon, campItemIconTxt, campItemName, campItemDescription);
                campLayoutGroup.addChild(campItemIcon, campItemIconTxt, campItemName, campItemDescription);

            }
            nameOfThisObject = campsTabContents.find(function(e) {
                return e.id === nameOfThisObject.id;
            });

            moveCampsBelowClick(lastArrayLength, clickedCampArray.length);

        } else {
            if (nameOfThisObject.clickedCampFlag != true) {         // if this is the 1st time a campSite is clicked
                console.log("text position before cleanup: "+ nameOfThisObject.position.y);
                cleanUpTheCampTab();
                console.log("text position after cleanup but before find: "+ nameOfThisObject.position.y);

                console.log("text position after cleanup and find: "+ nameOfThisObject.position.y);
                console.log(campScroller.verticalScrollPosition);
                let kam = {};
                kam.deltaY = nameOfThisObject.position.y;
                // campScroller._startTouch.y = campScroller.verticalScrollPosition - kam.deltaY;

                nameOfThisObject = campsTabContents.find(function(e) {
                    return e.id === nameOfThisObject.id;
                });
                console.log(kam);
                console.log(campScroller._startTouch.y);
                console.log(campScroller._scrollPosition);
                console.log(campScroller._startScrollPosition);
                campScroller.updateVerticalScrollFromTouchPosition(kam.deltaY, true);

                console.log(campScroller.verticalScrollPosition);
                // scrollSelectedTab(kam);

                for (let i in campsTabFiltersArray) {               // make all the buttons enabled
                    campsTabFiltersArray[i].isDisabled = false;
                    campsTabFiltersArray[i].isDown = false;
                    campsTabFiltersArray[i].texture = campsTabFiltersArray[i].normal;
                }
                // console.log("this texts positionY: " + nameOfThisObject.position.y);

                let clickedCampX = nameOfThisObject.position.x + 45, clickedCampY = nameOfThisObject.position.y ;
                for (let all in nameOfThisObject.all) {        // array = inventory, operators, exos, rents

                    let itemGroup = all;
                    for (let item in nameOfThisObject.all[all]) {
                        clickedCampY += 60;
                        let campItemIcon = new PIXI.Sprite(getCampItemIcon(itemGroup)),
                            campItemIconTxt = new PIXI.Text(capitalizeFirstLetter(itemGroup), textOptions),
                            campItemName = new PIXI.Text(nameOfThisObject.all[all][item].label, textOptions),
                            campItemDescription = new PIXI.Text(nameOfThisObject.all[all][item].description, textOptions);

                        campItemIcon.position = {x: clickedCampX, y: clickedCampY};
                        campItemIcon.scale = {x:1.5, y: 1.5};
                        campItemIconTxt.position = {x: clickedCampX + 70, y: clickedCampY};
                        campItemIconTxt.scale = {x:1.5, y: 1.5};
                        campItemName.position = {x: clickedCampX + 325, y: clickedCampY};
                        campItemName.scale = {x:1.5, y: 1.5};
                        campItemDescription.position = {x: clickedCampX + 650, y: clickedCampY};
                        campItemDescription.scale = {x:1.5, y: 1.5};

                        clickedCampArray.push(campItemIcon, campItemIconTxt, campItemName, campItemDescription);
                        campLayoutGroup.addChild(campItemIcon, campItemIconTxt, campItemName, campItemDescription);
                    }
                }
                nameOfThisObject.clickedCampFlag = true;
                nameOfThisObject.isDown = false;

                moveCampsBelowClick(clickedCampArray.length);

            } else {
                console.log("close the camp and disable buttons: now comes the cleanup");
                cleanUpTheCampTab();            // close the camp panel
                for (let i in campsTabFiltersArray) {               // make all the buttons disabled
                    campsTabFiltersArray[i].isDisabled = true;
                    campsTabFiltersArray[i].isDown = false;
                    campsTabFiltersArray[i].texture = campsTabFiltersArray[i].disabled;
                }

            }
        }
    };

    /////////////////////////// camps table creation //////////////////////////////////////


    let vaultTabContents = [], iconArray = [], campsTabContents = [];

    campLayoutGroup = new PIXI.Container;
    campScroller = new GOWN.ScrollContainer();
    campScroller.id = 10;
    campScroller._verticalScrollPolicy = GOWN.Scroller.INTERACTION_MOUSE;
    campScroller.viewPort = campLayoutGroup;
    campScroller.x = 0;
    campScroller.y = 0;
    campScroller.height = (windowHeight / 2); //270
    campScroller.width =(windowWidth / 2) ; //900
    campMaskingRectangle = new PIXI.Graphics();
    campMaskingRectangle.beginFill(0xFFFFFF);
    campMaskingRectangle.drawRect(0, 0, 2050, 715); // x,y,width and height << this clips everything outside of this rectangle and determines what is visible
    campMaskingRectangle.hitArea = new PIXI.Rectangle( 0, 0, 2050, 715);
    campMaskingRectangle.endFill();
    campScrollContainer.addChild(campScroller, campLayoutGroup, campMaskingRectangle);
    campScrollContainer.mask = campMaskingRectangle;
    campScrollContainer.position = {x: 65, y: 85};
    campsContainer.addChild(campScrollContainer);

    createCampsTable = function (data) {            // make the Camps Tab
        textOptions.fontSize = 18;
        // this is where the make camp starts

        if (changeTheTab == true) {
            console.log("changed the tab was true");
            for (let i = 0; i <= campsTabContents.length; ++i) {
                campLayoutGroup.removeChild(campsTabContents[i]);
            }
            campsTabContents = [];
            for (let pop in clickedCampArray) {
                campLayoutGroup.removeChild(clickedCampArray[pop]);
            }
        }

        let lastSpriteY = 20,
            lastSpriteX = 80;
        textOptions.fontSize = 18;
        textOptions.fill = "white";

        for (let key in data) {     // break
            textOptions.fill = "#33ffbd";
            let iconToDisplay = new PIXI.Sprite(iconOfCamp(data[key])),
                nameToDisplay = new PIXI.Text(campOrArea(data[key]), textOptions);
            nameToDisplay.interactive = true;
            nameToDisplay.clickedCampFlag = false;
            nameToDisplay.isDown = false;
            nameToDisplay.all = data[key].all;
            textOptions.fill = "white";
            let upgradeLevel = new PIXI.Text("Upgrade level | " + data[key].uLevel, textOptions),
                maintenanceLevel = new PIXI.Text("Maintenance level | " + data[key].mLevel, textOptions),
                areaAndSubarea = new PIXI.Text((((data[key].areaLabel).toUpperCase()) + data[key].subAreaLabel), textOptions);
            textOptions.fill = "#33ffbd";
            let campQuadrant = new PIXI.Text("Quadrant " + data[key].quadrantLabel, textOptions);

            lastSpriteY += 60;
            nameToDisplay.position.y = lastSpriteY;
            nameToDisplay.position.x = lastSpriteX + 85;
            nameToDisplay.id = key;
            nameToDisplay.on("click", callUnFoldCamp);
            nameToDisplay.isText = true;
            iconToDisplay.position.y = lastSpriteY;
            iconToDisplay.position.x = lastSpriteX;
            upgradeLevel.position.x = lastSpriteX + 600;
            upgradeLevel.position.y = lastSpriteY;
            maintenanceLevel.position.x = lastSpriteX + 950;
            maintenanceLevel.position.y = lastSpriteY;
            areaAndSubarea.position.x = lastSpriteX + 1400;
            areaAndSubarea.position.y = lastSpriteY;
            campQuadrant.position.x = lastSpriteX + 1650;
            campQuadrant.position.y = lastSpriteY;


            campLayoutGroup.addChild(iconToDisplay, nameToDisplay, upgradeLevel, maintenanceLevel, campQuadrant, areaAndSubarea);
            campsTabContents.push(iconToDisplay, nameToDisplay, upgradeLevel, maintenanceLevel, campQuadrant, areaAndSubarea);
            for (let i in campsTabContents) {campsTabContents[i].scale = {x:1.5, y:1.5}};
            textOptions.fill = "white";
        }
        changeTheTab = true;
    };


    function iconOfCamp(key) {
        // console.log("icon of camp");
        if (key.uLevel == 0) {
            return PIXI.loader.resources["campsVaultTable"].textures['camp_site_icon.png'];
        }
        else {
            return PIXI.loader.resources["campsVaultTable"].textures['camp_icon.png'];
        }
    }

    function campOrArea(key) {

        if (key.uLevel == 0) {
            return "Camp Site <<" + key.label + ">>"
        }
        else {
            return "Camp <<" + key.label + ">>"
        }
    }
    
    let callUnFoldCamp = function () {

        unfoldPosition = this;
        unfoldPosition.isText = true;
        unFoldCamp(unfoldPosition);
    };

    campsPanel.position.x = 22;
    campsPanel.position.y = 127;
    campsPanelButton.position.x = 106;
    campsPanelButton.position.y = 135;
    campsPanelButton.on("click", openCampsTab);
    campsPanelButton.isClicked = false;
    campsButtonText.position.x = (campsPanelButton.width - 25);
    campsButtonText.position.y = (campsPanelButton.height - 15);
    campsButtonText.scale = {x: 1.5, y: 1.5};
    campsPanelIcon.position.x = 50;
    campsPanelIcon.position.y = 134;


    campsContainer.position = {x: 250, y: 132};
    campsContainer.scale = {x: 0.5, y: 0.42};

    campsTabTable.position.y = 55;                   // Camps Tab
    // campsTabTable.scale.x = 0.9;
    campsTabCampSites.position.x = 390;
    campsTabInventory.position.x = 760;
    campsTabOperators.position.x = 1130;
    campsTabExos.position.x = 1500;
    campsTabRents.position.x = 1870;

    campsTabBtnCamps.position.x = 120;           // Btns
    campsTabBtnCamps.btn = {name: "camps", isDown: false};
    campsTabBtnCampSites.position.x = 514;
    campsTabBtnCampSites.btn = {name: "campSite", isDown: false};
    campsTabBtnInventory.position.x = 880;
    campsTabBtnInventory.btn = {name: "inventory", isDown: false};
    campsTabBtnOperators.position.x = 1247;
    campsTabBtnOperators.btn = {name: "operators", isDown: false};
    campsTabBtnExos.position.x = 1620;
    campsTabBtnExos.btn = {name: "exos", isDown: false};
    campsTabBtnRents.position.x = 1990;
    campsTabBtnRents.btn = {name: "rents", isDown: false};

    function onClick() {
        if (this.isdown) {
            this.isdown = false;
            this.texture = this.hover;
        } else {

            this.isdown = true;
            this.texture = this.pressed;
            this.alpha = 1;
        }
    }
    function onButtonOver() {
        if (this.isdown) {
            return;
        }
        this.texture = this.hover;
    }

    function onButtonOut() {
        if (this.isdown) {
            return;
        }
        this.texture = this.normal;
    }

}