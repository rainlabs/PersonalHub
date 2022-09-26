import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
    to: string,
    makeActive?: boolean,
    className?: string,
    children?: React.ReactNode
}

const AppNavLink: FC<Props> = ({to, makeActive, className, children}) => {
    return (
        <NavLink to={to} className={({ isActive }) =>
                isActive || makeActive ? `text-white ${className}` : `hover:text-white ${className}`
            }
        >
            { children }
        </NavLink>
    )
}

export default AppNavLink;