import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store';
import ChooseCertificates from './shared/ChooseCertificates/ChooseCertificates';
import './main.global.css';
import styles from './index.css'
import FormBlock from './shared/FormBlock/FormBlock';

const store = createStore(rootReducer, composeWithDevTools())

const App = () => {

    return (
        <Provider store={store}>
            <main>
                <ChooseCertificates />
                <FormBlock />
                <img className={styles.backgroundImg} src='./img/bg.jpg' alt=' Фоноввое изображение' />
            </main>
        </Provider>
    )
}


ReactDOM.render(
    <App />,
    document.querySelector('#react_root')
);