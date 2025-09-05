import ProductCards from '../components/ProductCards';

export default function Products() {
 
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 p-20'>
        <ProductCards  number={0} />
        <ProductCards  number={0} />
        <ProductCards  number={0} />
        <ProductCards  number={0} />
        <ProductCards  number={0} />
        <ProductCards  number={0} />
        <ProductCards  number={1} />
        <ProductCards  number={1} />
        <ProductCards  number={3} />
        <ProductCards  number={4} />
        <ProductCards  number={4} />    
    </div>
  )
}

