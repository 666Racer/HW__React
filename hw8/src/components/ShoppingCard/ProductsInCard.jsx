import { useDispatch } from "react-redux";
import { deleteProduct, setQuantity } from "../../redux/slices/productSlice";
import { useState } from "react";

const ProductsInCard = ({
  id,
  img,
  title,
  color,
  sizes,
  cardLink,
  price,
  shipping,
  quantity
}) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(id));
  };

  const handleQuantity = (e, id) => {
    const value = parseInt(e.target.value);
    setProductQuantity(value);

    dispatch(setQuantity({ id, value: value }));
  };
  return (
    <div className="shopping__item shopping__grid">
      <div className="grid__left">
        <a className="shopping__link" href={cardLink}>
          <img className="shopping__img" src={img} alt="sc item" />
        </a>
        <div className="grid__description">
          <p className="description__name">{title}</p>
          <p className="description__details">
            Color:{" "}
            <span className="description__details--lighter">{color}</span>
          </p>
          <p className="description__details">
            Size: <span className="description__details--lighter">{sizes}</span>
          </p>
        </div>
      </div>
      <p className="shopping__info">$ {price}</p>
      <div classNameName="shopping__info">
        <input
          id={id}
          classNameName="shopping__info"
          value={productQuantity}
          onChange={(e) => handleQuantity(e, id)}
          type="number"
          min="1"
        />
      </div>
      <p className="shopping__info">{shipping > 0 ? shipping : "FREE"}</p>
      <p className="shopping__info">{price * quantity + shipping}</p>
      <a className="shopping__info shopping__cancel" onClick={handleDelete}>
        <img className="shopping__info" src="./img/cancel.png" alt="cancel" />
      </a>
    </div>
  );
};

export default ProductsInCard;
