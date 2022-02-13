

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

export default Counter