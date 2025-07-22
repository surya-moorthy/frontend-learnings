
import React from 'react'
import { ArrowButton } from './ArrowButton'

export const SubCard = ({func,desc} : {func: string,desc : string}) => {
  return (
    <div className='flex flex-col items-start px-8 py-8 border-b border-zinc-200 opacity-70'>
        <p className='text-sm font-bold text-neutral-700'>{func}</p>
        <p className='text-neutral-500 tracking-wide text-sm font-semibold pt-2 pb-3'>{desc}</p>
        <ArrowButton title='learn more'/>
    </div>
  )
}
