const greeter = require('./Greeter.js');

document.querySelector("#root").appendChild(greeter());

// 手动 webpack 打包
// webpack {entry file} {destination for bundled file}
