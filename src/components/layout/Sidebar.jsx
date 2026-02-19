import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import SearchBar from '../common/SearchBar';

import sportsIcon      from '../../assets/icons/sportsicon.png';
import liveSportsIcon  from '../../assets/icons/Live sports.png';
import casinoIcon      from '../../assets/icons/icon-casino2.svg';
import liveDealerIcon  from '../../assets/icons/icon-live-dealer2.svg';
import promotionsIcon  from '../../assets/icons/icon-promotions2.svg';
import referIcon       from '../../assets/icons/icon-refer.svg';
import bonusIcon       from '../../assets/icons/icon-bonus.svg';
import supportIcon     from '../../assets/icons/icon-support.svg';
import aboutIcon       from '../../assets/icons/icon-about.svg';

/* ── About sub-links (clickable — navigate to page) ── */
const aboutLinks = [
  { label: 'AML Policy',            path: '/about/aml-policy' },
  { label: 'Cookie Policy',         path: '/about/cookie-policy' },
  { label: 'Dispute Policy',        path: '/about/dispute-policy' },
  { label: 'KYC Policy',            path: '/about/kyc-policy' },
  { label: 'Privacy Policy',        path: '/about/privacy-policy' },
  { label: 'Responsible Gaming',    path: '/about/responsible-gaming' },
  { label: 'Self Exclusion Policy', path: '/about/self-exclusion-policy' },
  { label: 'Terms & Conditions',    path: '/about/terms-and-conditions' },
];

/* ── All main nav items — static display only, except items with path or expandable ── */
const menuItems = [
  { label: 'Sports',          icon: sportsIcon },
  { label: 'Live Sports',     icon: liveSportsIcon },
  { label: 'Casino',          icon: casinoIcon,     path: '/casino' },
  { label: 'Live Dealer',     icon: liveDealerIcon },
  { label: 'Promotions',      icon: promotionsIcon },
  { label: 'Refer a friend',  icon: referIcon },
  { label: 'Welcome Bonuses', icon: bonusIcon },
  { label: 'Support',         icon: supportIcon },
  { label: 'About Us',        icon: aboutIcon, expandable: true, children: aboutLinks },
];

/* ── Chevron SVGs ── */
const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9l6 6 6-6" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronUp = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 15l-6-6-6 6" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── LIVE badge ── */
const LiveBadge = () => (
  <span style={styles.liveBadge}>
    <span style={styles.liveDot} />
    LIVE
  </span>
);

/* ══════════════════════════════════════════════════════════ */
const Sidebar = () => {
  const { sidebarOpen } = useApp();
  const [expanded, setExpanded] = useState({});
  const [activeSubItem, setActiveSubItem] = useState(null);
  const navigate = useNavigate();

  if (!sidebarOpen) return null;

  return (
    <aside style={styles.sidebar}>

      {/* ── Search bar (static) ── */}
      <div style={styles.searchWrapper}>
        <SearchBar />
      </div>

      {/* ── Navigation menu ── */}
      <nav style={styles.menu}>
        {menuItems.map((item) => (
          <div key={item.label}>

            {/* About Us — clickable to expand/collapse */}
            {item.expandable ? (
              <button
                style={styles.menuItem}
                onClick={() =>
                  setExpanded(prev => ({ ...prev, [item.label]: !prev[item.label] }))
                }
              >
                <img src={item.icon} alt={item.label} style={styles.menuIcon} />
                <span style={styles.menuLabel}>{item.label}</span>
                <span style={styles.chevron}>
                  {expanded[item.label] ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
            ) : item.path ? (
              /* Items with a path — clickable button that navigates */
              <button
                style={styles.menuItem}
                onClick={() => navigate(item.path)}
              >
                <img src={item.icon} alt={item.label} style={styles.menuIcon} />
                <span style={styles.menuLabel}>{item.label}</span>
              </button>
            ) : (
              /* All other items — static, non-clickable display */
              <div style={styles.menuItemStatic}>
                <img src={item.icon} alt={item.label} style={styles.menuIcon} />
                <span style={styles.menuLabel}>{item.label}</span>
                {item.isLive && <LiveBadge />}
              </div>
            )}

            {/* About Us sub-links */}
            {item.children && expanded[item.label] && (
              <div style={styles.submenu}>
                {item.children.map((child) => (
                  <button
                    key={child.label}
                    style={{
                      ...styles.submenuItem,
                      ...(activeSubItem === child.label ? styles.submenuItemActive : {}),
                    }}
                    onClick={() => {
                      setActiveSubItem(child.label);
                      navigate(child.path);
                    }}
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

/* ══════════════════════════════════════════════════════════ */
const styles = {

  /* ── Outer aside ── */
  sidebar: {
    width: '300px',
    minWidth: '300px',
    height: 'calc(100vh - 80px)',
    backgroundColor: '#ffffff',
    borderBottomRightRadius: '12px',
    position: 'fixed',
    top: '80px',
    left: 0,
    zIndex: 900,
    overflowY: 'auto',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  },

  /* ── Search wrapper — no border ── */
  searchWrapper: {
    padding: '16px 16px 12px',
    border: '0px solid transparent',
  },

  /* ── Nav menu ── */
  menu: {
    flex: 1,
    padding: '8px 0',
    display: 'flex',
    flexDirection: 'column',
  },

  /* Static nav row (div, not button — no pointer, no interaction) */
  menuItemStatic: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
    padding: '13px 20px 13px 16px',
    fontSize: '15px',
    fontWeight: '510',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    color: '#0d0c22',
    boxSizing: 'border-box',
    border: '0px solid transparent',
  },

  /* About Us button row */
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
    background: 'none',
    border: '0px solid transparent',
    outline: 'none',
    cursor: 'pointer',
    padding: '13px 20px 13px 16px',
    fontSize: '15px',
    fontWeight: '510',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    textAlign: 'left',
    color: '#0d0c22',
    boxSizing: 'border-box',
  },

  menuIcon: {
    width: '20px',
    height: '20px',
    objectFit: 'contain',
    flexShrink: 0,
  },

  menuLabel: {
    flex: 1,
    color: '#0d0c22',
  },

  /* LIVE badge */
  liveBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#ff3b30',
    color: '#ffffff',
    fontSize: '10px',
    fontWeight: '700',
    padding: '2px 6px',
    borderRadius: '4px',
    letterSpacing: '0.5px',
    flexShrink: 0,
  },
  liveDot: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    flexShrink: 0,
  },

  chevron: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
  },

  /* ── About Us sub-menu ── */
  submenu: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '52px',
    paddingBottom: '6px',
  },
  submenuItem: {
    background: 'none',
    border: '0px solid transparent',
    outline: 'none',
    color: '#666666',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '400',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    textAlign: 'left',
    padding: '7px 0',
    lineHeight: 1.4,
  },
  submenuItemActive: {
    backgroundColor: '#1cd4ff',
    color: '#ffffff',
    fontWeight: '600',
    borderRadius: '6px',
    padding: '7px 10px',
  },
};

export default Sidebar;
