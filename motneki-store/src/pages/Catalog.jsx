import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products, categories, seriesPopulares } from '../data/products';
import { normalizeProductStatus } from '../utils/productStatus';
import { Link, useSearchParams } from 'react-router-dom';
import './Catalog.css';

const categoryTags = [
  { name: 'Todos', icon: 'grid_view' },
  { name: 'Llaveros', icon: 'key', img: '/categories/keychains.png' },
  { name: 'Figuras', icon: 'toys', img: '/categories/figures.png' },
  { name: 'Peluches', icon: 'child_care', img: '/categories/plushies.png' },
  { name: 'Collares', icon: 'diamond', img: '/imagen/collares.jpg' },
  { name: 'Relojes', icon: 'watch', img: '/imagen/relojes.jpg' },
  { name: 'Polos', icon: 'checkroom', img: '/imagen/polos.jpg' },
];

const priceRanges = [
  { label: 'Todos los precios', min: 0, max: Infinity },
  { label: 'Menos de S/.100', min: 0, max: 100 },
  { label: 'S/.100 – S/.300', min: 100, max: 300 },
  { label: 'S/.300 – S/.700', min: 300, max: 700 },
  { label: 'Más de S/.700', min: 700, max: Infinity },
];

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTag, setActiveTag] = useState('Todos');
  const [activeCategory, setActiveCategory] = useState(null);
  const [sort, setSort] = useState('Novedades');
  const [activeSeries, setActiveSeries] = useState(null);
  const [availability, setAvailability] = useState({ stock: true, preorder: true, soldout: false });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const categoryFromUrl = searchParams.get('categoria');

    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveTag(categoryFromUrl);
      setActiveCategory(categoryFromUrl);
    } else {
      setActiveTag('Todos');
      setActiveCategory(null);
    }
  }, [searchParams]);

  const handleCategorySelect = (category) => {
    setActiveTag(category);
    setActiveCategory(category === 'Todos' ? null : category);
    setSearchParams((currentParams) => {
      const nextParams = new URLSearchParams(currentParams);

      if (category === 'Todos') {
        nextParams.delete('categoria');
      } else {
        nextParams.set('categoria', category);
      }

      return nextParams;
    });
  };

  const filteredProducts = products.filter(p => {
    const normalizedStatus = normalizeProductStatus(p.status);

    // Filtrar por categoría
    if (activeTag !== 'Todos' && p.category !== activeTag) return false;
    
    // Filtrar por serie
    if (activeSeries && p.series !== activeSeries) return false;
    
    // Filtrar por disponibilidad
    if (availability.stock && normalizedStatus === 'in-stock') return true;
    if (availability.preorder && normalizedStatus === 'pre-order') return true;
    if (availability.soldout && normalizedStatus === 'sold-out') return true;
    if (!availability.stock && !availability.preorder && !availability.soldout) return true;
    return false;
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="catalog-page">
      {/* ─── Category Tags Header ─── */}
      <div className="catalog-tags-header">
        <div className="catalog-tags-header__inner">
          <div className="catalog-tags-header__title-row">
            <h2 className="catalog-tags-header__title">Explora por Categoría</h2>
            <span className="catalog-tags-header__count">{products.length} productos</span>
          </div>
          <div className="catalog-tags-scroll">
            {categoryTags.map(tag => (
              <button
                key={tag.name}
                className={`catalog-tag ${activeTag === tag.name ? 'catalog-tag--active' : ''}`}
                onClick={() => handleCategorySelect(tag.name)}
              >
                <span className="material-symbols-outlined catalog-tag__icon">{tag.icon}</span>
                {tag.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Category Visual Cards (when a specific tag is selected) ─── */}
      <AnimatePresence>
        {activeTag === 'Todos' && (
          <motion.div
            className="catalog-category-cards"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {categoryTags.filter(t => t.name !== 'Todos').map((tag, i) => (
              <motion.button
                key={tag.name}
                className="catalog-cat-card"
                onClick={() => handleCategorySelect(tag.name)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="catalog-cat-card__img-wrap">
                  <img src={tag.img} alt={tag.name} />
                </div>
                <span className="catalog-cat-card__label">{tag.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Main Layout ─── */}
      <div className="catalog-layout">
        {/* Mobile Filter Toggle */}
        <button className="catalog-mobile-filter-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <span className="material-symbols-outlined">tune</span>
          Filtros
        </button>

        {/* Sidebar */}
        <aside className={`catalog-sidebar ${sidebarOpen ? 'catalog-sidebar--open' : ''}`}>
          <div className="sidebar-section">
            <h3 className="sidebar-title">
              <span className="material-symbols-outlined sidebar-title__icon">category</span>
              CATEGORÍAS
            </h3>
            <div className="sidebar-cats">
              {categories.map(c => (
                <button
                  key={c}
                  className={`sidebar-cat ${activeCategory === c ? 'sidebar-cat--active' : ''}`}
                  onClick={() => handleCategorySelect(c)}
                >
                  <span className="material-symbols-outlined sidebar-cat__icon">
                    {c === 'Catálogo' ? 'grid_view' : c === 'Modelismo' ? 'architecture' : 'shopping_bag'}
                  </span>
                  {c}
                  {activeCategory === c && <span className="sidebar-cat__indicator" />}
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-divider" />

          <div className="sidebar-section">
            <h3 className="sidebar-title">
              <span className="material-symbols-outlined sidebar-title__icon">inventory_2</span>
              DISPONIBILIDAD
            </h3>
            <div className="sidebar-checks">
              <label className="sidebar-check-label">
                <input
                  type="checkbox"
                  checked={availability.stock}
                  onChange={() => setAvailability(prev => ({ ...prev, stock: !prev.stock }))}
                />
                <span className="sidebar-check-custom" />
                En stock
                <span className="sidebar-check-count">({products.filter(p => normalizeProductStatus(p.status) === 'in-stock').length})</span>
              </label>
              <label className="sidebar-check-label">
                <input
                  type="checkbox"
                  checked={availability.preorder}
                  onChange={() => setAvailability(prev => ({ ...prev, preorder: !prev.preorder }))}
                />
                <span className="sidebar-check-custom" />
                Preventa
                <span className="sidebar-check-count">({products.filter(p => normalizeProductStatus(p.status) === 'pre-order').length})</span>
              </label>
              <label className="sidebar-check-label">
                <input
                  type="checkbox"
                  checked={availability.soldout}
                  onChange={() => setAvailability(prev => ({ ...prev, soldout: !prev.soldout }))}
                />
                <span className="sidebar-check-custom" />
                Agotado
                <span className="sidebar-check-count">({products.filter(p => normalizeProductStatus(p.status) === 'sold-out').length})</span>
              </label>
            </div>
          </div>

          <div className="sidebar-divider" />

          <div className="sidebar-section">
            <h3 className="sidebar-title">
              <span className="material-symbols-outlined sidebar-title__icon">local_fire_department</span>
              SERIES POPULARES
            </h3>
            <div className="sidebar-series">
              {seriesPopulares.map(s => (
                <button
                  key={s}
                  className={`sidebar-series-btn ${activeSeries === s ? 'sidebar-series-btn--active' : ''}`}
                  onClick={() => setActiveSeries(activeSeries === s ? null : s)}
                >
                  <span className="sidebar-series-dot" />
                  {s}
                </button>
              ))}
            </div>
          </div>

          <Link to="/pedidos-personalizados" className="sidebar-custom-btn">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>edit_note</span>
            Solicitar Figura Personalizada
          </Link>
        </aside>

        {/* Main Content */}
        <main className="catalog-main">
          <div className="catalog-header">
            <div>
              <div className="catalog-breadcrumb">
                <Link to="/">Inicio</Link>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
                <span className="catalog-breadcrumb--active">Catálogo</span>
                {activeTag !== 'Todos' && (
                  <>
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
                    <span className="catalog-breadcrumb--active">{activeTag}</span>
                  </>
                )}
              </div>
              <h1 className="font-display catalog-main-title">
                {activeTag === 'Todos' ? 'Catálogo de Productos' : activeTag}
              </h1>
              <p className="catalog-subtitle">
                Mostrando {filteredProducts.length} artículos
                {activeSeries && <> de <strong>{activeSeries}</strong></>}
              </p>
            </div>
            <div className="catalog-controls">
              <div className="catalog-sort">
                <span className="material-symbols-outlined catalog-sort__icon">swap_vert</span>
                <select value={sort} onChange={e => setSort(e.target.value)}>
                  <option>Novedades</option>
                  <option>Precio: Menor a Mayor</option>
                  <option>Precio: Mayor a Menor</option>
                  <option>Más Populares</option>
                </select>
              </div>
              <div className="catalog-view-btns">
                <button className="catalog-view-btn catalog-view-btn--active" aria-label="Vista grilla">
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button className="catalog-view-btn" aria-label="Vista lista">
                  <span className="material-symbols-outlined">view_list</span>
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(activeSeries || activeTag !== 'Todos') && (
            <div className="catalog-active-filters">
              {activeTag !== 'Todos' && (
                <span className="catalog-filter-chip">
                  {activeTag}
                  <button onClick={() => setActiveTag('Todos')} className="catalog-filter-chip__close">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </span>
              )}
              {activeSeries && (
                <span className="catalog-filter-chip">
                  {activeSeries}
                  <button onClick={() => setActiveSeries(null)} className="catalog-filter-chip__close">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </span>
              )}
              <button className="catalog-clear-filters" onClick={() => { setActiveTag('Todos'); setActiveSeries(null); }}>
                Limpiar filtros
              </button>
            </div>
          )}

          {/* Product Grid */}
          <motion.div
            className="catalog-grid"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="catalog-empty">
              <span className="material-symbols-outlined catalog-empty__icon">search_off</span>
              <h3>No se encontraron productos</h3>
              <p>Intenta cambiar los filtros de búsqueda</p>
            </div>
          )}

          {/* Pagination */}
          <div className="pagination">
            <button className="page-btn" aria-label="Anterior">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="page-btn page-btn--active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span className="page-dots">···</span>
            <button className="page-btn">12</button>
            <button className="page-btn" aria-label="Siguiente">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
