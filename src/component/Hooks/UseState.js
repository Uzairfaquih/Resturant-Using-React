import React from 'react'
import "./style.css"

const UseState = () => {
    const [myNum, setmyNum] = React.useState(10)
    return (
        <>
        <div className='center_div'>
            <p>{myNum}</p>
            <div className="button2" onClick={()=> setmyNum(myNum+1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Hover me1
            </div>
            <div className="button2"onClick={()=> (myNum>0 ? setmyNum(myNum-1):setmyNum(0))}>
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

export default UseState
