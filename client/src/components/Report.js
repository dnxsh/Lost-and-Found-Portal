import React, { useState } from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import "./Report.css"
import { useNavigate } from 'react-router-dom'


function Report() {
  const navigate=useNavigate();
  let [name,setName]=useState("")
  let [contact,setContact]=useState("")
  let [itemName,setItemName]=useState("")
  let [date,setDate]=useState("")
  let [location,setLocation]=useState("")
  let [image,setImage]=useState("")
  let [desc,setDesc]=useState("")
  return (
    <div>
        <Navbar/>
        <div className='report-container'>
          <div className="report-form-container">
  <h2 className="report-form-heading">Report Lost Item</h2>
  <form>
        <div className='row'>

        <div className="mb-3 col-md-6">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(ev)=>{setName(ev.target.value)}}
            required
          />
        </div>

        <div className="mb-3 col-md-6">
          <label className="form-label">Your Contact Number</label>
          <input
            type="text"
            className="form-control"
            onChange={(ev)=>{setContact(ev.target.value)}}
            required
          />
        </div>

        <div className="mb-3 col-md-7">
          <label className="form-label">Item Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(ev)=>{setItemName(ev.target.value)}}
            required
          />
        </div>

        <div className="mb-3 col-md-5">
          <label className="form-label">Date Found</label>
          <input
            type="date"
            className="form-control"
            onChange={(ev)=>{setDate(ev.target.value)}}
            required
          />
        </div>

        <div className="mb-3 col-md-7">
          <label className="form-label">Last Seen Location</label>
          <input
            type="text"
            className="form-control"
            onChange={(ev)=>{setLocation(ev.target.value)}}
            required
          />
        </div>

        <div className="mb-3 col-md-5">
          <label className="form-label">Upload Item Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(ev)=>{setImage(ev.target.files[0])}}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description of Item</label>
          <textarea
            type="text"
            className="form-control"
            onChange={(ev)=>{setDesc(ev.target.value)}}
            required
          />
        </div>
        </div>
        
        <button 
          onClick={async (e) => {
            e.preventDefault();

            const fd = new FormData();
            fd.append("name", name);
            fd.append("contact", contact);
            fd.append("itemName", itemName);
            fd.append("date", date);
            fd.append("location", location);
            fd.append("image", image);
            fd.append("desc", desc);

            try {
              const resp = await fetch("https://lost-and-found-portal-rtda.onrender.com/report/add", {
                method: 'POST',
                body: fd,
              });

              const data = await resp.json();
              console.log(data);
              if(data.msg==="Item Reported"){
                alert("Item Reported successfully")
                navigate('/find');
              }
            } catch (err) {
              console.error("Error submitting form:", err);
            }
          }}
          type="submit" 
          className="btn submit-btn mx-auto d-block">
          Submit Report
        </button>
    
  </form>
</div>
        </div>
        <Footer/>
    </div>
  )
}

export default Report