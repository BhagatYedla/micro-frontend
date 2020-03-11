import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export class WebComponent extends HTMLElement {

    mountApp;

    connectedCallback(){
        this.renderMount();
    }

    disConnectedCallback(){
        ReactDOM.unmountComponentAtNode(this.mountApp);
    }

    renderMount(){
        if (!this.mountApp) {
            this.mountApp = document.createElement('div');
            this.attachShadow({ mode: 'open' }).appendChild(this.mountApp);
        }
        ReactDOM.render(<App /> , this.mountApp);
    }

}

// ReactDOM.render(<App />, document.getElementById('root'));
window.customElements.define('react-container' , WebComponent);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
