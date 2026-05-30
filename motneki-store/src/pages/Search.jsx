
import { motion } from 'framer-motion';
import './Search.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';

const recentSearches = ['Asuka Langley', 'Chainsaw Man', 'Nendoroid Denji'];
const categoryCounts = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] ?? 0) + 1;
  return acc;
}, {});

const categories = Object.entries(categoryCounts)
  .sort(([, left], [, right]) => right - left)
  .slice(0, 4)
  .map(([title]) => {
    const representative = products.find((product) => product.category === title);
    return {
      title,
      image: representative?.image ?? '',
    };
  });

const suggestions = [
  {
    title: 'Evangelion: Unit-01 - Dynaction Edition',
    subtitle: 'Bandai Spirits • 40cm Figure',
    price: 'S/. 899.00',
    badge: 'POPULAR',
    status: 'EN STOCK',
    image: '/imagen/ImagenSearch/5f993c3d2243c2c7a42404220f0865a3.jpg',
  },
  {
    title: 'Makima - Chain Reaction 1/7 Scale',
    subtitle: 'Good Smile Company • Chainsaw Man',
    price: 'S/. 1,250.00',
    badge: 'LIMITED',
    status: 'PRE-ORDEN',
    image: '/imagen/ImagenSearch/80259be8ff3bf3d173567b5871762885.jpg',
  },
  {
    title: 'Nendoroid Denji - Blood Fiend Style',
    subtitle: 'Good Smile Company • Articulado',
    price: 'S/. 499.00',
    badge: 'RECOMENDADO',
    status: 'DISPONIBLE',
    image: '/imagen/ImagenSearch/90c7b6e709a3174d8313e0debb321ebf.jpg',
  },
];

export default function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/resultados?q=${encodeURIComponent(query.trim())}`);
    }
  };
  return (
    <motion.div className="search-page" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      <section className="search-hero container">
        <div className="search-hero__content">
          <span className="search-hero__eyebrow">Búsqueda Premium</span>
          <h1>Encuentra piezas exclusivas con estilo boutique.</h1>
          <p>Explora colecciones seleccionadas para fans del anime y el coleccionismo de alto nivel. La interfaz de búsqueda está diseñada para que descubras productos, tendencias y lanzamientos con facilidad.</p>
          <div className="search-hero__actions">
            <Link to="/catalogo" className="btn btn--primary">VER CATÁLOGO</Link>
            <Link to="/" className="btn btn--outline">VOLVER AL INICIO</Link>
          </div>
        </div>
      </section>

      <section className="search-panel container">
        <aside className="search-aside">
          <div className="search-card">
            <div className="search-card__header">
              <span className="material-symbols-outlined search-card__icon">search</span>
              <div>
                <h2>Búsqueda</h2>
                <p>Busca tu próxima pieza de colección (ej. Evangelion, Naruto, Nendoroid).</p>
              </div>
            </div>
            <input className="search-input" placeholder="Buscar producto, personaje o categoría" type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleSearch} />
          </div>

          <div className="search-card">
            <h3>Búsquedas Recientes</h3>
            <div className="search-tags">
              {recentSearches.map((item) => (
                <button key={item} className="search-tag" type="button">
                  <span className="material-symbols-outlined">history</span>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="search-card">
            <h3>Categorías Populares</h3>
            <div className="search-category-grid">
              {categories.map((category) => (
                <Link className="search-category-card" key={category.title} to={`/catalogo?categoria=${encodeURIComponent(category.title)}`}>
                  <div className="search-category-card__image">
                    <img src={category.image} alt={category.title} />
                  </div>
                  <div className="search-category-card__label">{category.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <div className="search-results">
          <div className="search-results__header">
            <div>
              <span className="font-label">Sugerencias Destacadas</span>
              <h2>Resultados que podrías amar</h2>
            </div>
            <a className="search-link" href="#">Ver todos los resultados</a>
          </div>

          <div className="search-results__list">
            {suggestions.map((item) => (
              <article className="search-result-card" key={item.title}>
                <div className="search-result-card__media">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="search-result-card__body">
                  <div className="search-result-card__badge">{item.badge}</div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
                <div className="search-result-card__aside">
                  <span className="search-result-card__price">{item.price}</span>
                  <span className="search-result-card__status">{item.status}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
