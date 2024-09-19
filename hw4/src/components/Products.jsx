import React from 'react';
import { Link } from "react-router-dom";

function Product({ product }) {
    return (
        <>
            <h2> <Link to={`/product/${product.id}`}>{product.title}</Link></h2>
            <p>{product.price}</p>
        </>
    );
}
export default Product;