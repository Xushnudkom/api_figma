import axios from 'axios'
import { useEffect, useState } from 'react'
import './albums.css'

const Albums = () => {
    const [album, setAlbum] = useState ([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/albums").then(response=>{
        setAlbum(response.data)
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
          </tr>
        </thead>
        <tbody>
          {
            album.map((item, index)=>(
              <tr key={index}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
               </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
  }
  
  export default Albums