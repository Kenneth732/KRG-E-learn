import React from 'react'
import './Header.css'
import HeadPic from '../components/data/newc-removebg-preview (1).png'

function Header() {
  return (
    <>
      <div className='Text-Box'>
        <h2>Find Our Best Oline <br></br> Courses & Become <br /> the Master</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni <br /> aut architecto modi, tempore ea dicta placeat at quod fuga<br /> autem pariatur natus quis repellat rerum vel reiciendis! Laudantium, ex.</p>
        <a href="" className='x'>View More</a>
      </div>
      <div className="user-box">
        <div className="card-two-image">
           <img src={HeadPic} alt="" />
        </div>
        <img src={HeadPic} alt="" />
        <img src={HeadPic} alt="" />
      </div>
    </>
  )
}

export default Header
