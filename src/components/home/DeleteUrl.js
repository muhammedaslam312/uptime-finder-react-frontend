import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllDeleteUrl } from '../user_axios/userAxios';
import SlideBar from './SlideBar'
import { DataGrid, GridColDef,  } from '@mui/x-data-grid';

function DeleteUrl() {
    const {url_id} = useParams()
    const [urlStatus, setUrlStatus] = useState([]);

    useEffect(()=>{
        getAllDeleteUrl().then((details)=>{
            setUrlStatus(details)
            
        })

        

    },[])


    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        // { field: 'id', headerName: 'ID', width: 175 },
        { field: 'url', headerName: 'URL ', width: 250 },
        // { field: 'status', headerName: 'response_status', width: 130 },
        // {
        //   field: 'order_amount',
        //   headerName: 'price',
        //   type: 'number',
        //   width: 130,
        // },
        // {
        //     field: 'admin_commition',
        //     headerName: 'Admin commition',
        //     type: 'number',
        //     width: 130,
        //   },
        
      ];
  return (
    <div style={{minHeight:'100vh'}}>
    
    <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'>
          <SlideBar/>
  
        </aside>
        <section className='col-md-9'>
            <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={urlStatus}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
            </div>
        </section>

        
    

</div>
</div>
</div>
  )
}

export default DeleteUrl