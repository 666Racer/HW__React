import { useSelector } from "react-redux";
import BasketInHeader from "./BasketInHeader";
import { useEffect, useState } from "react";

const Header = () => {
    const products = useSelector((state) => state.product.products)

    const [sub , setSub] = useState(0);

    useEffect(()=> {
        setSub(products.reduce((sum, product) => 
        sum + product.price, 0));
    } 
    , [products])
    
    return (
        <section className="top">
            <header className="header container center">
                <div className="main-header__header-top">
                    <div className="header-top__left">
                        <a className="logo-link" href="index.html">
                            <img src="./img/logo.png" alt="logo" />
                            <p className="logo-text">
                                BRAN<span className="logo-text logo-text--colored">D</span>
                            </p>
                        </a>

                        <div className="header-top__search-field">
                            <button className="search-field__button" type="button">
                            <details className="header-top__browse">
                                <summary className="browse-summary">
                                <p>Browse</p>
                                <svg width="15" height="15" className="arrow__down" fill="#838383" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                                </summary>
                                <div className="browse__details">
                                <h3 className="header-top__browse-title">Women</h3>
                                <ul className="browse__dropdown-list">
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link">Dresses</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link">Tops</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link"
                                        >Sweaters/Knits</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link"
                                        >Jackets/Coats</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link">Blazers</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link">Denim</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link"
                                        >Leggings/Pants</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link"
                                        >Skirts/Shorts</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link">Accessories</a>
                                    </li>
                                </ul>
                                <h3 className="header-top__browse-title">Men</h3>
                                <ul className="browse__dropdown-list">
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link"
                                        >Tees/Tank tops</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link">Shirts/Polos</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link">Sweaters</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link"
                                        >Sweatshirts/Hoodies</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link">Blazers</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link"
                                        >Jackets/Vests</a>
                                    </li>
                                </ul>
                                </div>
                            </details>
                            </button>

                            <form action="#" method="get">
                                <label for="search">
                                <input
                                    className="search-field__search-input"
                                    type="search"
                                    name="search"
                                    id="search"
                                    placeholder="Search for Item..."
                                />
                                </label>
                            </form>
                            <button className="search-field__search-button">
                                <img src="./img/search.png" alt="search" />
                            </button>
                        </div>
                    </div>

                    <svg className="header__basketbutton_basket" xmlns="http://www.w3.org/2000/svg" fill="#222">
                            <path
                                d="M3.184 4.364h3.393l4.833 17.455c.138.512.611.867 1.144.867h14.855c.473 0 .887-.276 1.085-.71l5.405-12.411a1.195 1.195 0 0 0-.099-1.123 1.176 1.176 0 0 0-.986-.532H16.4c-.651 0-1.184.532-1.184 1.182 0 .65.533 1.182 1.184 1.182h14.598l-4.38 10.048H13.443L8.609 2.867A1.183 1.183 0 0 0 7.464 2h-4.28C2.533 2 2 2.532 2 3.182c0 .65.533 1.182 1.184 1.182ZM11.429 31a2.684 2.684 0 0 0 2.683-2.68 2.684 2.684 0 0 0-5.365 0A2.684 2.684 0 0 0 11.429 31Zm16.769 0h.197a2.678 2.678 0 0 0 1.835-.926c.473-.532.69-1.222.65-1.95-.098-1.458-1.38-2.581-2.86-2.483-1.48.099-2.584 1.399-2.485 2.857.098 1.399 1.262 2.502 2.663 2.502Z" />
                    </svg>
                    <div className="header-top__right">
                        <div className="basket__button">
                            <div className="basket__button-scroll" 

                            style={products.length < 3 ? null 
                            : { height: "300px", overflowY: "scroll", scrollbarColor: "#f16d7f #fbfbfb", scrollbarWidth: "thin"}}>

                                {products.length !== 0 ?
                                    products.map(product =>
                                        <BasketInHeader key={product.id}
                                            id={product.id}
                                            cardLink={product.cardLink}
                                            img={product.img}
                                            title={product.title}
                                            price={product.price}
                                        />
                                    )
                                    : <>
                                        <h4 className="box__product__name"> ! Your cart is Empty!</h4>
                                        <br/>
                                        <div className="box__line"></div>
                                     </>                       
                                }
                                </div>
                                <div className="total-sum">
                                    <h2 className="total-text">TOTAL</h2>
                                    <h2 className="total-text">$ {sub}</h2>
                                </div>
                                <a className="purchase__button" href="./checkout">Checkout</a>
                                <a className="purchase__button" href="./shopping_card">Go to
                                    cart</a>
                            </div>
                        <div className="box__product-cnt" style={products.length != 0 ? null : {display: "none"}} >
                            <h3 className="box__count">{products.length}</h3>
                        </div>
                        {/* <details className="header-top__right-details">
                            <summary>
                                <img className="basket__button" src="../../public/img/basket_logo.png" alt="basket" />
                            </summary>
                            <div className="purchase__buttons ">
                            <a className="purchase__button " href="checkout.html " type="button ">Checkout</a>
                            <a className="purchase__button " href="Shopping_card.html " type="button ">Go to cart</a>
                            </div>
                        </details> */}
                        <button className="account__button button ">My Account
                            <i className="fa fa-caret-down fa-caret-down__my-acc-header "></i>
                        </button>
                    </div>
                 </div>


                <div className="nav ">
                    <div className="nav__center ">
                        <ul className="header-bottom__nav-list ">
                            <li className="header-bottom__nav-item ">
                                <a className="nav__links " href=" # ">HOME</a>
                                <div className="mega-box ">
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">HOME</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link ">Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <a href="# " className="mega-link ">Swimwear/Underwear</a>
                                        <a href="# " className="mega-link ">Nightwear</a>
                                        <a href="# " className="mega-link ">Shoes</a>
                                        <a href="# " className="mega-link ">Beauty</a>
                                        <a href="# " className="mega-link ">Beauty</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">HOME</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <h3 className="mega-title ">HOME</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">HOME</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <div className="mega-picture mega-inscription-flex"><span className="mega-inscription">Super</span><span className="mega-inscription mega-inscription_last">sale!</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="header-bottom__nav-item ">
                                <a className="nav__links " href=" # ">MEN</a>
                                <div className="mega-box ">
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">MEN</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <a href="# " className="mega-link ">Swimwear/Underwear</a>
                                        <a href="# " className="mega-link ">Nightwear</a>
                                        <a href="# " className="mega-link ">Shoes</a>
                                        <a href="# " className="mega-link ">Beauty</a>
                                        <a href="# " className="mega-link ">Beauty</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">MEN</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <h3 className="mega-title ">MEN</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">MEN</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <div className="mega-picture mega-inscription-flex"><span className="mega-inscription">Super</span><span className="mega-inscription mega-inscription_last">sale!</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="header-bottom__nav-item ">
                                <a className="nav__links " href=" # ">WOMEN</a>
                                <div className="mega-box ">
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">WOMEN</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <a href="# " className="mega-link ">Swimwear/Underwear</a>
                                        <a href="# " className="mega-link ">Nightwear</a>
                                        <a href="# " className="mega-link ">Shoes</a>
                                        <a href="# " className="mega-link ">Beauty</a>
                                        <a href="# " className="mega-link ">Beauty</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">WOMEN</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <h3 className="mega-title ">WOMEN</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">WOMEN</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <div className="mega-picture mega-inscription-flex"><span className="mega-inscription">Super</span><span className="mega-inscription mega-inscription_last">sale!</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="header-bottom__nav-item ">
                                <a className="nav__links " href=" # ">KIDS</a>
                                <div className="mega-box ">
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">KIDS</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <a href="# " className="mega-link ">Swimwear/Underwear</a>
                                        <a href="# " className="mega-link ">Nightwear</a>
                                        <a href="# " className="mega-link ">Shoes</a>
                                        <a href="# " className="mega-link ">Beauty</a>
                                        <a href="# " className="mega-link ">Beauty</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">KIDS</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <h3 className="mega-title ">KIDS</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">KIDS</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <div className="mega-picture mega-inscription-flex"><span className="mega-inscription">Super</span><span className="mega-inscription mega-inscription_last">sale!</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="header-bottom__nav-item reverse ">
                                <a className="nav__links " href=" # ">ACCESSORIZE</a>
                                <div className="mega-box ">
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">ACCESSORIZE</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <a href="# " className="mega-link ">Swimwear/Underwear</a>
                                        <a href="# " className="mega-link ">Nightwear</a>
                                        <a href="# " className="mega-link ">Shoes</a>
                                        <a href="# " className="mega-link ">Beauty</a>
                                        <a href="# " className="mega-link ">Beauty</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">ACCESSORIZE</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <h3 className="mega-title ">ACCESSORIZE</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">ACCESSORIZE</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <div className="mega-picture mega-inscription-flex"><span className="mega-inscription">Super</span><span className="mega-inscription mega-inscription_last">sale!</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="header-bottom__nav-item reverse ">
                                <a className="nav__links " href=" # ">FEATURED</a>
                                <div className="mega-box ">
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">FEATURED</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <a href="# " className="mega-link ">Swimwear/Underwear</a>
                                        <a href="# " className="mega-link ">Nightwear</a>
                                        <a href="# " className="mega-link ">Shoes</a>
                                        <a href="# " className="mega-link ">Beauty</a>
                                        <a href="# " className="mega-link ">Beauty</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">FEATURED</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <h3 className="mega-title ">FEATURED</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">FEATURED</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <div className="mega-picture mega-inscription-flex"><span className="mega-inscription">Super</span><span className="mega-inscription mega-inscription_last">sale!</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="header-bottom__nav-item reverse ">
                                <a className="nav__links " href=" # ">HOT DEALS</a>
                                <div className="mega-box ">
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">HOT DEALS</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <a href="# " className="mega-link ">Swimwear/Underwear</a>
                                        <a href="# " className="mega-link ">Nightwear</a>
                                        <a href="# " className="mega-link ">Shoes</a>
                                        <a href="# " className="mega-link ">Beauty</a>
                                        <a href="# " className="mega-link ">Beauty</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">HOT DEALS</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <h3 className="mega-title ">HOT DEALS</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">HOT DEALS</h3>
                                        <a href="# " className="mega-link ">Dresses </a>
                                        <a href="# " className="mega-link ">Skirts/Shorts</a>
                                        <a href="# " className="mega-link "> Accessories</a>
                                        <a href="# " className="mega-link ">Bags/Purses</a>
                                        <div className="mega-picture mega-inscription-flex"><span className="mega-inscription">Super</span><span className="mega-inscription mega-inscription_last">sale!</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Header;
