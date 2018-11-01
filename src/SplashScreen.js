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
            this.element.style.width = "100%";
            this.element.style.height = "100%";
            this.element.style.position = "fixed";
            this.element.style.zIndex = "10000";
            this.element.style.top = "0";
            this.element.style.left = "0";
            this.element.style.background = 'url("' + this.options.path + '")';
            this.element.style.backgroundSize = "cover";
            this.element.style.backgroundPosition = "center";
            /*  this.img = DomUtil.getChildById(this.element, "jean-splash-screen-img");
             this.img.style.width = "100%";
             this.img.style.height = "100%";
             this.img.style.backgroundSize = "cover"; */
        };
        Inheritance.inheritPrototype(SplashScreen, DomElement);
        return SplashScreen;
    });