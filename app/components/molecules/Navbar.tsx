'use client'

import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import MenuIcon from '../icons/MenuIcon'
import NavMobile from './NavMobile'
import { links } from '@/libs/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [navMobileOpen, setNavMobileOpen] = useState(false)
    const [scroll, setScroll] = useState(false)

    const pathName = usePathname();
    useEffect(() => {
        if (window.scrollY > 0) {
            setScroll(true);
        }
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`md:px-[4rem] px-4 w-full fixed top-0 left-0 right-0 z-50 flex items-center justify-between  py-5 transition-colors duration-300  ${scroll ? 'bg-white' : 'bg-transparent'
            }`} >
            <Link href='/'>
                <p className='text-3xl font-bold'>LOGO</p>
            </Link>
            <button className='md:hidden flex'
                onClick={() => setNavMobileOpen(!navMobileOpen)}
            >
                <MenuIcon />
            </button>
            <div className='md:flex hidden flex-row gap-6 items-center'>
                {links.map((link, index) => (
                    <Link href={link.href} key={index}
                        className={`${pathName == link.href ? "text-[#004D99]" : "hover:text-[#004D99] text-[#495057]"}  `}
                    >{link.name}</Link>
                ))}
                <button className='bg-[#004D99] px-5 py-2 rounded-xl text-white'>Contact Us</button>
            </div>
            <AnimatePresence>
                {navMobileOpen && (
                    <NavMobile
                        setNavMobileOpen={setNavMobileOpen}
                        navMobileOpen={navMobileOpen}
                    />
                )}
            </AnimatePresence>
        </nav>
    )
}
