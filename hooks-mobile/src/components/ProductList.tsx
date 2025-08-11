import axios from "axios";
import { useEffect, useState } from "react"



export default function ProductList() {

    const [products , setProducts] = useState([]);
    useEffect( ()=>{
        async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        }
    },[])
  return (
    <div className="flex flex-col">

    </div>  
  )
}
