import useWindowWidth from '../../hooks/useWindowWidth';
import casinoBg from '../../assets/images/casino-bg.png';

const HeroBanner = () => {
  const { isMobile } = useWindowWidth();

  if (isMobile) {
    return (
      <div style={styles.mobileBanner}>

        {/* Full bleed background image */}
        <img src={casinoBg} alt="Hero Banner" style={styles.mobileBgImage} />

        {/* Dark gradient over top so text is readable */}
        <div style={styles.mobileOverlay} />

        {/* Text — top-left, matches Figma */}
        <div style={styles.mobileContent}>
          <h1 style={styles.mobileHeading}>
            <span style={styles.line}>Celebrate Every Spin.</span>
            <span style={styles.line}>Feel Every Match.</span>
          </h1>
          <p style={styles.mobileTagline}>Live. Play. Win</p>
        </div>

      </div>
    );
  }

  /* ── Desktop ── */
  return (
    <div style={styles.banner}>
      <img src={casinoBg} alt="Hero Banner" style={styles.bgImage} />
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h1 style={styles.heading}>
          <span style={styles.line}>Celebrate Every Spin.</span>
          <span style={styles.line}>Feel Every Match.</span>
        </h1>
        <p style={styles.tagline}>Live. Play. Win</p>
      </div>
    </div>
  );
};

const styles = {

  /* ── Mobile — Figma: w393 h424, full bleed ── */
  mobileBanner: {
    position: 'relative',
    width: 'calc(100% + 24px)',
    marginLeft: '-12px',
    marginRight: '-12px',
    marginTop: '-12px',
    marginBottom: '12px',
    height: '393px',
    overflow: 'hidden',
    backgroundColor: '#041437',
  },
  mobileBgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
  },
  mobileOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(4,20,55,0.82) 0%, rgba(4,20,55,0.50) 35%, transparent 60%)',
  },
  /* Text block — Figma: top ~24px, left-padded ~16px */
  mobileContent: {
    position: 'absolute',
    top: '28px',
    left: '16px',
    right: '16px',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  mobileHeading: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 1.2,
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
  },
  mobileTagline: {
    fontSize: '22px',
    fontWeight: '500',
    color: '#e3ff00',
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    fontStyle: 'italic',
  },

  /* ── Desktop ── */
  banner: {
    position: 'relative',
    width: '100%',
    height: '380px',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '16px',
    boxSizing: 'border-box',
  },
  bgImage: {
    position: 'absolute',
    top: '-8px',
    left: '-25px',
    width: 'calc(100% + 50px)',
    height: 'calc(100% + 16px)',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(5,30,60,0.55) 0%, rgba(5,30,60,0.15) 50%, transparent 100%)',
  },
  content: {
    position: 'absolute',
    top: '93px',
    left: '55px',
    width: '568px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px',
    zIndex: 1,
  },
  heading: {
    fontSize: '56.33px',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: '1',
    letterSpacing: '0',
    margin: '0 0 8px 0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
  },
  tagline: {
    fontSize: '44.23px',
    fontWeight: '400',
    color: '#e3ff00',
    margin: 0,
    fontFamily: 'inherit',
  },
  line: {
    display: 'block',
    whiteSpace: 'nowrap',
  },
};

export default HeroBanner;
