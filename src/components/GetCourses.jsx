import React from 'react'
import './GetCourses.css'
import vid from '../components/data/video.mp4'

function GetCourses() {
  return (
    <>
  <div class="content-container">
    <div class="content">
      <div class="text">
        <h2>Experience the Extraordinary</h2>
        <p>Dive into a realm of breathtaking visuals and captivating narratives. Our handpicked collection of videos will transport you to places you've only dreamed of.</p>
      </div>
      <div class="video">
        <iframe width="560" height="315" src={vid} title="Video" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
    </>
  )
}

export default GetCourses