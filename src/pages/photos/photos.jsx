import { useEffect, useState } from 'react'
import axios from 'axios'
import './photos.css'
const Photos = () => {
    const [photo, setPhoto] = useState ([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/photos").then(response=>{
        console.log(response);
        setPhoto(response.data)
        
      })
    }, [])
  return (
    <>
      <table className="table table-bordered  table-stripped ">
        <thead>
          <tr>
            <th>albumId</th>
            <th>id</th>
            <th>title</th>
            <th>url</th> 
            <th>thumbnailUrl</th>
          </tr>
        </thead>
        <tbody>
          {
            photo.map((item, index)=>(
              <tr key={index}>
                <td>{item.albumId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td><img src={item.url} alt="photo" /></td>
                <td><img src={item.thumbnailUrl} alt="photo" /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
  }
  
  export default Photos