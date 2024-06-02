import axios from "axios";
import "./posts.css";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState ([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
        setPosts(response.data)
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
            <th>body</th> 
          </tr>
        </thead>
        <tbody>
          {
            posts.map((item, index)=>(
              <tr key={index}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};

export default Posts



