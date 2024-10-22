const BotttomContent = () => {
  return (
    <section className="bottom center ">
      <article className="bottom__subscribe center ">
        <div className="bottom__reviews ">
          <img
            src="./img/bottom/bottom_icon.png "
            alt="bottom_icon.png "
            className="reviewer__photo "
          />
          <div className="review__content ">
            <p className="review__text ">
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
              pulvinar purus condimentum a. Aliquam condimentum mattis neque sed
              pretium”
            </p>
            <p className="reviewer__name ">Bin Burhan</p>
            <p className="reviewer__city ">Dhaka, Bd</p>
          </div>
        </div>
        <div className="bottom__subscribtion ">
          <h2 className="subscribtion__title ">
            Subscribe <br />
            <span className="subscribtion__subtitle ">
              FOR OUR NEWLETTER AND PROMOTION
            </span>
          </h2>
          <form className="subscribtion__form " action="# " method="post ">
            <label for="email ">
              <input
                className="subscribtion__field "
                type="email "
                name="email "
                id="email "
                placeholder="Enter Your Email "
              />
            </label>
            <button className="subscribtion__button button " type="submit ">
              Subscribe
            </button>
          </form>
        </div>
      </article>
      <article className="bottom__navigation ">
        <div className="bottom__navigation__content center ">
          <div className="bottom__navigation__left-block ">
            <a className="logo-link " href="index.html ">
              <img src="./img/logo.png " alt="logo.png " />
              <p className="logo-text ">
                BRAN<span className="logo-text logo-text--colored ">D</span>
              </p>
            </a>
            <div className="bottom__navigation__scroll-info ">
              <p className="left-block__text ">
                Objectively transition extensive data rather than cross
                functional solutions. Monotonectally syndicate multidisciplinary
                materials before go forward benefits. Intrinsicly syndicate an
                expanded array of processes and cross-unit partnerships.
              </p>
              <p className="left-block__text ">
                Efficiently plagiarize 24/365 action items and focused
                infomediaries. Distinctively seize superior initiatives for
                wireless technologies. Dynamically optimize.
              </p>
            </div>
          </div>
          <div className="bottom__navigation__right-block ">
            <nav className="bottom__navigation__nav ">
              <div className="bottom__navigation__nav-block ">
                <h2 className="nav-block__nav-title ">COMPANY</h2>
                <ul className="nav-block__nav-list ">
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Home</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Shop</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">About</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">How It Works</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Contact</li>
                  </a>
                </ul>
              </div>

              <div className="bottom__navigation__nav-block ">
                <h2 className="nav-block__nav-title ">INFORMATION</h2>
                <ul className="nav-block__nav-list ">
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Tearms & Condition</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Privacy Policy</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">How to Buy</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">How to Sell</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Promotion</li>
                  </a>
                </ul>
              </div>

              <div className="bottom__navigation__nav-block ">
                <h2 className="nav-block__nav-title ">SHOP CATEGORY</h2>
                <ul className="nav-block__nav-list ">
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Men</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Women</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Child</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Apparel</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Browse All</li>
                  </a>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BotttomContent;
