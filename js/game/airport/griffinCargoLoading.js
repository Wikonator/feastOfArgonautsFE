function griffin_cargo_loading(loadingBay, sceneLoader){
    let line01 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['01_for_coloring.png']
    ), line_above = new PIXI.Sprite (
        sceneLoader.resources["cargo"].textures['line_above.png']
    ), line02 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['02_for_coloring.png']
    ), line03 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['03_for_coloring.png']
    ), line04 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['04_for_coloring.png']
    ), line05 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['05_for_coloring.png']
    ), line06 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['06_for_coloring.png']
    ), line07 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['07_for_coloring.png']
    ), line08 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['08_for_coloring.png']
    ), line09 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['09_for_coloring.png']
    ), line10 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['10_for_coloring.png']
    ), line11 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['11_for_coloring.png']
    ), line12 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['12_for_coloring.png']
    ), line13 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['13_for_coloring.png']
    ), line14 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['14_for_coloring.png']
    ), line15 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['15_for_coloring.png']
    ), line16 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['16_for_coloring.png']
    ), line17 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['17_for_coloring.png']
    ), line18 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['18_for_coloring.png']
    ), line19 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['19_for_coloring.png']
    ), line20 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['20_for_coloring.png']
    ), line21 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['21_for_coloring.png']
    ), panel01 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['01_panel.png']
    ), panel02 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['02_panel.png']
    ), panel03 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['03_panel.png']
    ), panel04 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['04_panel.png']
    ), panel05 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['05_panel.png']
    ), panel06 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['06_panel.png']
    ), panel07 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['07_panel.png']
    ), panel08 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['08_panel.png']
    ), panel09 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['09_panel.png']
    ), panel10 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['10_panel.png']
    ), panel11 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['11_panel.png']
    ), panel12 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['12_panel.png']
    ), panel13 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['13_panel.png']
    ), panel14 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['14_panel.png']
    ), panel15 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['15_panel.png']
    ), panel16 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['16_panel.png']
    ), panel17 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['17_panel.png']
    ), panel18 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['18_panel.png']
    ), panel19 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['19_panel.png']
    ), panel20 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['20_panel.png']
    ), panel21 = new PIXI.Sprite (
        sceneLoader.resources["griffinCargoLines"].textures['21_panel.png']
    );

    let arrayOfLines = [line01, line02, line03, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, 
        line18, line19, line20, line21];
    let arrayOfPanel = [panel01, panel02, panel03, panel04, panel05, panel06, panel07, panel08, panel09, panel10, panel11, panel12, panel13, panel14, 
        panel15, panel16, panel17, panel18, panel19, panel20, panel21]
    let arrayOfCargo = [];
    arrayOfCargo = [line01, line02, line03, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, 
        line18, line19, line20, line21, panel01, panel02, panel03, panel04, panel05, panel06, panel07, panel08, panel09, panel10, panel11, panel12, panel13, panel14, 
        panel15, panel16, panel17, panel18, panel19, panel20, panel21]
    let lineY = 1078; // step 7
    for(let i=0 ; i<=21 ; i++){
        if(i < 6){
            arrayOfLines[i].x = 2088;
            arrayOfLines[i].y = 1078 - (i*7);
            arrayOfPanel[i].x = 2083;
            arrayOfPanel[i].y = 1024 - (i*7);
        }
        if(i < 14){
            arrayOfLines[i].x = 2087;
            arrayOfLines[i].y = 1078 - (i*7);
            arrayOfPanel[i].x = 2055;
            arrayOfPanel[i].y = 1024 - (i*7);
        }
        if(i < 18){
            arrayOfLines[i].x = 2088;
            arrayOfLines[i].y = 1078 - (i*7);
            arrayOfPanel[i].x = 2045;
            arrayOfPanel[i].y = 1024 - (i*7);
        }
        if(i < 20){
            arrayOfLines[i].x = 2089;
            arrayOfLines[i].y = 1078 - (i*7);
            arrayOfPanel[i].x = 2048;
            arrayOfPanel[i].y = 1024 - (i*7);
        }
        if(i == 20){
            arrayOfLines[i].x = 2054;
            arrayOfLines[i].y = 1078 - (i*7);
            arrayOfPanel[i].x = 2054;
            arrayOfPanel[i].y = 1024 - (i*7);
        }
    }
    for(i in arrayOfLines){
        arrayOfLines[i].type = i;
        arrayOfPanel[i].typeof = "line";
    }
    for(i in arrayOfPanel){
        arrayOfPanel[i].type = i;
        arrayOfPanel[i].typeof = "panel";
    }
    for(i in arrayOfCargo){
        arrayOfCargo[i].visible = false;
    }

    loadingBay.addChild(line01, line02, line03, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, 
        line18, line19, line20, line21, panel01, panel02, panel03, panel04, panel05, panel06, panel07, panel08, panel09, panel10, panel11, panel12, panel13, panel14, 
        panel15, panel16, panel17, panel18, panel19, panel20, panel21, line_above);
    return arrayOfCargo;
}