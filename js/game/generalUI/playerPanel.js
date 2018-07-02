function playerPanel(){

    let userPanel = new PIXI.Sprite(
        PIXI.loader.resources["userPanel"].textures["user_info_panel.png"]
        ),
        levelBar = new PIXI.Sprite(
            PIXI.loader.resources["userPanel"].textures["level_bar_empty.png"]
        );
    levelBarFill = new PIXI.Graphics();

    let textLayer = new PIXI.Container();
    drawLevelBar();

    textLayer.addChild(levelBarFill);
    textLayer.addChild(userNameTxt, userCitizenTxt, userCasteTxt, progressLvlTxt, progressExpTxt, nextLvlExpTxt, softCurTxt, hardCurTxt);


    //// level bar fill //// //// ////////
    drawLevelBar = function () {
        levelBarFill.clear();
        let fg_color = 0xF2BC29;
        let length = 150;
        let height = 21;
        let skew = 11;
        let x = 0;
        let y = 0;


        let pt_total = parseInt(dataFromBack.profile.progress.nextlevel, 10);
        let pt_mine = parseInt(dataFromBack.profile.progress.exp, 10);
        let percent = pt_mine / pt_total;

        levelBarFill.beginFill(fg_color); // Yellow

        levelBarFill.drawPolygon([x + skew, y,
            length * percent + skew, y,
            length * percent, y + height,
            x, y + height

        ]);
        levelBarFill.endFill();
    };

    userPanel.scale = {x:0.4, y:0.4};
    levelBar.scale = { x: 0.4, y: 0.4};

    userPanel.position.x = -1;              // username panel
    levelBar.position.x = 272;
    levelBar.position.y = 40;

    levelBarFill.position.x = 272;                  // level bar needs to be interactive
    levelBarFill.position.y = 40;

    GUIArea.addChild(userPanel, levelBar, textLayer);
}
