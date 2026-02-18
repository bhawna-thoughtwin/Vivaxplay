import casinoBg from '../../assets/images/casino-bg.png';

const HeroBanner = () => {
  return (
    <div style={styles.banner}>
      {/* Full background image - contains players + stadium + roulette */}
      <img src={casinoBg} alt="Hero Banner" style={styles.bgImage} />

      {/* Light left overlay so text is readable */}
      <div style={styles.overlay} />

      {/* Text on left */}
      <div style={styles.content}>
        <h1 style={styles.heading}>
          <span style={styles.line}>Celebrate Every Spin.</span>
          <span style={styles.line}>Feel Every Match.</span>
        </h1>

        <p style={styles.tagline}>Live. Play. Win</p>
      </div>

      {/* Dots */}
      {/* <div style={styles.dots}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{ ...styles.dot, ...(i === 0 ? styles.dotActive : {}) }} />
        ))}
      </div> */}
    </div>
  );
};

const styles = {
  banner: {
    position: 'relative',
    // width: '100%',
    width: '1189px',
    height: '380px',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '16px',
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
    height: '134px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px',
    zIndex: 1,
    opacity: 1,
  },
  heading: {
    fontSize: '56.33px',
    fontWeight: '700',
    fontStyle: 'normal',
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
  dots: {
    position: 'absolute',
    bottom: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '6px',
    zIndex: 2,
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.35)',
    cursor: 'pointer',
  },
  dotActive: {
    backgroundColor: '#1cd4ff',
    width: '22px',
    borderRadius: '4px',
  },
  line: {
  display: 'block',
  whiteSpace: 'nowrap',
},
};

export default HeroBanner;
