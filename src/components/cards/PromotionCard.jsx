const PromotionCard = ({ title, line1, line1Bold, line2, line2Highlight, btnLabel, image, gradient }) => {
  return (
    <div style={{ ...styles.card, background: gradient || '#1a3a52' }}>

      {/* Character image — exact Figma position */}
      {image && (
        <img src={image} alt={title} style={styles.image} />
      )}

      {/* Left-to-right gradient overlay so text stays readable */}
      <div style={styles.overlay} />

      {/* Text content */}
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>

        <p style={styles.descLine}>
          {line1}{line1Bold && <strong style={styles.bold}> {line1Bold}</strong>}
        </p>

        {line2 && (
          <p style={styles.descLine}>
            {line2}{line2Highlight && <strong style={styles.highlight}> {line2Highlight}</strong>}
          </p>
        )}

        <button style={styles.btn}>{btnLabel}</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    width: '456px',
    height: '240px',
    flexShrink: 0,
    cursor: 'pointer',
  },

  /* Character image — exact Figma position: top:33, left:151, size:401x401 */
  image: {
    position: 'absolute',
    top: '33px',
    left: '151px',
    width: '401px',
    height: '401px',
    objectFit: 'contain',
    pointerEvents: 'none',
    zIndex: 0,
  },

  /* Gradient fade: solid left → transparent right */
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.3) 50%, transparent 80%)',
  },

  content: {
    position: 'relative',
    zIndex: 1,
    padding: '24px 28px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '4px',
    maxWidth: '55%',
    boxSizing: 'border-box',
  },

  title: {
    fontSize: '24px',
    fontWeight: '700',
    margin: '0 0 6px',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    lineHeight: 1.2,
  },

  descLine: {
    fontSize: '14px',
    fontWeight: '400',
    margin: 0,
    color: '#ffffffdd',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    lineHeight: 1.5,
  },

  bold: {
    fontWeight: '700',
    color: '#ffffff',
  },

  highlight: {
    fontWeight: '700',
    color: '#d4f542',   /* yellow-green like in the image */
  },

  btn: {
    alignSelf: 'flex-start',
    marginTop: '14px',
    border: '0px solid transparent',
    padding: '9px 22px',
    borderRadius: '999px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    backgroundColor: '#ffffff',
    color: '#121212',
  },
};

export default PromotionCard;
