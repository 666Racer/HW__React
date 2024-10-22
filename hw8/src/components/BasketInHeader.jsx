import { useDispatch } from "react-redux";
import { deleteProduct, setQuantity } from "../redux/slices/productSlice";

const BasketInHeader = ({id, cardLink, img, title, price, quantity, shipping}) => {
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteProduct(id))
    }
    
	return (
        <div class="basket-box">
            <div className="container" key={id}>
                <a href={cardLink}></a>
                <div className="purchase__product">
                    <div className="purchase__productImg">
                        <img className="purchase__photo"src={img} alt="purchase photo"/>
                    </div>
                    <div className="purchase__info">
                        <h3 className="purchase__name">${title}</h3>
                        <img className="rate-stars" src="../../public/img/stars_rate.png" alt="stars rate"/>
                        <p className="quantity-info">1 <span
                                className="quantity-info__x">x</span>
                                $${price}
                        </p>
                        <form>
                            <button id={id} className="" onClick={handleDelete}>
                                <img className="purchase__cancel2" src="./img/header/header_box_close.png" alt="close"/>
                            </button>
                        </form>
                        {/* <div class="total-sum ">
                            <p class="total-text ">TOTAL</p>
                            <p class="total-text ">${price * quantity + shipping}</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
	)
}

export default BasketInHeader;