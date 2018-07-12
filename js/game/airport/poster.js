function onClickPoster(sceneLoader, backGroundSprite){
    
    let bigPoster01 = new PIXI.Sprite()
    bigPoster01.texture = sceneLoader.resources["poster01"].texture;

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

    bigPoster01.x = 1160;
    bigPoster01.y = 300;
    bigPoster01.height *= 3;
    bigPoster01.width *= 3;

    backGroundSprite.addChild(bigPoster01, cancelHolder, cancelCross);
    console.log("poster")
/////     /////    //////////////////   ONCLIK  //////////////            /////////////////
    function onClickClosePoster(){
        backGroundSprite.removeChild(bigPoster01, cancelHolder, cancelCross)
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