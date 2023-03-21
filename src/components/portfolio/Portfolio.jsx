import React, { useState } from 'react';
import "./portfolio.css"
import data from "./data"

function Portfolio() {
  const [item, setItem ] = useState(data  );

  const filterItem = (cateItem) => {
    const updateItem = data.filter((curElem) => {
      return curElem.category === cateItem  
    })
    setItem(updateItem)
  }
  return (
    <div>
      <section className='portfolio mtop'>
        <div className='container'>

          <div className='head flexSB'>
            <div className='left'>
              <h6>Creative Works</h6>
              <h2>Check My Portfolio</h2>
            </div>
          </div>

          <div className='links'>
            <ul className='flexSB'>
              <li className='active' onClick={() => setItem(data)} >All</li>
              <li  onClick={() => filterItem("info")} >Products</li>
              <li  onClick={() => filterItem("sold")} >Solds</li>
              <li  onClick={() => filterItem("system")} >System</li>
              <li  onClick={() => filterItem("service")} >Services</li>
            </ul>
          </div>
          <div className='content-grid-mtop'>
            {item.map ((elem) => {
              const {cover, title} = elem;
              return(
                <div className='box'>
                  <div className='img'>
                    <img src={cover} alt="" />
                  </div>
                  <div className='overlay'>
                    <h1>{title}</h1>
                  </div>
                </div>
              )
            }) }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio;
