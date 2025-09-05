import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

type Product = {
    name : string,
    image : string,
    price : string,
    desription : string,
}

export default function Products() {

    const [products,setProducts] = useState<Product[]>();

    if(!products) {
        return
    }

    useEffect(()=> {
       const fetchData = async ()=> {
            try {
                const response = await axios.get("http://localhost:5000/0")
                if(!response) {
                    console.log(response);
                    return;
                }
                setProducts(response.data)
            }
            catch(err) {
               console.error(err);
            }
         }

         fetchData();
    },[setProducts])
 
    console.log(products);
  return (
    <div className='bg-neutral-300 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3'>
         hello
         {
            products.map((product)=> {
                return (
                     <ProductCard name={product.name} image={product.image} />
                )
            })
         }
    </div>
  )
}

const ProductCard = () => {
    return (
        <div>

        </div>
    )
}
