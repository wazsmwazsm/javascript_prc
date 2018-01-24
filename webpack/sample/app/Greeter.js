// var config = require('./config.json');

// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//
//     return greet;
// };

// 使用 ECS 6 语法
import React, {Component} from 'react';
import config from './config.json';

class Greeter extends Component {
    render () {
        return (
            <div>
              {config.greetText + 'react'}
            </div>
        );
    }
}

export default Greeter;
