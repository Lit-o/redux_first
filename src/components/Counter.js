import {connect} from 'react-redux'
import * as actions from '../actions'
// import {bindActionCreators} from 'redux'

const Counter = ({counter, inc, dec, rnd}) => {
    // const rndValue = Math.floor(Math.random() * 10)
    return (
        <div >
            <h1>{counter}</h1>
            <button onClick={dec}>DEC</button>
            <button onClick={inc}>INC</button>
            <button onClick={rnd}>RND</button>
            {/* <button onClick={rnd(rndValue)}>RND</button> */}
        </div>
    )
}

// чистая синхронная функция, возвращает объект только с нужными нам 
// данными, которые мы пропишем, из глобального объекта store
const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

// const mapDispatchToProps = (dispatch) => {
//     // const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
//     // return {
//     //     inc,
//     //     dec,
//     //     rnd
//     // }
//     return bindActionCreators(actions, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default connect(mapStateToProps, actions)(Counter)