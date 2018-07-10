function airportScene(buildingArray, sceneID) {
    let backGroundSprite = app.stage.children[0].children[0];
    // infogroup je skupina kde robim vrstvy, pridam si tam scrollmask a flyinfo a urcim im z-order
    let infoGroup = new PIXI.display.Group(1, function (sprite) { 
        sprite.zOrder = -sprite.y;
    });

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

        cancelbutton.visible = false;
        cancelbutton.anchor.x = 0.5;
        cancelbutton.anchor.y = 0.5;
        cancelbutton.x = 2500;
        cancelbutton.y = 950;
        cancelbutton.parentGroup = infoGroup;
        cancelbutton.zIndex = 4;

        reservebutton.visible = false;
        reservebutton.anchor.x = 0.5;
        reservebutton.anchor.y = 0.5;
        reservebutton.x = 2500;
        reservebutton.y = 850;
        reservebutton.parentGroup = infoGroup;
        reservebutton.zIndex = 4;
        
        cancelbutton.interactive = true;
        cancelbutton.on('mouseover', ButtonOver)
        cancelbutton.on('mouseout', ButtonOut)
        cancelbutton.on('click', onClickCancel)

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
        function onClickCancel() {
            if (this.isdown) {
                this.isdown = false;
                this.texture = this.hover;
            } else {
    
                this.isdown = true;
                this.texture = this.pressed;
                this.alpha = 1;
            }
            cancelbutton.visible = false;
            reservebutton.visible = false;
            app.ticker.add(movetext)    
            for(let i in flyInfo.children)
            {
                if(flyInfo.children[i].style.fill === '#d2123c')
                    flyInfo.children[i].style.fill = '#25d36c';
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
        typeofHower2.num = 2;
        typeofHower3.position = {x: 1600, y:990}
        typeofHower3.num = 3;
        typeofHower4.position = {x: 1600, y:1090}
        typeofHower4.num = 4;

        // /////////////// /////////////////////////////////////////

        // polygon pre cely ovladaci panel v ktorom budem riesit hover out pre opatovne rozhybanie casov prichodov
        var cargoAirfield = new PIXI.Graphics();
        cargoAirfield.hitArea = new PIXI.Rectangle(1100, 600, 1700, 650);
        cargoAirfield.endFill();
        cargoAirfield.parentGroup = infoGroup;
        cargoAirfield.zIndex = 1;
        cargoAirfield.interactive = true;
        cargoAirfield.on('pointerout', function(event) {mouseOutOfAirfield(event)})

        function mouseOutOfAirfield(event){
            let mouse = event.data.getLocalPosition(flyInfo)
          
            if(mouse.x > (cargoAirfield.hitArea.width + cargoAirfield.hitArea.x) || mouse.y > (cargoAirfield.hitArea.height + cargoAirfield.hitArea.y)
            || mouse.x < cargoAirfield.hitArea.x || mouse.y < cargoAirfield.hitArea.y) // if kontorluje ci sme uplne vonku area
            {
                cancelbutton.visible = false;
                reservebutton.visible = false;
                app.ticker.remove(movetext);
                app.ticker.add(movetext)
                for(let i in flyInfo.children)
                {
                    if(flyInfo.children[i].style.fill === '#d2123c')
                        flyInfo.children[i].style.fill = '#25d36c';
                }
            }
        }
        
        //toto je maska ktora je pripravena na skrolovanie ...        
        var scrollmask = new PIXI.Graphics();
        scrollmask.beginFill(0xFFFFFF);
        scrollmask.drawRect(1200, 750, 780, 465); 
        scrollmask.hitArea = new PIXI.Rectangle(1200, 750, 780, 465);
        scrollmask.endFill();
        
        flyInfo.mask = scrollmask;
        scrollmask.parentGroup = infoGroup;
        flyInfo.parentGroup = infoGroup;
        scrollmask.zIndex = 3;
        flyInfo.zIndex = 2;
        
        flyInfo.addChild(arrival1, arrival3, arrival2, arrival4, typeofHower1, typeofHower2, typeofHower3, typeofHower4)
        
        
        // riesim hover nad textom /// //// //// /// /         /////////////             ///////////
        for(let k in flyInfo.children){
            flyInfo.children[k].interactive = true;
            flyInfo.children[k].buttonMode = true;
            flyInfo.children[k].cursor = 'wait';
            flyInfo.children[k].on('mouseover', ButtonOverText)
            flyInfo.children[k].on('mouseout', ButtonOutText)
            flyInfo.children[k].on('click', function () { onClickText(flyInfo.children[k]) } );
        }
        backGroundSprite.addChild(new PIXI.display.Layer(infoGroup))
        backGroundSprite.addChild(flyInfo, scrollmask);
        backGroundSprite.addChild(cargoAirfield);

        function ButtonOverText(){
            console.log("over text...")
        }

        function ButtonOutText(){

        }

        function onClickText(clickedObj){
            app.ticker.remove(movetext)
            // textOptions.fill = '0xd2123c';
            // textOptions.fontSize = 30;
            for(let i in flyInfo.children){
                if(flyInfo.children[i].style.fill === '#d2123c' && flyInfo.children[i] != clickedObj)
                    flyInfo.children[i].style.fill = '#25d36c'
                if(flyInfo.children[i].num === clickedObj.num && flyInfo.children[i] != clickedObj)
                    clickedObj2 = flyInfo.children[i];
            }
            console.log(clickedObj.num)

            clickedObj.style.fill = '#d2123c'
            clickedObj2.style.fill = '#d2123c'

            cancelbutton.visible = true;
            reservebutton.visible = true;
        }

        // koniec hoveru nad textom /////////////////                 /////////////////////             ///////////// 


        app.ticker.add(movetext)

        function movetext(){
            for(let i in flyInfo.children){
                    flyInfo.children[i].y -= 1;
                    if(flyInfo.children[i].y <= 600)
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