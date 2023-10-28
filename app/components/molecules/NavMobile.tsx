"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { links } from '@/libs/data'
import TimesIcon from '../icons/TimesIcon'
import { usePathname } from 'next/navigation'

type NavMobileProps = {
    navMobileOpen: boolean;
    setNavMobileOpen: (value: boolean) => void;
}

export default function NavMobile(
    {
        navMobileOpen,
        setNavMobileOpen
    }: NavMobileProps
) {

    const menuMotion = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.3,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.4,
                duration: 0.3,
                ease: [0.12, 0, 0.39, 1],
            },
        },
    }

    const menuItemsMotion = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.3,
                ease: [0.37, 0, 0.63, 1],
            }
        },
        open: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1],
                duration: 0.5,
            }
        }
    }

    const containerMotion = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            }
        },
        open: {
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.09,
                staggerDirection: 1,
            }
        }
    }
    const pathName = usePathname();
    return (
        <motion.div
            variants={menuMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed origin-top top-0 left-0 right-0 bottom-0 bg-[#004D99] z-50 w-full h-screen">
            <div className='flex h-full flex-col'>
                <div className='flex justify-between items-center bg-white mt-10 px-10 '>
                    <Link href="/" className=' p-5'>
                        <p className='text-3xl font-bold'>LOGO</p>
                    </Link>
                    <button onClick={() => setNavMobileOpen(!navMobileOpen)}>
                        <TimesIcon className='text-black' />
                    </button>
                </div>
                <motion.ul
                    variants={containerMotion}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col h-full justify-center items-center  gap-4 p-10">
                    {links.map((link, index) => (
                        <div className='overflow-hidden py-2' key={index}>
                            <motion.li
                                variants={menuItemsMotion}
                                key={index}>
                                <Link href={link.href}
                                    className={`${pathName == link.href ? "text-black" : "text-white hover:text-gray-300"} text-lg font-semibold`}                                >
                                    {link.name}
                                </Link>
                            </motion.li>
                        </div>
                    ))}
                    <div className='overflow-hidden py-2' >
                        <motion.button variants={menuItemsMotion} className='bg-black px-10 py-3 rounded-xl text-white font-semibold text-lg'>Contact Us</motion.button>
                    </div>

                </motion.ul>
            </div>
        </motion.div>
    )
}
