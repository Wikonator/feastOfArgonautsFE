function onClickPoster(sceneLoader, backGroundSprite, dataFromBack){
    let bigPosters = [];
    let bigPoster1 = new PIXI.Sprite()
    bigPoster1.texture = sceneLoader.resources["poster01"].texture;
    bigPosters.push(bigPoster1);

    let cancelHolder = new PIXI.Sprite (
        PIXI.loader.resources["crossAndDiamonds"].textures['close_btn_bg.png']
    ), cancelCross = new PIXI.Sprite (
        PIXI.loader.resources["crossAndDiamonds"].textures['close_btn_icon.png']
    );
    cancelCross.hover = PIXI.loader.resources["crossAndDiamonds"].textures['close_btn_icon_hover.png'];
    cancelCross.normal = PIXI.loader.resources["crossAndDiamonds"].textures['close_btn_icon.png'];

    cancelCross.interactive = true;
    cancelCross.on('click', onClickClosePoster)
    cancelCross.on('mouseover', ButtonOver)
    cancelCross.on('mouseout', ButtonOut);
    cancelCross.x = 2630;
    cancelCross.y = 290;
    cancelCross.scale = {x: 2, y: 2};

    cancelHolder.x = 2605;
    cancelHolder.y = 265;
    cancelHolder.scale = {x: 2, y: 2};


    bigPosters[dataFromBack.info-1].x = 1160;
    bigPosters[dataFromBack.info-1].y = 300;
    bigPosters[dataFromBack.info-1].height *= 3;
    bigPosters[dataFromBack.info-1].width *= 3;

    backGroundSprite.addChild(bigPosters[dataFromBack.info-1], cancelHolder, cancelCross);
/////     /////    //////////////////   ONCLIK  //////////////            /////////////////
    function onClickClosePoster(){
        backGroundSprite.removeChild(bigPosters[dataFromBack.info-1], cancelHolder, cancelCross)
    }
    function ButtonOver() {
        this.texture = this.hover;
    }
    function ButtonOut() {
        if (this.isdown) {
            return;
        }
        this.texture = this.normal;
    }
}