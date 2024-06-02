import axios from 'axios'
import { useEffect, useState } from 'react'
import './comments.css'
const Comments = () => {
  const [comment, setComment] = useState ([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/comments").then(response=>{
        setComment(response.data)
      })
    }, [])
  return (
    <>
      <table className="table table-bordered  table-stripped ">
        <thead>
          <tr>
            <th>postId</th>
            <th>id</th>
            <th>name</th>
            <th>email</th> 
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {
            comment.map((item, index)=>(
              <tr key={index}>
                <td>{item.postId}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default Comments