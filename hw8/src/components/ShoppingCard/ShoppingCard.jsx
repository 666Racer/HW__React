import Arrivals from "../Arrivals";
import ProductsInCard from "./ProductsInCard";
import { useSelector } from 'react-redux';
import { useState,  useEffect } from "react";

const ShoppingCard = () => {
  const products = useSelector((state) => state.product.products);
  const [sub, setSub] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setSub(
      products.reduce(
        (sum, product) => sum + product.quantity * product.price,
        0
      )
    );

    setTotal(
      products.reduce(
        (sum, product) =>
          sum + (product.quantity * product.price + product.shipping),
        0
      )
    );
  }, [products]);

  return (
    <div>
      <Arrivals />
      <section className="shopping ">
        <div className="shopping__content container center ">
          <div className="shopping__box ">
            <div className="shopping__grid shopping__grid--padd ">
              <p className="shopping__title ">Product Details</p>
              <p className="shopping__title ">unite Price</p>
              <p className="shopping__title ">Quantity</p>
              <p className="shopping__title ">shipping</p>
              <p className="shopping__title ">Subtotal</p>
              <p className="shopping__title ">ACTION</p>
            </div>
            {products.length !== 0 ? 
              products.map(product =>
                <ProductsInCard
                  key={product.id}
                  id={product.id}
                  cardLink={product.cardLink}
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                  color={product.color}
                  shipping={product.shipping}                  
                  sizes={product.sizes.join(", ")}
                />
              )
              : <>
                  <h4 className="grand__total">
                    Your shopping card is empty now!
                  </h4>
              </>
            }
            <div className="shopping__buttons ">
              <a href="# ">
                <button className="shopping__button " type="reset ">
                  clear shopping cart
                </button>
              </a>
              <a href="./product.html">
                <button className="shopping__button " type="button ">
                  continue shopping
                </button>
              </a>
            </div>
            <div className="shopping__information ">
              <div className="information__box ">
                <h3 className="information__title information__text ">
                  Shipping Adress
                </h3>
                <form action="# " className="information__form " />
                <div className="information__wrapper ">
                  <select
                    className="information__field select__country "
                    name="country "
                    id="country "
                  >
                    <option value="Bangladesh ">Bangladesh</option>
                    <option value="India ">India</option>
                  </select>
                  <svg
                    width="15 "
                    height="15 "
                    className="select__img "
                    fill="#838383 "
                    xmlns="http://www.w3.org/2000/svg "
                    viewBox="0 0 320 512 "
                  >
                    <path
                      d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32
                192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z "
                    />
                  </svg>
                </div>
                <input
                  className="information__field information__input "
                  type="text "
                  placeholder="State "
                />
                <input
                  className="information__field information__input "
                  type="text "
                  placeholder="Postcode / Zip "
                />
                <button
                  className="information__button quote-button "
                  type="button "
                >
                  get a quote
                </button>
              </div>
              <div className="information__box ">
                <h3 className="information__title information__text ">
                  coupon discount
                </h3>
                <form action="# " className="information__form ">
                  <p className="information__coupon ">
                    Enter your coupon code if you have one
                  </p>
                  <input
                    className="information__field information__input "
                    type="text "
                    placeholder="Coupon "
                  />
                </form>
                <button
                  className="information__button quote-button "
                  type="button "
                >
                  apply coupon
                </button>
              </div>
              <div className="information__box ">
                <p className="sub__total">Sub total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${sub}
                </p>
                <h3 className="grand__total ">
                  GRAND TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="sum ">${total}</span>
                </h3>
                <a
                  className="checkout__link checkout__link__button button center "
                  href="./checkout"
                >
                  <div className="checkout__button__wrapper ">
                    <p className="checkout__button__text ">
                      proceed to checkout
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCard;
