
import { useState } from 'react';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import './ProductListingPage.css';

import tenis1 from '../assets/tenis 1.svg';
import tenis2 from '../assets/tenis 2.svg';

const products = [
  {
    id: 1,
    name: 'Tênis Esportivo',
    image: tenis1,
    price: 299.90,
    priceDiscount: 199.90,
    category: 'Esportivo',
  },
  {
    id: 2,
    name: 'Tênis Casual',
    image: tenis2,
    price: 249.90,
    priceDiscount: 179.90,
    category: 'Casual',
  },
  {
    id: 3,
    name: 'Tênis Esportivo Premium',
    image: tenis1,
    price: 349.90,
    priceDiscount: 279.90,
    category: 'Esportivo',
  },
  {
    id: 4,
    name: 'Tênis Casual Premium',
    image: tenis2,
    price: 399.90,
    priceDiscount: 319.90,
    category: 'Casual',
  },
];

function ProductListingPage() {
  const [order, setOrder] = useState('');
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (value, checked) => {
    setCategories((current) =>
      checked
        ? [...current, value]
        : current.filter((category) => category !== value)
    );
  };

  let filteredProducts = products.filter((product) => {
    return (
      categories.length === 0 ||
      categories.includes(product.category)
    );
  });

  if (order === 'asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (order === 'desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="product-listing-page">
      <aside className="product-filters">
        <div className="product-order">
          <label htmlFor="order">Ordenar por</label>

          <select
            id="order"
            value={order}
            onChange={(event) => setOrder(event.target.value)}
          >
            <option value="">Selecione</option>
            <option value="asc">Menor preço</option>
            <option value="desc">Maior preço</option>
          </select>
        </div>

        <div className="filter-container">
          <h2>Filtrar por</h2>

          <FilterGroup
            title="Categoria"
            options={[
              { text: 'Esportivo', value: 'Esportivo' },
              { text: 'Casual', value: 'Casual' },
            ]}
            selectedValues={categories}
            onChange={handleCategoryChange}
          />
        </div>
      </aside>

      <main className="product-results">
        <Section
          title={`${filteredProducts.length} produtos encontrados`}
          titleAlign="left"
        >
          <ProductListing products={filteredProducts} />
        </Section>
      </main>
    </div>
  );
}

export default ProductListingPage;
