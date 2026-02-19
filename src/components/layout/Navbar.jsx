import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth';
import logoSvg from '../../assets/icons/logo.svg';
import worldIcon from '../../assets/icons/icon-world.svg';
import sportsIcon from '../../assets/icons/icon-sports.svg';
import casinoIcon from '../../assets/icons/icon-casino.svg';
import liveDealerIcon from '../../assets/icons/icon-live-dealer.svg';
import promotionsIcon from '../../assets/icons/icon-promotions.svg';

const navLinks = [
  { label: 'Sports',      path: '/sports',      icon: sportsIcon },
  { label: 'Casino',      path: '/casino',       icon: casinoIcon },
  { label: 'Live Dealer', path: '/live-dealer',  icon: liveDealerIcon },
  { label: 'Promotions',  path: '/promotions',   icon: promotionsIcon },
];

const Navbar = () => {
  const { toggleSidebar, activeNav, setActiveNav } = useApp();
  const navigate = useNavigate();
  const { isMobile } = useWindowWidth();

  return (
    <header style={{
      ...styles.navbar,
      height: isMobile ? '52px' : '62px',
      padding: isMobile ? '0 12px' : '0 20px',
    }}>

      {/* Left — Hamburger (mobile) + Logo */}
      <div style={styles.left}>
        {isMobile && (
          <button style={styles.hamburger} onClick={toggleSidebar}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </button>
        )}
        <img
          src={logoSvg}
          alt="VIVA X PLAY"
          style={{
            ...styles.logo,
            height: isMobile ? '26px' : '34px',
          }}
          onClick={() => navigate('/')}
        />
      </div>

      {/* Center — Nav Links (desktop only) */}
      {!isMobile && (
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
      )}

      {/* Right — Auth Buttons */}
      <div style={styles.authButtons}>

        {/* Globe / Language */}
        <button style={isMobile ? styles.langBtnMobile : styles.langBtn}>
          <img src={worldIcon} alt="lang" style={{ width: isMobile ? 16 : 14, height: isMobile ? 16 : 14 }} />
          {!isMobile && 'EN'}
        </button>

        {/* Login */}
        <button
          style={isMobile ? styles.loginBtnMobile : styles.loginBtn}
          onClick={() => navigate('/login')}
        >
          LOGIN
        </button>

        {/* Register */}
        <button
          style={isMobile ? styles.registerBtnMobile : styles.registerBtn}
          onClick={() => navigate('/register')}
        >
          REGISTER
        </button>
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
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  hamburger: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  logo: {
    objectFit: 'contain',
    cursor: 'pointer',
  },

  /* ── Desktop nav links ── */
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

  /* ── Auth buttons ── */
  authButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },

  /* Desktop */
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
    fontWeight: '600',
    fontFamily: 'inherit',
    textTransform: 'uppercase',
  },

  /* Mobile — matches Figma: globe icon | LOGIN border | REGISTER cyan */
  langBtnMobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    color: '#ffffff',
    padding: '6px',
    borderRadius: '6px',
    cursor: 'pointer',
    border: '1px solid #1cd4ff',
    width: '32px',
    height: '32px',
  },
  loginBtnMobile: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '600',
    fontFamily: 'inherit',
    border: '1px solid #ffffff',
    letterSpacing: '0.3px',
  },
  registerBtnMobile: {
    background: '#1cd4ff',
    border: 'none',
    color: '#0d0d0d',
    padding: '6px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '700',
    fontFamily: 'inherit',
    textTransform: 'uppercase',
    letterSpacing: '0.3px',
  },
};

export default Navbar;
