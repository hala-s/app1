import React from "react";
import Product from "../product/Product.jsx";


export default function Products() {
    const products=[
        {id:1,title:"Product 1",description:"Product 1 description",price:150},
        {id:2,title:"Product 2",description:"Product 2 description",price:1050},
        {id:3,title:"Product 3",description:"Product 3 description",price:100},
        {id:4,title:"Product 4",description:"Product 4 description",price:950},

    ];
  return (
    <>
       <div>
  <div className="title d-flex justify-content-center py-5">
    <h2>Products</h2>
  </div>
  <div className="row">
   {products.map((product) =>{
    return <Product {...product} key={product.id} />
   })}
  </div>
</div>
    </>
  );
}
