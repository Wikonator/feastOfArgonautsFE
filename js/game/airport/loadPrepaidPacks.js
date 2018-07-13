function loadPrepaidPacks(backGroundSprite, sceneLoader, dataFromBack){
    let prepaidPacks = new PIXI.Container();

    let leftClick = new PIXI.Sprite (
        sceneLoader.resources["prepaidPax"].textures['arrow_left.png']
    ), line_yellow = new PIXI.Sprite (
        sceneLoader.resources["prePaidPacks"].textures['line+mask.png']
    ), text_prepaid = new PIXI.Sprite (
        sceneLoader.resources["prePaidPacks"].textures['right click + edit contents-1.png']
    ), panel_yellow = new PIXI.Sprite (
        sceneLoader.resources["prePaidPacks"].textures['right click + edit contents_c.png']
    ), rightClick = new PIXI.Sprite (
        sceneLoader.resources["prepaidPax"].textures['arrow_right.png']
    ), toolTip = new PIXI.Sprite (
        sceneLoader.resources["prepaidPax"].textures['toolTip.png']
    );

    toolTip.visibility = false;

    line_yellow.position = {x:1500, y:240}
    line_yellow.scale = {x:2, y:2};

    text_prepaid.position = {x:1750, y:235}
    text_prepaid.scale = {x:2, y:2};

    panel_yellow.scale = {x: 2, y: 2};
    panel_yellow.x = 1610;
    panel_yellow.y = 275;

    rightClick.scale = {x: 2, y: 2};
    rightClick.position = {x:2235, y:357}
    rightClick.anchor = {x: 0.5, y: 0.5};
    rightClick.hover = sceneLoader.resources["prepaidPax"].textures['arrow_right_a.png'];
    rightClick.normal = sceneLoader.resources["prepaidPax"].textures['arrow_right.png'];
    rightClick.interactive = true;
    rightClick.on('mouseover', rightArrowOver)
    rightClick.on('mouseout', rightArrowOut)
    rightClick.on('click', onClickRight)

    leftClick.scale = {x: 2, y: 2};
    leftClick.position = {x:1575, y:355}  //  leftClick.position =  hoveer {x:1575, y:350}
    leftClick.anchor = {x: 0.5, y: 0.5};
    leftClick.hover = sceneLoader.resources["prepaidPax"].textures['arrow_left_a.png'];
    leftClick.normal = sceneLoader.resources["prepaidPax"].textures['arrow_left.png'];
    leftClick.interactive = true;
    leftClick.on('mouseover', leftArrowOver)
    leftClick.on('mouseout', leftArrowOut)
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


    /// /// /// /// TOOLTIP /// // ///////////////      /////////////////       /////////
        // let graphics = new PIXI.Graphics();
        // graphics.lineStyle(2, 0x0000FF, 1);
        // graphics.beginFill(0xFF700B, 1);
        // graphics.drawRect(1630, 290, 540, 120); //x+20 y+50
        // backGroundSprite.addChild(graphics);

    panel_yellow.interactive = true;
    panel_yellow.hitArea = new PIXI.Rectangle(20, -50, 540, 120);
    panel_yellow.on('mouseover', function(event) { toolTipOn(event) } )
    panel_yellow.on('mouseout', toolTipOff);
    panel_yellow.on('mousemove', function(){toolTip.visibility = false;})
    



    // // // // //  //  //  //  // //  //  
    function toolTipOn(event){
        console.log("in");
        setTimeout( function () {
            let mouse = event.data.getLocalPosition(backGroundSprite);
            toolTip.x = mouse.x;
            toolTip.y = mouse.y;
            toolTip.visibility = true;
            
        }, 1500)

    }
    
    function toolTipOff(){
        console.log("out");
        toolTip.visibility = false;
        console.log(toolTip.visibility)
    }
    function leftArrowOver() {
        this.texture = this.hover;
        this.position.x -= 5;
        this.position.y -= 13;
        
    }
    function rightArrowOver () {
        this.texture = this.hover;
        this.position.x += 2;
        this.position.y -= 15;
    }
    function rightArrowOut () {
        this.texture = this.normal;
        this.position.x -= 2;
        this.position.y += 15;
    }
    function leftArrowOut() {
        this.texture = this.normal;
        this.position.x += 5;
        this.position.y += 13;
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
    prepaidPacks.addChild(leftClick, line_yellow, text_prepaid, panel_yellow, rightClick, toolTip);
    backGroundSprite.addChild(prepaidPacks);
}