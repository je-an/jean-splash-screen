define([ // jscs:ignore
    "DomElement",
    "DomUtil",
    "Inheritance",
    "TypeCheck",
    "Failure",
    "Merge"
], function (
    DomElement,
    DomUtil,
    Inheritance,
    TypeCheck,
    Failure,
    Merge
) {
        /**
         * Provides functionality for displaying a splash screen 
         * @alias SplashScreen 
         * @constructor
         * @param {Object} options - options object
         * @param {String} options.path - path to the splash screen image
         */
        var SplashScreen = function (options) {
            Inheritance.inheritConstructor(DomElement, this, Merge({ // jscs:ignore
                path: TypeCheck.isString(options.path) ? options.path : Failure.throwTypeError("options.path is not a string"),
                html: '<div id="jean-splash-screen"></div>'
            }, TypeCheck.isDefined(options) ? options : {}));
            var style = this.element.style;
            style.width = "100%";
            style.height = "100%";
            style.position = "fixed";
            style.zIndex = "10000";
            style.top = "0";
            style.left = "0";
            style.background = 'url("' + this.options.path + '")';
            style.backgroundSize = "cover";
            style.backgroundPosition = "center";
            style.transition = "height 0.3s"; 
        };
        Inheritance.inheritPrototype(SplashScreen, DomElement);
        /** */
        SplashScreen.prototype.state = {
            SHOW: "show",
            HIDE: "hide"
        };
        /** */
        SplashScreen.prototype.setState = function (state) {
            if (TypeCheck.isEnumValue(state, this.state)) {
                if (state === this.state.SHOW) {
                    this.element.style.height = "100%";
                } else if (state === this.state.HIDE) {
                    this.element.style.height = "0";
                }
            } else {
                Failure.throwTypeError("state is not a value of SplashScreen.state");
            }
        };
        return SplashScreen;
    });