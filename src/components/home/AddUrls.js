import React, { useState } from 'react'
import SlideBar from './SlideBar'
import axios from 'axios';
import BaseUrl from '../../BaseUrl';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AddUrls() {

    const navigate = useNavigate();
    const [url,setUrl]= useState({})

    const handleChange = ((event)=>{
        setUrl({
            ...url,[event.target.name] :event.target.value
        })
    })
    const handleSubmit = ((event)=>{
        event.preventDefault();
        

        const form_Data = new FormData();
          
         
          form_Data.append('endpoint',url.endpoint);
          form_Data.append('interval',url.interval);
       
        
        axios.post(BaseUrl+'monitors/',form_Data,
        { headers: {
        'Content-Type': 'multipart/form-data' 
        } }).then((response)=>{
            console.log(response.data)
            console.log("Course added successfully");
                        
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Course added successfully',
                showConfirmButton: false,
                timer: 2000
                })
                navigate(-1)

        }).catch((error)=>{
            
            console.log(error.response.data)
        })
    })
  return (
    <div style={{minHeight:'100vh'}}>
    
    <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'>
          <SlideBar/>
  
        </aside>
        <section className='col-md-9'>
                <div >
                    {/* <h5 className="">Add Course</h5> */}
                    <div className="card-body">
                        <form action="">
                        
                            <div className="mb-3">
                                <label for='title' className="form-labe">EndPoint</label>
                                <input type="text"id='endpoint' onChange={handleChange}  name='endpoint' className="form-control" />
                            </div>
                           
                            <div className="mb-3">
                                <label for='interval' className="form-label">Interval</label>
                                <input type="number" name='interval' onChange={handleChange} id='interval' className="form-control" ></input> 
                            </div>
                            
                           
                            <button type='sumbit' onClick={handleSubmit}  className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>
          
            </section>
        

        
    

</div>
</div>
</div>
  )
}

export default AddUrls