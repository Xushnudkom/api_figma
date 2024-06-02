import { useEffect, useState } from 'react'
import axios from 'axios'
import './todos.css'
const Todos = () => {
    const [todos, setTodos] = useState ([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/todos").then(response=>{
        console.log(response);
        setTodos(response.data)
        
      })
    }, [])
  return (
    <>
      <table className="table table-bordered  table-stripped ">
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>completed</th> 
          </tr>
        </thead>
        <tbody>
          {
            todos.map((item, index)=>(
              <tr key={index}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
  }
  
  export default Todos