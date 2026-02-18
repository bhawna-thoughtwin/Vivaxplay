
const SectionHeader = ({ icon, title, subtitle, onViewAll }) => {
  return (
    <div style={styles.header}>
      <div style={styles.left}>
        {icon && <span style={styles.icon}>{icon}</span>}
        <div style={styles.titleGroup}>
          <h2 style={styles.title}>{title}</h2>
          {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
      {onViewAll && (
        <button style={styles.viewAllBtn} onClick={onViewAll}>
          VIEW ALL ›
        </button>
      )}
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
    border: '0px solid transparent',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    width: '51px',
    height: '51px',
  },
  titleGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#121212',
    margin: 0,
    padding: 0,
    border: 'none',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
  },
  subtitle: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#777777',
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
  },
  viewAllBtn: {
    background: 'none',
    border: '1px solid #e0e0e0',
    color: '#1cd4ff',
    padding: '5px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '590',
    fontFamily: 'inherit',
  },
};

export default SectionHeader;
