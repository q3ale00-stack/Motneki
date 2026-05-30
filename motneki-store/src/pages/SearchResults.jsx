import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data/products'; // Conexión automática con tus datos reales
import { normalizeProductStatus } from '../utils/productStatus';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // Filtrar los productos por nombre, fabricante o serie según lo que busque el usuario
  const filteredProducts = products.filter(product => 
    product.name?.toLowerCase().includes(query.toLowerCase()) ||
    product.manufacturer?.toLowerCase().includes(query.toLowerCase()) ||
    product.series?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-results-page container" style={{ padding: '40px 20px', minHeight: '70vh' }}>
      <div className="search-results-header" style={{ marginBottom: '30px' }}>
        <span className="font-label" style={{ color: 'var(--primary)' }}>RESULTADOS DE BÚSQUEDA</span>
        <h1 className="font-display" style={{ marginTop: '8px', fontSize: '2.5rem', fontWeight: 'bold' }}>
          {query ? `Resultados para "${query}"` : 'Todos los productos'}
        </h1>
        <p className="font-body-md" style={{ color: 'var(--secondary)' }}>
          Se encontraron {filteredProducts.length} productos coincidentes.
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="search-empty" style={{ textAlign: 'center', padding: '60px 20px' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '64px', color: 'var(--secondary)', marginBottom: '16px' }}>search_off</span>
          <h3 className="font-h2">No encontramos resultados</h3>
          <p className="font-body-md" style={{ color: 'var(--secondary)', marginBottom: '24px' }}>Intenta buscar con otros términos o revisa la ortografía de la figura.</p>
          <Link to="/" className="btn btn--primary">Volver al Inicio</Link>
        </div>
      ) : (
        <div className="product-grid product-grid--4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/producto/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="preorder-card-simple" style={{ background: 'var(--surface)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--outline-variant)', cursor: 'pointer', transition: 'transform 0.2s ease' }}>
                <div className="preorder-card-simple__img-wrap" style={{ height: '320px', overflow: 'hidden', position: 'relative' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {product.badge && (
                    <div className="preorder-card-simple__badge" style={{ position: 'absolute', top: '12px', left: '12px' }}>
                      <span className="badge badge--primary" style={{ background: 'var(--primary)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '11px' }}>
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>
                <div className="preorder-card-simple__info" style={{ padding: '16px' }}>
                  <span className="font-label" style={{ color: 'var(--secondary)', fontSize: '12px', block: 'block', marginBottom: '4px' }}>{product.manufacturer} • {product.series}</span>
                  <h4 className="font-body-md" style={{ fontWeight: 700, margin: '0 0 12px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {product.name}
                  </h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="font-price" style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.1rem' }}>{product.currency} {product.price}</span>
                    <span className="font-label" style={{ color: 'var(--on-surface-variant)', background: 'var(--surface-container-highest, #f0f0f0)', padding: '2px 8px', borderRadius: '4px', fontSize: '11px' }}>
                      {normalizeProductStatus(product.status) === 'in-stock' ? 'EN STOCK' : normalizeProductStatus(product.status) === 'pre-order' ? 'PRE-ORDEN' : normalizeProductStatus(product.status) === 'sold-out' ? 'AGOTADO' : 'EN STOCK'}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}