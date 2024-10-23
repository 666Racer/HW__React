import { useState } from "react";
import { dataProducts } from "../../redux/slices/productSlice";
import Arrivals from "../Arrivals";
import ProductCard from "./ProductCard";


const Products = () => {
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleCheckboxChange = (size) => {
        setSelectedSizes((prevSelected) =>
            prevSelected.includes(size)
                ? prevSelected.filter((s) => s !== size) // фильтруем размеры, не равны size 
                : [...prevSelected, size] // добавляем в массив остальные
        );
    };

    const filteredProducts = dataProducts.filter((product) =>
        selectedSizes.length === 0 || product.sizes.some((size) => selectedSizes.includes(size))
    );

    return (
      <div>
        <Arrivals />
        <div class="man-products-content center">
          <div class="man-products-sorted">
            <details class="man-products-sorted__details">
              <summary class="man-products-sorted__summary">Category</summary>
              <ul class="man-products-sorted__details-list">
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Accessories
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Bags
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Denim
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Hoodies & Sweatshirts
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Jackets & Coats
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Pants
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Polos
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Shirts
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Shoes
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Shorts
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Sweaters & Knits
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    T-Shirts
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Tanks
                  </a>
                </li>
              </ul>
            </details>

            <details class="man-products-sorted__details">
              <summary class="man-products-sorted__summary">BRAND</summary>
              <ul class="man-products-sorted__details-list">
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Accessories
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Bags
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Denim
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Hoodies & Sweatshirts
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Jackets & Coats
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Pants
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Polos
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Shirts
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Shoes
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Shorts
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Sweaters & Knits
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    T-Shirts
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Tanks
                  </a>
                </li>
              </ul>
            </details>

            <details class="man-products-sorted__details">
              <summary class="man-products-sorted__summary">dESIGNER</summary>
              <ul class="man-products-sorted__details-list">
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Accessories
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Bags
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Denim
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Hoodies & Sweatshirts
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Jackets & Coats
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Pants
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Polos
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Shirts
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Shoes
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Shorts
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Sweaters & Knits
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    T-Shirts
                  </a>
                </li>
                <li class="man-products-sorted__details-item">
                  <a href="#" class="man-products-sorted__details-link">
                    Tanks
                  </a>
                </li>
              </ul>
            </details>
          </div>
          <div class="man-products__box">
            <div class="filtres__box">
              <div class="filtres">
                <div class="filter filter-style">
                  <h3 class="filter__title">Trending now</h3>
                  <ul class="filter-style__list">
                    <li class="filter-style__item">Bohemian</li>
                    <li class="filter-style__item">Floral</li>
                    <li class="filter-style__item">Lace</li>
                    <li class="filter-style__item">Floral</li>
                    <li class="filter-style__item">Lace</li>
                    <li class="filter-style__item">Bohemian</li>
                  </ul>
                </div>

                <div class="filter filter-size">
                  <h3 class="filter__title">Size</h3>
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
                  {/* <div class="filter-size__checkboxes">
                  <div class="filter-size__checkbox">
                    <input type="checkbox" />
                    <span class="checkbox__span">XXS</span>
                  </div>
                  <div class="filter-size__checkbox">
                    <input type="checkbox" />
                    <span class="checkbox__span">XS</span>
                  </div>
                  <div class="filter-size__checkbox">
                    <input type="checkbox" />
                    <span class="checkbox__span">S</span>
                  </div>
                  <div class="filter-size__checkbox">
                    <input type="checkbox" />
                    <span class="checkbox__span">M</span>
                  </div>
                  <div class="filter-size__checkbox">
                    <input type="checkbox" />
                    <span class="checkbox__span">L</span>
                  </div>
                  <div class="filter-size__checkbox">
                    <input type="checkbox" />
                    <span class="checkbox__span">XL</span>
                  </div>
                  <div class="filter-size__checkbox">
                    <input type="checkbox" />
                    <span class="checkbox__span">XXL</span>
                  </div>
                </div> */}
                </div>
                <div class="filter filter-price">
                  <h3 class="filter__title">Price</h3>

                  <input
                    class="filter-price__range"
                    type="range"
                    min="$52"
                    max="$400"
                  />
                </div>
              </div>
              <div class="sorting">
                <div class="sorting__box">
                  <p class="sorting__text sort-by__text">Sort By</p>
                  <select
                    class="sorting__select sorting__text"
                    name="sorting-by"
                    id="sorting-by"
                  >
                    <option class="sorting__text" value="name">
                      Name
                    </option>
                    <option class="sorting__text" value="price">
                      Price
                    </option>
                  </select>
                  <img src="./img/arrow-down.svg" alt="arrow-down" />
                </div>
                <div class="sorting__box">
                  <p class="sorting__text sort-by__text">Show</p>
                  <select
                    class="sorting__select sorting__text"
                    name="sorting-by"
                    id="sorting-by"
                  >
                    <option class="sorting__text" value="9">
                      9
                    </option>
                    <option class="sorting__text" value="27">
                      27
                    </option>
                  </select>
                  <img src="./img/arrow-down.svg" alt="arrow-down" />
                </div>
              </div>
            </div>
          </div>
          <article class="product__cards">
            <div class="product__cards__content">
                {filteredProducts.length !== 0 ?
                    filteredProducts.map(product =>
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
                            sizes={product.sizes.join(', ')}
                            btnText={product.btnText}
                        />
                    )
                    : <>
                        <h4 className="purchase__name"> ! Storage is Empty !</h4>
                    </>
                }
            </div>
          </article>
        </div>
      </div>
    );
}

export default Products;
