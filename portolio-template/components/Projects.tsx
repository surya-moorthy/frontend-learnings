"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'
export default function Projects() {

    const projects = [
        {
            title : 'Riverside Clone',
            description : 'one to one peer streaming via webRTC',
            image : 'https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/macbook-scroll.png',
            href : '#'
        },
        {
            title : 'Simple mini redis',
            image : 'https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/colourful-text.webp',
            description : 'implemented a simple mini redis with pubsub and persistence with tokio lirary in rust',
            href : '#'
        },
        {
            title : 'Voting Dapp',
            image : 'https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/background-lines.webp',
            description : 'As a beginner in web3, I created a voting dapp using anchor and solana',
            href : '#'
        },
        {
            title : 'Solana faucet',
            image : 'https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/carousel.webp',
            description : 'My solana faucet indexes the blockchain and provides a simple interface to get solana tokens',
            href : '#'
        }
    ]

  return (
    <div className='mt-10'>
        <p className='text-neutral-500 max-w-lg pt-4 text-sm md:text-md'>
            Expertise can be built by working on real world projects, here are some of my projects that I have worked on.
        </p>
        <div
        
        className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
            {
                projects.map((project,idx)=>{
                    return (
                        <motion.div
                        initial={{opacity: 0, filter: "blur(10px)", y: 10}}
                        whileInView={{
                            opacity:1, filter: "blur(0px)" , y : 0
                        }}

                        transition={{
                            duration : 0.3,
                            delay: idx * 0.1,
                            ease: "easeInOut"
                        }}
                        className='group relative h-[350px] mb-4'
                        key={idx}>
                           
                           <Image
                           src={project.image}
                           alt={project.title}
                           width={500}
                           height={500}
                          className='rounded-2xl object-cover w-full h-70 group-hover:scale-[1.04] transition duration-200'
                           />
                           <div className="  dark:text-neutral-400 font-bold tracking-tight text-neutral-800 z-20 text-sm md:text-md mt-5 ">
                                {project.title}
                            </div>
                            <p className='text-sm text-neutral-500 dark:text-neutral-300'>
                                {project.description}
                            </p>
                        </motion.div>
                    )
                })
            }
        </div>
    </div>
  )
}
