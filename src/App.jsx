
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

function Products() {
  return (
    <section>
      <h1>Produtos</h1>
      <p>Em breve, você poderá conferir nossos produtos.</p>
    </section>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
