function loadPrepaidPacks(backGroundSprite, sceneLoader, dataFromBack){
    let prepaidPacks = new PIXI.Container();

    let leftClick = new PIXI.Sprite (
        sceneLoader.resources["prePaidPacks"].textures['leftClickNoGlo.png']
    ), line_yellow = new PIXI.Sprite (
        sceneLoader.resources["prePaidPacks"].textures['line+mask.png']
    ), text_prepaid = new PIXI.Sprite (
        sceneLoader.resources["prePaidPacks"].textures['right click + edit contents-1.png']
    ), panel_yellow = new PIXI.Sprite (
        sceneLoader.resources["prePaidPacks"].textures['right click + edit contents_c.png']
    ), rightClick = new PIXI.Sprite (
        sceneLoader.resources["prePaidPacks"].textures['rightClickNoGlo.png']
    );

    line_yellow.position = {x:1500, y:240}
    line_yellow.scale = {x:2, y:2};

    text_prepaid.position = {x:1750, y:235}
    text_prepaid.scale = {x:2, y:2};

    panel_yellow.scale = {x: 2, y: 2};
    panel_yellow.x = 1610;
    panel_yellow.y = 275;

    rightClick.scale = {x: 2, y: 2};
    rightClick.position = {x:2200, y:325}
    // rightClick.anchor = {x: 0.5, y: 0.5};
    rightClick.hover = sceneLoader.resources["prePaidPacks"].textures['rightClickGlo.png'];
    rightClick.normal = sceneLoader.resources["prePaidPacks"].textures['rightClickNoGlo.png'];
    rightClick.interactive = true;
    rightClick.on('mouseover', ButtonOver)
    rightClick.on('mouseout', ButtonOut)
    rightClick.on('click', onClickRight)

    leftClick.scale = {x: 2, y: 2};
    leftClick.position = {x:1550, y:325}
    //leftClick.anchor = {x: 0.5, y: 0.5};
    leftClick.hover = sceneLoader.resources["prePaidPacks"].textures['leftClickGlo.png'];
    leftClick.normal = sceneLoader.resources["prePaidPacks"].textures['leftClickNoGlo.png'];
    leftClick.interactive = true;
    leftClick.on('mouseover', ButtonOver)
    leftClick.on('mouseout', ButtonOut)
    leftClick.on('click', onClickLeft)

    let packages = [], statuses = [];
    for(let i in dataFromBack.prepaidpacks){
        packages[i] = "pack" + i;
        statuses[i] = "status" + i;
        // packages[i].label = dataFromBack.prepaidpacks;
        // statuses[i].status = dataFromBack.status;
    }

    textOptions.fill = '#f1cc12';
    textOptions.fontSize = 30;
    for(let index in dataFromBack.prepaidpacks){
        let help = dataFromBack.prepaidpacks[index].label.toUpperCase();
        let help02 = dataFromBack.prepaidpacks[index].status;
        packages[index] = new PIXI.Text(help, textOptions);
        statuses[index] = new PIXI.Text(help02, textOptions);
    }
    for(let i in packages){
        packages[i].num = i;
        packages[i].x = 1740;
        packages[i].y = 320;
        packages[i].alpha = 0;
    }
    for(let i in statuses){
        statuses[i].num = i;
        statuses[i].x = 1845;
        statuses[i].y = 360;
        statuses[i].alpha = 0;
    }
    packages[0].alpha = 1;
    statuses[0].alpha = 1;


    // // // // //  //  //  //  // //  //  
    function ButtonOver() {
        this.texture = this.hover;
        this.y -= 17;
        this.x += 6;
    }
    function ButtonOut() {
        this.y += 17;
        this.x -= 6;
        this.texture = this.normal;
    }
    function onClickLeft(){
        let svici;
        for(let i in packages){
            if(packages[i].alpha === 1){
                packages[i].alpha = 0;
                statuses[i].alpha = 0;
                svici = i;
                svici--;
            }
        }
        if(svici == -1){
            svici = packages.length-1;
        }
        statuses[svici].alpha = 1;
        packages[svici].alpha = 1;
    }
    function onClickRight(){
        let svici;
        for(let i in packages){
            if(packages[i].alpha === 1){
                packages[i].alpha = 0;
                statuses[i].alpha = 0;
                svici = i;
                svici++;
            }
        }
        if(svici == packages.length){
            svici = 0;
        }
        statuses[svici].alpha = 1;
        packages[svici].alpha = 1;
    }
    //  //  //  //  //  //  // /// //

    for(var i in packages){
        prepaidPacks.addChild(packages[i], statuses[i])
    }
    prepaidPacks.addChild(leftClick, line_yellow, text_prepaid, panel_yellow, rightClick);
    backGroundSprite.addChild(prepaidPacks);
}