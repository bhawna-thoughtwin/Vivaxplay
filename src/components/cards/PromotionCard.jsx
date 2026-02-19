const PromotionCard = ({ title, line1, line1Bold, line2, line2Highlight, btnLabel, image, gradient, isMobile }) => {
  return (
    <div style={{
      ...styles.card,
      background: gradient || '#1a3a52',
      width: isMobile ? '100%' : '456px',
      minWidth: isMobile ? '100%' : '456px',
      height: isMobile ? '160px' : '240px',
    }}>

      {/* Character image — right side */}
      {image && (
        <img src={image} alt={title} style={{
          ...styles.image,
          top: isMobile ? '-10px' : '33px',
          left: isMobile ? '45%' : '151px',
          width: isMobile ? '220px' : '401px',
          height: isMobile ? '220px' : '401px',
        }} />
      )}

      {/* Gradient overlay so text stays readable */}
      <div style={styles.overlay} />

      {/* Text content — left side */}
      <div style={{
        ...styles.content,
        padding: isMobile ? '18px 16px' : '24px 28px',
        maxWidth: isMobile ? '58%' : '55%',
      }}>
        <h3 style={{
          ...styles.title,
          fontSize: isMobile ? '20px' : '24px',
        }}>{title}</h3>

        <p style={{
          ...styles.descLine,
          fontSize: isMobile ? '12px' : '14px',
        }}>
          {line1}{line1Bold && <strong style={styles.bold}> {line1Bold}</strong>}
        </p>

        {line2 && (
          <p style={{
            ...styles.descLine,
            fontSize: isMobile ? '12px' : '14px',
          }}>
            {line2}{line2Highlight && <strong style={styles.highlight}> {line2Highlight}</strong>}
          </p>
        )}

        <button style={{
          ...styles.btn,
          marginTop: isMobile ? '12px' : '14px',
          padding: isMobile ? '7px 18px' : '9px 22px',
          fontSize: isMobile ? '12px' : '13px',
        }}>{btnLabel}</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxSizing: 'border-box',
    flexShrink: 0,
  },
  image: {
    position: 'absolute',
    objectFit: 'contain',
    pointerEvents: 'none',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.30) 50%, transparent 80%)',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '4px',
    boxSizing: 'border-box',
  },
  title: {
    fontWeight: '700',
    margin: '0 0 4px',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    lineHeight: 1.2,
  },
  descLine: {
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
    color: '#d4f542',
  },
  btn: {
    alignSelf: 'flex-start',
    border: '0px solid transparent',
    borderRadius: '999px',
    cursor: 'pointer',
    fontWeight: '600',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    backgroundColor: '#ffffff',
    color: '#121212',
  },
};

export default PromotionCard;
