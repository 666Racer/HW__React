const Suggestions = () => {
    return(
        <section className="suggestions">
            <div class="suggestions__content container center">
                <h1 class="suggestions__title">you may like also</h1>
                <div class="suggestions__cards">
                    <a class="suggestions__card" href="./single">
                        <div class="suggestions__img-wrapper">
                            <img class="suggestions__img" src="img/single_page/single_page_catalogue_1.png" alt="single_page_catalogue_1" />
                        </div>
                        <div class="suggestions__info">
                            <p class="suggestions__name">BLAZE LEGGINGS</p>
                            <p class="suggestions__price">$52.00</p>
                        </div>
                    </a>

                    <a class="suggestions__card" href="./single">
                        <div class="suggestions__img-wrapper">
                            <img class="suggestions__img" src="img/single_page/single_page_catalogue_2.png" alt="single_page_catalogue_2"/>
                        </div>
                        <div class="suggestions__info">
                            <p class="suggestions__name">BLAZE LEGGINGS</p>
                            <p class="suggestions__price">$52.00</p>
                        </div>
                    </a>

                    <a class="suggestions__card" href="./single">
                        <div class="suggestions__img-wrapper">
                            <img class="suggestions__img" src="img/single_page/single_page_catalogue_3.png" alt="single_page_catalogue_3 " />
                        </div>
                        <div class="suggestions__info ">
                            <p class="suggestions__name ">BLAZE LEGGINGS</p>
                            <p class="suggestions__price ">$52.00</p>
                        </div>
                    </a>

                    <a class="suggestions__card " href="./single">
                        <div class="suggestions__img-wrapper ">
                            <img class="suggestions__img " src="./img/single_page/single_page_catalogue_4.png" alt="single_page_catalogue_4" />
                        </div>
                        <div class="suggestions__info ">
                            <p class="suggestions__name ">BLAZE LEGGINGS</p>
                            <p class="suggestions__price ">$52.00</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Suggestions;