import ProductCards from "./ProductCards";
import { data } from "../../../../public/data/data.json";

const SecondGrid = () => {
  return (
    <section className="second__grid center ">
      <article className="second__grid__content">
        {data.map((product) => (
          <ProductCards
            key={product.id}
            id={product.id}
            cardLink={product.cardLink}
            img={product.img}
            title={product.title}
            price={product.price}
            btnText={product.btnText}
            sizes={product.sizes.join(", ")}
          />
        ))}
      </article>
    </section>
  );
};

export default SecondGrid;
