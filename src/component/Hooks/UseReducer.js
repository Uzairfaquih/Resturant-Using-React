import React from 'react'
import "./style.css"

const reducer=(state,action)=>{
 if (action.type==="Incr") {
     state = state+1;
 }
 if (action.type==="Decr" && state>0) {
     state -=1;
 }
 return state;
};

const UseReducer = () => {
    // const [myNum, setmyNum] = React.useState(10)
    const [state, dispatch] = React.useReducer(reducer, 0)
    return (
        <>
        <div className='center_div'>
            <p>{state}</p>
            <div className="button2" onClick={()=> dispatch({type:"Incr"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Hover me1
            </div>
            <div className="button2"onClick={()=> dispatch({type:"Decr"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Hover me2
            </div>
        </div>
        </>
    )
}

export default UseReducer
