function loadPassanger(arrayOfSeats, stav, seatCounter){
    if(seatCounter < 0){
        seatCounter = 0;
    }
    if(seatCounter > 30){
        seatCounter = 30;
    }
    if(stav == 1){
        arrayOfSeats[seatCounter].visible = true;
    }
    else{
        arrayOfSeats[seatCounter].visible = false;
    }
}