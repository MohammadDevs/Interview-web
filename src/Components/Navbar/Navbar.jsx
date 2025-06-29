import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-[#8b1215] shadow-sm flex justify-between px-4">
    <div className='flex gap-2'>
    <div><img className='w-14 bg-white rounded-sm' src="https://i.ibb.co/bgqq79Jz/pngegg.png" alt="logo" /></div>
    <div>
        <h2 className='text-white font-medium text-2xl'>KHAWAJA</h2>
        <div><span className='text-amber-300'>MANPOWER</span> <span className='text-white'>SERVICES</span></div>
    </div>
    </div>
  <div>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0">
        <li><button className='btn btn-soft'>Services</button></li>
        <li><button className="btn btn-soft">Industries</button></li>
        <li><button className="btn btn-soft">About</button></li>
        <li><button className="btn btn-soft">Contact</button></li>
        <li><button className="btn btn-soft">Blog</button></li>
      </ul>
    </div>
  </div>
  {/* left dropdown */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-4">
      <li><button className='btn btn-soft border-none text-white bg-[#972a2d]  hover:text-gray-500'>Services</button></li>
        <li><button className="btn btn-soft border-none text-white bg-[#972a2d] hover:text-gray-500">Industries</button></li>
        <li><button className="btn btn-soft border-none text-white bg-[#972a2d] hover:text-gray-500">About</button></li>
        <li><button className="btn btn-soft border-none text-white bg-[#972a2d] hover:text-gray-500">Contact</button></li>
        <li><button className="btn btn-soft border-none text-white bg-[#972a2d] hover:text-gray-500">Blog</button></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;