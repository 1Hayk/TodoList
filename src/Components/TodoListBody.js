import './css/TodoListBody.css'
import { ToDoModal } from './ToDoModal'



export const TodoListBody = ({todos, setTodos, }) => {
    const delItem = (id) => {
       const newArr = todos.filter(item => item.id !== id)
        setTodos(newArr)
    }

 return(
     <div >
         {
             todos.map((item, index) =>{
                 return(
                     <div className="body"  key={index}>
                         <p>{item.id}.</p>
                        <input type="checkbox" />
                        <div>{item.text}</div>
                        <button onClick={() => delItem(item.id)}>Delete</button>
                        <button>Edit</button>
                        
                     </div>
                    
                 )
             })
         }
         

     </div>
 )   

}