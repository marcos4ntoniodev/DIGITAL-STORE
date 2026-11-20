
import ProductCard from './ProductCard';
import './ProductListing.css';

function ProductListing({ products = [] }) {
  return (
    <div className="product-listing">
      {products.map((product, index) => (
        <ProductCard
          key={product.id ?? `${product.name}-${index}`}
          imagem={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}

export default ProductListing;
