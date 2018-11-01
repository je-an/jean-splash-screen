## Description

Provides functionality for displaying a splash screen

## Support
Supports both CommonJS and AMD eco system. If there is no loader, SplashScreen is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var obj = new SplashScreen();
```
- Use it with require.js
```js
require(["path/to/SplashScreen"], function(SplashScreen){
    // Work with SplashScreen
});
```
- Use it with node.js
```js
var SplashScreen = require("jean-splash-screen");
```
## Installation

`npm install jean-splash-screen --save --legacy-bundling`

## API Reference

TBD

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT