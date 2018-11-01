require(["SplashScreen", "DomUtil", "css!bootstrap"], function (SplashScreen, DomUtil) {
    var isDisplayed = true;
    var splashScreen = new SplashScreen({ path: "img/splash-screen.svg" });
    document.body.appendChild(splashScreen.element);
    var showBtn = DomUtil.createElementFromMarkup("<button>Show</button>");
    showBtn.style.zIndex = "100000000000";
    showBtn.style.position = "fixed";
    showBtn.style.top = 0;
    document.body.appendChild(showBtn);
    showBtn.addEventListener("click", function () {
        if (!isDisplayed) {
            isDisplayed = true;
            splashScreen.setState(splashScreen.state.SHOW);
        }
    });


    var hideBtn = DomUtil.createElementFromMarkup("<button>Hide</button>");
    hideBtn.style.zIndex = "100000000000";
    hideBtn.style.position = "fixed";
    hideBtn.style.top = 30;
    document.body.appendChild(hideBtn);
    hideBtn.addEventListener("click", function () {
        if (isDisplayed) {
            isDisplayed = false;
            splashScreen.setState(splashScreen.state.HIDE);
        }
    });

});