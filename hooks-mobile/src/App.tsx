
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { AuthContext } from './context/AuthContext'

function App() {
 const [loggedIn,setLoggedIn] = useState<boolean>(false);
 
  return (
   <AuthContext.Provider value={{loggedIn,setLoggedIn}}>
     <div className="w-screen h-screen dark:bg-neutral-900 bg-neutral-50 dark:text-white text-neutral-950">
        <Navbar/>
     </div>
   </AuthContext.Provider>
  )
}

export default App
