import React from 'react'

function Header() {
  return (
      <header className='header'>
        <div className='container'>
            <div className='row'>
               <div className='col-6'>
                  <div className='header__content'>
                     <div className='header-section'>
                     <h2>Hello, I am</h2>
                     <h1>Marvin Chaviel</h1>
                     <p>Si puedes diseñar una cosa, entonces puedes diseñarlo todo, <br/>si lo haces bien, perdurará para siempre</p>
                     <div className='header__buttons'>
                        <a href='header' className='btn btn-outline'>
                          Hire me 
                        </a>
                     </div>
                </div> 
            </div>
        </div>
       <div className='col-6'>
       <img src="./img/header_right.png " alt='' className='image'/>
       </div>
    </div>
 </div>
</header>
  )
}

export default Header;
