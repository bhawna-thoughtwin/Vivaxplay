import useWindowWidth from '../../hooks/useWindowWidth';
import casinoBg from '../../assets/images/casino-bg.png';

const HeroBanner = () => {
  const { isMobile } = useWindowWidth();

  if (isMobile) {
    return (
      <div style={styles.mobileBanner}>

        {/* Full bleed background image */}
        <img src={casinoBg} alt="Hero Banner" style={styles.mobileBgImage} />

        {/* Dark gradient only at top so text is readable, bottom shows players clearly */}
        <div style={styles.mobileOverlay} />

        {/* Text overlaid top-left */}
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

  /* ── Mobile banner — Figma: w393 h424, full bleed ── */
  mobileBanner: {
    position: 'relative',
    width: 'calc(100% + 24px)',   /* full bleed — cancel MainLayout 12px padding each side */
    marginLeft: '-12px',
    marginRight: '-12px',
    marginTop: '-12px',
    marginBottom: '16px',
    height: '424px',              /* Figma: height 424 */
    overflow: 'hidden',
  },
  /* Image fills full banner — Figma: w393 h424 */
  mobileBgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
  },
  /* Gradient over top portion so heading is readable */
  mobileOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(4,20,55,0.75) 0%, rgba(4,20,55,0.40) 30%, transparent 55%)',
  },
  /* Heading block — Figma: w346 h82, centered horizontally */
  mobileContent: {
    position: 'absolute',
    top: '24px',
    left: '0',
    right: '0',
    width: '346px',               /* Figma: width 346 */
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '82px',               /* Figma: height 82 */
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '4px',
    paddingLeft: '20px',
  },
  mobileHeading: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 1.2,
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
  },
  mobileTagline: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#e3ff00',
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
  },

  /* ── Desktop banner ── */
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
