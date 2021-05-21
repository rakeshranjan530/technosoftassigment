import { useState } from "react";

const TodoComponent = () => {

    const [volatile, setVolatile] = useState({
        name:'',
        error:'',
        data:[]
    })
    const handleOnChange = (e) => {
        setVolatile((state)=>({
            ...state,
            name: e.target.value,
            error:''
        }))
    }
    const handleOnClick = () => {
        let error = ''
        let data = volatile.data;
        if(volatile.name === ''){
            error = "please enter name"
        } else{
            data.push(volatile.name);
        }
        setVolatile((state)=>({
            ...state,
            name:'',
            error,
            data,
        }))
    }
    return(
        <div>
            <div className="container">
                <h2 style={{textAlign:"center",margin:"0"}}>Welcome to TodoList</h2>
                    <div className="form">
                        <input onChange={handleOnChange} className="form_input" type="text" value={volatile?.name} placeholder="Enter name"></input>
                        <button onClick={handleOnClick} className="form_button">Add</button>
                    </div>
                    <div style={{color:'red',textAlign:"center"}}>{volatile.error}</div>
                    <div style={{padding:"10px"}}>
                        <ul>
                            {
                                volatile.data.map((item,i)=>{
                                    return (
                                        <li key={i}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
            </div>
        </div>
    )
}
export default TodoComponent;