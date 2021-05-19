import "./container.scss";
import Product from "./components/product";
import { getProducts } from "./services";

import { useState, useEffect } from "react";

export default function App() {
  // Definiendo el estado de los productos
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Aquí se llama a los productos y el array del json
    const loadProducts = async () => {
      const response = await getProducts();

      // Evaluamos la respuesta del servidor
      if (response.status === 200) {
        setProducts(response.data);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Productos</h1>
      </div>
      <div className="Container">
        {products.map((i) => {
          let offer = "";
          let classOffer = "";
          let offerProduct = "";
          let classPrice = "";
          if (i.category === "electronics" && i.price > 400) {
            offer = "10%";
            classOffer = "offer";
            offerProduct = "$" + (i.price - i.price * 0.15);
            classPrice = "classPrice";
          }
          return (
            <Product
              nameProduct={i.title}
              classOffer={classOffer}
              offer={offer}
              priceProduct={i.price}
              classPrice={classPrice}
              offerProduct={offerProduct}
              description={i.description}
              categoryProduct={i.category}
              imgSrc={i.image}
            />
          );
        })}
      </div>
    </div>
  );
}
