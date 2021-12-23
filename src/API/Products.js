import React from 'react' 
import Product from './Product'
// import './App.css'
import './Display.css'


export default function Products(props) {
     
   

    return (
        <div>
            <div className='products'>
            <h1>Skyhigh Sales Data</h1>
             
             {props.products.map(product=>(
                 <Product key={`${product.id}${product.category}`} product={product} />
             ))}
            </div>
        </div>
    )
}
