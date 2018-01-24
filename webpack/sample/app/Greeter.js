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
import styles from './Greeter.css'
class Greeter extends Component {
    render () {
        return (
            <div className={styles.root}> //使用 cssModule 添加类名的方法 不会造成不同组件之间的污染
              {config.greetText + 'react'}
            </div>
        );
    }
}

export default Greeter;
