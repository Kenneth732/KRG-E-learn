import React from 'react'
import Header from './components/Header'
import Courses from './components/Courses'
import GetCoursesContainer from './components/GetCourses'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='Main-Container'>
      <Navbar />
      <Header/>
      <Courses />
      <GetCoursesContainer />
    </div>
  )
}

export default App