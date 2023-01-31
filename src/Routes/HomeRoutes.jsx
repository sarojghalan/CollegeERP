import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Component/Home'
import Administration from '../Pages/Administration/Administration'
import Assignment from '../Pages/Assignment/Assignment'
import Library from '../Pages/Library/Library'
import StudentService from '../Pages/StudentService/StudentService'


const HomeRoutes = () => {
  return (
    <>
        <Routes>
            <Route exact path='/'  element={<Home />} />
            <Route exact path='/administration'  element={<Administration />} />
            <Route exact path='/assignment'  element={<Assignment />} />
            <Route exact path='/library'  element={<Library />} />
            <Route exact path='/student_service'  element={<StudentService />} />
        </Routes>
    </>
  )
}

export default HomeRoutes