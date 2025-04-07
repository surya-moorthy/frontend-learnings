import { useEffect, useState } from 'react'

import './App.css'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function App() {
  //count state
  const [count,setCount] = useState(()=>{
    const saved = localStorage.getItem("count")
    return saved? parseInt(saved) : 0
  });
  //string state
  const [value,setValue] = useState(()=>{
    const saved = localStorage.getItem("string");
    return saved? saved : ""
  });
  //theme state
  const [darkMode,setDarkMode] = useState(false);

  const ToggleClick = (change : boolean) => {setDarkMode(change)}
  // to store the count, theme and string in the localstorage
  useEffect(()=>{
      localStorage.setItem("count",count.toString())
    },[count])
  useEffect(()=>{
      localStorage.setItem("string",value.toString())
    },[value])

  useEffect(() => {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

  // change in theme 
  useEffect(()=>{
        if(darkMode == false){
            document.body.classList.add("dark")
        }
        else{
          document.body.classList.remove("dark")
        }
    },[darkMode])
  // decrement the count
  const Decrement = () =>{
      if(count > 0) {
          setCount(count - 1)
      }
  }
  return (
    <div className=" ">
       <div>
          <p>
              count : {count} 
          </p>
          <button onClick={()=>setCount(count + 1)}>
                  count : {count}
            </button>
            
          <button onClick={()=>setCount(0)}>
                 reset
            </button>
          <button onClick={Decrement}>
                 Decrement
            </button> 
          <DarkModeSwitch
          onChange={ToggleClick} 
          checked={darkMode}      
          />
       </div>
       <div>
            <div>
                <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
            </div>
            <p>value : {value}</p>
            <button onClick={()=>setValue("hello")}>change</button> 
       </div> 
    </div>
  )
}

export default App
