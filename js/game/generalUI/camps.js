function camps(){
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

    
}