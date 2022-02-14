// import {connect} from 'react-redux'
import {inc, dec, rnd} from '../actions'
import { useSelector, useDispatch } from 'react-redux' 


const Counter = () => {    
    // useSelector() аналогичен mapStateToProps, то есть берет кусочек state из глобального state
    // const {counter} = useSelector(state => state) сокращенная запись
    const counter = useSelector(state => state.counter)

    // когда мы захотим получать из стейта комбинированные данные в виде объекта, 
    // нарушается оптимизация, перерендер будет происходить при любом изменении глобального стейта,
    // даже если это не косается целевого компонента. 
    // Первое решение ислользовать для каждого отдельного нужного нам значения 
    // отдельный useSelector и присваивать к отдельной переменной
    // Второе решение использовать стороннюю библиотеку reselect с ее хуком
    // Третий способ - добавить функцию {shallowEqual} которая есть внутри react-redux
    // const counter = useSelector(someFuncReturnObject, shallowEqual)

    // const counter = useSelector(state => {
    //     return {
    //         counter: state.counter,
    //         name: state.name
    //     }
    // })

    // useDispatch() аналогичен mapDispatchToProps, то есть связывает нашу переменную с dispatch из store
  
    const dispatch = useDispatch();
      // Если я собираюсь действие передавать ниже по иерархии то нужно использовать useCallback
    //   const someDispatchForChild = useCallback(() => dispatch({type: 'someAction'}), [dispatch])
    // <MyChildComponent someDispatchForChild={someDispatchForChild} />

    return (
        <div style={{width:200, margin: '40px auto', border: '1px solid gold', textAlign:'center', padding: 20,}}>
            <h1>{counter}</h1>
            <button onClick={() => {dispatch(dec())}}>DEC</button>
            <button onClick={() => {dispatch(inc())}}>INC</button>
            <button onClick={() => {dispatch(rnd())}}>RND</button>
        </div>
    )
}


// const mapStateToProps = (state) => {
//     return {
//         counter: state.value
//     }
// }

// export default connect(mapStateToProps, actions)(Counter)
export default Counter;