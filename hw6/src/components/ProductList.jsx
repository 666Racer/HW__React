import { useSelector, useDispatch } from "react-redux";
import { delProduct, toggleAvailability } from '../redux/slices/productSlice'
import ChangeProduct from "./ChangeProduct";

function ProductList() {
    const { products } = useSelector((state) => state.products); //
    const dispatch = useDispatch();
    return (
        <div>
            {products.length === 0 ? (
            <p>No products available.</p>
            ) : (
            <ul>
                {products.map((product) =>
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <h3>{product.description}</h3>
                        <p>price: {product.price} руб.</p>
                        <p>Available: {product.available ? "Yes" : "No"}</p>
                        <button onClick={() => {
                            dispatch(delProduct({ id: product.id }))
                        }}>Удалить товар</button>
                        <button onClick={() => {
                            dispatch(toggleAvailability({ id: product.id }))
                        }}>Изменить доступность</button>    
                        <h4>Update Product</h4>
                        <ChangeProduct productId={product.id} />                           
                    </li>
                )}
            </ul>
            )}
        </div>
    );
};

export default ProductList;

