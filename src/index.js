import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, bindActionCreators } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer';
// import * as actions from './actions'
import App from './components/App';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// const { dispatch, subscribe, getState } = store
// const { dec, rnd, inc } = bindActionCreators(actions, dispatch)

ReactDOM.render(
    <React.StrictMode>
        {/* <Counter
                //    subscribe={subscribe}
                counter={getState().value}
                inc={inc}
                dec={dec}
                rnd={() => {
                    const rndValue = Math.floor(Math.random() * 10)
                    rnd(rndValue)
                }}
            /> */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

