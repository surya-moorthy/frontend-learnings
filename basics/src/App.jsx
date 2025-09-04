import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  function Increment() {
      setCounter(counter + 1);
  }

  function Decrement() {
          setCounter(counter - 1);
  }

  function Reset() {
    setCounter(0);
  }
  
  return (
    <div className='bg-neutral-600 flex flex-col justify-center items-center w-screen h-screen'>
          <h3 className='text-6xl font-bold tracking-wide text-white'>
              Counter App
          </h3>
          <p className='text-8xl font-semibold mt-10 text-white'>
             {counter}
          </p>
          <div className='flex justify-center items-center gap-10 mt-10'>
               <button 
               onClick={Increment}
               className='px-6 py-3 w-40 rounded-xl hover:scale-110 hover:shadow-xl shadow-amber-50 text-center bg-green-400 '>
                    Increment
               </button>
               <button
               onClick={Decrement}
               className='px-6 py-3 w-40 rounded-xl hover:scale-110 hover:shadow-xl shadow-amber-50 text-center bg-red-400 transition-all duration-300'>
                    Decrement
               </button>
               <button
               onClick={Reset}
               className='px-6 py-3 w-40 rounded-xl hover:scale-110 hover:shadow-xl shadow-amber-50 text-center bg-blue-400 transition-all duration-300'>
                    Reset
               </button>
          </div>
    </div>
  )
}

export default App
