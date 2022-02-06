import { useState } from "react/cjs/react.development"
import { TodoListBody } from "./TodoListBody"

export const TodoListHeader = () => {
    const [todos, setTodos] = useState([])
   const [value, setValue] = useState('')

    const Add = () => {
        !todos.length ?setTodos([{id:1,text:value}]): setTodos([{id:todos.length + 1, text:value}, ...todos])
        setValue('')
    }


    return(
        <div>
            
              <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
              <button onClick={Add}>Add</button>
              <TodoListBody todos = {todos} setTodos = {setTodos}/>
            
        </div>
    )
}