
import './ProductCard.css';

function ProductCard({ imagem, name, price, priceDiscount }) {
  return (
    <article className="product-card">
      <img
        className="product-card-image"
        src={imagem}
        alt={name}
      />

      <div className="product-card-info">
        <h3>{name}</h3>

        <div className="product-card-prices">
          {priceDiscount ? (
            <>
              <span className="product-card-original-price">
                R$ {price}
              </span>

              <span className="product-card-discount-price">
                R$ {priceDiscount}
              </span>
            </>
          ) : (
            <span className="product-card-price">
              R$ {price}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
