import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/slices/productSlice";

const BasketInHeader = ({id, cardLink, img, title, price}) => {

    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteProduct(id))
    }

    
	return (
        <div classNameName="container" key={id}>
            {/* <a href="Single_page.html"> */}
            <a href={cardLink}></a>
                <div className="purchase__product">
                    <div className="purchase__productImg"><img className="purchase__photo"src={img} alt="purchase photo"/></div>
                    <div className="purchase__info">
                        {/* <p className="purchase__name">${JSON.parse(localStorage.getItem(localStorage.key(i))).title}</p> */}
                        <p className="purchase__name">${title}</p>

                        <img src="../../public/img/stars_rate.png" alt="stars rate"/>
                        {/* <p className="quantity-info">1 <span
                                className="quantity-info__x">x</span>
                                $${JSON.parse(localStorage.getItem(localStorage.key(i))).price}</p>
                        <p className="purchase__name">${JSON.parse(localStorage.getItem(localStorage.key(i))).title}</p> */}
                        <p className="quantity-info">1 <span
                                className="quantity-info__x">x</span>
                                $${price}</p>
                        <p className="purchase__name">${title}</p>

                    </div>
                </div>
        </div>
	)
}

export default BasketInHeader;