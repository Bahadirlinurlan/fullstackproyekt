import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        
      <nav>


      <div className='navbar__left'>
      <strong>Notary</strong>
      </div>




        <div className='navbar__right'>
        <ul>
          <i><li><Link to="/" style={{textDecoration: 'none', color:'inherit'}}>Home</Link></li></i>
          
            <i><li><Link to="/Add" style={{textDecoration: 'none', color:'inherit'}}>ADD</Link></li></i>
            <li>Practise Areas</li>

            <li>Testimonials</li>

            <li>About</li>

            <li>Contact</li>

</ul>
</div>



        
</nav>
        
       
    )
}
export default Navbar