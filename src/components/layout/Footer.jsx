import loginLogo from '../../assets/images/loginlogo.png';
import footerBg  from '../../assets/images/footer.png';

/* ── Link columns ── */
const sportsLinks  = ['Football', 'Tennis', 'Basketball', 'Baseball', 'Boxing'];
const casinoLinks  = ['Live Casino', 'Slots', 'Roulette', 'Blackjack', 'Roulette'];
const supportLinks = ['Provably Fair', 'Partner Program', 'Responsible Gambling', 'Help Center', 'Live Support'];
const aboutLinks   = ['Policies', 'Licenses', 'Terms and Conditions'];

/* ── Social icon SVGs ── */
const InstagramIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig" cx="30%" cy="107%" r="150%">
        <stop offset="0%"  stopColor="#fdf497"/>
        <stop offset="5%"  stopColor="#fdf497"/>
        <stop offset="45%" stopColor="#fd5949"/>
        <stop offset="60%" stopColor="#d6249f"/>
        <stop offset="90%" stopColor="#285AEB"/>
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="24" height="24" rx="6" fill="url(#ig)"/>
    <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none"/>
    <circle cx="17.2" cy="6.8" r="1.2" fill="white"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#1877F2"/>
    <path d="M16 8h-2a1 1 0 00-1 1v2h3l-.5 3H13v7h-3v-7H8v-3h2V9a4 4 0 014-4h2v3z" fill="white"/>
  </svg>
);

const XIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#000000"/>
    <path d="M17.5 4h2.5l-5.5 6.3L21 20h-5.1l-3.6-4.7L7.8 20H5.3l5.9-6.7L4 4h5.2l3.3 4.3L17.5 4zm-.9 14.4h1.4L7.5 5.5H6l10.6 12.9z" fill="white"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#229ED9"/>
    <path d="M5.5 11.5l13-5-3 13-4-4-3 2.5V13l7-6.5-8.5 5L5.5 11.5z" fill="white"/>
  </svg>
);

/* ══════════════════════════════════════════════════════════ */
const Footer = ({ sidebarOpen }) => {
  return (
    <footer style={{ ...styles.footer, marginLeft: sidebarOpen ? '300px' : '0px' }}>

      {/* ── Outer border wrapper ── */}
      <div style={styles.borderBox}>

        {/* Roulette wheel — positioned absolutely over entire footer box */}
        <img src={footerBg} alt="" style={styles.rouletteImg} />

        {/* ── Top section: logo + columns ── */}
        <div style={styles.topRow}>

          {/* Logo */}
          <div style={styles.logoArea}>
            <img src={loginLogo} alt="VIVA X PLAY" style={styles.logo} />
          </div>

          {/* Columns */}
          <div style={styles.columns}>
            <FooterColumn title="SPORTS"   links={sportsLinks}  />
            <FooterColumn title="CASINO"   links={casinoLinks}  />
            <FooterColumn title="SUPPORT"  links={supportLinks} />
            <FooterColumn title="ABOUT US" links={aboutLinks}   />
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={styles.divider} />

        {/* ── Bottom section: legal + socials ── */}
        <div style={styles.bottomSection}>

          {/* Legal text — centered */}
          <p style={styles.legalText}>
            VIVA x PLAY is operated by ASTERI LTD, registration number X-XXX-XXXXX, with registered address; Toronto, Canada. ASTERI LTD is licensed and
            regulated under the Gaming Act by the Curaçao Gaming Authority. Contact us at{' '}
            <a href="mailto:support@vivaxplay.com" style={styles.legalLink}>support@vivaxplay.com</a>
          </p>

          {/* Social icons */}
          <div style={styles.socials}>
            <span style={styles.socialIcon}><InstagramIcon /></span>
            <span style={styles.socialIcon}><FacebookIcon /></span>
            <span style={styles.socialIcon}><XIcon /></span>
            <span style={styles.socialIcon}><TelegramIcon /></span>
          </div>
        </div>

        {/* ── Copyright bar ── */}
        <div style={styles.copyrightBar}>
          <span style={styles.copyrightText}>
            ALL RIGHTS RESERVED | VIVA x PLAY @ 2026 | Copyright
          </span>
        </div>

      </div>
    </footer>
  );
};

/* ── Column component ── */
const FooterColumn = ({ title, links }) => (
  <div style={styles.column}>
    <h4 style={styles.columnTitle}>{title}</h4>
    {links.map((link) => (
      <button key={link} style={styles.linkBtn}>{link}</button>
    ))}
  </div>
);

/* ══════════════════════════════════════════════════════════ */
const styles = {

  footer: {
    backgroundColor: '#080808',
    marginTop: 0,
    padding: '20px',
    boxSizing: 'border-box',
  },

  /* No border — relative so roulette image can be absolutely positioned inside */
  borderBox: {
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#0d0d0d',
  },

  /* ── Top row: logo left, columns right ── */
  topRow: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    gap: '40px',
    padding: '32px 40px 24px',
  },

  logoArea: {
    flexShrink: 0,
    width: '180px',
  },

  logo: {
    width: '160px',
    height: 'auto',
    objectFit: 'contain',
    display: 'block',
  },

  columns: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    gap: '24px',
    flexWrap: 'wrap',
  },

  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    minWidth: '110px',
  },

  columnTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 8px 0',
    letterSpacing: '0.5px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
  },

  linkBtn: {
    display: 'block',
    background: 'none',
    border: 'none',
    padding: '1px 0',
    textAlign: 'left',
    fontSize: '12px',
    color: '#777777',
    cursor: 'pointer',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    lineHeight: 1.8,
  },

  /* ── Divider ── */
  divider: {
    height: '1px',
    backgroundColor: '#1e1e1e',
    margin: '0 40px',
  },

  /* ── Bottom section ── */
  bottomSection: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px 40px 24px 40px',
    gap: '16px',
    minHeight: '120px',
  },

  /* Roulette wheel — Figma spec: w317 h316 top134 left-97, luminosity blend */
  rouletteImg: {
    position: 'absolute',
    top: '134px',
    left: '-97px',
    width: '317px',
    height: '316px',
    objectFit: 'contain',
    opacity: 0.55,
    mixBlendMode: 'luminosity',
    filter: 'brightness(0.4) sepia(0.4) hue-rotate(140deg) saturate(1.8)',
    pointerEvents: 'none',
    zIndex: 0,
  },

  legalText: {
    textAlign: 'center',
    fontSize: '11px',
    color: '#555555',
    lineHeight: 1.7,
    margin: 0,
    maxWidth: '620px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
  },

  legalLink: {
    color: '#1cd4ff',
    textDecoration: 'none',
  },

  socials: {
    display: 'flex',
    gap: '8px',
    flexShrink: 0,
  },

  socialIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '6px',
    overflow: 'hidden',
  },

  /* ── Copyright bar ── */
  copyrightBar: {
    position: 'relative',
    zIndex: 1,
    borderTop: '1px solid #2a2a3a',
    padding: '12px 40px',
    textAlign: 'center',
  },

  copyrightText: {
    fontSize: '11px',
    color: '#666666',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    letterSpacing: '0.3px',
  },
};

export default Footer;
