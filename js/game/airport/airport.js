function airportScene(sceneID) {
    socket.emit("cargo:onLoad");
    let smallPosters = [];
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
        let dataFromBack;
        socket.on("cargo:onRefresh", function (jsonFromBack) {
            dataFromBack = jsonFromBack;
        })
        sceneLoader
            .add("airport", 'images/' + resolutionParameter + '/airport/airportUI.png')
            .add("cargo", 'images/' + resolutionParameter + '/airport/airportPanels.json')
            .add("griffinCargoLines", 'images/' + resolutionParameter + '/airport/griffinCargoLines.json')
            .add("poster01", 'images/' + resolutionParameter + '/airport/infoPanel_01_big.png')
            .add("prePaidPacks", 'images/' + resolutionParameter + '/airport/prePaidPacks.json')
            .add("availableHovers", 'images/' + resolutionParameter + '/airport/availableHovers.json')
            .add("prepaidPax", 'images/' + resolutionParameter + '/airport/cargo-prepaid.json')
            .load((sceneLoader) => {
            loadNextScene(sceneLoader);
        });

    function loadNextScene (sceneLoader) {
       
        console.log(dataFromBack);

        backGroundSprite.texture = sceneLoader.resources["airport"].texture;


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
        ), poster_small1 = new PIXI.Sprite (
            sceneLoader.resources["cargo"].textures['plagat_small.png']


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


        smallPosters.push(poster_small1);

        smallPosters[dataFromBack.info-1].x = 520;
        smallPosters[dataFromBack.info-1].y = 680;
        smallPosters[dataFromBack.info-1].height = 500;
        smallPosters[dataFromBack.info-1].width = 400;
        smallPosters[dataFromBack.info-1].interactive = true;
        smallPosters[dataFromBack.info-1].on('click', function() {onClickPoster(sceneLoader, backGroundSprite, dataFromBack) } )

        cancelbutton.interactive = true;
        cancelbutton.on('mouseover', ButtonOver)
        cancelbutton.on('mouseout', ButtonOut)
        cancelbutton.on('click', onClickCancel)

        reservebutton.interactive = true;
        reservebutton.on('mouseover', ButtonOver)
        reservebutton.on('mouseout', ButtonOut);
        reservebutton.on('click', function() { loadingBayOpen(sceneLoader, backGroundSprite) } )

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

        function timeConversion(millisec) {
            var seconds = (millisec / 1000).toFixed(0);
            var minutes = Math.floor(seconds / 60);
            var hours = "";
            if (minutes > 59) {
                hours = Math.floor(minutes / 60);
                hours = (hours >= 10) ? hours : "0" + hours;
                minutes = minutes - (hours * 60);
                minutes = (minutes >= 10) ? minutes : "0" + minutes;
            }
    
            seconds = Math.floor(seconds % 60);
            seconds = (seconds >= 10) ? seconds : "0" + seconds;
            if (hours != "") {
                return hours + ":" + minutes + ":" + seconds;
            }
            return minutes + ":" + seconds;
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
        backGroundSprite.addChild(reservedTimeText, timeCounter, smallPosters[dataFromBack.info-1]);

    
        let flyInfo = new PIXI.Container();
        
        textOptions.fill = '#25d36c';
        let arrivals = [];
        for(let i in dataFromBack.arival){
            arrivals.push("arrival"+i);
        }
        let howercrafts = [];
        for(let i in dataFromBack.arival){
            howercrafts.push("howercraft"+i);
        }
        for(let index in dataFromBack.arival){
            let time = timeConversion(dataFromBack.arival[index].arive)
            arrivals[index] = new PIXI.Text(time, textOptions);
            howercrafts[index] = new PIXI.Text(dataFromBack.arival[index].label, textOptions);
        }
        for(let i in arrivals){
            arrivals[i].num = i;
            arrivals[i].x = 1200;
            arrivals[i].y = 790 + (i * 100);
            arrivals[i].interactive = true;
            arrivals[i].buttonMode = true;
            arrivals[i].hitArea = new PIXI.Rectangle(-10, -10, 700, 55);
        }
        for(let i in howercrafts){
            howercrafts[i].num = i;
            howercrafts[i].x = 1600;
            howercrafts[i].y = 790 + (i * 100);
        }
        // var graphics = new PIXI.Graphics();
        // graphics.lineStyle(2, 0x0000FF, 1);
        // graphics.beginFill(0xFF700B, 1);
        // graphics.drawRect(1190, 780, 700, 55);
        // backGroundSprite.addChild(graphics);

        // arrivals[0].hitArea()
        // for(let i in arrivals){

        // }

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
        
        // adding arrivals into flyinfo
        for(var i in arrivals){
            flyInfo.addChild(arrivals[i]);
        }
        for(var i in howercrafts){
            flyInfo.addChild(howercrafts[i]);
        }
        
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
        //// VOLANIE LOADING FUNCKII ////////// ////////////////////    /////////////////////   ///////////////
        loadPrepaidPacks(backGroundSprite, sceneLoader, dataFromBack)
        loadAvailableHower(backGroundSprite, sceneLoader, dataFromBack)



        // toto je docasny backbutton
        let backButton = new PIXI.Graphics;
        backButton.lineStyle(2, 0x0000FF, 1);
        backButton.beginFill(0x00000, 1);
        backButton.drawRect(200, 1600, 400, 60);
        backButton.interactive = true;
        backButton.on("click", () => {
            goBack();
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