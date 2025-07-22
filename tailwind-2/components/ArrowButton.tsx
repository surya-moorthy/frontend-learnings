import React from 'react'

export const ArrowButton = ({title} : {title : string}) => {
  return (
    <div className="flex items-center justify-center gap-0 hover:gap-1 transition-all duration-250">
        <span className="text-orange-500 text-sm font-bold">{title}</span> 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right text-orange-500"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </div>
  )
}
