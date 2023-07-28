var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})


//Role
var canvas01, anim_container01, dom_overlay_container01, canvas02, anim_container02, dom_overlay_container02, canvas03, anim_container03, dom_overlay_container03, canvas04, anim_container04, dom_overlay_container04, canvas05, anim_container05, dom_overlay_container05, stage, exportRoot, fnStartAnimation;
function init01() {
    canvas01 = document.getElementById("canvas01");
    anim_container01 = document.getElementById("roleCard_01");
    dom_overlay_container01 = document.getElementById("dom_overlay_container01");
    var comp01 = AdobeAn.getComposition("EC43A663D1A440C3ADAF9725EE4961C8");
    var lib = comp01.getLibrary();
    handleComplete01({}, comp01);
}
function handleComplete01(evt, comp01) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp01.getLibrary();
    var ss = comp01.getSpriteSheet();
    exportRoot = new lib.role01();
    stage = new lib.Stage(canvas01);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas01.width = w * pRatio * sRatio;
            canvas01.height = h * pRatio * sRatio;
            canvas01.style.width = dom_overlay_container01.style.width = anim_container01.style.width = w * sRatio + 'px';
            canvas01.style.height = anim_container01.style.height = dom_overlay_container01.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false, 'both', false, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}

function init02() {
    canvas02 = document.getElementById("canvas02");
    anim_container02 = document.getElementById("roleCard_02");
    dom_overlay_container02 = document.getElementById("dom_overlay_container02");
    var comp02 = AdobeAn.getComposition("6E848A2B1FEC44009217EB9E85C54D1F");
    var lib = comp02.getLibrary();
    handleComplete02({}, comp02);
}
function handleComplete02(evt, comp02) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp02.getLibrary();
    var ss = comp02.getSpriteSheet();
    exportRoot = new lib.role02();
    stage = new lib.Stage(canvas02);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas02.width = w * pRatio * sRatio;
            canvas02.height = h * pRatio * sRatio;
            canvas02.style.width = dom_overlay_container02.style.width = anim_container02.style.width = w * sRatio + 'px';
            canvas02.style.height = anim_container02.style.height = dom_overlay_container02.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false, 'both', false, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}

function init03() {
    canvas03 = document.getElementById("canvas03");
    anim_container03 = document.getElementById("roleCard_03");
    dom_overlay_container03 = document.getElementById("dom_overlay_container03");
    var comp03 = AdobeAn.getComposition("FA3EA1C5DA1E466CA13BEB7BF9F66ED7");
    var lib = comp03.getLibrary();
    handleComplete03({}, comp03);
}
function handleComplete03(evt, comp03) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp03.getLibrary();
    var ss = comp03.getSpriteSheet();
    exportRoot = new lib.role03();
    stage = new lib.Stage(canvas03);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas03.width = w * pRatio * sRatio;
            canvas03.height = h * pRatio * sRatio;
            canvas03.style.width = dom_overlay_container03.style.width = anim_container03.style.width = w * sRatio + 'px';
            canvas03.style.height = anim_container03.style.height = dom_overlay_container03.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false, 'both', false, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}

function init04() {
    canvas04 = document.getElementById("canvas04");
    anim_container04 = document.getElementById("roleCard_04");
    dom_overlay_container04 = document.getElementById("dom_overlay_container04");
    var comp04 = AdobeAn.getComposition("107D80036C864FB1B168DFD66F9E164F");
    var lib = comp04.getLibrary();
    handleComplete04({}, comp04);
}
function handleComplete04(evt, comp04) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp04.getLibrary();
    var ss = comp04.getSpriteSheet();
    exportRoot = new lib.role04();
    stage = new lib.Stage(canvas04);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas04.width = w * pRatio * sRatio;
            canvas04.height = h * pRatio * sRatio;
            canvas04.style.width = dom_overlay_container04.style.width = anim_container04.style.width = w * sRatio + 'px';
            canvas04.style.height = anim_container04.style.height = dom_overlay_container04.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false, 'both', false, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}

function init05() {
    canvas05 = document.getElementById("canvas05");
    anim_container05 = document.getElementById("roleCard_05");
    dom_overlay_container05 = document.getElementById("dom_overlay_container05");
    var comp05 = AdobeAn.getComposition("A568F79C54FD4F96B3578D354C91F3C6");
    var lib = comp05.getLibrary();
    createjs.MotionGuidePlugin.install();
    handleComplete05({}, comp05);
}
function handleComplete05(evt, comp05) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp05.getLibrary();
    var ss = comp05.getSpriteSheet();
    exportRoot = new lib.role05();
    stage = new lib.Stage(canvas05);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas05.width = w * pRatio * sRatio;
            canvas05.height = h * pRatio * sRatio;
            canvas05.style.width = dom_overlay_container05.style.width = anim_container05.style.width = w * sRatio + 'px';
            canvas05.style.height = anim_container05.style.height = dom_overlay_container05.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false, 'both', false, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
//Role END


// GoTop
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
let goTopBTN = document.querySelector('.top');
let header = document.querySelector('header');
window.addEventListener('scroll', function (e) {
    if (this.window.pageYOffset >= 200) {
        goTopBTN.style.opacity = "1";
    } else {
        goTopBTN.style.opacity = "0";
    }
    // 捲軸下拉時選單變化
    if (this.window.pageYOffset > 500) {
        header.classList.add('headerFix')
    } else {
        header.classList.remove('headerFix')
    }
})
goTopBTN.addEventListener('click', scrollToTop)


// 選單連結滑動至區塊
function hashLink(link){
    let links = document.querySelectorAll(link)
    links.forEach(function(item){
        let targetHref = item.getAttribute('href');
        let targetPos = document.querySelector(targetHref)
        item.addEventListener("click",function(e){
            e.preventDefault(); 
            targetPos.scrollIntoView({
                behavior: 'smooth'
            });
        });
    })
}
hashLink('.scrollTop')
hashLink('.scrollTopM')
hashLink('.scrollTopRole')


// 選單定位
function menuPos(link) {
    let links = document.querySelectorAll(link)
    links.forEach(function(item){
        let targetHref = item.getAttribute('href');
        let target = document.querySelector(targetHref)
        window.addEventListener('scroll', function (e) {
            if(window.scrollY>target.offsetTop-60 && window.scrollY<target.offsetTop+target.offsetHeight-60) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    })
}
menuPos('.scrollTop')
menuPos('.scrollTopM')


// 聯絡表單
let formName = document.querySelector('.contactForm1');
let formMail = document.querySelector('.contactForm2');
let formTxt = document.querySelector('.contactForm3');
let nameAlert = document.querySelector('.contactName');
let mailAlert = document.querySelector('.contactMail');
let txtAlert = document.querySelector('.contactTxt');
let send = document.querySelector('.contactSend');
let sendMore = document.querySelector('.contactMore');
send.addEventListener('click', sendMail);
function sendMail() {
    if (formName.value === "" && formMail.value === "" && formTxt.value === "") {
        nameAlert.textContent = "! 請輸入您的稱呼";
        mailAlert.textContent = "! 請輸入您的信箱";
        txtAlert.textContent = "! 請輸入留言";
    } else if (formName.value === "" && formMail.value === "" && formTxt.value != "") {
        nameAlert.textContent = "! 請輸入您的稱呼";
        mailAlert.textContent = "! 請輸入您的信箱";
        txtAlert.textContent = "";
    } else if (formName.value === "" && formMail.value != "" && formTxt.value != "") {
        nameAlert.textContent = "! 請輸入您的稱呼";
        mailAlert.textContent = "";
        txtAlert.textContent = "";
    } else if (formName.value != "" && formMail.value === "" && formTxt.value != "") {
        nameAlert.textContent = "";
        mailAlert.textContent = "! 請輸入您的信箱";
        txtAlert.textContent = "";
    } else if (formName.value === "" && formMail.value != "" && formTxt.value === "") {
        nameAlert.textContent = "! 請輸入您的稱呼";
        mailAlert.textContent = "";
        txtAlert.textContent = "! 請輸入留言";
    } else if (formName.value != "" && formMail.value === "" && formTxt.value === "") {
        nameAlert.textContent = "";
        mailAlert.textContent = "! 請輸入您的信箱";
        txtAlert.textContent = "! 請輸入留言";
    } else if (formName.value != "" && formMail.value != "" && formTxt.value === "") {
        nameAlert.textContent = "";
        mailAlert.textContent = "";
        txtAlert.textContent = "! 請輸入留言";
    } else if (formName.value != "" && formMail.value != "" && formTxt.value != "") {
        let formData = {
            'entry.352265040': formName.value,
            'entry.266585158': formMail.value,
            'entry.1869623661': formTxt.value,
        };
        $.ajax({
            type: 'POST',
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSedzHvjchnoBXrnIoKkiEfNV4Vpp6AOty27IcatMNaN91kyuw/formResponse',
            data: formData,
            contentType: 'application/json',
            dataType: 'jsonp',
            complete: function () {
                //切換div
                document.querySelector('.contactFrame').style.display = "none";
                document.querySelector('.contactSuccess').style.display = "flex";
                sendMore.addEventListener('click',function(){
                    document.querySelector('.contactFrame').style.display = "flex";
                    document.querySelector('.contactSuccess').style.display = "none";
                })
                //以下清空輸入框
                formName.value = "";
                formMail.value = "";
                formTxt.value = "";
            }
        });
    }
}

// 載入部落格資料
axios.get('https://www.googleapis.com/blogger/v3/blogs/1913223910884824369/posts?key=AIzaSyCyH-7sXnMD7nVuLT5-sWsL9g8FYdNRAUU')
.then(
    response => {
        response.data.items.forEach(function(item){
            let array = {}
            const regex = /https.*?jpg|https.*?png/g
            const data = new Date(item.published)
            array.url = item.url
            array.date = `${data.getMonth()}月 ${data.getDate()}日, ${data.getFullYear()}`
            array.title = item.title
            array.img = item.content.match(regex)
            blogPost.push(array)
        })
    }
)
.catch(
    error=> console.log(error)
)