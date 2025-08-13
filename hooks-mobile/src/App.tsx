
import { useRef } from 'react';
import './App.css'

function App() {

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {

    const name =nameRef.current?.value;
    const email = emailRef.current?.value;
    if(!name || !email){
      return;
    }

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
  }

  return (
     <div className="flex flex-col justify-center items-center w-screen h-screen dark:bg-neutral-900 bg-neutral-50 dark:text-white text-neutral-950">
            <form 
            onSubmit={handleSubmit}
            className=" max-w-sm mx-auto p-4 bg-white shadow rounded">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
          ref={nameRef}
          type="text" id="name" name="name" 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Your name" required/>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
          ref={emailRef}
          type="email" id="email" name="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="you@example.com" required/>
        </div>

        <button type="submit" 
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit
        </button>
      </form>


      <p className='text-white'>
           {
            localStorage.getItem("name")
           }
           {
            localStorage.getItem("email")
           }
      </p>
     </div>
   
  )
}

export default App
