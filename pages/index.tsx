import React, { useContext } from 'react'
import styles from '../styles/Home.module.scss'
import Title from '../components/Title'
import Product from '../components/Product';
import { ProductContext, ProductContextInterface, ProductInterface } from '../context';


export default function Home():React.ReactElement {
  const  context:ProductContextInterface = useContext(ProductContext);
  
  return (
      <>
      <div className={`py-5 ${styles.home}`} >
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
            {context.products.map((product:ProductInterface) => { return <Product key={product.id} product={product} /> })}
            </div>
          </div>
        </div>
      </>
  )
}
