({
    baseUrl: '.',
    out: 'dist/jean-splash-screen.js',
    optimize: 'none',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/SplashScreen"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else { \n" +
        "\t \troot.SplashScreen = root.SplashScreen || {}; \n" +
        "\t \troot.SplashScreen = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/SplashScreen'); \n" +
        "}));"
    },
     paths:{
       
    }
})