import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import logoSvg from '../../assets/icons/logo.svg';
import worldIcon from '../../assets/icons/icon-world.svg';
import sportsIcon from '../../assets/icons/icon-sports.svg';
import casinoIcon from '../../assets/icons/icon-casino.svg';
import liveDealerIcon from '../../assets/icons/icon-live-dealer.svg';
import promotionsIcon from '../../assets/icons/icon-promotions.svg';

const navLinks = [
  { label: 'Sports', path: '/sports', icon: sportsIcon },
  { label: 'Casino', path: '/casino', icon: casinoIcon },
  { label: 'Live Dealer', path: '/live-dealer', icon: liveDealerIcon },
  { label: 'Promotions', path: '/promotions', icon: promotionsIcon },
];

const Navbar = () => {
  const { toggleSidebar, activeNav, setActiveNav } = useApp();
  const navigate = useNavigate();

  return (
    <header style={styles.navbar}>
      {/* Left - Hamburger + Logo */}
      <div style={styles.left}>
        <button style={styles.hamburger} onClick={toggleSidebar}>
          {/* <span style={styles.hamburgerIcon}>☰</span> */}
        </button>
        <img
          src={logoSvg}
          alt="VIVA X PLAY"
          style={styles.logo}
          onClick={() => navigate('/')}
        />
      </div>

      {/* Center - Nav Links */}
      <nav style={styles.navLinks}>
        {navLinks.map((link) => (
          <button
            key={link.label}
            style={{
              ...styles.navBtn,
              ...(activeNav === link.label ? styles.navBtnActive : {}),
            }}
            onClick={() => {
              setActiveNav(link.label);
              navigate(link.path);
            }}
          >
            <img src={link.icon} alt={link.label} style={styles.navIcon} />
            {link.label}
          </button>
        ))}
      </nav>

      {/* Right - Auth Buttons */}
      <div style={styles.authButtons}>
        <button style={styles.langBtn}>
          <img src={worldIcon} alt="lang" style={{ width: 14, height: 14 }} />
          EN
        </button>
        <button
          style={styles.loginBtn}
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button onClick={() => navigate('/register')} style={styles.registerBtn}>Register</button>
      </div>
    </header>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1f1f1f',
    padding: '0 20px',
    height: '62px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  hamburger: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: '4px',
  },
  hamburgerIcon: {
    color: '#ffffff',
    fontSize: '20px',
  },
  logo: {
    height: '34px',
    objectFit: 'contain',
    cursor: 'pointer',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '42px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '8px 16px',
    fontSize: '14px',
  },
  navBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    background: 'none',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    padding: '8px 10px',
    borderRadius: '6px',
    fontSize: '18px',
    fontWeight: '510',
    fontFamily: 'inherit',
    opacity: 0.75,
    transition: 'all 0.2s',
  },
  navBtnActive: {
    opacity: 1,
    backgroundColor: 'transparent',
    color: '#ffffff',
  },
  navIcon: {
    width: '18px',
    height: '18px',
    filter: 'brightness(10)',
  },
  authButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  langBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#121212',
    color: '#ffffff',
    padding: '6px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 500,
    fontFamily: 'inherit',
    border: '1px solid #1cd4ff',
    transition: 'all 0.2s ease',
  },

  loginBtn: {
    backgroundColor: '#121212',
    color: '#ffffff',
    padding: '6px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 500,
    fontFamily: 'inherit',
    border: '1px solid #1cd4ff',
    transition: 'all 0.2s ease',
  },

  registerBtn: {
    background: '#1cd4ff',
    border: 'none',
    color: '#121212',
    padding: '7px 22px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '510',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    fontStyle: 'normal',
    lineHeight: '20px',
    letterSpacing: '0',
    textTransform: 'uppercase',
  },
};

export default Navbar;
