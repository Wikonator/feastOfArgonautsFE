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
        greenFlashTexture = [], redFlashTexture = [], blueLineTexture = [], greenLineTexture =[];
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
    for (let frame in resources.blueLine.textures) {

        blueLineTexture.push(resources.blueLine.textures[frame]);
    }
    for (let frame in resources.greenLine.textures) {

        greenLineTexture.push(resources.greenLine.textures[frame]);
    }

    tableContainer.position.y = 55; //{x:,y:}



    let stelaArea = new PIXI.Container(), diamondArea = new PIXI.Container(), tokenArea = new PIXI.Container;
    let diamondMask = new PIXI.Graphics();
    let diamondHoard;
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
        pathsFromBack = dataFromBack.vault.items[4][0].layout.paths,
        stelaId = 0;//dataFromBack.vault.items[4];
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
        let coordX = 0, coordY = 95;
        for (let x = 0; x < 27; ++x) {
            let yLocation = [];
            for (let y = 0; y < 13; ++y) {
                yLocation.push(new Position(coordX, coordY));
                coordY += 110;
            }
            arrayOfPositions.push(yLocation);
            coordX += 110;
            coordY = 95; // << this is right, dont change it to +=
        }
    }
    networkMaker();
    let placeHolderArray = [];                  // << used for HitTests
    function stelaPlaceholderMaker() {
        for (let point in pointsFromBack) {
            let placeholder;
            let placeId = pointsFromBack[point].mType + "0" + pointsFromBack[point].sType[0].type;
            if (pointsFromBack[point].mType === 2 && pointsFromBack[point].sType.length > 1) {
                // this is dual
                placeholder = new PIXI.Sprite(
                    resources[pointsFromBack[point].sType[0].type + "" + pointsFromBack[point].sType[1].type + "_combi"].texture
                );

            } else {
                placeholder = new PIXI.Sprite(
                    resources["stelaAssets"].textures["placeholder_" + placeId + '.png']              // array[][].x
                );
            }

            // 101...102
            placeholder.hold = pointsFromBack[point].hold;
            placeholder.type = {mType: pointsFromBack[point].mType, sType: pointsFromBack[point].sType};
            placeholder.position = {
                x: arrayOfPositions[pointsFromBack[point].idx][pointsFromBack[point].idy].x,
                y: arrayOfPositions[pointsFromBack[point].idx][pointsFromBack[point].idy].y
            };
            if (placeholder.type[0] < 200) {
                placeholder.scale = {x: 0.75, y: 0.75};
            } else {
                placeholder.scale = {x: 0.5, y: 0.5};
            }
            placeholder.anchor = {x: 0.5, y: 0.5};
            placeholder.idxy = {idx: pointsFromBack[point].idx, idy: pointsFromBack[point].idy};
            placeholder.parentGroup = greenGroup;
            placeHolderArray.push(placeholder); // feelings , pictures and ideas
            stelaArea.addChild(placeholder);

            if (typeof pointsFromBack[point].hold !== "undefined") {            // fill all filled out placeholders

                if (pointsFromBack[point].mType === 2) {
                    // console.log(pointsFromBack[point].sType[placeholder.hold].type);
                    let diamond = new PIXI.Sprite(diamondColorPicker(pointsFromBack[point].sType[placeholder.hold].type));
                    diamond.position = placeholder.position;
                    diamond.anchor = {x: 0.5, y: 0.5};
                    diamond.interactive = true;
                    diamond.type = {
                        mType: pointsFromBack[point].mType,
                        sType: pointsFromBack[point].sType[placeholder.hold].type
                    }; // <<< does this work???
                    diamond.pileOfGems = false;
                    diamond.oldPosition = {
                        x: arrayOfPositions[pointsFromBack[point].idx][pointsFromBack[point].idy].x,
                        y: arrayOfPositions[pointsFromBack[point].idx][pointsFromBack[point].idy].y
                    };
                    diamond.zIndex = 0;
                    diamond.parentGroup = greenGroup;
                    // diamond.mask = diamondMask;
                    diamond
                        .on('pointerdown', onDragStart)
                        .on('pointerup', onDragEnd)
                        .on('pointerupoutside', onDragEnd)
                        .on('pointermove', onDragMove);
                    stelaArea.addChild(diamond);
                }           // else if (placeholder.type > 300) {} // its an artefact
                else {

                    let token = new PIXI.Sprite(resources["tokenAndActive"].textures["token_0" + pointsFromBack[point].sType[placeholder.hold].type + ".png"]);
                    token.position = placeholder.position;
                    token.anchor = {x: 0.5, y: 0.5};
                    token.interactive = true;
                    token.type = { mType: pointsFromBack[point].mType,
                        sType: pointsFromBack[point].sType[placeholder.hold].type }
                    token.pileOfGems = false;
                    token.oldPosition = placeholder.position;
                    token.zIndex = 0;
                    token.parentGroup = blueGroup;
                    // token.mask = diamondMask;
                    token
                        .on('pointerdown', onDragStart)
                        .on('pointerup', onDragEnd)
                        .on('pointerupoutside', onDragEnd)
                        .on('pointermove', onDragMove);
                    stelaArea.addChild(token);
                }

            }
        }
        diamondHoard = new PIXI.Graphics();
        diamondHoard.beginFill(0, 0.1);
        diamondHoard.drawRect(0, 0, 516, 900);
        diamondHoard.hitArea = new PIXI.Rectangle(0, 0, 516, 900);
        diamondHoard.endFill();
        diamondHoard.position = {x: 2345, y: 249};
        stelaArea.addChild(diamondHoard);
    }


    function stelaPathMaker() {
        // console.log(pathsFromBack);
        for (let path in pathsFromBack) {
            let deWey = new PIXI.Sprite(
                resources["stelaAssets"].textures["line_"+pathsFromBack[path].type+".png"]
            );
            deWey.position = {
                x: arrayOfPositions[pathsFromBack[path].idxs][pathsFromBack[path].idys].x,
                y: arrayOfPositions[pathsFromBack[path].idxs][pathsFromBack[path].idys].y
            };
            switch (pathsFromBack[path].type) {
                case 1: deWey.anchor = {x:0,y:0.5}; deWey.scale={x:0.3,y:1}; deWey.elektrik = 0; break;
                case 2: deWey.anchor = {x:0.5,y:0}; deWey.scale={x:1,y:0.3}; deWey.elektrik = 1.5; break;
                case 3: deWey.anchor = {x:0,y:0}; deWey.scale={x:0.5,y:0.5}; deWey.elektrik = 0.78; break;
                case 4: deWey.anchor = {x:0,y:1}; deWey.scale={x:0.5,y:0.5}; deWey.elektrik = 5.49; break;
            }
            deWey.parentGroup = pathGroup;
            deWey.zIndex = 1;
            // deWey.scale.x = 0.2;
            if (pathsFromBack[path].state !== 0) {
                let elektrikBoogaloo;
                if (pathsFromBack[path].state === 1) {
                    elektrikBoogaloo = new PIXI.extras.AnimatedSprite(
                        blueLineTexture
                    );
                }
                if (pathsFromBack[path].state === 2) {
                    elektrikBoogaloo =   new PIXI.extras.AnimatedSprite(
                        greenLineTexture
                    );
                }
                elektrikBoogaloo.play();
                elektrikBoogaloo.position = deWey.position;
                elektrikBoogaloo.anchor = {x:0,y:0.5};
                elektrikBoogaloo.rotation = deWey.elektrik;
                elektrikBoogaloo.parentGroup = pathGroup;
                elektrikBoogaloo.zIndex = 2;
                elektrikBoogaloo.scale = {x:0.06, y:1};
                elektrikBoogaloo.animationSpeed = 0.2;
                stelaArea.addChild(elektrikBoogaloo);
            }
            stelaArea.addChild(deWey);

        }
    }

    stelaPathMaker();
    stelaPlaceholderMaker();
    let diamondVaults = {};
    aGirlsBestFriend();
    tokenMaker();

    backGroundSprite.addChild(tableContainer);


    function aGirlsBestFriend() {
        let diamondArrays = {};
        let diamondsInTheBack = dataFromBack.vault.items[1];
        console.log(diamondsInTheBack);
        let diamondPosX = 50, diamondPosY = 50;
        textOptions.fontSize = 22;
        for (let i = 0; i < diamondsInTheBack.length; ++i) {
            diamondArrays[diamondsInTheBack[i].type] = [];
            let spriteTexture = diamondColorPicker(diamondsInTheBack[i].type);
            let colorAmount = new PIXI.Text(diamondsInTheBack[i][3].text, textOptions);
            colorAmount.anchor = {x:0.5, y:0.5};
            colorAmount.scale = {x:1.3, y:1.4};
            colorAmount.position = {x: diamondPosX,y: -20};
            diamondVaults[200 + diamondsInTheBack[i].type] = colorAmount;
            diamondArea.addChild(colorAmount);
            for (let yindex = 0; yindex < diamondsInTheBack[i][3].text; ++yindex) {
                let diamond = new PIXI.Sprite(
                    spriteTexture
                );
                diamond.anchor = {x: 0.5, y:0.5};
                diamond.position = {x:diamondPosX, y:diamondPosY};
                diamondArrays[diamondsInTheBack[i].type][yindex] = diamond.position;
                diamond.interactive = true;
                diamond.type =  {mType:2, sType: diamondsInTheBack[i].type};
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
        console.log(diamondArrays);
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
            diamondVaults[100 + i] = colorAmount;
            colorAmount.position = {x: tokenPosX, y: tokenPosY};

            let tokenTex = resources["tokenAndActive"].textures["token_0" + i+ ".png"];
            let token = new PIXI.Sprite(tokenTex);
            token.position = {x: tokenPosX, y: tokenPosY+70};

            token.interactive = true;
            token.type = {mType:1, sType: i};
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
        console.log(this.data.global);

        if (!this.dragging) {
            this.data = event.data;
            this.oldGroup = this.parentGroup;
            this.parentGroup = dragGroup;
            this.dragging = true;
            this.mask = false;
            this.dragPoint = event.data.getLocalPosition(this.parent);
            // diamondArea.removeChild(this);
            if (this.pileOfGems) {
                // add functionality that checks how much is left in the pile and animate it accordingly

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

                if(this.type.mType == 1) {
                    stelaArea.addChild(this);

                    newGem.anchor = {x:0.5,y:0.5};
                    newGem.scale  = {x:0.8, y:0.8};

                    diamondVaults[this.type.mType + "0" + this.type.sType].text = Number(diamondVaults[this.type.mType +"0"+ this.type.sType].text) - 1;
                    if (diamondVaults[this.type.mType + "0" + this.type.sType].text < 1) {
                        console.log("tokenov je menej jak 1");

                    } else { tokenArea.addChild(newGem); }
                } else {
                    diamondVaults[this.type.mType + "0" + this.type.sType].text = Number(diamondVaults[this.type.mType +"0"+ this.type.sType].text) - 1;
                    if (diamondVaults[this.type.mType + "0" + this.type.sType].text < 5) {
                        console.log("diamantov je menej jak 5");
                        stelaArea.addChild(this);
                    } else {
                        console.log("gems je viac jak 5");
                        newGem.mask = diamondMask;
                        stelaArea.addChild(this);
                        diamondArea.addChild(newGem);
                    }
                }
            } else {
                console.log("dragging: this is not from the pile");
                // console.log("this position: " + this.position.x + " " + this.position.y);
                // console.log("old position: " + this.oldPosition.x + " " + this.oldPosition.y);
                for (let spot in placeHolderArray) {
                    if (hitTestRectangle(this, placeHolderArray[spot])) {
                        placeHolderArray[spot].hold = undefined;
                        this.oldPlaceholerIdxy = placeHolderArray[spot].idxy;
                    }
                }
            }
            var newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }

    function hitTestRectangle(r1, r2) {

        r1.centerX = r1.x + r1.width / 2;
        r1.centerY = r1.y + r1.height / 2;
        r2.centerX = r2.x + r2.width / 2;
        r2.centerY = r2.y + r2.height / 2;


        r1.halfWidth = r1.width / 2;
        r1.halfHeight = r1.height / 2;
        r2.halfWidth = r2.width / 2;
        r2.halfHeight = r2.height / 2;

        let collision = false;

        if (Math.abs(r1.centerX - r2.centerX) < r1.halfWidth + r2.halfWidth
            && Math.abs(r1.centerY - r2.centerY) < r1.halfHeight + r2.halfHeight) {
            collision = true;
        }

        return collision;
    }

    function emitStuff(json) {
        console.log("emit stuff hapened");
        json.idStela = stelaId;
        console.log(json);
        socket.emit("stela:onAction", json);
    }

    function onDragEnd() {
        if (this.dragging) {
            this.dragging = false;
            this.scale = {x: 1, y: 1};
            this.displayGroup = this.oldGroup;
            this.data = null;

            if (hitTestRectangle(this, diamondHoard)) {  // diamant sa vratil na kopu
                console.log("this is above the diamond square");
                //zahraj zeleny flash
                playGreenFlash(this);
                // prirataj diamant ku svojmu type
                console.log(diamondVaults);
                console.log(this.type);
                console.log(this.type.sType);
                diamondVaults[this.type.mType +"0"+ this.type.sType].text = Number(diamondVaults[this.type.mType +"0"+ this.type.sType].text) + 1;
                // removni sprajta
                stelaArea.removeChild(this);
                // povedz o tom seckym znamym
                let data = {
                    type: 1,
                    idxs:this.oldPlaceholerIdxy.idx,
                    idys:this.oldPlaceholerIdxy.idy,
                    mType: this.type.mType,
                    sType: [this.type.sType]

                };
                // console.log(data);
                emitStuff(data);
            }
            let noHits = true;
            for (let spot in placeHolderArray) {
                if (hitTestRectangle(this, placeHolderArray[spot])) {
                    console.log("this placeholder hold: ",placeHolderArray[spot].hold);
                    if (typeof placeHolderArray[spot].hold !== "undefined") {
                        console.log("something is here");
                        if (!this.pileOfGems) {
                            // this is NOT from the pile of gems
                            //return it to orig position
                            console.log("old palceholder id: ",this.oldPlaceholerIdxy);
                            for (let index in placeHolderArray) {
                                if (placeHolderArray[index].idxy == this.oldPlaceholerIdxy) {
                                    console.log("the one I found id: ", placeHolderArray[index].idxy);
                                    placeHolderArray[index].hold = this.type.sType;
                                    this.position = this.oldPosition;
                                }
                            }
                            playRedFlash(placeHolderArray[spot]);
                            return;

                        } else {
                            // this IS from the pile of gems, bring it back there
                            playRedFlash(placeHolderArray[spot]);
                            console.log(this.type);
                            diamondVaults[this.type.mType + "0" + this.type.sType].text = Number(diamondVaults[this.type.mType +"0"+ this.type.sType].text) + 1;
                            this.parent.removeChild(this);
                            return;
                        }
                    }
                    else {
                        console.log("it's a hit, nothing is here");
                        //check if the type is right
                        if (this.type.mType == placeHolderArray[spot].type.mType) {
                            console.log("this is the same type");
                            noHits = false;
                            for (let types in placeHolderArray[spot].type.sType) {
                                console.log(placeHolderArray[spot].type.sType[types].type);
                                if (this.type.sType == placeHolderArray[spot].type.sType[types].type) {
                                    console.log("this is the same color");
                                    //if so
                                    placeHolderArray[spot].hold = this.type.sType;
                                    this.position = placeHolderArray[spot].position;
                                    this.oldPosition = placeHolderArray[spot].position;
                                    let dataToSend;
                                    if (this.pileOfGems) {
                                        console.log("pile of gems");
                                        dataToSend = {
                                            aType: 0,
                                            idxe: placeHolderArray[spot].idxy.idx,
                                            idye: placeHolderArray[spot].idxy.idy,
                                            mType: placeHolderArray[spot].type.mType,
                                            sType: placeHolderArray[spot].type.sType[types]
                                        };
                                    } else {
                                       dataToSend = {
                                            aType: 2,
                                            idxs: this.oldPlaceholerIdxy.idx,
                                            idys: this.oldPlaceholerIdxy.idy,
                                            idxe: placeHolderArray[spot].idxy.idx,
                                            idye: placeHolderArray[spot].idxy.idy,
                                            mType: placeHolderArray[spot].type.mType,
                                            sType: placeHolderArray[spot].type.sType[types]
                                        };
                                    }
                                    console.log(dataToSend);
                                    playGreenFlash(placeHolderArray[spot]);            // play blue blink anim8
                                    emitStuff(dataToSend);
                                    this.pileOfGems = false;
                                    return;
                                    //leave gemstone - send to backend
                                }
                            }
                        }
                        // if no
                        // play red blink animanimation
                        noHits = false;
                        if (!this.pileOfGems) {
                            // this is NOT from the pile of gems - return it to orig
                            this.position = this.oldPosition;
                            playRedFlash(placeHolderArray[spot]);
                        } else {
                            // this IS from the pile of gems
                            playRedFlash(placeHolderArray[spot]);
                            console.log(this.type);
                            diamondVaults[this.type.mType + "0" + this.type.sType].text = Number(diamondVaults[this.type.mType +"0"+ this.type.sType].text) + 1;
                            this.parent.removeChild(this);
                            return;
                        }
                    }
                }
            }
            if (noHits) {
                console.log("no hit");
                //return gemstone
                if (!this.pileOfGems) {
                    // return to .oldPosition
                    console.log("im on empty and not from the pile");
                    this.position.x = this.oldPosition.x;
                    this.position.y = this.oldPosition.y;
                    playRedFlash(this);
                } else {
                    console.log("im on empty and from the pile");
                    // remake a gem on the pile if its less than 5
                    console.log(this.oldPosition);
                    if (diamondVaults[this.type.mType + "0" + this.type.sType].text < 5) {
                        console.log("less than 5 diamonds");
                        let dia = new PIXI.Sprite(
                            diamondColorPicker(this.type.sType)
                        );
                        dia.position.x = this.oldPosition.x;
                        dia.position.y = this.oldPosition.y;
                        console.log(dia.position);
                        diamondArea.addChild(dia);
                    }
                    playRedFlash(this);
                    diamondVaults[this.type.mType + "0" + this.type.sType].text = Number(diamondVaults[this.type.mType +"0"+ this.type.sType].text) + 1;
                    this.parent.removeChild(this);

                }
            }

        }

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

        // addAnimatedPath();
        let flashyPath = new PIXI.extras.AnimatedSprite(
            blueLineTexture
        );
        flashyPath.play();
        flashyPath.position = arrayOfPositions[6][6];
        flashyPath.anchor = {x:1,y:0.5};
        flashyPath.rotation = 2.18;
        flashyPath.parentGroup = pathGroup;
        flashyPath.zIndex = 2;
        flashyPath.scale = {x:0.1, y:1};
        flashyPath.animationSpeed = 0.3;
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