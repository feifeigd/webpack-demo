import _ from 'lodash';
import css from './style.css';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element; 
}

//document.body.appendChild(component()); 

document.getElementById('app').innerHTML = 'Hello hehe';

