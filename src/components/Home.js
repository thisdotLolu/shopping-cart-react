import React from 'react'
import { CartState } from '../context/context'
import SingleProduct from './SingleProduct';
import Filters from './Filters';
import './Styles.css'




const Home = () => {
    const{state:{products}}=CartState();
    console.log(products)
  return (
    <div className='home'>
        <Filters/>
        <div className="productContainer">
            {
                products.map(prod=>{
                    return <SingleProduct prod={prod} key={prod.id}/>
                })
            }
        </div>
    </div>
  )
}

export default Home