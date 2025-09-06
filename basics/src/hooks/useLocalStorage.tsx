import { useEffect, useState } from "react";

function getSavedValue(key : string,initialValue : string | (()=> string)) {
  const savedValue = JSON.parse(localStorage.getItem(key) as string);

  if (savedValue) return savedValue;

  return initialValue;
}

export default function useLocalStorage(key : string,initialValue : string | (()=> string)) {
   const [value,setValue] = useState(()=> {
    return getSavedValue(key,initialValue)
   });

   useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
   },[value])

   return {value,setValue}
}