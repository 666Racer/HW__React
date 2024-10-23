import { useState } from "react";
import { dataProducts } from "../../redux/slices/productSlice";
import Arrivals from "../Arrivals";
import ProductCard from "./ProductCard";

const Products = () => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleCheckboxChange = (size) => {
    setSelectedSizes(
      (prevSelected) =>
        prevSelected.includes(size)
          ? prevSelected.filter((s) => s !== size) // фильтруем размеры, не равны size
          : [...prevSelected, size] // добавляем в массив остальные
    );
  };

  const filteredProducts = dataProducts.filter(
    (product) =>
      selectedSizes.length === 0 ||
      product.sizes.some((size) => selectedSizes.includes(size))
  );

  return (
    <div>
      <Arrivals />
      <section class="man-products container center">
        <div className="man-products-content center">
          <div className="man-products-sorted">
            <details className="man-products-sorted__details">
              <summary className="man-products-sorted__summary">Category</summary>
              <ul className="man-products-sorted__details-list">
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Accessories
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Bags
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Denim
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Hoodies & Sweatshirts
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Jackets & Coats
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Pants
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Polos
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Shirts
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Shoes
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Shorts
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Sweaters & Knits
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    T-Shirts
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Tanks
                  </a>
                </li>
              </ul>
            </details>

            <details className="man-products-sorted__details">
              <summary className="man-products-sorted__summary">BRAND</summary>
              <ul className="man-products-sorted__details-list">
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Accessories
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Bags
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Denim
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Hoodies & Sweatshirts
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Jackets & Coats
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Pants
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Polos
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Shirts
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Shoes
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Shorts
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Sweaters & Knits
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    T-Shirts
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Tanks
                  </a>
                </li>
              </ul>
            </details>

            <details className="man-products-sorted__details">
              <summary className="man-products-sorted__summary">dESIGNER</summary>
              <ul className="man-products-sorted__details-list">
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Accessories
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Bags
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Denim
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Hoodies & Sweatshirts
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Jackets & Coats
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Pants
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Polos
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Shirts
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Shoes
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Shorts
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Sweaters & Knits
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    T-Shirts
                  </a>
                </li>
                <li className="man-products-sorted__details-item">
                  <a href="#" className="man-products-sorted__details-link">
                    Tanks
                  </a>
                </li>
              </ul>
            </details>
          </div>
          <div className="man-products__box">
            <div className="filtres__box">
              <div className="filtres">
                <div className="filter filter-style">
                  <h3 className="filter__title">Trending now</h3>
                  <ul className="filter-style__list">
                    <li className="filter-style__item">Bohemian</li>
                    <li className="filter-style__item">Floral</li>
                    <li className="filter-style__item">Lace</li>
                    <li className="filter-style__item">Floral</li>
                    <li className="filter-style__item">Lace</li>
                    <li className="filter-style__item">Bohemian</li>
                  </ul>
                </div>

                <div className="filter filter-size">
                  <h3 className="filter__title">Size</h3>
                  <form action="" className="filter-size__checkboxes">
                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                      <label key={size} className="checkbox__span">
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(size)}
                          onChange={() => handleCheckboxChange(size)}
                        />
                        {size}
                      </label>
                    ))}
                  </form>
                  {/* <div className="filter-size__checkboxes">
                    <div className="filter-size__checkbox">
                      <input type="checkbox" />
                      <span className="checkbox__span">XXS</span>
                    </div>
                    <div className="filter-size__checkbox">
                      <input type="checkbox" />
                      <span className="checkbox__span">XS</span>
                    </div>
                    <div className="filter-size__checkbox">
                      <input type="checkbox" />
                      <span className="checkbox__span">S</span>
                    </div>
                    <div className="filter-size__checkbox">
                      <input type="checkbox" />
                      <span className="checkbox__span">M</span>
                    </div>
                    <div className="filter-size__checkbox">
                      <input type="checkbox" />
                      <span className="checkbox__span">L</span>
                    </div>
                    <div className="filter-size__checkbox">
                      <input type="checkbox" />
                      <span className="checkbox__span">XL</span>
                    </div>
                    <div className="filter-size__checkbox">
                      <input type="checkbox" />
                      <span className="checkbox__span">XXL</span>
                    </div>
                  </div> */}
                </div>
                <div className="filter filter-price">
                  <h3 className="filter__title">Price</h3>

                  <input
                    className="filter-price__range"
                    type="range"
                    min="$52"
                    max="$400"
                  />
                </div>
              </div>
              <div className="sorting">
                <div className="sorting__box">
                  <p className="sorting__text sort-by__text">Sort By</p>
                  <select
                    className="sorting__select sorting__text"
                    name="sorting-by"
                    id="sorting-by"
                  >
                    <option className="sorting__text" value="name">
                      Name
                    </option>
                    <option className="sorting__text" value="price">
                      Price
                    </option>
                  </select>
                  <img src="./img/arrow-down.svg" alt="arrow-down" />
                </div>
                <div className="sorting__box">
                  <p className="sorting__text sort-by__text">Show</p>
                  <select
                    className="sorting__select sorting__text"
                    name="sorting-by"
                    id="sorting-by"
                  >
                    <option className="sorting__text" value="9">
                      9
                    </option>
                    <option className="sorting__text" value="27">
                      27
                    </option>
                  </select>
                  <img src="./img/arrow-down.svg" alt="arrow-down" />
                </div>
              </div>
            </div>
          <article className="product__cards">
            <div className="product__cards__content">
              {filteredProducts.length !== 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
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
                    btnText={product.btnText}
                  />
                ))
              ) : (
                <>
                  <h4 classNameName="purchase__name"> ! Storage is Empty !</h4>
                </>
              )}
            </div>
          </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
