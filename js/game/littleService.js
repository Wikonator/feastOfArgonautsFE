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

let windowWidth = window.outerWidth ,
    windowHeight = window.outerWidth;
console.log(windowHeight);
let uiWidth = 1520;
let backgroundWidth = 1920;

let renderer = PIXI.autoDetectRenderer(windowWidth, windowHeight, {
    transparent: true,
    resolution: 1
});

let display;



let app;


function scrollyScrolly(delta) {
    let scrollContainer = vaultContainer.children.find(function (elem) {
        return elem.id === 10;
    });
    scrollContainer.verticalScrollPosition -= delta.deltaY;
    scrollContainer._startTouch.y = scrollContainer.verticalScrollPosition;
    scrollContainer.updateVerticalScrollFromTouchPosition(delta.deltaY, true);
}


let stage = new PIXI.Container(), playArea = new PIXI.Container(), GUIArea = new PIXI.Container();
let negativePanelContainer = new PIXI.Container(),
    vaultContainer = new PIXI.Container(),
    messageContainer = new PIXI.Container(),
    campsContainer = new PIXI.Container();
let rect = new PIXI.Rectangle(0,20,150,200);
negativePanelContainer.up = true;


function startLoad(){
    let resolutionParameter = dataFromBack.quality;
    PIXI.loader
        .add("buyPanel", 'images/' + resolutionParameter + '/GUI/buyPanel/buy_panel.json')
        .add("tradePanel", 'images/' + resolutionParameter + '/GUI/tradePanel/trade_panel.json')
        .add("scarab", 'images/' + resolutionParameter + '/GUI/scarab/scarab_logo.json')
        .add("miningPanel", 'images/' + resolutionParameter + '/GUI/miningArea/area_panel.json')
        .add("userPanel", "images/" + resolutionParameter + "/GUI/userPanel/user_panel.json")
        .add("negativePanel", "images/" + resolutionParameter + "/GUI/negativePanel/negative_panel.json")
        .add("campsVaultPanel", "images/" + resolutionParameter + "/GUI/campsVaultPanel/campsvault_panel.json")
        .add("campsVaultTable", "images/" + resolutionParameter + "/GUI/campsVaultTable/campsvault_table.json")
        .add("messagePanel", "images/" + resolutionParameter + "/GUI/messagePanel/message_panel.json")
        .add("messageTable", "images/" + resolutionParameter + "/GUI/messageTable/message_panel.json")
        .add("townMap", "images/" + resolutionParameter + "/town/Sources/townMap.jpg")
        .add("airport", "images/" + resolutionParameter + "/town/Sources/airport.png")
        .add("generalStore", "images/" + resolutionParameter + "/town/Sources/generalStore.png")
        .add("governorsHouse", "images/" + resolutionParameter + "/town/Sources/governorsHouse.png")
        .add("market", "images/" + resolutionParameter + "/town/Sources/market.png")
        .add("playerHouse", "images/" + resolutionParameter + "/town/Sources/playerHouse.png")
        .add("ragnar", "images/" + resolutionParameter + "/town/Sources/ragnar.png")
        .add("researchTraining", "images/" + resolutionParameter + "/town/Sources/researchTraining.png")
        .add("secCo", "images/" + resolutionParameter + "/town/Sources/secCo.png")
        .add("temple", "images/" + resolutionParameter + "/town/Sources/temple.png")
        .load(themeLoader(resolutionParameter));
}

let fontLoader;


let theme;


function themeLoader(resolutionParameter) {
    // let resolutionParameter = dataFromBack.quality;
    theme = new GOWN.ThemeParser('images/' + resolutionParameter.toString() + '/aeon_desktop/aeon_desktop.json');  // <<<<< tu je error
    theme.once(GOWN.Theme.COMPLETE, onComplete, this);
}

function onComplete () {

    setup(dataFromBack)
}

let nameOfKey = function (key) {            // function returns the icon for the vault tab
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

let resize_orig = function () {
    windowWidth = document.body.scrollWidth;
    windowHeight = document.body.scrollHeight;
    let ratio = (windowWidth / uiWidth);
    let playAreaWidthRatio = (windowWidth / backgroundWidth);
    let playAreaHeightRatio =( windowHeight / 1075 );

    // console.log(playAreaWidthRatio);
    GUIArea.scale.x = GUIArea.scale.y = ratio;
    playArea.scale.x =  playAreaWidthRatio;
    playArea.scale.y =  playAreaHeightRatio;

    renderer.resize(windowWidth, windowHeight);
};

function resize () {
    // let resize = function () {
    windowWidth = document.body.clientWidth;
    // console.log('document.body.clientWidth:', document.body.clientWidth);
    // console.log('window.outerWidth:', window.outerWidth);
    // windowHeight = window.outerHeight;
    windowHeight = window.outerHeight * stage.scale.y - 30;
    // console.log('window.outerHeight:', window.outerHeight);
    // console.log('document.body.clientHeight:', document.body.clientHeight);
    let ratio = (windowWidth / uiWidth);

    stage.scale.x = stage.scale.y = ratio;
    renderer.resize(windowWidth, windowHeight);
}

function animationLoop() {

    requestAnimationFrame(animationLoop);

    renderer.render(stage);
    checkRefresh();
    resize();
}




foAapp.factory('littleService', function ($http, $location, sessionService) {
    return {
        runlittle: function () {

            socket = io.connect(actualBeServer, {query:"token=" + sessionService.get('token')});

            PIXI.Sprite.prototype.bringToFront = function() {	if (this.parent) {
                console.log("Im happening");
                let parent = this.parent;
                parent.removeChild(this);
                parent.addChild(this);
            }};

            app = new PIXI.Application(windowWidth, windowHeight, {transparent: true});

            display = document.getElementById('display');

            display.appendChild(renderer.view);
            // display.addEventListener("wheel", scrollyScrolly, false);

            fontLoader = new type.Loader();

            console.log(fontLoader);
            fontLoader.add("bariol", "font/Bariol.ttf");
            fontLoader.add("conthrax", "font/conthrax.ttf");
            fontLoader.once("loadComplete", function() {

            });
            fontLoader.load();

// var sa_sprite = new GOWN.ScrollContainer();         // GOWN scroller container
// stage.addChild(sa_sprite);

            socket.on('ui:onRefresh', function (data) {

                console.log("ui on ref emit");
                dataFromBack = data;
                console.log(dataFromBack, userNameTxt, userCitizenTxt, userCasteTxt, progressLvlTxt, progressExpTxt, nextLvlExpTxt, softCurTxt, hardCurTxt);
                dataCameSwitch = true;
                startLoad();
                animationLoop();
                socket.emit("town:onLoad");
            });

            socket.on("town:onRefresh", function (data) {
                console.log("I shot the sherrif");
                console.log(data);
            });
        }
    }
});

