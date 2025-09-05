import axios from "axios";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { cartProductType, Product } from "../types/types";
import { ProductContext } from "../context/productContext";

 export default function ProductCards({number} : {number : number} ){
    const [product,setProduct] = useState<Product | undefined>(undefined);
    const [numberOfItems,setNumberOfitems] = useState(1);
    const {setCartProduct} = useContext(ProductContext);

    useEffect(()=> {
       const fetchData = async ()=> {
            try {
                const response = await axios.get(`http://localhost:5000/${number}`)
                if(!response) {
                    console.log("no response");
                    return;
                }
                setProduct(response.data)
            }
            catch(err) {
               console.error(err);
            }
         }
         fetchData();
    },[number])

      if (!product) {
    return <p>Loading...</p>; // ✅ render something instead of returning nothing
  }

  function handleAdding() {
       setNumberOfitems(numberOfItems + 1);
       if(!product){
        return;
       }
       const newProduct : cartProductType =  {product,items : numberOfItems}

       setCartProduct((prev) => (prev ? [...prev, newProduct] : [newProduct]));

  }

    return (
        <div className="flex flex-col justify-center items-center w-sm p-5 m-3 bg-neutral-100"> 
              <img src={product.image} alt="product-image" width={300} height={300} />
              <div>
                 <h4 className="font-bold text-2xl mt-2 text-neutral-900">
                      {product.name}
                 </h4>
                 <p className="text-xl mt-2 text-neutral-700">
                      {product.description}
                 </p>
                 <div className="relative flex justify-end gap-3 items-center right-0">
                     <ArrowUpRight className="cursor-pointer rounded-xl bg-neutral-700 text-white size-10 p-2"/>
                     <ShoppingBag className="cursor-pointer rounded-xl bg-neutral-700 text-white size-10 p-2" onClick={handleAdding}/>
                 </div>
              </div>  
        </div>
    )
}
