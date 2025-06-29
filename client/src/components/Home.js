import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate();
  return (
    <div>
      <Navbar/>
      <div className="home-container">
      <h1 className="home-heading">Welcome to the Lost & Found Portal</h1>
      <h2 className="home-heading2">Here you can Report others' lost items and also Find a lost item of yours</h2>
      <div className="d-flex gap-4">
        <button className="home-button outline" onClick={()=>navigate("/report")}>Report Lost Item</button>
        <button className="home-button outline" onClick={()=>navigate("/find")}>Find an Item</button>
      </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Home