import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

function SlideBar() {

  let {logOutUser} = useContext(AuthContext)

  return (
    <div>
        <div className="list-group list-group-flush card">
            {/* <Link to='/user/dashboard' className="list-group-item list-group-item-action">Dashboard</Link> */}
            <Link to="/" className="list-group-item list-group-item-action">URLS</Link>
            {/* <Link to='/favorite-courses' className="list-group-item list-group-item-action">Favorite Courses</Link> */}
            {/* <Link to='/user/cirtificate' className="list-group-item list-group-item-action">Assigments</Link> */}
            
            <Link to='/delete_url' className="list-group-item list-group-item-action">DELETED URLS</Link>
            <p onClick={logOutUser} className="list-group-item list-group-item-action text-danger">Log Out</p> 
            
        </div>


    </div>
    
  )
}

export default SlideBar