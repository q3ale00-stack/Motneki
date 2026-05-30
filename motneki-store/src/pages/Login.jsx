import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="login-page">
      <div className="login-container">
        <Link to="/" className="login-logo">MotnekiStore</Link>
        <p className="login-subtitle">Accede a tu colección exclusiva de figuras premium.</p>
        <div className="login-card">
          <div className="form-group"><label className="font-label">CORREO ELECTRÓNICO</label><div className="input-icon"><span className="material-symbols-outlined">mail</span><input type="email" placeholder="ejemplo@correo.com" /></div></div>
          <div className="form-group"><div style={{ display: 'flex', justifyContent: 'space-between' }}><label className="font-label">CONTRASEÑA</label><a href="#" style={{ fontSize: 11, color: 'var(--primary-container)', fontWeight: 700 }}>¿OLVIDASTE TU CONTRASEÑA?</a></div><div className="input-icon"><span className="material-symbols-outlined">lock</span><input type="password" placeholder="••••••••" /><button className="input-icon__toggle"><span className="material-symbols-outlined">visibility</span></button></div></div>
          <label className="login-remember"><input type="checkbox" /> Recordarme en este dispositivo</label>
          <button onClick={() => navigate('/perfil')} className="btn btn--primary btn--lg login-btn">Iniciar Sesión</button>
          <div className="login-divider"><span>O CONTINUAR CON</span></div>
          <button className="login-google"><svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"/><path fill="#FBBC05" d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z"/></svg>Google</button>
        </div>
        <p className="login-register">¿Aún no tienes una cuenta? <Link to="/registro" style={{ color: 'var(--primary-container)', fontWeight: 600 }}>Regístrate ahora</Link></p>
      </div>
    </motion.div>
  );
}
