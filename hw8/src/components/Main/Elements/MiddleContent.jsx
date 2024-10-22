const MiddleContent = () => {
  return (
    <section className="middle container center ">
      <div className="middle__content ">
        <div className="middle__content__pic ">
          <img
            className="middle__img "
            src="./img/middle/middle__img.png "
            alt="middle__image.png "
          />
          <div className="middle__content__pic__info ">
            <span className="middle__content__pic__text ">30%</span>
            <span className="middle__content__pic__text middle__content__pic__text--colored ">
              OFFER
            </span>
            <br />
            <span className="middle__content__pic__text middle__content__pic__text-bottom ">
              FOR WOMEN
            </span>
          </div>
        </div>
        <div className="middle__content__info ">
          <div className="middle__content__info__inner ">
            <div className="middle__content__info__inner-item ">
              <img
                className="inner-item__icon "
                src="./img/middle/middle_logo_1.png "
                alt="middle_logo_1.png "
                width="40 "
                height="40 "
              />
              <div className="inner-item__info ">
                <h3 className="inner-item__title ">Free Delivery</h3>
                <p className="inner-item__text ">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innovation with extensive models.
                </p>
              </div>
            </div>
            <div className="middle__content__info__inner-item ">
              <img
                className="inner-item__icon "
                src="./img/middle/middle_logo_2.png "
                alt="middle_logo_2.png "
                width="40 "
                height="40 "
              />
              <div className="inner-item__info ">
                <h3 className="inner-item__title ">Sales & discounts</h3>
                <p className="inner-item__text ">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innovation with extensive models.
                </p>
              </div>
            </div>
            <div className="middle__content__info__inner-item ">
              <img
                className="inner-item__icon "
                src="./img/middle/middle_logo_3.png "
                alt="middle_logo_3.png "
                width="40 "
                height="40 "
              />
              <div className="inner-item__info ">
                <h3 className="inner-item__title ">Quality assurance</h3>
                <p className="inner-item__text ">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innovation with extensive models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleContent;
