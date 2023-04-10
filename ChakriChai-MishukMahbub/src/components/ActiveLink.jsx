import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to}) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive? "text-primary":""}>
            </NavLink>
        </div>
    );
};

export default ActiveLink;