function airportScene(buildingArray, sceneID) {
    let backGroundSprite = app.stage.children[0].children[0];
    if(backGroundSprite.children[0])
    {  
        while (backGroundSprite.children[0]) {
            backGroundSprite.removeChild(backGroundSprite.children[0]);        
        }
    }

            // fog transition
            // add loading screen here
        let sceneLoader = new PIXI.loaders.Loader();

        sceneLoader
            .add("airport", 'images/' + resolutionParameter + '/airport/airportUI.png')
            .add("cargo", 'images/' + resolutionParameter + '/airport/airportPanels.json')
            .load((sceneLoader, resources) => {
            loadNextScene(sceneLoader, resources);
        });

    function loadNextScene (sceneLoader, resources) {

        backGroundSprite.texture = resources["airport"].texture;


        let cancelbutton = new PIXI.Sprite (
            sceneLoader.resources["cargo"].textures['cancel_buttn_usual2.png']
        ), reservebutton = new PIXI.Sprite (
            sceneLoader.resources["cargo"].textures['reserve _usual.png']
        ), line_divider_A = new PIXI.Sprite (
            sceneLoader.resources["cargo"].textures['line_divider_A.png']
        ), line_divider_B = new PIXI.Sprite (
            sceneLoader.resources["cargo"].textures['line_divider_B.png']
        ), line_divider_C = new PIXI.Sprite (
            sceneLoader.resources["cargo"].textures['line_divider_A.png']



        );
        line_divider_C.x += 250;

        cancelbutton.hover = sceneLoader.resources["cargo"].textures['cancel_buttn_hovered2.png'];
        cancelbutton.pressed = sceneLoader.resources["cargo"].textures['cancel_buttn_hovered2.png'];
        cancelbutton.normal = sceneLoader.resources["cargo"].textures['cancel_buttn_usual2.png'];

        reservebutton.hover = sceneLoader.resources["cargo"].textures['reserve_hovered.png'];
        reservebutton.pressed = sceneLoader.resources["cargo"].textures['reserve_hovered.png'];
        reservebutton.normal = sceneLoader.resources["cargo"].textures['reserve _usual.png'];

        cancelbutton.visible = true;
        cancelbutton.anchor.x = 0.5;
        cancelbutton.anchor.y = 0.5;
        cancelbutton.x = 2500;
        cancelbutton.y = 950;

        reservebutton.visible = true;
        reservebutton.anchor.x = 0.5;
        reservebutton.anchor.y = 0.5;
        reservebutton.x = 2500;
        reservebutton.y = 850;

        cancelbutton.interactive = true;
        cancelbutton.on('mouseover', ButtonOver)
        cancelbutton.on('mouseout', ButtonOut)

        reservebutton.interactive = true;
        reservebutton.on('mouseover', ButtonOver)
        reservebutton.on('mouseout', ButtonOut);

/////////                     ///////////////                      //////////////////                   //////////        ///////////
        function ButtonOver() {
            this.texture = this.hover;
        }
        function ButtonOut() {
            if (this.isdown) {
                return;
            }
            this.texture = this.normal;
        }
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
//////////////               //////////              ////////////////                         ///////////           ///////////////////



        backGroundSprite.addChild(cancelbutton, reservebutton, line_divider_A, line_divider_B, line_divider_C);

        textOptions.fill = '#7fd3a1'; textOptions.fontSize = 35;
        let arrivalTimeText = new PIXI.Text("ARRIVAL TIME", textOptions),
        howercraftText = new PIXI.Text("HOVERCRAFT", textOptions);

        arrivalTimeText.position = {x: 1200, y: 690};
        howercraftText.position = {x: 1600, y: 690};
        backGroundSprite.addChild(arrivalTimeText, howercraftText);


        textOptions.fill = '#01b7d3'; textOptions.fontSize = 30;
        let reservedTimeText = new PIXI.Text("RESERVED", textOptions),
        timeCounter = new PIXI.Text("00:00:00", textOptions);
        reservedTimeText.position = {x: 2050, y: 880};
        timeCounter.position = {x: 2055, y: 930};
        reservedTimeText.visible = true;
        timeCounter.visible = true;
        backGroundSprite.addChild(reservedTimeText, timeCounter);




        let flyInfo = new PIXI.Container();

        textOptions.fill = '#25d36c';
        let arrival1 = new PIXI.Text("20:08", textOptions),
        arrival2 = new PIXI.Text("15:00", textOptions),
        arrival3 = new PIXI.Text("11:55", textOptions),
        arrival4 = new PIXI.Text("16:30", textOptions);

        arrival1.position = {x: 1200, y:790}
        arrival1.num = 1;
        arrival2.position = {x: 1200, y:890}
        arrival2.num = 2;
        arrival3.position = {x: 1200, y:990}
        arrival3.num = 3;
        arrival4.position = {x: 1200, y:1090}
        arrival4.num = 4;

        let typeofHower1 = new PIXI.Text("Griffin", textOptions),
        typeofHower2 = new PIXI.Text("Griffin", textOptions),
        typeofHower3 = new PIXI.Text("Griffin", textOptions),
        typeofHower4 = new PIXI.Text("Griffin", textOptions);

        typeofHower1.position = {x: 1600, y:790}
        typeofHower1.num = 1;
        typeofHower2.position = {x: 1600, y:890}
        typeofHower1.num = 2;
        typeofHower3.position = {x: 1600, y:990}
        typeofHower1.num = 3;
        typeofHower4.position = {x: 1600, y:1090}
        typeofHower1.num = 4;

        // /////////////// /////////////////////////////////////////

        let maskGroup = new PIXI.display.Group(1,
            function (sprite) {sprite.zOrder = -sprite.y;}
        );
        let infoGroup = new PIXI.display.Group(2, function (sprite) {
            sprite.zOrder = -sprite.y;
        });

        //toto je maska ktora je pripravena na skrolovanie ...
        var scrollmask = new PIXI.Graphics();
        // scrollmask.alpha = 0.5;
        // scrollmask.drawRect(1200, 750, 780, 465);

        scrollmask.beginFill(0xFFFFFF);
        scrollmask.drawRect(1200, 750, 780, 465); scrollmask.hitArea = new PIXI.Rectangle(1200, 750, 780, 465);
        scrollmask.endFill();
        //backGroundSprite.addChild(scrollmask);

        // maskGroup.addChild(scrollmask);
        // infoGroup.addChild(flyInfo);
        flyInfo.parentGroup = infoGroup;
        scrollmask.parentGroup = maskGroup;
        flyInfo.mask = scrollmask;
        //flyInfo.addChild(scrollmask);

        //backGroundSprite.addChild(flyInfo);
        flyInfo.addChild(arrival1, arrival3, arrival2, arrival4, typeofHower1, typeofHower2, typeofHower3, typeofHower4)

        let flyinfoarray = [];
        flyinfoarray.push(arrival1, arrival3, arrival2, arrival4, typeofHower1, typeofHower2, typeofHower3, typeofHower4)

        // riesim hover nad textom /// //// //// /// /         /////////////             ///////////
        for(let k in flyInfo.children){
            flyInfo.children[k].interactive = true;
            //Iarray[k].hitArea = new PIXI.Rectangle(Iarray[k].x, Iarray[k].y, 1000, 1000);
            //flyInfo.children[k][k]array[k].buttonMode = true;
            //flyInfo.children[k][k]array[k].cursor = 'wait';
            flyInfo.children[k].on('mouseover', ButtonOverText)
            flyInfo.children[k].on('mouseout', ButtonOutText)
            flyInfo.children[k].on('click', onClickText);
        }
        backGroundSprite.addChild(flyInfo);
        backGroundSprite.addChild(new PIXI.display.Layer(maskGroup))
        backGroundSprite.addChild(new PIXI.display.Layer(infoGroup))

        console.log(arrival1.interactive)

        function ButtonOverText(){
            console.log("nanana")
        }

        function ButtonOutText(){

        }

        function onClickText(){
            app.ticker.remove(movetext)
            console.log("nanana")

        }

        //console.log(flyInfo.children[1].hitArea)

        // koniec hoveru nad textom /////////////////                 /////////////////////             /////////////


        app.ticker.add(movetext)

        function movetext(){
            for(let i in flyInfo.children){
                    flyInfo.children[i].y -= 1;
                    if(flyInfo.children[i].y <= 800)
                        flyInfo.children[i].y = 1200;
                }



        }



        // toto je docasny backbutton
        let backButton = new PIXI.Graphics;
        backButton.lineStyle(2, 0x0000FF, 1);
        backButton.beginFill(0x00000, 1);
        backButton.drawRect(200, 1600, 400, 60);
        backButton.interactive = true;
        backButton.on("click", () => {
            goBack(resources);
        } );
        backGroundSprite.addChild(backButton);

        textOptions.fill = "white";
        textOptions.fontSize = 55;
        let vaultButtonText = new PIXI.Text("GO BACK", textOptions);
        vaultButtonText.x = 200;
        vaultButtonText.y = 1600;
        backGroundSprite.addChild(vaultButtonText);


    }
}


function goBack(){
    enterTownMap();
}