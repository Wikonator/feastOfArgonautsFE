function negativePanelUI(negaMoveArray) {

    let negaSwap = function() {
        if (this.up === true || this.children === 1) {
            return
        }
        let ary = this.children;
        if (ary.length >= 3) {
            ary[0].visible = false;
            ary.push(ary.shift());
            ary[0].position.x = 100; ary[1].position.x = 50; ary[2].position.x = 0;
            ary[0].visible = true; ary[1].visible = true; ary[2].visible = true;
        } else
        if (ary.length === 2)
        {
            ary.push(ary.shift());
            ary[0].position.x = 50; ary[1].position.x = 0;
        }

    };

    negativePanelContainer.position = {x: 10, y: 47};
    negativePanelContainer.scale = {x: 0.38, y:0.35};
    negativePanelContainer.interactive = true;
    negativePanelContainer.on("click", negaSwap);

    let runningArtifacts = [];
    let moveNegPanel = function (up) {
        let displayArray = negativePanelContainer.parent.children;
        if (up === true) {
            negativePanelContainer.up = true;
            displayArray.unshift(displayArray.pop(displayArray.find(function (child){
                return child === negativePanelContainer;
            })));
            let counter = 0; let increment = 1; let positionY = 47;
            app.ticker.add( function tickerMover() {
                counter += increment;
                if (counter >= positionY) {
                    app.ticker.remove(tickerMover);
                    return;
                }
                negativePanelContainer.position.y -= increment;
                for (let i in negaMoveArray) {
                    negaMoveArray[i].position.y -= increment;
                }
            });

        } else {
            negativePanelContainer.up = false;
            let counter = 0; let increment = 1; let positionY = 43;
            app.ticker.add( function tickerMover () {
                counter += increment;
                if (counter >= positionY) {
                    app.ticker.remove ( tickerMover );
                    return;
                }
                negativePanelContainer.position.y += increment;
                for (let i in negaMoveArray) {
                    negaMoveArray[i].position.y += increment;
                }
            });
        }
    };

    let makeTheNegContainer = function (daemon, no) {
        let negativePanel = PIXI.loader.resources["negativePanel"].textures['negative_artefact_panel.png'];
        let negativeArtefactIcon = PIXI.loader.resources["negativePanel"].textures["artefact_example_with_mask.png"];
        if (no === 1) {
            let negaTextOptions = textOptions;
            negaTextOptions.fill = "red";
            negaTextOptions.align = "left";
            negaTextOptions.fontSize = 30;
            negaTextOptions.fontFamily = "conthrax";
            let xPosition = 0,
                currentSprite = 1,
                timePosition = {x: 460, y: 40},
                timeScale = {x: 1.5, y: 1.5}                   // XD lol
            ;
            if (daemon.artefact.length >= 3) {
                xPosition = 150;
            } else if (daemon.artefact.length == 2) {
                xPosition = 100;
            } else {
                xPosition = 50;
            }
            for (let artefact in daemon.artefact) {
                let negaSprite = new PIXI.Sprite(negativePanel);
                negaSprite.name = daemon.artefact[artefact].info.text;
                let negaTime = new PIXI.Text(daemon.artefact[artefact].countdown, negaTextOptions);
                negaTime.duration = daemon.artefact[artefact].countdown;
                let negaTempNo = new PIXI.Text(currentSprite, negaTextOptions);  // << Temporális
                currentSprite += 1;
                let negaIcon = new PIXI.Sprite(negativeArtefactIcon);
                let negaObject = {negaSprite, negaTime, negaIcon};
                runningArtifacts.push(negaObject);
                xPosition -= 50;
                negaSprite.position = {x: xPosition, y: 0};
                if (negativePanelContainer.children.length >= 3) {
                    negaSprite.visible = false;
                }
                negativePanelContainer.addChild(negaSprite);

                negaTime.position = timePosition;
                negaTime.scale = timeScale;
                negaTempNo.position = {x: timePosition.x - 150, y: timePosition.y};
                negaTempNo.scale = timeScale;
                negaIcon.position = {x: 120,y: 25};
                negaSprite.addChild(negaTime, negaTempNo, negaIcon);
            }
        } else{
            let negaSprite = new PIXI.Sprite(negativePanel);
            negativePanelContainer.addChild(negaSprite);
        }
    };

    createArtifacts = function (daemon) {
        for (let i in runningArtifacts) {
            negativePanelContainer.removeChild(runningArtifacts[i].negaSprite);
            negativePanelContainer.removeChild(runningArtifacts[i].negaTime);
        }
        if (daemon.state != 2) {
            if (negativePanelContainer.up) {
                return
            } else {
                negativePanelContainer.up = tru;
                makeTheNegContainer(daemon, 0);
                let up = true;
                moveNegPanel(up)
            }
        } else {
            if (negativePanelContainer.up) {
                negativePanelContainer.up = false;
                let down = false;
                moveNegPanel(down);
                makeTheNegContainer(daemon, 1);
            } else {
                negativePanelContainer.up = false;
                makeTheNegContainer(daemon, 1);
            }
        }

    };

    let hours, minutes, seconds;

    app.ticker.add(function (deltaTime) {
        for (let i in runningArtifacts) {
            runningArtifacts[i].negaTime.duration -= (16.67 * deltaTime);
            hours = Math.floor((runningArtifacts[i].negaTime.duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((runningArtifacts[i].negaTime.duration % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((runningArtifacts[i].negaTime.duration % (1000 * 60)) / 1000);
            runningArtifacts[i].negaTime.text = hours + " : " + minutes + " : " + seconds;
        }
    });
}