import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({to, className, children}) => {
    return (
        <NavLink to={to} className={({isActive}) => isActive ? "text-[#FC42B4] underline underline-offset-4 font-medium text-sm" : `font-medium text-sm ${className}`}>{children}</NavLink>
    );
};

export default MyLink;