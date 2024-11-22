import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className='flex justify-between items-center gap-36 p-10'>
            <div className='logo'>Next ToDo</div>
            <div className='menus'>
                <ul className='flex gap-5 items-center'>
                    <li> <Link href={"/"} >Home</Link></li>
                    <li> <Link href={"/about"} >About</Link></li>
                    <li> <Link href={"/contact"} >Contact</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar