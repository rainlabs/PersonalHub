import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
    to: string,
    makeActive?: boolean,
    className?: string,
    activeClassName?: string,
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const AppNavLink: FC<Props> = ({to, makeActive, className, activeClassName, children, onClick}) => {
    return (
        <NavLink onClick={onClick} end to={to} className={({ isActive }) =>
                isActive || makeActive ? `text-white ${className || ''} ${activeClassName || ''}` : `hover:text-white ${className || ''}`
            }
        >
            { children }
        </NavLink>
    )
}

export default AppNavLink;