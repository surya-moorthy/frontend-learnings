import { cartProductType, Product } from "../types/types";

export default function ProductCart({cartProduct} : {cartProduct : cartProductType}) {

  return (
    <div className='flex justify-start  w-full bg-gray-200 p-8 rounded-2xl'>
           <img src={cartProduct.product.image} alt="product-image" width={300} height={300} className="rounded-xl"/>
              <div className="flex-1 px-10">
                 <h4 className="font-bold text-2xl mt-2 text-neutral-900">
                      {cartProduct.product.name}
                 </h4>
                 <p className="text-xl mt-2 text-neutral-700">
                      {cartProduct.product.description}
                 </p>
                 <p className="font-semibold text-lg mt-1.5">
                       Number Of Items : <span className="font-bold">  {cartProduct.items}</span>
                 </p>
            </div>
    </div>  
  )
}
