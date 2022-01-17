import React from 'react'
import "./style.css"

const ToDo = () => {
    const [inputData, setinputData] = React.useState()
    const [myList, setmyList] = React.useState([])
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./image/todo.svg" alt="logo" />
                        <figcaption>Add your list here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='Add item' className='form-control' 
                        value={inputData} 
                        onChange={(event)=>setinputData(event.target.value)}/>
                        <i className="fa fa-plus add-btn"></i>
                    </div>

                    {/* Show item___________________________________________ */}
                    <div className="showItems">
                        <div className="eachItem">
                            <h3>Apple</h3>
                            <div className="todo-btn">
                                <i className="far fa-edit add-btn"></i>
                                <i className="far fa-trash-alt add-btn"></i>
                            </div>
                        </div>
                    </div>
                    {/* __________________________________________________ */}

                    <div className="showItems">
                        <button className='btn effect04' data-sm-link-text="Remove All">
                            <span>
                                Check List
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo