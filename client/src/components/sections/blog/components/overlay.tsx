import React, { FC, useState } from 'react';

type Props = {
    active: boolean,
    children: React.ReactNode
}

const BlogOverlay: FC<Props> = ({ active, children }) => {
    const openClass = 'w-screen h-screen opacity-100'
    const closeClass = 'w-0 h-0 opacity-0'
    const [open, setOpen] = useState(active)

    function closeOverlay(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault()
        setOpen(false)
    }

    return (
        <div className={`fixed top-0 left-0 ${open ? openClass : closeClass} z-90 flex justify-center items-center bg-gray-900 duration-700`}>
            <a href="#"
                className="fixed top-6 right-8 text-white hover:text-amber-500 text-7xl font-semibold duration-300"
                onClick={closeOverlay}>&times;</a>
            <div>
                { children }
            </div>
        </div>
    )
}

export default BlogOverlay;