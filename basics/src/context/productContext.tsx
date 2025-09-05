import { createContext, useState } from "react";
import { cartProductType, Product } from "../types/types";

type ProductContextType = {
    cartProducts : cartProductType[] | undefined,
    setCartProduct : React.Dispatch<React.SetStateAction<cartProductType[] | undefined>>
} 

export const ProductContext = createContext<ProductContextType>({
    cartProducts : undefined,
    setCartProduct : ()=>{}
})

export const ProductProvider = ({children} : {children : React.ReactNode}) => {
    
    const [cartProducts,setCartProduct] = useState<cartProductType[] | undefined>(undefined);

    return (
       <ProductContext.Provider value={{cartProducts,setCartProduct}}> 
          {children}
       </ProductContext.Provider>
    )
}