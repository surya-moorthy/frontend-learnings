
import { useRef } from 'react';
import axios from 'axios';

export function Login() {

  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const name = nameRef.current?.value;
    const password = passwordRef.current?.value;
    if(!name || !password){
      return;
    }

    const response = await axios.post("http://localhost:3000/login",{
      user : name ,
      password: password
    })

    localStorage.setItem('token',response.data.token);
    console.log(response);
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
                className="text-black w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Your name" required/>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">password</label>
          <input 
          ref={passwordRef}
          type="password" id="password" name="password" 
                className="text-black w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="you@example.com" required/>
        </div>

        <button type="submit" 
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit
        </button>
      </form>

     </div>
   
  )
}