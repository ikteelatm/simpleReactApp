import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux' 



function todos(state = [], action) {

}

//This is the store we create with redux's createStore method
const store = createStore(todos, ['Use Redux'])


ReactDOM.render(
    <Provider store={store}>
        <App />
     </Provider>
    , document.getElementById('root')
)
registerServiceWorker();
