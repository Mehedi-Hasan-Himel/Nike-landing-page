import React from 'react';
import Logo from "/images/brand_logo.png"
const Navbar = () => {
   return (
     <header>
       <nav className="container">
         <section>
           <img src={Logo} alt="Brand Logo" />
         </section>
         <ul>
           <li>
             <a href="">Menu</a>
           </li>
           <li>
             <a href="">Location</a>
           </li>
           <li>
             <a href="">About</a>
           </li>
           <li>
             <a href="">Contact</a>
           </li>
         </ul>
         <button className='btn-primary'>Login</button>
       </nav>
     </header>
   );
};

export default Navbar;