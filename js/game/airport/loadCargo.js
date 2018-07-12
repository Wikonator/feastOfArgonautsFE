function loadCargo(arrayOfCargo, stav, mass, ammount){
    // prislo kolko jednotiek ma vec na nalozenie/vylozenie
    // max griffina je napr 1000
    let grffinCapacity = 1000;
    let ammountmass = mass / grffinCapacity * 100; //krat sto aby sme boli v percentach
    let numberOfLayers = 21;
    if(stav == 1){
        ammount += numberOfLayers / 100 * ammountmass;
        ammount = Math.floor(ammount);
    }
    if(stav == 0){
        let temp = numberOfLayers / 100 * ammountmass; //odcitam masu
        temp = Math.floor(temp)
        ammount -= temp;
        ammount = Math.floor(ammount);
    }
    if(ammount < 0){
        ammount = 0;
    }
    if(ammount > 21){
        ammount = 21;
    }
    for(var i in arrayOfCargo){
        arrayOfCargo[i].visible = false;
    }
    for(let i = 0; i < ammount; i++){
        arrayOfCargo[i].visible = true;
        for(var k in arrayOfCargo){
            if(arrayOfCargo[i].type === arrayOfCargo[k].type){
                arrayOfCargo[k].visible = true;
            }
        }
    }


    return ammount; //vraciam mnoztvo nakladu v griffine
    
}