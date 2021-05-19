import "./product.scss";

const Product = ({
  nameProduct,
  classOffer,
  offer,
  imgSrc,
  classPrice,
  priceProduct,
  offerProduct,
  categoryProduct,
  description
}) => {
  return (
    <div className="card">
      <div className="title">
        <h2>{nameProduct}</h2>
        <h3 className={classOffer}>{offer}</h3>
      </div>
      <div className="content">
        <div className="imageContent">
          <img alt="pictureProduct" src={imgSrc} />
        </div>
        <h3 className={classPrice}>${priceProduct}</h3>
        <h3 className="offerProduct">{offerProduct}</h3>
        <p>
          <strong>Category: </strong>
          {categoryProduct}
        </p>
        <hr />
        <div className="description">
          <label>{description}</label>
        </div>
      </div>
    </div>
  );
};

export default Product;
