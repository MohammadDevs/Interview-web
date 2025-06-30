import React from 'react';
import NavLinks from './NavLinks';

const NavLink = [
  {
    "id": "nav-service",
    "name": "Services",
    "href": "/services"
  },
  {
    "id": "nav-industries",
    "name": "Industries",
    "href": "/industries"
  },
  {
    "id": "nav-about",
    "name": "About",
    "href": "/about"
  },
  {
    "id": "nav-contact",
    "name": "Contact",
    "href": "/contact"
  },
  {
    "id": "nav-blog",
    "name": "Blog",
    "href": "/blog"
  }
];

const Navbar = () => {
  const links = NavLink.map(link=> <NavLinks key={link.id} link={link}></NavLinks>)
        
    return (
        <div className="navbar bg-[#8b1215] shadow-sm flex justify-between items-center md:py-3 md:px-8 sticky top-0 z-50">
    <div className='flex gap-2'>
    <div><img className='w-16 bg-white rounded-sm' src="https://i.ibb.co/bgqq79Jz/pngegg.png" alt="logo" /></div>
    <div>
        <h2 className='text-white font-medium text-2xl'>KHAWAJA</h2>
        <div><span className='text-amber-300'>MANPOWER</span> <span className='text-white'>SERVICES</span></div>
    </div>
    </div>
  <div>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100  rounded-box z-1 mt-3 w-52 p-2 shadow right-0 gap-3">
        {links}
      </ul>
    </div>
  </div>
  {/* left dropdown */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-4">
      {links}
    </ul>
  </div>
</div>
    );
};

export default Navbar;