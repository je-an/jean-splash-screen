require(["SplashScreen", "css!bootstrap"], function (SplashScreen) {
    console.log("Hello world");
    var splashScreen = new SplashScreen({ path: "img/splash-screen.svg" });
    document.body.appendChild(splashScreen.element);
});