

import { cn } from '@/utils/clsx';
import React from 'react'

export default function Container(
    {children, className} : {
        children: React.ReactNode;
        className? : string;
    }
) {
  return (
    <div className={cn(className,"w-full max-w-4xl mx-auto bg-neutral-200 dark:bg-neutral-800 p-4 md:p-10 ")}>
        {children}
    </div>
  )
}
