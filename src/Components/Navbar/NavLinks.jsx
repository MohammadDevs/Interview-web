import React from 'react';
import { NavLink } from 'react-router';

const NavLinks = ({link}) => {
    return (
        <li className='btn btn-soft border-none text-white bg-[#972a2d] hover:text-gray-500'>
            {/* <a className='bg-transparent' href={link.href}>{link.name}</a> */}
            <NavLink to={link.href}>{link.name}</NavLink>
        </li>
    );
};

export default NavLinks;