function griffin_seats_loading(loadingBay, sceneLoader){

    let griffin_load_scheme = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['griffin_load_scheme.png']
    ), text_Griffin = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_Griffin-042.png']
    ), griffin_passengers_scheme = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['griffin_passengers_scheme.png']
    ), text_passengers_seats = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_passengers seats.png']
    ), text_capacity = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_capacity.png']
    ), text_Capacity = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['text_Capacity.png']
    ), taken_seats = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['taken seat.png']
    );
    let seat1 = new PIXI.Sprite(),
    seat2 = new PIXI.Sprite(),
    seat3 = new PIXI.Sprite(),
    seat4 = new PIXI.Sprite(),
    seat5 = new PIXI.Sprite(),
    seat6 = new PIXI.Sprite(),
    seat7 = new PIXI.Sprite(),
    seat8 = new PIXI.Sprite(),
    seat9 = new PIXI.Sprite(),
    seat10 = new PIXI.Sprite(),
    seat11 = new PIXI.Sprite(),
    seat12 = new PIXI.Sprite(),
    seat13 = new PIXI.Sprite(),
    seat14 = new PIXI.Sprite(),
    seat15 = new PIXI.Sprite(),
    seat16 = new PIXI.Sprite(),
    seat17 = new PIXI.Sprite(),
    seat18 = new PIXI.Sprite(),
    seat19 = new PIXI.Sprite(),
    seat20 = new PIXI.Sprite(),
    seat21 = new PIXI.Sprite(),
    seat22 = new PIXI.Sprite(),
    seat23 = new PIXI.Sprite(),
    seat24 = new PIXI.Sprite(),
    seat25 = new PIXI.Sprite(),
    seat26 = new PIXI.Sprite(),
    seat27 = new PIXI.Sprite(),
    seat28 = new PIXI.Sprite(),
    seat29 = new PIXI.Sprite(),
    seat30 = new PIXI.Sprite();


    seat1.texture = taken_seats.texture; // 22 24 je velksot seatu
    seat1.x = 2071;  seat1.y = 1576;

    seat2.texture = taken_seats.texture;
    seat2.x = 2075;  seat2.y = 1606;

    seat3.texture = taken_seats.texture;
    seat3.x = 2110;  seat3.y = 1606;

    seat4.texture = taken_seats.texture;
    seat4.x = 2145;  seat4.y = 1606;

    seat5.texture = taken_seats.texture;
    seat5.x = 2172;  seat5.y = 1606;

    seat6.texture = taken_seats.texture;
    seat6.x = 2200;  seat6.y = 1606;

    seat7.texture = taken_seats.texture;
    seat7.x = 2230;  seat7.y = 1606;

    seat8.texture = taken_seats.texture;
    seat8.x = 2260;  seat8.y = 1606;

    seat9.texture = taken_seats.texture;
    seat9.x = 2290;  seat9.y = 1606;

    seat10.texture = taken_seats.texture;
    seat10.x = 2320;  seat10.y = 1606;

    seat11.texture = taken_seats.texture;
    seat11.x = 2350;  seat11.y = 1606;

    seat12.texture = taken_seats.texture;
    seat12.x = 2380;  seat12.y = 1606;

    seat13.texture = taken_seats.texture;
    seat13.x = 2405;  seat13.y = 1606;

    seat14.texture = taken_seats.texture;
    seat14.x = 2405;  seat14.y = 1580;

    seat15.texture = taken_seats.texture;
    seat15.x = 2405;  seat15.y = 1550;

    seat16.texture = taken_seats.texture;
    seat16.x = 2405;  seat16.y = 1520;

    seat17.texture = taken_seats.texture;
    seat17.x = 2400;  seat17.y = 1490;

    seat18.texture = taken_seats.texture;
    seat18.x = 2370;  seat18.y = 1485;

    seat19.texture = taken_seats.texture;
    seat19.x = 2340;  seat19.y = 1485;

    seat20.texture = taken_seats.texture;
    seat20.x = 2310;  seat20.y = 1485;

    seat21.texture = taken_seats.texture;
    seat21.x = 2280;  seat21.y = 1485;

    seat22.texture = taken_seats.texture;
    seat22.x = 2253;  seat22.y = 1485;

    seat23.texture = taken_seats.texture;
    seat23.x = 2223;  seat23.y = 1485;

    seat24.texture = taken_seats.texture;
     seat24.x = 2195;  seat24.y = 1485;

    seat25.texture = taken_seats.texture;
    seat25.x = 2165;  seat25.y = 1485;

    seat26.texture = taken_seats.texture;
    seat26.x = 2135;  seat26.y = 1485;

    seat27.texture = taken_seats.texture;
    seat27.x = 2105;  seat27.y = 1495;

    seat28.texture = taken_seats.texture;
    seat28.x = 2075;  seat28.y = 1495;

    seat29.texture = taken_seats.texture;
    seat29.x = 2075;  seat29.y = 1525;

    seat30.texture = taken_seats.texture;
    seat30.x = 2071;  seat30.y = 1576;



    // 30 miest na sedenie max
    let arrayOfSeats = [seat1, seat2, seat3, seat4, seat5, seat6, seat7, seat8, seat9, seat10, seat11, seat12, seat13, seat14, seat15, seat16, seat17, 
        seat18, seat19, seat20, seat21, seat22, seat23, seat24, seat25, seat26, seat27, seat28, seat28, seat29, seat30];  
    
    for(i in arrayOfSeats){
        arrayOfSeats[i].visible = false;
    }

    loadingBay.addChild(griffin_load_scheme, griffin_passengers_scheme, text_Griffin, text_capacity, text_Capacity, text_passengers_seats);

    loadingBay.addChild(seat1, seat2, seat3, seat4, seat5, seat6, seat7, seat8, seat9, seat10, seat11, seat12, seat13, seat14, seat15, seat16, seat17, 
        seat18, seat19, seat20, seat21, seat22, seat23, seat24, seat25, seat26, seat27, seat28, seat29, seat30);

        return arrayOfSeats;
}


