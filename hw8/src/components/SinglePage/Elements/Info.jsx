const Info = () => {
    return(
        <div class="product-info">
            <div class="product-info">
                <h2 class="product-info__title">WOMEN COLLECTION</h2>
                <h3 class="product-info__name">Moschino Cheap And Chic</h3>
                <p class="product-info__descrip">
                    Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.
                </p>
                <div class="product-info__add-info">
                    <p class="add-info__text">
                        MATERIAL:
                        <span class="add-info__text--bold">COTTON</span>
                    </p>
                    <p class="add-info__text">
                        DESIGNER:
                        <span class="add-info__text--bold">BINBURHAN</span>
                    </p>
                </div>
                <p class="product-info__price">$561</p>
                <div class="product-info__settings">
                    <div class="settings-1">
                        <p class="settings-text">CHOOSE COLOR</p>
                        <div class="pr-sorting__box">
                            <select class="pr-sorting__select pr-sorting__text" name="sorting-by" id="sorting-by-1">
                              <option class="pr-sorting__text" value="color">Red</option>
                              <option class="pr-sorting__text" value="color">Black</option>
                            </select>
                            <img src="./img/single_page/arrow-down.svg" alt="arrow-down"/>
                        </div>
                    </div>
                    <div class="settings-2">
                        <p class="settings-text">CHOOSE SIZE</p>
                        <div class="pr-sorting__box">
                            <select class="pr-sorting__select pr-sorting__text" name="sorting-by" id="sorting-by-2">
                              <option class="pr-sorting__text" value="size">XXL</option>
                              <option class="pr-sorting__text" value="size">XL</option>
                              <option class="pr-sorting__text" value="size">L</option>
                              <option class="pr-sorting__text" value="size">M</option>
                              <option class="pr-sorting__text" value="size">S</option>
                              <option class="pr-sorting__text" value="size">XS</option>
                            </select>
                            <img src="img/arrow-down.svg" alt="arrow-down"/>
                        </div>
                    </div>
                    <div class="settings-3">
                        <p class="settings-text">QUANTITY</p>
                        <div class="pr-sorting__box">
                            <form action="#" method="get">
                                <label for="search">
                                <input
                                  class="pr-quantity"
                                  type="number"
                                  name="quantity"
                                  id="quantity"
                                  placeholder="2"
                                />
                              </label>
                            </form>
                        </div>
                    </div>
                </div>
                <a href="./shopping_card">
                    <button class="product-info__button" type="button">
                        <img src="./img/basket_logo_pink.png" alt="basket_icon" class="product-info__button__logo"/>Add to Cart
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Info;