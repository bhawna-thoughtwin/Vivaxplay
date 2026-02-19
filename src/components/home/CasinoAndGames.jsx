import SectionHeader from '../common/SectionHeader';
import useWindowWidth from '../../hooks/useWindowWidth';
import casinoIcon from '../../assets/icons/volleyball-player 1.png';
import casino1 from '../../assets/images/casinoandgames1.png';
import casino2 from '../../assets/images/casinoandgmaes2.png';
import casino3 from '../../assets/images/casinoandgames3.png';
import casino4 from '../../assets/images/casinoandgames4.png';
import casino44 from '../../assets/images/casinoandgames44.png';
import casino5 from '../../assets/images/casinoandgames5.png';
import new1 from '../../assets/images/new1.png';
import new2 from '../../assets/images/new2.png';
import new3 from '../../assets/images/new3.png';
import new4 from '../../assets/images/new4.png';
import new5 from '../../assets/images/new5.png';
import new6 from '../../assets/images/new6.png';

const casinoCategories = [
  {
    label: 'Slots', number: '1', image: casino1,
    imageStyle: { position: 'absolute', top: '8.06px', left: '18.13px', width: '201.52px', height: '205.36px', objectFit: 'contain', zIndex: 2 },
  },
  {
    label: 'Blackjack', number: '2', image: casino2,
    imageStyle: { position: 'absolute', top: '-14.1px', left: '-10.07px', width: '226.61px', height: '226.61px', objectFit: 'contain', zIndex: 2 },
  },
  {
    label: 'Roulette', number: '3', image: casino3,
    imageStyle: { position: 'absolute', top: '-13.09px', left: '0px', width: '222.58px', height: '222.58px', objectFit: 'contain', zIndex: 2 },
  },
  {
    label: 'Jackpot', number: '4', image: casino4, image2: casino44,
    imageStyle:  { position: 'absolute', bottom: '28px', right: '0px',  width: '140px', height: '185px', objectFit: 'contain', zIndex: 3 },
    image2Style: { position: 'absolute', bottom: '28px', left: '10px',  width: '160px', height: '200px', objectFit: 'contain', zIndex: 2 },
  },
  {
    label: 'Baccarat', number: '5', image: casino5,
    imageStyle: { position: 'absolute', top: '-10px', left: '-8px', width: '230px', height: '230px', objectFit: 'contain', zIndex: 2 },
  },
];

const newGames = [
  { name: 'Fighter Pit',         image: new1 },
  { name: 'Wanted Dead or Wild', image: new2 },
  { name: 'Dragon Gold 88',      image: new3 },
  { name: 'Cash Quest',          image: new4 },
  { name: 'San Quentin Xways',   image: new5 },
  { name: 'Fighter Pit',         image: new6 },
];

/* ── Sub-section row header ── */
const RowHeader = ({ title }) => (
  <div style={styles.rowHeader}>
    <span style={styles.rowTitle}>{title}</span>
    <button style={styles.rowViewAll}>VIEW ALL &rsaquo;</button>
  </div>
);

/* ── Single game card ── */
const GameCard = ({ name, image, isMobile }) => (
  <div style={{
    ...styles.gameCard,
    width: isMobile ? '130px' : '200px',
    minWidth: isMobile ? '130px' : '200px',
    height: isMobile ? '160px' : '226px',
  }}>
    <img src={image} alt={name} style={styles.gameImage} />
    <div style={styles.gameOverlay}>
      <span style={{
        ...styles.gameName,
        fontSize: isMobile ? '10px' : '13px',
      }}>{name}</span>
    </div>
  </div>
);

/* ── Pagination dots ── */
const Dots = () => (
  <div style={styles.dots}>
    {[0, 1, 2, 3].map((i) => (
      <div key={i} style={{ ...styles.dot, ...(i === 0 ? styles.dotActive : {}) }} />
    ))}
  </div>
);

const CasinoAndGames = () => {
  const { isMobile } = useWindowWidth();

  return (
    <section style={{
      ...styles.section,
      width: '100%',
      padding: isMobile ? '14px' : '20px',
      boxSizing: 'border-box',
    }}>

      {/* Section header */}
      <SectionHeader
        icon={<img src={casinoIcon} alt="Casino & Games" style={styles.iconImg} />}
        title="Casino & Games"
        subtitle="Bet on 30+ sports with the best odds"
        onViewAll={() => {}}
      />

      {/* Category strip — horizontal scroll on mobile */}
      <div style={{
        ...styles.categoryGrid,
        height: isMobile ? '150px' : '242px',
        gap: isMobile ? '8px' : '12px',
      }}>
        {casinoCategories.map((item) => (
          <div key={item.label} style={{
            ...styles.categoryCard,
            height: isMobile ? '150px' : '242px',
            minWidth: isMobile ? '110px' : undefined,
          }}>
            <span style={{
              ...styles.categoryNumber,
              fontSize: isMobile ? '80px' : '151px',
              top: isMobile ? '-5px' : '-10px',
              left: isMobile ? '-4px' : '-8px',
            }}>{item.number}</span>

            <img
              src={item.image}
              alt={item.label}
              style={isMobile ? {
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '85%',
                objectFit: 'contain',
                zIndex: 2,
              } : (item.imageStyle || styles.categoryImage)}
            />

            {item.image2 && !isMobile && (
              <img
                src={item.image2}
                alt={item.label + ' character'}
                style={item.image2Style || styles.categoryImage2}
              />
            )}

            <div style={styles.categoryLabelBar}>
              <span style={{
                ...styles.categoryLabel,
                fontSize: isMobile ? '11px' : '14px',
              }}>{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* New games row */}
      <RowHeader title="New" />
      <div style={styles.gameGrid}>
        {newGames.map((item, i) => (
          <GameCard key={i} name={item.name} image={item.image} isMobile={isMobile} />
        ))}
      </div>
      <Dots />

      {/* Live Dealer row */}
      <RowHeader title="Live Dealer" />
      <div style={styles.gameGrid}>
        {newGames.map((item, i) => (
          <GameCard key={i} name={item.name} image={item.image} isMobile={isMobile} />
        ))}
      </div>
      <Dots />

    </section>
  );
};

const styles = {

  section: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    marginBottom: '16px',
  },

  iconImg: {
    width: '60px',
    height: '60px',
  },

  /* ── Category strip ── */
  categoryGrid: {
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
    width: '100%',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  categoryCard: {
    position: 'relative',
    flex: 1,
    minWidth: '0',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    background: 'linear-gradient(180deg, #c1cfdb 0%, #dbe3e7 100%)',
  },
  categoryNumber: {
    position: 'absolute',
    fontWeight: '900',
    fontFamily: 'Impact, "Arial Narrow", Arial, sans-serif',
    lineHeight: 1,
    background: 'linear-gradient(180deg, #1cd4ff 0%, #107f99 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    zIndex: 1,
    userSelect: 'none',
  },
  categoryImage: {
    position: 'absolute',
    bottom: '28px',
    left: '4px',
    width: '55%',
    height: '65%',
    objectFit: 'contain',
    objectPosition: 'left bottom',
    zIndex: 2,
  },
  categoryImage2: {
    position: 'absolute',
    bottom: '28px',
    right: '0px',
    height: '90%',
    width: '60%',
    objectFit: 'contain',
    objectPosition: 'right bottom',
    zIndex: 3,
  },
  categoryLabelBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '28px',
    background: 'linear-gradient(90deg, #163e5e 0%, #266181 100%)',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '12px',
    zIndex: 4,
    boxSizing: 'border-box',
  },
  categoryLabel: {
    fontWeight: '590',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
  },

  /* ── Sub-row headers ── */
  rowHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  rowTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#121212',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
  },
  rowViewAll: {
    background: 'none',
    border: '1px solid #e0e0e0',
    color: '#1cd4ff',
    padding: '5px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '590',
    fontFamily: 'inherit',
    outline: 'none',
  },

  /* ── Game grid ── */
  gameGrid: {
    display: 'flex',
    gap: '12px',
    overflowX: 'auto',
    marginBottom: '12px',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  gameCard: {
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    flexShrink: 0,
  },
  gameImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  gameOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '12px',
    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)',
  },
  gameName: {
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    textTransform: 'uppercase',
    lineHeight: '1.2',
  },

  /* ── Pagination dots ── */
  dots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '6px',
    marginBottom: '20px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#d0d0d0',
    cursor: 'pointer',
  },
  dotActive: {
    backgroundColor: '#1cd4ff',
    width: '22px',
    borderRadius: '4px',
  },
};

export default CasinoAndGames;
