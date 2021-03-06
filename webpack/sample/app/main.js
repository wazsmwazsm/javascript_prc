// 手动 webpack 打包
// webpack {entry file} {destination for bundled file}

// const greeter = require('./Greeter.js');
//
// document.querySelector("#root").appendChild(greeter());

// 使用 react 和 ES6 语法
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

// 导入 css 文件 (也可以使用 require)
import "./main.css";

render(<Greeter />, document.getElementById('root'));
