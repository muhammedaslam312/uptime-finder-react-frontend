import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './home/Login'
import { AuthProvider } from '../context/AuthContext'
import Header from './home/Header'
import Home from './home/Home'
import AddUrls from './home/AddUrls'
import UrlDetails from './home/UrlDetails'
import DeleteUrl from './home/DeleteUrl'
import Register from './home/Register'
import RequireAuth from '../utils/RequireAuth'

function Main() {
  return (
    <div>

        <BrowserRouter>
      <AuthProvider>

      <Header/>
      <Routes>
      
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/' element={<RequireAuth><Home/></RequireAuth>}></Route>
      <Route path='addurl/' element={<RequireAuth><AddUrls/></RequireAuth>}></Route>
      <Route path='details/:url_id' element={<RequireAuth><UrlDetails/></RequireAuth>}></Route>
      <Route path='delete_url/' element={<RequireAuth><DeleteUrl/></RequireAuth>}></Route>
      </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default Main