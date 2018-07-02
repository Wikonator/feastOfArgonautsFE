function showStelaContainer(resources, backSprite) {
    let backGroundSprite = backSprite;
    let pathGroup = new PIXI.display.Group(1,
        function (sprite) {sprite.zOrder = -sprite.y;}
    );
    let energyGroup = new PIXI.display.Group(2, function (sprite) {
        sprite.zOrder = -sprite.y;
    });
    let greenGroup = new PIXI.display.Group(3, true);    // group (zOrder = 0, sorting = true)
    greenGroup.on('sort', function (sprite) {
        // sprites go down
        sprite.zOrder = +sprite.y;
    });

    let blueGroup = new PIXI.display.Group(4, function (sprite) {
        sprite.zOrder = -sprite.y;
    });
// Drag is the best layer, dragged element is above everything else
    let dragGroup = new PIXI.display.Group(5, false);
// Shadows are the lowest
    let shadowGroup = new PIXI.display.Group(0, false);


    let tableBackground = new PIXI.Sprite(
        resources.stelaTable.texture
    );
    let tableContainer = new PIXI.Container(),
        greenFlashTexture = [], redFlashTexture = [], smallLineTexture = [];
    tableContainer.interactive = false;
    tableContainer.mouseover = function(e) {
        e.preventDefault();
    }
    tableContainer.addChild(tableBackground);

    /////////////////////////  defines the cross that closes the table ////////////////
    let closingCrossHexa = new PIXI.Sprite (
        PIXI.loader.resources["crossAndDiamonds"].textures['close_btn_bg.png']
    ), closingCross = new PIXI.Sprite (
        PIXI.loader.resources["crossAndDiamonds"].textures['close_btn_icon.png']
    );
        closingCross.normal = closingCross.texture;
        closingCross.hover = PIXI.loader.resources["crossAndDiamonds"].textures['close_btn_icon_hover.png'];
        closingCrossHexa.position = {x: 3100, y: 410};
        tableContainer.addChild(closingCrossHexa);
        closingCross.anchor = {x:0.5, y:0.5};
        closingCross.position = {x:closingCrossHexa.width/2,y:closingCrossHexa.height/2};
        closingCross.interactive = true;
        closingCrossHexa.diss = false;
        closingCrossHexa.on("mouseover", crossOver);
        closingCrossHexa.on("mouseout", crossOut);
        closingCrossHexa.on("click", crossClose);
        tableContainer.mouseover = function (e) {
             e.stopPropagation();
        };
        closingCrossHexa.addChild(closingCross);

    /////////////////////////   button to activate the stela /////////////////////////

    let activateButton = new PIXI.Sprite(
        resources["tokenAndActive"].textures['btn_activate_usual.png']
        // resources["tokenAndActive"].textures['btn_activate_disable.png']
    );
        activateButton.isDisabld = false;
        activateButton.normal = resources["tokenAndActive"].textures['btn_activate_usual.png'];
        activateButton.hover = resources["tokenAndActive"].textures["btn_activate_hover.png"];
        activateButton.pressed = resources["tokenAndActive"].textures["btn_activate_push.png"];
        activateButton.disabled = this.texture;
        activateButton.position = {x:3300, y:2000};
        activateButton.anchor = {x:0.5, y:0.5};
        activateButton.interactive = true;
        activateButton.on("mouseover", activateOver);
        activateButton.on("mouseout", activateOut);
        activateButton.on("click", activatePress);

        textOptions.fontSize = 23;
        let activateText = new PIXI.Text("ACTIVATE", textOptions);
        activateText.scale = {x: 1.5, y:1.5};
        activateText.anchor = {x:0.5, y:0.5};

        tableContainer.addChild(activateButton);
        activateButton.addChild(activateText);

    for (let frame in resources.splashGreen.textures) {
        greenFlashTexture.push(resources.splashGreen.textures[frame]);
    }
    for (let frame in resources.splashRed.textures) {
        redFlashTexture.push(resources.splashRed.textures[frame]);
    }
    for (let frame in resources.smallLine.textures) {

        smallLineTexture.push(resources.smallLine.textures[frame]);
    }
    tableContainer.position.y = 55; //{x:,y:}



    let stelaArea = new PIXI.Container(), diamondArea = new PIXI.Container(), tokenArea = new PIXI.Container;
    let diamondMask = new PIXI.Graphics();
    diamondMask.beginFill(0xFFFFFF);
    diamondMask.drawRect(0, 0, 516, 378); diamondMask.hitArea = new PIXI.Rectangle(0, 0, 516, 378);
    diamondMask.endFill();
    diamondMask.position = {x:3025, y:797};
    diamondArea.mask = diamondMask;
    diamondMask.parentGroup = blueGroup;
    diamondArea.parentGroup = blueGroup;
    diamondMask.zIndex = 3;
    diamondArea.zIndex = 2;
    stelaArea.position = {x:670, y:550};
    diamondArea.position = {x:3050, y:850};

    textOptions.fill = '#33ffbd'; textOptions.fontSize = 21;
    let artefactsText = new PIXI.Text("ARTEFACTS", textOptions), screwsText = new PIXI.Text("SCREWS", textOptions),
        diamondsText= new PIXI.Text("DIAMONDS", textOptions), tokensText= new PIXI.Text("TOKENS", textOptions);
    artefactsText.position = {x: 297, y: 568}; artefactsText.scale = {x:1.5,y:1.5};
    screwsText.position = {x:335, y:1650}; screwsText.scale = {x:1.5,y:1.5};
    diamondsText.position = {x:3190, y:740}; diamondsText.scale = {x:1.5,y:1.5};
    tokensText.position = {x:3205, y: 1245}; tokensText.scale = {x:1.5,y:1.5};



    tableContainer.addChild(new PIXI.display.Layer(pathGroup));
    tableContainer.addChild(new PIXI.display.Layer(energyGroup));
    tableContainer.addChild(new PIXI.display.Layer(greenGroup));
    tableContainer.addChild(new PIXI.display.Layer(blueGroup));
    tableContainer.addChild(new PIXI.display.Layer(dragGroup));
    tableContainer.addChild(new PIXI.display.Layer(shadowGroup));

    // stage.group.enableSort = true;
    // pathGroup.group.enableSort = true;
    // energyGroup.group.enableSort = true;
    // greenGroup.group.enableSort = true;
    // blueGroup.group.enableSort = true;
    // dragGroup.group.enableSort = true;
    // shadowGroup.group.enableSort = true;

    tableContainer.addChild(stelaArea, diamondArea, diamondMask, tokenArea, artefactsText,
        screwsText, diamondsText, tokensText);

    let layoutX=0 , layoutY = 50;
    for (let i = 0; i < 2; ++i) {
        for (let indx = 0; indx < 3; ++indx) {
            let thisTile = new PIXI.Sprite(resources["stelaAssets"].textures['01_layout_01.png']);
            thisTile.position = {x: layoutX, y: layoutY};
            thisTile.scale = {x:0.7, y:0.7};
            // thisTile.scale.y = 1.15;
            thisTile.parentGroup = pathGroup;
            // thisTile.zOrder = 0;
            thisTile.zIndex = 0;
            stelaArea.addChild(thisTile);
            layoutX +=650;
            // layoutY += 150;
        }
        layoutX = 0;
        layoutY += 450;
    }

    let pointsFromBack = dataFromBack.vault.items[4][0].layout.points,
        pathsFromBack = dataFromBack.vault.items[4][0].layout.paths;
    let arrayOfPositions = [];

    let bottomStelaText = new PIXI.Text("Magdalena Scroll: ...In Darkness I shall be Light, in times of Doubt I shall keep Faith...", textOptions);
    bottomStelaText.anchor = {x:0.5, y:0.5};
    bottomStelaText.scale = {x:1.5, y:1.4};
    bottomStelaText.position = {x:1760, y:2000};
    let leftArrow = new PIXI.Sprite(resources["stelaAssets"].textures['btn_choosing_arrow_usual.png']),
    rightArrow = new PIXI.Sprite(resources["stelaAssets"].textures['btn_choosing_arrow_right_usual.png']);
    leftArrow.position= {x:2150, y: 2100};
    leftArrow.anchor = {x:1, y:1};
    rightArrow.position = {x:3800, y:2180};
    rightArrow.anchor = {x:1, y:1};

    tableContainer.addChild(bottomStelaText
        // , leftArrow, rightArrow
    );


    function Position(x, y) {
        this.x = x; this.y = y;
    }

    function networkMaker() {
        let coordX = 0, coordY = -155;
        for (let x = 0; x < 27; ++x) {
            let yLocation = [];
            for (let y = 0; y < 13; ++y) {
                yLocation.push(new Position(coordX, coordY));
                coordY += 110;
            }
            arrayOfPositions.push(yLocation);
            coordX += 110;
            coordY = 0; // << this is right, dont change it to +=
        }
    }
    networkMaker();
    let placeHolderArray = [];                  // << used for HitTests
    function stelaPlaceholderMaker() {
        for (let point in pointsFromBack) {
            let placeholder = new PIXI.Sprite(
                resources["stelaAssets"].textures["placeholder_"+ pointsFromBack[point].type +'.png']              // array[][].x
            );
            placeholder.type = pointsFromBack[point].type;  // 101...102
            placeholder.hold = pointsFromBack[point].hold;
            placeholder.position = {
                x:arrayOfPositions[pointsFromBack[point].idx][pointsFromBack[point].idy].x,
                y:arrayOfPositions[pointsFromBack[point].idx][pointsFromBack[point].idy].y
            };
            placeholder.anchor = {x:0.5, y:0.5};
            placeholder.scale = {x:0.5, y:0.5};
            placeholder.parentGroup = greenGroup;
            placeHolderArray.push(placeholder); // feelings , pictures and ideas
            stelaArea.addChild(placeholder);
        }
    }

    function stelaPathMaker() {
        console.log(pathsFromBack);
        for (let path in pathsFromBack) {
            let deWey = new PIXI.Sprite(
                resources["stelaAssets"].textures["line_"+pathsFromBack[path].type+".png"]
            );
            deWey.position = {
                x: arrayOfPositions[pathsFromBack[path].idxs][pathsFromBack[path].idys].x,
                y: arrayOfPositions[pathsFromBack[path].idxs][pathsFromBack[path].idys].y
            };
            switch (pathsFromBack[path].type) {
                case 1: deWey.anchor = {x:0,y:0.5}; deWey.scale={x:0.3,y:1}; break;
                case 2: deWey.anchor = {x:0.5,y:0}; deWey.scale={x:1,y:0.3}; break;
                case 3: deWey.anchor = {x:0,y:0}; deWey.scale={x:0.5,y:0.5}; break;
                case 4: deWey.anchor = {x:0,y:1}; deWey.scale={x:0.5,y:0.5}; break;
            }
            deWey.parentGroup = pathGroup;
            deWey.zIndex = 1;
            // deWey.scale.x = 0.2;
            stelaArea.addChild(deWey);
        }
    }

    stelaPathMaker();
    stelaPlaceholderMaker();
    aGirlsBestFriend();
    tokenMaker();
    addAnimatedPath();

    backGroundSprite.addChild(tableContainer);

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
            colorAmount.position = {x: diamondPosX,y: -20};
            diamondArea.addChild(colorAmount);
            for (let yindex = 0; yindex <= 4; ++yindex) {
                let diamond = new PIXI.Sprite(
                    spriteTexture
                );
                diamond.anchor = {x: 0.5, y:0.5};
                diamond.position = {x:diamondPosX, y:diamondPosY};
                diamond.interactive = true;
                diamond.type = (200 + diamondsInTheBack[i].type);
                diamond.pileOfGems = true;
                diamond.oldPosition = diamond.position;
                diamond.parentGroup = blueGroup;
                diamond.zIndex = 0;
                diamond.mask = diamondMask;
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

    function tokenMaker() {
        let tokensInTheBack = 4;
        let tokenPosX = 0, tokenPosY = 0;
        tokenArea.position = {x:3100, y:1350};
        textOptions.fontSize = 22;
        for (let i = 1; i <= tokensInTheBack; ++i) {
            // let tokenTexture = ();
            let amount = 2 * i + 3;         //// <<<<<< temporary to make random token text
            let colorAmount = new PIXI.Text(amount, textOptions);
            colorAmount.anchor = {x: 0.5, y: 0.5};
            colorAmount.scale = {x: 1.3, y: 1.4};
            colorAmount.amount = amount;
            colorAmount.updateAmount = function () { return };
            colorAmount.position = {x: tokenPosX, y: tokenPosY};

            let tokenTex = resources["tokenAndActive"].textures["token_0" + i+ ".png"];
            let token = new PIXI.Sprite(tokenTex);
            token.position = {x: tokenPosX, y: tokenPosY+70};

            token.interactive = true;
            token.type = (100 + i);
            token.pileOfGems = true;
            token.oldPosition = token.position;
            token.parentGroup = blueGroup;
            token.scale = {x:0.8, y:0.8};
            token.anchor = {x:0.5, y:0.5};
            token
                .on('pointerdown', onDragStart)
                .on('pointerup', onDragEnd)
                .on('pointerupoutside', onDragEnd)
                .on('pointermove', onDragMove);
            token.hover = function (e) {
                e.stopPropagation();
            };

            tokenArea.addChild(token, colorAmount);
            tokenPosX += 130;
        }
    }
    function onDragStart(event) {

        this.data = event.data;
        this.scale = {x:1.2, y:1.2};

        if (!this.dragging) {
            this.data = event.data;
            this.oldGroup = this.parentGroup;
            console.log(this.parentGroup);
            this.parentGroup = dragGroup;
            this.dragging = true;
            this.mask = false;
            this.dragPoint = event.data.getLocalPosition(this.parent);
            // diamondArea.removeChild(this);
            if (this.pileOfGems) {
                console.log("dragging: this is from the pile");
                let newGem = new PIXI.Sprite(this.texture);
                newGem.position = this.position;
                newGem.oldPosition = newGem.position;
                newGem.parentGroup = blueGroup;
                newGem.zIndex = 0;
                newGem.anchor = {x: 0.5, y:0.5};
                newGem.interactive = true;
                newGem.type = this.type;
                newGem.pileOfGems = true;
                newGem.on('pointerdown', onDragStart)
                    .on('pointerup', onDragEnd)
                    .on('pointerupoutside', onDragEnd)
                    .on('pointermove', onDragMove);

                if(this.type <= 200) {
                    console.log("token");
                    stelaArea.addChild(this);
                    newGem.anchor = {x:0.5,y:0.5};
                    newGem.scale  = {x:0.8, y:0.8};
                    tokenArea.addChild(newGem);
                } else {
                    console.log('gem');
                    newGem.mask = diamondMask;
                    stelaArea.addChild(this);
                    diamondArea.addChild(newGem);
                }
            } else {
                console.log("dragging: this is not from the pile");
                console.log(this.position);
                console.log(this.oldPosition);
            }
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
        console.log("drag end");
        if (this.dragging) {
            this.dragging = false;
            this.scale = {x:1, y:1};
            this.displayGroup = this.oldGroup;
            // console.log(this.displayGroup);
            this.data = null;

        }
        console.log(this.position.x);
        let noHits = true;
        for (let spot in placeHolderArray) {
            if (hitTestRectangle(this, placeHolderArray[spot])) {
                console.log("its a hit");
                noHits = false;
                console.log(this.type);
                console.log(placeHolderArray[spot]);
                //check if the type is right
                if (this.type == placeHolderArray[spot].type) {
                    console.log("same shit");   //if so
                    this.position = placeHolderArray[spot].position;
                    this.pileOfGems = false;
                    this.oldPosition = placeHolderArray[spot].position;
                    console.log(this.oldPosition);
                    playGreenFlash(placeHolderArray[spot]);            // play blue blink anim8

                    return;
                    //leave gemstone - send to backend
                } else {
                    // if no
                    // play red blink anim8
                    noHits = false;
                    if (!this.pileOfGems) {
                        // this is NOT from the pile of gems
                        //return it to orig
                        this.position = this.oldPosition;
                        playRedFlash(placeHolderArray[spot]);


                    } else {
                        // this IS from the pile of gems
                        playRedFlash(placeHolderArray[spot]);
                        this.parent.removeChild(this);
                        return;
                    }
                }
            }
        } if (noHits) {
            console.log("no hit");
            //return gemstone
            if (!this.pileOfGems) {
                // return to .oldPosition
                console.log("im on empty and not from the pile");
                playRedFlash(this);
                console.log(this.oldPosition);
                this.position = this.oldPosition;
            } else {
                console.log("im on empty and from the pile");
                // just destroy it
                playRedFlash(this);
                this.parent.removeChild(this);
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
        let flash = new PIXI.extras.AnimatedSprite(
            greenFlashTexture
        );
        flash.position = {x:position.position.x, y:position.position.y};
        flash.anchor = {x:0.5, y:0.5};
        flash.loop = false;
        flash.play();
        stelaArea.addChild(flash);
    }
    function playRedFlash(position) {
        console.log(position.position);
        let flash = new PIXI.extras.AnimatedSprite(
            redFlashTexture
        );
        flash.position = {x:position.position.x, y:position.position.y};
        flash.anchor = {x:0.5, y:0.5};
        flash.loop = false;
        flash.play();
        stelaArea.addChild(flash);
    }

    function addAnimatedPath() {

        let flashyPath = new PIXI.extras.AnimatedSprite(
            smallLineTexture
        );
        flashyPath.play();
        flashyPath.position = arrayOfPositions[6][6];
        flashyPath.anchor = {x:0.5,y:0.5};
        flashyPath.parentGroup = pathGroup;
        flashyPath.zIndex = 2;
        flashyPath.scale = {x:0.1, y:1};
        stelaArea.addChild(flashyPath);
    }

    function crossOver() {
        console.log("cross over");
        // this.children[0] = this.children[0].hover;
    }

    function crossOut() {
        console.log("cross out");

    }
    function crossClose() {
        console.log("cross close");
        // console.log(tableContainer.children);
        // for (let child in tableContainer.children)
        // tableContainer.removeChild(tableContainer.children[child]);
    }


    function activateOut() {
        if (this.disabled) {
            return;
        }
        this.texture = this.normal;    }

    function activateOver() {
        if (this.isDisabld) {
            return;
        }
        this.texture = this.hover;
    }

    function activatePress() {
        if (this.isDisabld) {
            return;
        }
        this.texture = this.pressed;
    }

}