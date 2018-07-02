function setup(dataFromBack) {

    app.stage.addChild(playArea);

    createPlayerUI();
    enterTownMap();
    resize();
    // enterBuilding();      // <<< Enter player house automatically
}