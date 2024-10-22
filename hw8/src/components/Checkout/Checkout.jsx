import Arrivals from '../Arrivals';

const Checkout = () => {
	return (
        <div>
            <Arrivals />
                <section class="checkout">
                    <div class="checkout__content container center">
                        <ul class="checkout__list">
                            <li class="checkout__item">
                                <details class="checkout__details" open>
                                    <summary class="checkout__summary">01. Shipping Adress</summary>
                                    <div class="details__box">
                                        <div class="checkout__register-details">
                                            <p class="checkout__text-big">
                                                Check as a guest or register
                                            </p>
                                            <p class="checkout__text-small">
                                                Register with us for future convenience
                                            </p>
                                            <form action="#" class="radio-box">
                                                <div class="radio__item">
                                                    <input class="radio-item" type="radio" name="choice" id="guest" />
                                                    <label class="checkout__text-middle" for="guest">checkout as guest</label>
                                                </div>

                                                <div class="radio__item">
                                                    <input class="radio-item" type="radio" name="choice" id="register" />
                                                    <label class="checkout__text-middle" for="register">register</label>
                                                </div>
                                            </form>
                                            <p class="checkout__text-big">register and save time!</p>
                                            <p class="checkout__text-small">
                                                Register with us for future convenience
                                            </p>
                                            <div class="checkout__additional">
                                                <a href="#" class="additional__link">
                                                    <div class="additional__wrapper">
                                                        <img height="8px" src="img/order_arrows.png" alt="arrow" />
                                                        <p class="additional__text checkout__text-small">
                                                            Fast and easy checkout
                                                        </p>
                                                    </div>
                                                </a>
                                                <div class="additional__wrapper">
                                                    <img height="8px" src="img/order_arrows.png" alt="arrow" />
                                                    <p class="additional__text checkout__text-small">
                                                        Easy access to your order history and status
                                                    </p>
                                                </div>
                                            </div>
                                            <button class="checkout__button" type="button">Continue</button>
                                        </div>

                                        <div class="checkout__log-in">
                                            <p class="checkout__text-big">Already registered?</p>
                                            <p class="checkout__text-small">Please log in below</p>
                                            <form action="#" method="post" class="login-form">
                                                <label class="login-form__label checkout__text-middle" for="email">EMAIL ADDRESS <span class="required-fields">*</span></label>
                                                <br/>
                                                <input class="login-form__input" type="email" id="email" name="email" required/>
                                                <label class="login-form__label checkout__text-middle" for="password">PASSWORD <span class="required-fields">*</span></label>
                                                <br/>
                                                <input class="login-form__input" type="password" id="password" name="password" required/>
                                            </form>
                                            <p class="required-fields__text">* Required Fields</p>
                                            <button class="checkout__button" type="button">Log in</button>
                                            <a href="#" class="forgot">Forgot Password ?</a>
                                        </div>
                                    </div>
                                </details>
                            </li>
                            <li class="checkout__item">
                                <details class="checkout__details">
                                    <summary class="checkout__summary">
                                        02. BILLING INFORMATION
                                    </summary>
                                </details>
                            </li>
                            <li class="checkout__item">
                                <details class="checkout__details">
                                    <summary class="checkout__summary">
                                        03. SHIPPING INFORMATION
                                    </summary>
                                </details>
                            </li>
                            <li class="checkout__item">
                                <details class="checkout__details">
                                    <summary class="checkout__summary">04. SHIPPING METHOD</summary>
                                </details>
                            </li>
                            <li class="checkout__item">
                                <details class="checkout__details">
                                    <summary class="checkout__summary">05. PAYMENT METHOD</summary>
                                </details>
                            </li>
                            <li class="checkout__item">
                                <details class="checkout__details">
                                    <summary class="checkout__summary">06. ORDER REVIEW</summary>
                                </details>
                            </li>
                        </ul>
                    </div>
                </section>
        </div>
    )
}

export default Checkout;