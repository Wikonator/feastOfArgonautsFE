const beServer = {
    dev: 'localhost',
    test: 'foa2.regexcloud.sk',
    prod: 'foa.regexcloud.sk'
};
const prefix = "http://";
const port = ":4000";

// const actualBeServer = prefix + beServer.dev + port;
const actualBeServer = prefix + beServer.test + port;
// const actualBeServer = prefix + beServer.prod + port;

PIXI.utils.sayHello();

let textOptions = {
    fontFamily : 'conthrax',
    fontSize: 14,
    fill : "white",
    align : 'center'
};

let socket;

let dataFromBack;
let dataCameSwitch, setupIsDone, changeTheTab = false;
let unfoldPosition, levelBarFill;
let createVaultTable = function () {}, createCampsTable = function () {}, drawLevelBar = function() {} , createMessageTable = function () {}, createArtifacts = function () {};

let                                          // GUI texts
    userNameTxt = new PIXI.Text('1', { fontFamily : 'conthrax', fontSize: 16, fill : "white", align : 'left' }),
    userCitizenTxt = new PIXI.Text('2', { fontFamily : 'conthrax', fontSize: 13, fill : "yellow", align : 'left' }),
    userCasteTxt = new PIXI.Text('3', { fontFamily : 'conthrax', fontSize: 13, fill : "#33ffbd", align : 'left' }),
    progressLvlTxt = new PIXI.Text('4', { fontFamily : 'conthrax', fontSize: 13, fill : "yellow", align : 'left' }),
    progressExpTxt = new PIXI.Text('5', { fontFamily : 'conthrax', fontSize: 13, fill : "white", align : 'left' }),
    nextLvlExpTxt = new PIXI.Text('6', { fontFamily : 'conthrax', fontSize: 13, fill : "white", align : 'left' }),
    softCurTxt = new PIXI.Text('7', { fontFamily : 'conthrax', fontSize: 13, fill : "white", align : 'left' }),
    hardCurTxt = new PIXI.Text('8', { fontFamily : 'conthrax', fontSize: 13, fill : "white", align : 'left' }),
    messagesUnreadTxt = new PIXI.Text('', { fontFamily : 'conthrax', fontSize: 22, fill : "#1BFE8B", align : 'left' })
;

let windowWidth = window.innerWidth ,
    windowHeight = window.innerHeight;
console.log(windowHeight);
let uiWidth = 1520;
let backgroundWidth = 1920;

let sceneRatio = 0.56;
let relativeWidth = 1920;
let relativeHeight = 1080;
let canvasWidth = 0;
let canvasHeight = 0;
let renderer;

function renderResize() {
    let windowWidth = window.innerWidth ,
        windowHeight = window.innerHeight - 90;
    let screenRatio = windowHeight / windowWidth;
    canvasWidth = 0;
    canvasHeight = 0;

    if (screenRatio < sceneRatio)
    {
        canvasHeight = windowHeight;
        let otherRatio = canvasHeight / relativeHeight;
        canvasWidth = relativeWidth * otherRatio;
    } else {
        canvasWidth = windowWidth;
        let otherRatio = canvasWidth / relativeWidth;
        canvasHeight = (relativeHeight * otherRatio);
    }
}
renderResize();

// renderer = PIXI.autoDetectRenderer(canvasWidth, canvasHeight, {
//     transparent: true,
//     resolution: 1
// });

let scrollContainerSelector;

function scrollSelectedTab(delta) {
    // console.log("scrolly Scrolly"); // I swear to Machine God, if you erase this again I will end Ü
    // console.log(scrollContainerSelector);
    let scroller = scrollContainerSelector.children.find(function (elem) {
        return elem.id === 10;
    });
    // scroller.verticalScrollPosition -= delta.deltaY*2;
    // console.log(delta.deltaY);
    scroller._startTouch.y = scroller.verticalScrollPosition - (delta.deltaY*2);
    // console.log(scroller._startTouch.y);
    scroller.updateVerticalScrollFromTouchPosition(delta.deltaY, true);
    // console.log(scroller.verticalScrollPosition);
    // console.log(scroller._scrollPosition);
    // console.log(scroller._startScrollPosition);
}

let stage, playArea = new PIXI.Container(), GUIArea = new PIXI.Container();
let negativePanelContainer = new PIXI.Container(), vaultContainer = new PIXI.Container(),
    vaultScrollContainer = new PIXI.Container(), messageScrollContainer = new PIXI.Container(),
    campScrollContainer = new PIXI.Container(), messageContainer = new PIXI.Container(),
    campsContainer = new PIXI.Container(); let rect = new PIXI.Rectangle(0,20,150,200);
negativePanelContainer.up = true;

let resolutionParameter;
let display;
let app;

playArea.id = 100;

function startLoad(){
    resolutionParameter = dataFromBack.quality;
    PIXI.loader
        .add("buyPanel", 'images/' + resolutionParameter + '/GUI/buyPanel/buy_panel.json')
        .add("tradePanel", 'images/' + resolutionParameter + '/GUI/tradePanel/trade_panel.json')
        .add("scarab", 'images/' + resolutionParameter + '/GUI/scarab/scarab_logo.json')
        .add("miningPanel", 'images/' + resolutionParameter + '/GUI/miningArea/area_panel.json')
        .add("userPanel", "images/" + resolutionParameter + "/GUI/userPanel/user_panel.json")
        .add("negativePanel", "images/" + resolutionParameter + "/GUI/negativePanel/negative_panel.json")
        .add("campsVaultPanel", "images/" + resolutionParameter + "/GUI/campsVaultPanel/campsvault_panel.json")
        .add("campsVaultTable", "images/" + resolutionParameter + "/GUI/campsVaultTable/campsvault_table.json")
        .add("crossAndDiamonds", "images/" + resolutionParameter + "/GUI/campsVaultTable/closeTab.json")
        .add("messagePanel", "images/" + resolutionParameter + "/GUI/messagePanel/message_panel.json")
        .add("messageTable", "images/" + resolutionParameter + "/GUI/messageTable/message_panel.json")
        .add("townMap", "images/" + resolutionParameter + "/town/townMap.json")
        .add("noSheet", "images/" +resolutionParameter+ "/town/noSheetMap.jpg" )
        .load(themeLoader(resolutionParameter));
}

let fontLoader;
let theme;


function themeLoader(resolutionParameter) {
    // let resolutionParameter = dataFromBack.quality;
    theme = new GOWN.ThemeParser('images/' + resolutionParameter.toString() + '/aeon_desktop/aeon_desktop.json');  // <<<<< tu je error
    theme.once(GOWN.Theme.COMPLETE, onComplete, this);
}

// let gownApplication = new GOWN.Application(PIXI.settings.RENDER_OPTIONS, GOWN.Application.SCREEN_MODE_FULLSCREEN, "display", 1920, 1075, renderer, stage);
;
function onComplete() {
    setup(dataFromBack);
}

let nameOfKey = function (key, buttonName) {            // function returns the icon for the vault tab
    if (buttonName) {
        key = buttonName;
    }
    key = key + "";
    switch(key) {
        case '1':
            return PIXI.loader.resources["campsVaultTable"].textures['diamond_icon.png'];
        case '4':
            return  PIXI.loader.resources["campsVaultTable"].textures['stella_icon.png'];
        case '3':
            return PIXI.loader.resources["campsVaultTable"].textures['screw_ikon.png'];
        case '5':
            return PIXI.loader.resources["campsVaultTable"].textures['inventory_icon.png'];
        case '2':
            return PIXI.loader.resources["campsVaultTable"].textures['artefact_icon.png'];
        case '6':
            return PIXI.loader.resources["campsVaultTable"].textures['artefact_icon.png'];
        default:
            console.log(key);
            console.log("can't see sh!t captain");
            return {};
    }
};

function changeText() {
    userNameTxt.text = (dataFromBack.profile.login).toUpperCase();
    userCitizenTxt.text = (dataFromBack.profile.citizen).toUpperCase();
    userCasteTxt.text = (dataFromBack.profile.caste).toUpperCase();
    progressLvlTxt.text = dataFromBack.profile.progress.level;
    progressExpTxt.text = dataFromBack.profile.progress.exp;
    nextLvlExpTxt.text = (" / " + dataFromBack.profile.progress.nextlevel);
    softCurTxt.text = dataFromBack.trade.info.text;
    hardCurTxt.text = dataFromBack.buy.info.text;
    messagesUnreadTxt.text = dataFromBack.vault.messages.unread.text;
    drawLevelBar();
}

function checkRefresh() {
    if (dataCameSwitch === true && setupIsDone === true ) {
        changeText();
        createArtifacts(dataFromBack.demonized);
        createVaultTable(dataFromBack.vault.items);
        createCampsTable(dataFromBack.vault.camps);
        createMessageTable(dataFromBack.vault.messages[1]);          // this order must b maintained - refactor into one function
        dataCameSwitch = false;


    } else {
        return
    }
}


window.addEventListener('resize', resize);


function resize () {

    renderResize();
    let UIratio = (canvasWidth / uiWidth);
    GUIArea.scale.x = GUIArea.scale.y = UIratio;
    playArea.children[0].width = canvasWidth;
    playArea.children[0].height = canvasHeight;
    app.renderer.resize(canvasWidth, canvasHeight);
}



function animationLoop() {

    requestAnimationFrame(animationLoop);
    // app.render(stage);
    checkRefresh();
    // resize();
}




foAapp.factory('littleService', function ($http, $location, sessionService) {
    return {
        runlittle: function () {
            console.log("factory sa stala");

            socket = io.connect(actualBeServer, {query:"token=" + sessionService.get('token')});

            PIXI.Sprite.prototype.bringToFront = function() {	if (this.parent) {
                let parent = this.parent;
                parent.removeChild(this);
                parent.addChild(this);
            }};

            app = new PIXI.Application(windowWidth, windowHeight, {transparent: true});
            app.stage = new PIXI.display.Stage(app.view);

            display = document.getElementById('display');
            display.appendChild(app.view);

            fontLoader = new type.Loader();

            fontLoader.add("bariol", "font/Bariol.ttf");
            fontLoader.add("conthrax", "font/conthrax.ttf");
            fontLoader.once("loadComplete", function() {

            });
            fontLoader.load();


            socket.on('ui:onRefresh', function (data) {

                // console.log("data from back: ");
                console.log(data);
                dataFromBack = data;
                dataCameSwitch = true;
                startLoad();
                animationLoop();
                socket.emit("town:onLoad");
            });

            socket.emit("stela:onLoad");

            socket.on("stela:onRefresh", function (data) {

                console.log(data);
                console.log("stela on load");
            });

            socket.on("town:onRefresh", function (data) {
                // console.log("I shot the data");
                // console.log(data);
            });
        }
    }
});

//////////////////// global helper functions ////////////////////

'use strict';
// Speed up calls to hasOwnProperty
const hasOwnProperty = Object.prototype.hasOwnProperty;
    function isEmpty(obj) {
        // null and undefined are "empty"
        if (obj == null) return true;
        // Assume if it has a length property with a non-zero value
        // that that property is correct.
        if (obj.length > 0)  return false;
        if (obj.length === 0)  return true;
        // If it isn't an object at this point
        // it is empty, but it can't be anything *but* empty
        // Is it empty?  Depends on your application.
        if (typeof obj !== "object") return true;
        // Otherwise, does it have any properties of its own?
        // Note that this doesn't handle
        // toString and valueOf enumeration bugs in IE < 9
        for (let key in obj)
            if (hasOwnProperty.call(obj, key)) return false;
        return true;
    }


