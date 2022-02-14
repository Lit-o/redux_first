import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, bindActionCreators } from 'redux'

import reducer from './reducer';
import {inc} from './actions'
import * as actions from './actions'



// Применяя createStore мы создаем объект store который будет 
// содержать состояние state и правила его изменения описанные 
// в reducer. Этот объект получит методы .subscribe() и .dispatch()
const store = createStore(reducer)
// для быстроты использования деструктурируем из store dispatch subscribe getState
const {dispatch, subscribe, getState} = store

const update = () => {
    document.getElementById('counter').textContent = getState().value
}

// метод объекта store который отслеживает были ли изменения в 
// state и если были, то вызывает callback функцию, в частности update
subscribe(update)

document.querySelector('#inc').addEventListener('click', () => {
    // dispatch - метод объекта store, возможность store получить инструкции
    // доставляет указания по изменению
    dispatch(inc());
});


// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }

// const decDispatch = bindActionCreators(dec, dispatch)
// const rndDispatch = bindActionCreators(rnd, dispatch)

const {dec, rnd} = bindActionCreators(actions, dispatch)


document.getElementById('dec').addEventListener('click', dec);
document.getElementById('rnd').addEventListener('click', () => {
    const rndValue = Math.floor(Math.random() * 10)
    rnd(rndValue)
});



ReactDOM.render(
    <React.StrictMode>
        <>

        </>
    </React.StrictMode>,
    document.getElementById('root')
);


