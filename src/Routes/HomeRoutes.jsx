import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Body from '../Component/Body'
import Administration from '../Pages/Administration/Administration'
import Assignment from '../Pages/Assignment/Assignment'
import Login from '../Pages/Auth/Login'
import Library from '../Pages/Library/Library'
import StudentService from '../Pages/StudentService/StudentService'


const HomeRoutes = () => {
  return (
    <> 
        <Routes>
            <Route exact path='/login'  element={<Login />} />
            <Route exact path='/administration'  element={<Administration />} />
            {/* <Route exact path="/" element={<Body />} /> */}
            <Route exact path='/'  element={<Assignment />} />
            <Route exact path='/library'  element={<Library />} />
            <Route exact path='/student_service'  element={<StudentService />} />
        </Routes>
    </>
  )
}

export default HomeRoutes