function playerHouseScene(buildingArray, sceneId, stage) {
    let backGroundSprite = stage.children[0].children[0];

    for (let i in buildingArray) {
            backGroundSprite.removeChild(buildingArray[i]);
        }
            // fog transition
            // add loading screen here
        let sceneLoader = new PIXI.loaders.Loader();
        sceneLoader.add("houseInterior", 'images/' + resolutionParameter + '/playerHouse/spritesheet_home/home.json')
            .add("stelaAssets", "images/" + resolutionParameter + '/playerHouse/spritesheet_stela/stela.json')
            .add("stelaTable", "images/" + resolutionParameter + '/playerHouse/tableView.png')
            .add("splashRed", "images/" + resolutionParameter + '/playerHouse/spritesheet_stela/splash_red')
            .add("splashGreen", "images/" + resolutionParameter + '/playerHouse/spritesheet_stela/splash_green')
        .load((sceneLoader, resources) => {
            loadNextScene(sceneLoader, resources);
        });

    function loadNextScene (sceneLoader, resources) {
        backGroundSprite.texture = resources["houseInterior"].textures['home_bg.png'];
        let table = new PIXI.Graphics;
        table.beginFill();
        table.drawPolygon([400,0,1600,0,1800, 500, 0, 500]);
        table.endFill();
        table.alpha = 0;
        table.position = {x:600, y:1660};
        table.interactive = true;
        table.on("click", showStelaContainer);
        backGroundSprite.addChild(table);

        function showStelaContainer() {

            let tableContainer = new PIXI.Sprite(
                resources.stelaTable.texture
            );
            tableContainer.position.y = 55; //{x:,y:}
            backGroundSprite.addChild(tableContainer);
            
            let stelaArea = new PIXI.Container(), diamondArea = new PIXI.Container();
            let dragLayer = new PIXI.display.Layer();
            let diamondMask = new PIXI.Graphics();
            diamondMask.beginFill(0xFFFFFF);
            diamondMask.drawRect(0, 0, 516, 378); diamondMask.hitArea = new PIXI.Rectangle(0, 0, 516, 378);
            diamondMask.endFill();
            diamondMask.position = {x:3025, y:797};
            diamondArea.mask = diamondMask;
            stelaArea.position = {x:670, y:600};
            diamondArea.position = {x:3050, y:850};
            tableContainer.addChild(stelaArea, dragLayer, diamondArea, diamondMask);

            let layoutX=0 , layoutY = 0;
            for (let i = 0; i < 2; ++i) {
                let thisTile = new PIXI.Sprite(resources["stelaAssets"].textures['01_layout_01.png']);
                thisTile.position = {x: layoutX, y: layoutY};
                // thisTile.scale.y = 1.15;
                stelaArea.addChild(thisTile);
                layoutX +=910;
                // layoutY += 150;
            }

            let pointsFromBack = dataFromBack.vault.items[4][0].layout.points,
                pathsFromBack = dataFromBack.vault.items[4][0].layout.paths;
            let arrayOfPositions = [];
            function Position(x, y) {
                this.x = x; this.y = y;
            }
            function networkMaker() {
                let coordX = -25, coordY = -185;
                for (let x = 0; x < 27; ++x) {
                    let yLocation = [];
                    for (let y = 0; y < 13; ++y) {
                        yLocation.push(new Position(coordX, coordY));
                        coordY += 95;
                    }
                    arrayOfPositions.push(yLocation);
                    coordX += 85;
                    coordY = 0; // << this is right, dont change it to +=
                }
            }
            networkMaker();
            let placeHolderArray = [];                  // << used for HitTests
            function stelaPlaceholderMaker() {
                for (let point in pointsFromBack) {
                    let placeholder = new PIXI.Sprite(
                        resources["stelaAssets"].textures['01_placeholder_'+ pointsFromBack[point].type +'.png']              // array[][].x
                    );
                    placeholder.type = pointsFromBack[point].type;  // 101...102
                    placeholder.hold = pointsFromBack[point].hold;
                    placeholder.position = {
                        x:arrayOfPositions[pointsFromBack[point].idx][pointsFromBack[point].idy].x,
                        y:arrayOfPositions[pointsFromBack[point].idx][pointsFromBack[point].idy].y
                    };
                    placeholder.anchor = {x:0.5, y:0.5};
                    placeHolderArray.push(placeholder); // feelings , pictures and ideas
                    stelaArea.addChild(placeholder);
                }
            }

            function stelaPathMaker() {
                console.log(pathsFromBack);


                // deWey.anchor = {x:0, y:0.5};
                //{
                //                         x:arrayOfPositions[pointsFromBack[point].idx][pointsFromBack[point].idy].x,
                //                         y:arrayOfPositions[pointsFromBack[point].idx][pointsFromBack[point].idy].y
                //                     }
                //  = {x:pathsFromBack[0].idxs, y: pathsFromBack[0].idys};
                console.log(arrayOfPositions);
                for (let path in pathsFromBack) {
                    let deWey = new PIXI.Sprite(
                        resources["stelaAssets"].textures["line_1.png"]
                    );
                    deWey.position = {
                        x: arrayOfPositions[pathsFromBack[path].idxs][pathsFromBack[path].idys].x,
                        y: arrayOfPositions[pathsFromBack[path].idxs][pathsFromBack[path].idys].y
                    };
                    deWey.scale.x = 0.2;
                    if (pathsFromBack[path].idxs == idxe)
                    stelaArea.addChild(deWey);
                }
            }

            stelaPathMaker();
            stelaPlaceholderMaker();
            aGirlsBestFriend();
            function aGirlsBestFriend() {
                let diamondArray = [];
                let diamondsInTheBack = dataFromBack.vault.items[1];
                let diamondPosX = 50, diamondPosY = 50;
                textOptions.fontSize = 22;
                for (let i = 0; i < diamondsInTheBack.length; ++i) {
                    let spriteTexture = diamondColorPicker(diamondsInTheBack[i].type);
                    let colorAmount = new PIXI.Text(diamondsInTheBack[i][3].text, textOptions);
                    colorAmount.anchor = {x:0.5, y:0.5};
                    colorAmount.scale = {x:1.3, y:1.4};
                    colorAmount.position = {x: diamondPosX,y: 1};
                    diamondArea.addChild(colorAmount);
                    for (let yindex = 0; yindex <= 4; ++yindex) {
                        let diamond = new PIXI.Sprite(
                            spriteTexture
                        );
                        diamond.anchor = {x: 0.5, y:0.5};
                        diamond.position = {x:diamondPosX, y:diamondPosY};
                        diamond.interactive = true;
                        diamond.type = (200 + diamondsInTheBack[i].type);
                        diamond
                            .on('pointerdown', onDragStart)
                            .on('pointerup', onDragEnd)
                            .on('pointerupoutside', onDragEnd)
                            .on('pointermove', onDragMove);
                        diamondArea.addChild(diamond);
                        diamondPosY += 70;
                    }
                    diamondPosX += 75;
                    diamondPosY = 50;
                }
            }
            function diamondColorPicker(gem) {
                return resources["stelaAssets"].textures[(200 + gem) + '.png'];
            }
            function onDragStart(event) {
                this.data = event.data;
                // this.alpha = 0.5;
                this.scale = {x:1.2, y:1.2};

                if (!this.dragging) {
                    this.data = event.data;
                    this.oldGroup = this.displayGroup;
                    console.log(this.oldGroup);
                    this.displayGroup = dragLayer;
                    this.dragging = true;
                    this.dragPoint = event.data.getLocalPosition(this.parent);
                    diamondArea.removeChild(this);
                    stelaArea.addChild(this);
                    var newPosition = this.data.getLocalPosition(this.parent);
                    this.x = newPosition.x;
                    this.y = newPosition.y;
                }
            }

            function hitTestRectangle(r1, r2) {

                //Calculate `centerX` and `centerY` properties on the sprites
                r1.centerX = r1.x + r1.width / 2;
                r1.centerY = r1.y + r1.height / 2;
                r2.centerX = r2.x + r2.width / 2;
                r2.centerY = r2.y + r2.height / 2;


                //Calculate the `halfWidth` and `halfHeight` properties of the sprites
                r1.halfWidth = r1.width / 2;
                r1.halfHeight = r1.height / 2;
                r2.halfWidth = r2.width / 2;
                r2.halfHeight = r2.height / 2;

                //Create a `collision` variable that will tell us
                //if a collision is occurring
                let collision = false;

                //Check whether the shapes of the sprites are overlapping. If they
                //are, set `collision` to `true`
                if (Math.abs(r1.centerX - r2.centerX) < r1.halfWidth + r2.halfWidth
                    && Math.abs(r1.centerY - r2.centerY) < r1.halfHeight + r2.halfHeight) {
                    collision = true;
                }

                //Return the value of `collision` back to the main program
                return collision;
            }

            function onDragEnd() {
                if (this.dragging) {
                    this.dragging = false;
                    this.scale = {x:1, y:1};
                    this.displayGroup = this.oldGroup;
                    console.log(this.displayGroup);
                    this.data = null;

                }
                for (let spot in placeHolderArray) {
                    if (hitTestRectangle(this, placeHolderArray[spot])){
                        console.log("its a hit");
                        //check if the type is right
                        if (this.type == placeHolderArray[spot].type) {
                            console.log("same shit");   //if so
                            playGreenFlash(this.position);            // play blue blink anim8
                        }


                                //leave gemstone
                            // if no
                        else {
                            console.log("different day");
                            console.log(this.type);
                            console.log(placeHolderArray[spot].type);
                        }
                                // play red blink anim8
                                // return gemstone
                        return;
                    }
                    else {
                        //return gemstone
                    }
                }



                // if (this.type == "1") {
                //
                //     if (this.x > 50 && this.x < 100 && this.y > 50 && this.y < 100) {
                //         this.x = 60;
                //         this.y = 60;
                //         this.desx = this.x;
                //         this.desy = this.y;
                //         this.save = 1;
                //         placehol_11.full = 1;
                //         animuj(this);
                //
                //     }
                //     else if (this.x > 350 && this.x < 400 && this.y > 350 && this.y < 400) {
                //         this.x = 360;
                //         this.y = 360;
                //         this.desx = this.x;
                //         this.desy = this.y;
                //         this.save = 1;
                //         placehol_12.full = 1;
                //         animuj(this);
                //     }
                //     else {
                //         this.x = this.desx
                //         this.y = this.desy
                //     }
                // }
                // if (this.type == "2") {
                //
                //     if (this.x > 50 && this.x < 100 && this.y > 350 && this.y < 400) {
                //         this.x = 60;
                //         this.y = 360;
                //         this.desx = this.x;
                //         this.desy = this.y;
                //         this.save = 1;
                //         placehol_21.full = 1;
                //         animuj(this);
                //     }
                //     else if (this.x > 200 && this.x < 250 && this.y > 500 && this.y < 550) {
                //         this.x = 210;
                //         this.y = 510;
                //         this.desx = this.x;
                //         this.desy = this.y;
                //         this.save = 1;
                //         placehol_22.full = 1;
                //         animuj(this);
                //     }
                //     else if (this.x > 530 && this.x < 580 && this.y > 500 && this.y < 550) {
                //         this.x = 540;
                //         this.y = 510;
                //         this.desx = this.x;
                //         this.desy = this.y;
                //         this.save = 1;
                //         placehol_23.full = 1;
                //         animuj(this);
                //     }
                //     else {
                //         this.x = this.desx
                //         this.y = this.desy
                //     }
                // }
                //
                // if (this.type == "3") {
                //
                //     if (this.x > 50 && this.x < 100 && this.y > 200 && this.y < 250) {
                //         this.x = 60;
                //         this.y = 210;
                //         this.desx = this.x;
                //         this.desy = this.y;
                //         this.save = 1;
                //         placehol_31.full = 1;
                //         animuj(this);
                //     }
                //     else if (this.x > 200 && this.x < 250 && this.y > 200 && this.y < 250) {
                //         this.x = 210;
                //         this.y = 210;
                //         this.desx = this.x;
                //         this.desy = this.y;
                //         this.save = 1;
                //         placehol_32.full = 1;
                //         animuj(this);
                //     }
                //     else if (this.x > 600 && this.x < 650 && this.y > 100 && this.y < 150) {
                //         this.x = 610;
                //         this.y = 110;
                //         this.desx = this.x;
                //         this.desy = this.y;
                //         this.save = 1;
                //         placehol_33.full = 1;
                //         animuj(this);
                //     }
                //     else {
                //         //var graphics = new PIXI.Graphics();
                //         //graphics.beginFill(0xFF0000);
                //         //graphics.beginFill(0xFFFF0B, 0.5);
                //         //graphics.drawCircle(this.x, this.y,60);
                //         //stage.addChild(graphics)
                //         this.x = this.desx
                //         this.y = this.desy
                //     }
                // }

            }

            function onDragMove() {
                if (this.dragging) {
                    var newPosition = this.data.getLocalPosition(this.parent);
                    this.x = newPosition.x;
                    this.y = newPosition.y;
                }
            }
            function playGreenFlash(position) {
                console.log(position);
                let flash = new PIXI.extras.AnimatedSprite(
                    resources["splashGreen"].textures
                );
                flash.play();
                stelaArea.addChild(flash);
            }

        }
    }
}


    // PIXI.loader
    //         .add("sheet/gemFlashBlue.json")
    //         .add("images/01_diamond_placeholder_01.png")
    //         .add("images/01_diamond_placeholder_02.png")
    //         .add("images/01_diamond_placeholder_03.png")
    //         .add("images/01_layout_01.png")
    //         .add("images/01_line_01.png")
    //         .add("images/01_line_02.png")
    //         .add("images/01_line_03.png")
    //         .add("images/01_line_04.png")
    //         .add("images/diamond_01.png")
    //         .add("images/diamond_02.png")
    //         .add("images/diamond_03.png")
    //         .add("images/diamond_01_pos.png")
    //         .add("images/diamond_02_pos.png")
    //         .add("images/diamond_03_pos.png")
    //         .load(setup)
    // }

    // function setup() {
    //     var placehol_11, placehol_12, placehol_21, placehol_22, placehol_23, placehol_31, placehol_32, placehol_33;
    //     var anim;
    //     let background = PIXI.Texture.fromImage("images/01_layout_01.png")
    //     let bg = new PIXI.Sprite(background)
    //     stage.addChild(bg);
    //     add_placeholder();
    //     add_lines();
    //     add_diamonds();
    //
    //
    //     app.ticker.add(delta => gameloop(delta));
    // }

    function gameloop() {
        chceck_holders();
        renderer.render(stage);
    }


    function add_placeholder() {

        let placeh1 = PIXI.Texture.fromImage("images/01_diamond_placeholder_01.png")
        let placeh2 = PIXI.Texture.fromImage("images/01_diamond_placeholder_02.png")
        let placeh3 = PIXI.Texture.fromImage("images/01_diamond_placeholder_03.png")

        placehol_11 = new PIXI.Sprite(placeh1)
        placehol_11.x = 50;
        placehol_11.y = 50;
        stage.addChild(placehol_11)

        placehol_12 = new PIXI.Sprite(placeh1)
        placehol_12.x = 350;
        placehol_12.y = 350;
        stage.addChild(placehol_12)

        placehol_21 = new PIXI.Sprite(placeh2)
        placehol_21.x = 50;
        placehol_21.y = 350;
        stage.addChild(placehol_21)

        placehol_22 = new PIXI.Sprite(placeh2)
        placehol_22.x = 200;
        placehol_22.y = 500;
        stage.addChild(placehol_22)

        placehol_23 = new PIXI.Sprite(placeh2)
        placehol_23.x = 530;
        placehol_23.y = 500;
        stage.addChild(placehol_23)

        placehol_31 = new PIXI.Sprite(placeh3)
        placehol_31.x = 50;
        placehol_31.y = 200;
        stage.addChild(placehol_31)

        placehol_32 = new PIXI.Sprite(placeh3)
        placehol_32.x = 200;
        placehol_32.y = 200;
        stage.addChild(placehol_32)

        placehol_33 = new PIXI.Sprite(placeh3)
        placehol_33.x = 600;
        placehol_33.y = 100;
        stage.addChild(placehol_33)
    }

    function add_lines() {
        let line_texture_4 = PIXI.Texture.fromImage("images/01_line_04.png")
        let line_texture_3 = PIXI.Texture.fromImage("images/01_line_03.png")
        let line_texture_2 = PIXI.Texture.fromImage("images/01_line_02.png")
        let line_texture_1 = PIXI.Texture.fromImage("images/01_line_01.png")
        let line01 = new PIXI.Sprite(line_texture_3)
        line01.x = 75;
        line01.y = 127;
        line01.width = 10;
        line01.height = 80;
        stage.addChild(line01)

        let line02 = new PIXI.Sprite(line_texture_3)
        line02.x = 75;
        line02.y = 280;
        line02.width = 10;
        line02.height = 80;
        stage.addChild(line02)

        let line03 = new PIXI.Sprite(line_texture_4)
        line03.x = 115;
        line03.y = 230;
        line03.width = 90;
        line03.height = 10;
        stage.addChild(line03)

        let line04 = new PIXI.Sprite(line_texture_3)
        line04.x = 260;
        line04.y = 270;
        line04.width = 10;
        line04.height = 140;
        line04.rotation = 0.1 * -8;
        stage.addChild(line04);

        let line05 = new PIXI.Sprite(line_texture_3)
        line05.x = 360;
        line05.y = 410;
        line05.width = 10;
        line05.height = 150;
        line05.rotation = 0.1 * 8;
        stage.addChild(line05);

        let line06 = new PIXI.Sprite(line_texture_1)
        line06.x = 425;
        line06.y = 165;
        line06.scale.x = 0.67;
        line06.scale.y = 0.67;
        //line06.height = 110;
        stage.addChild(line06)

        let line07 = new PIXI.Sprite(line_texture_3)
        line07.x = 420;
        line07.y = 420;
        line07.width = 10;
        line07.height = 155;
        line07.rotation = 0.1 * -8;
        stage.addChild(line07);

        /*let line07 = new PIXI.Sprite(line_texture_2)
        line07.x = 422;
        line07.y = 410;
        line07.scale.x = 0.4;
        line07.scale.y = 0.4;
        //line07.height = 110;
        stage.addChild(line07)*/

    }

    function add_diamonds() {
        let dia_texture_1 = PIXI.Texture.fromImage("images/diamond_01.png")
        let dia_texture_2 = PIXI.Texture.fromImage("images/diamond_02.png")
        let dia_texture_3 = PIXI.Texture.fromImage("images/diamond_03.png")

        let dia1 = new PIXI.Sprite(dia_texture_1)
        dia1.x = 650;
        dia1.y = 530;
        dia1.desx = 650;
        dia1.desy = 530;
        dia1.type = 1;
        dia1.save = 0;
        dia1.interactive = true;
        dia1
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

        let dia2 = new PIXI.Sprite(dia_texture_1)
        dia2.x = 710;
        dia2.y = 530;
        dia2.desx = 710;
        dia2.desy = 530;
        dia2.type = 1;
        dia2.save = 0;
        dia2.interactive = true;
        dia2
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

        let dia3 = new PIXI.Sprite(dia_texture_2)
        dia3.x = 770;
        dia3.y = 530;
        dia3.desx = 770;
        dia3.desy = 530;
        dia3.type = 2;
        dia3.save = 0;
        dia3.interactive = true;
        dia3
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

        let dia4 = new PIXI.Sprite(dia_texture_2)
        dia4.x = 830;
        dia4.y = 530;
        dia4.desx = 830;
        dia4.desy = 530;
        dia4.type = 2;
        dia4.save = 0;
        dia4.interactive = true;
        dia4
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

        let dia5 = new PIXI.Sprite(dia_texture_2)
        dia5.x = 650;
        dia5.y = 470;
        dia5.desx = 650;
        dia5.desy = 470;
        dia5.type = 2;
        dia5.save = 0;
        dia5.interactive = true;
        dia5
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);
        let dia6 = new PIXI.Sprite(dia_texture_3)
        dia6.x = 710;
        dia6.y = 470;
        dia6.desx = 710;
        dia6.desy = 470;
        dia6.type = 3;
        dia6.save = 0;
        dia6.interactive = true;
        dia6
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);
        let dia7 = new PIXI.Sprite(dia_texture_3)
        dia7.x = 770;
        dia7.y = 470;
        dia7.desx = 770;
        dia7.desy = 470;
        dia7.type = 3;
        dia7.save = 0;
        dia7.interactive = true;
        dia7
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);
        let dia8 = new PIXI.Sprite(dia_texture_3)
        dia8.x = 830;
        dia8.y = 470;
        dia8.desx = 830;
        dia8.desy = 470;
        dia8.type = 3;
        dia8.save = 0;
        dia8.interactive = true;
        dia8
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

        stage.addChild(dia1);
        stage.addChild(dia2);
        stage.addChild(dia3);
        stage.addChild(dia4);
        stage.addChild(dia5);
        stage.addChild(dia6);
        stage.addChild(dia7);
        stage.addChild(dia8);
    }


    function chceck_holders() {
        var graphics = new PIXI.Graphics();
        graphics.beginFill(0x008000);
        graphics.lineStyle(4, 0x008000, 1);
        if (placehol_31.full) {
            if (placehol_11.full) {
                graphics.moveTo(77, 127);
                graphics.lineTo(77, 200);
                stage.addChild(graphics)
                if (placehol_21.full) {
                    graphics.moveTo(77, 280);
                    graphics.lineTo(77, 350);
                    stage.addChild(graphics)
                }
                if (placehol_32.full) {
                    graphics.moveTo(115, 234);
                    graphics.lineTo(200, 234);
                    stage.addChild(graphics)
                    if (placehol_12.full) {
                        graphics.moveTo(260, 270);
                        graphics.lineTo(360, 365);
                        stage.addChild(graphics)
                        if (placehol_23.full) {
                            graphics.moveTo(420, 420);
                            graphics.lineTo(525, 520);
                            stage.addChild(graphics)
                            console.log("koniec");
                            win();
                        }
                        if (placehol_22.full) {
                            graphics.moveTo(362, 410);
                            graphics.lineTo(258, 512);
                            stage.addChild(graphics)
                        }
                        if (placehol_33.full) {
                            graphics.moveTo(610, 165);
                            graphics.lineTo(430, 352);
                            stage.addChild(graphics)
                            win();
                        }
                    }
                }
            }
        }
    }

    function win() {
        stage = new PIXI.Container();
        let background = PIXI.Texture.fromImage("images/01_layout_01.png")
        let bg = new PIXI.Sprite(background)
        bg.interactive = true;
        bg.on('pointerdown', setup)
        stage.addChild(bg);
        var text = new PIXI.Text("vyhral si!");
        text.x = 450;
        text.y = 300;
        stage.addChild(text);
        var text2 = new PIXI.Text("klikni pre pokracovanie");
        text2.x = 500;
        text2.y = 350
        stage.addChild(text2);
    }

    function animuj(obj) {
        var frames = [];
        for (i = 27; i < 42; i++) {
            frames.push(PIXI.Texture.fromFrame('1_000' + i + '.png'));
        }
        anim = new PIXI.extras.AnimatedSprite(frames);
        anim.x = obj.x - 130;
        anim.y = obj.y - 123;
        anim.animationSpeed = 0.5
        anim.loop = false;

        anim.play();

        stop = 1;
        stage.addChild(anim);


}