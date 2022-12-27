import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllUrls, removeUrl } from '../user_axios/userAxios';
import SlideBar from './SlideBar'

function Home() {

  const [load,setLoad] = useState(false)
  const [urls, setUrls] = useState([]);

  useEffect(()=>{
    getAllUrls().then((url)=>{
      setUrls(url)
      
    })




  },[load])

  return (
    <div style={{minHeight:'100vh'}}>
    
  <div className='container mt-4'>
    <div className='row'>
      <aside className='col-md-3'>
        <SlideBar/>

      </aside>
      <section className='col-md-9'>
      {/* <form action="/action_page.php">
  <div class="mb-3 mt-3">
    <label for="email" class="form-label">Email:</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Password:</label>
    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
  </div>
  <div class="form-check mb-3">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox" name="remember"/> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */}
 <table class="table">
  <thead>
  {/* <h5 className='table-header '>My Courses</h5> */}
    <tr>
      <th scope="col">No</th>
      <th scope="col">URL</th>
      <th scope="col">INTERVEL</th>
      <th scope="col">CREATED TIME</th>
      <th scope="col">ACTION</th>
      <th scope="col"><Link to={`addurl/`} ><button className=" btn btn-outline-info ">Add Urls</button></Link></th>
    </tr>
  </thead>
  <tbody>
  {urls.map((url,index)=>{
                   return(
    <tr key={index}>
      <th scope="row">{url.id}</th>
      <td><Link to={`details/${url.id}`} ><a>{url.endpoint}</a></Link></td>
      <td>{url.interval} second</td>
      <td>{url.created_at}</td>
      <td><button onClick={()=>{removeUrl(url.id);setLoad(!load)}} className=" btn btn-outline-danger ">Delete</button></td>
      <td><button onClick={()=>{removeUrl(url.id);setLoad(!load)}} className=" btn btn-outline-danger ">Edit</button></td>
    </tr>
    )
    })}
  </tbody>
</table>
    
  </section>

        
    

    </div>
  </div>
  </div>
  )
}

export default Home