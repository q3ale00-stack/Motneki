import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <h2 className="footer__logo">MotnekiStore</h2>
            <p className="footer__tagline">Elevando el arte del coleccionismo con piezas exclusivas y curaduría premium desde Japón para el mundo.</p>
          </div>
          <div className="footer__columns">
            <div className="footer__col">
              <span className="footer__col-title">TIENDA</span>
              <Link to="/catalogo">Catálogo</Link>
              <Link to="/catalogo?filter=preventas">Preventas</Link>
              <Link to="/catalogo">Novedades</Link>
            </div>
            <div className="footer__col">
              <span className="footer__col-title">AYUDA</span>
              <a href="#">Envíos</a>
              <a href="#">FAQ</a>
              <a href="#">Contacto</a>
            </div>
            <div className="footer__col">
              <span className="footer__col-title">LEGAL</span>
              <a href="#">Privacidad</a>
              <a href="#">Términos</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2024 MotnekiStore. All rights reserved. Premium Anime Collectibles.</p>
          <div className="footer__social">
            <a href="#" aria-label="Web"><span className="material-symbols-outlined">public</span></a>
            <a href="#" aria-label="Compartir"><span className="material-symbols-outlined">share</span></a>
            <a href="#" aria-label="Email"><span className="material-symbols-outlined">mail</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
