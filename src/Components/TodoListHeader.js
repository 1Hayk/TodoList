import { useState } from "react/cjs/react.development"
import { TodoListBody } from "./TodoListBody"

export const TodoListHeader = () => {
    const [todos, setTodos] = useState([])
   const [value, setValue] = useState('')
   const {isOpen} = todos

    const Add = (e) => {
        e.preventDefault()
        !todos.length ?setTodos([{id:1,text:value, isOpen:'false'}]): setTodos([...todos,{id:todos.length + 1, text:value, isOpen:'false'} ])
        setValue('')
    }


    return(
        <div>
            <form onSubmit={(e) =>Add(e)} >
              <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
              <button >Add</button>
              </form>
              <TodoListBody todos = {todos} setTodos = {setTodos}/>
              
             
            
        </div>
    )
}