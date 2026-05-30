import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './SearchOverlay.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    id: 1,
    title: 'Figura Estatua de Resina Anime Forma Hueca Bleach Ichigo Kurosaki',
    subtitle: 'Good Smile Company • Bleach',
    price: 'S/. 189.99',
    badge: 'POPULAR',
    status: 'EN STOCK',
    image: 'https://i.pinimg.com/1200x/a4/55/6c/a4556ce0fe80b669bbc02c56a1da7306.jpg',
  },
  {
    id: 2,
    title: 'Goku Ultra Instinct',
    subtitle: 'Bandai Spirits • Dragon Ball Super',
    price: 'S/. 245.00',
    badge: 'NEW',
    status: 'EN STOCK',
    image: 'https://i.pinimg.com/736x/f1/7e/4f/f17e4f8402bed22170650c6fab2f41de.jpg',
  },
  {
    id: 3,
    title: 'RD studio 1:4/1:6 Gon Freecss',
    subtitle: 'Bandai Hobby • Hunter x Hunter',
    price: 'S/. 95.50',
    badge: 'LIMITED',
    status: 'PRE-ORDEN',
    image: 'https://i.pinimg.com/1200x/5d/da/a6/5ddaa6880599c7638efb7b7ab0b9c4b7.jpg',
  },
];

export default function SearchOverlay({ open, onClose }) {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/resultados?q=${encodeURIComponent(searchInput)}`);
      onClose();
    }
  };

  const handleRecentSearch = (term) => {
    navigate(`/resultados?q=${encodeURIComponent(term)}`);
    onClose();
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="search-overlay__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            className="search-overlay__panel"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="search-overlay__header">
              <form className="search-overlay__input-group" onSubmit={handleSearch}>
                <span className="material-symbols-outlined">search</span>
                <input
                  className="search-overlay__input"
                  type="text"
                  placeholder="Busca tu próxima pieza de colección (ej. Evangelion, Naruto, Nendoroid)..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </form>
              <button className="search-overlay__close" onClick={onClose} aria-label="Cerrar búsqueda">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="search-overlay__content">
              <div className="search-overlay__column search-overlay__column--left">
                <div className="search-card search-card--glass">
                  <h3>Búsquedas Recientes</h3>
                  <div className="search-tags">
                    {recentSearches.map((item) => (
                      <button 
                        key={item} 
                        type="button" 
                        className="search-tag"
                        onClick={() => handleRecentSearch(item)}
                      >
                        <span className="material-symbols-outlined">history</span>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="search-card search-card--glass">
                  <h3>Categorías Populares</h3>
                  <div className="search-category-grid">
                    {categories.map((category) => (
                      <Link className="search-category-card" key={category.title} to={`/catalogo?categoria=${encodeURIComponent(category.title)}`} onClick={onClose}>
                        <div className="search-category-card__image">
                          <img src={category.image} alt={category.title} />
                        </div>
                        <div className="search-category-card__label">{category.title}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="search-overlay__column search-overlay__column--right">
                <div className="search-results__header">
                  <div>
                    <span className="font-label">Sugerencias Destacadas</span>
                    <h2>Resultados que podrías amar</h2>
                  </div>
                  <button type="button" className="search-link" onClick={onClose}>
                    Ver todos los resultados
                  </button>
                </div>
                <div className="search-results__list">
                  {suggestions.map((item) => (
                    <Link to={`/producto/${item.id}`} key={item.id} className="search-result-card" onClick={onClose}>
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
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
