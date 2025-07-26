'use client'
import React, { useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import {motion, useMotionValueEvent, useScroll, useTransform} from "motion/react"

export default function Navbar() {
    const navItems = [
        {
            title : 'About',
            href : '/about'
        },
        {
            title : 'Projects',
            href : '/projects'
        },
        {
            title : 'Contact',
            href : '/contact'
        },
        {
            title : 'Blog',
            href : '/blog'
        }
    ]

    const [Hovered,setHovered] = useState<number | null>(null);
    const [scrolled , setScrolled] = useState<boolean>(false);
    const {scrollY,scrollYProgress} = useScroll();
    useMotionValueEvent(scrollY,"change",(latest)=>{
        if(latest > 20){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    })

   console.log(Hovered)
  return (
    <Container>
        <motion.nav 

        animate={{
            boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
            width: scrolled ? "40%" : "100%",
            y : scrolled ? 10 : 0,
        }}

        transition={{
            duration: 0.5,
            ease: "easeInOut"
}}
        className='fixed top-0 inset-x-0 max-w-4xl mx-auto flex items-center justify-between p-4 rounded-full'>
           <Image 
            className='h-10 w-10 rounded-full'
           src={"/image.png"} width="200" height="100" alt='profile image'/>
           <div className='flex items-center gap-2 md:gap-4'>
           {
            navItems.map((item, idx)=>{
                return (
                    <Link className='relative px-2 py-1 text-sm' href={item.href} key={idx} onMouseEnter={()=>setHovered(idx)} onMouseLeave={()=>setHovered(null)} >
                        
                        {
                            Hovered === idx &&(
                                <motion.span 
                                layoutId='hovered-span' className='absolute h-full w-full  inset-0 rounded-md bg-neutral-100 dark:bg-neutral-600'/>
                            ) 
                        }

                       <span className='relative z-10'>{item.title}</span>
                       
                    </Link>
                )
            })
           }
          
          </div>           
        </motion.nav>

    </Container>
  )
}
