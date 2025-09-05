import { useContext } from "react";
import ProductCart from "../components/ProductCart";
import { ProductContext } from "../context/productContext";

export default function Cart() {

    const {cartProducts} = useContext(ProductContext);

    if(!cartProducts) {
        return (
        <div className="relative flex justify-center  font-bold text-xl items-center w-screen h-screen">
                 No Products Added...
        </div>)
    }

  return (
    <div className=" flex justify-center  bg-neutral-100 max-w-[80vw] h-auto mx-auto top-32">
          <div className="w-full h-full py-5 px-10 ">
              <h3 className="text-2xl font-bold tracking-tight">
                 Cart
              </h3>
              <div className="flex flex-col gap-10 justify-center items-center p-4 w-full">
                    {
                        cartProducts.map((cartProduct)=> {
                            return (
                               <ProductCart cartProduct={cartProduct}/>
                            )
                        })
                    }
              </div>
          </div>
    </div>
  )
}
