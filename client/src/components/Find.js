import React, {useEffect, useState} from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import "./Find.css"

function Find() {
  const [items,setItems]= useState([]);

  useEffect(() => {
    fetch("https://lost-and-found-portal-rtda.onrender.com/report/show")
      .then(res => res.json())
      .then(data => {
        setItems(data);
      })
      .catch(err => {
        console.error("Failed to fetch items:", err);
      });
  }, []);

  const [searchItem, setSearchItem] = useState('');

  const filteredCards = items.filter(item =>
    item.itemName.toLowerCase().includes(searchItem.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchItem.toLowerCase())
  );

  const handleDelete = async (id) => {
  try {
    const confirm = window.confirm("Are you sure you want to delete this item?");
    if (!confirm) return;

    const res = await fetch(`https://lost-and-found-portal-rtda.onrender.com/delete/${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    console.log(result);

    // Update local state to remove deleted item from UI
    setItems((prev) => prev.filter(item => item._id !== id));
  } catch (err) {
    console.error("Delete failed:", err);
  }
};


  return (
    <div>
        <Navbar/>
        <div className='find-container'>
          <div className="container py-5">
      <h2 className="find-heading">Lost & Found Items</h2>

      <div className="mb-4 text-center">
        <input
          type="text"
          className="form-control w-75 mx-auto"
          placeholder="Search items..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>

      {filteredCards.length > 0 ? (
        filteredCards.map((item, index) => (
          <div key={index} className="card mb-4 shadow-sm">
            <div className="row g-0">
              <div className="col-md-3 d-flex align-items-center justify-content-center p-2">
                <img
                  src={`https://lost-and-found-portal-rtda.onrender.com/itemImage/${item.image}`}
                  alt={item.title}
                  className="img-fluid rounded"
                  style={{ maxHeight: '200px' }}
                />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h4 className="card-title">{item.itemName}</h4>
                  <p className="card-text" style={{ marginBottom: "4px" }}>{item.desc}</p>
                  <p className="card-text" style={{ marginBottom: "4px" }}>Last seen : {new Date(item.date).toLocaleDateString()} at {item.location}</p>
                  <p className="card-text" >Contact : {item.name} at {item.contact}</p>
                  <button className="btn btn-outline-danger" onClick={() => handleDelete(item._id)}>Request Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-muted text-center">No items found.</p>
      )}
    </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Find