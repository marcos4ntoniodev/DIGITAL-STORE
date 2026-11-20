
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import Gallery from '../components/Gallery';
import './HomePage.css';

const homeImages = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
  { src: '/home-slide-4.jpeg' },
  { src: '/home-slide-5.jpeg' },
  { src: '/home-slide-6.jpeg' },
  { src: '/home-slide-7.jpeg' },
  { src: '/home-slide-8.jpeg' },
];

const collections = [
  {
    name: 'Coleção 1',
    image: '/collection-1.png',
  },
  {
    name: 'Coleção 2',
    image: '/collection-2.png',
  },
  {
    name: 'Coleção 3',
    image: '/collection-3.png',
  },
];

const products = [
  {
    id: 1,
    name: 'Tênis Esportivo',
    image: '/product-thumb-1.jpeg',
    price: '299,90',
    priceDiscount: '199,90',
  },
  {
    id: 2,
    name: 'Tênis Casual',
    image: '/product-thumb-2.jpeg',
    price: '249,90',
    priceDiscount: '179,90',
  },
  {
    id: 3,
    name: 'Tênis Cano Alto',
    image: '/product-thumb-3.jpeg',
    price: '349,90',
    priceDiscount: '279,90',
  },
  {
    id: 4,
    name: 'Tênis Urbano',
    image: '/product-thumb-4.jpeg',
    price: '399,90',
    priceDiscount: '319,90',
  },
  {
    id: 5,
    name: 'Tênis Street',
    image: '/product-thumb-5.jpeg',
    price: '329,90',
    priceDiscount: '259,90',
  },
  {
    id: 6,
    name: 'Tênis Esportivo Premium',
    image: '/product-thumb-1.jpeg',
    price: '349,90',
    priceDiscount: '279,90',
  },
  {
    id: 7,
    name: 'Tênis Casual Premium',
    image: '/product-thumb-2.jpeg',
    price: '399,90',
    priceDiscount: '319,90',
  },
  {
    id: 8,
    name: 'Tênis Especial',
    image: '/product-thumb-3.jpeg',
    price: '299,90',
    priceDiscount: '229,90',
  },
];

function HomePage() {
  return (
    <div className="home-page">

      <Gallery
        images={homeImages}
        width="1440px"
        height="681px"
        radius="4px"
        className="home-gallery"
      />

      <Section
        title="Coleções em destaque"
        titleAlign="center"
      >
        <div className="home-collections">
          {collections.map((collection) => (
            <img
              key={collection.name}
              src={collection.image}
              alt={collection.name}
            />
          ))}
        </div>
      </Section>

      <Section
        title="Produtos em alta"
        titleAlign="left"
      >
        <ProductListing products={products} />
      </Section>

    </div>
  );
}

export default HomePage;
