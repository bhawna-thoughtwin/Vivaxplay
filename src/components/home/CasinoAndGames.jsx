import SectionHeader from '../common/SectionHeader';
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
    /* casino4 = slot machine (front/right, zIndex 3), casino44 = character (behind/left, zIndex 2) */
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
const GameCard = ({ name, image }) => (
  <div style={styles.gameCard}>
    <img src={image} alt={name} style={styles.gameImage} />
    <div style={styles.gameOverlay}>
      <span style={styles.gameName}>{name}</span>
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

const CasinoAndGames = () => (
  <section style={styles.section}>

    {/* 1 ── Section header: icon box | title + subtitle stacked | VIEW ALL */}
    <SectionHeader
      icon={<img src={casinoIcon} alt="Casino & Games" style={styles.iconImg} />}
      title="Casino & Games"
      subtitle="Bet on 30+ sports with the best odds"
      onViewAll={() => {}}
    />

    {/* 2 ── Category strip: number behind image, shifted left */}
    <div style={styles.categoryGrid}>
      {casinoCategories.map((item) => (
        <div key={item.label} style={styles.categoryCard}>
          {/* Number at z-index 1, shifted left to peek behind image */}
          <span style={styles.categoryNumber}>{item.number}</span>
          {/* Primary image — Figma-exact position per card */}
          <img src={item.image} alt={item.label} style={item.imageStyle || styles.categoryImage} />
          {/* Secondary character image — Jackpot only */}
          {item.image2 && (
            <img src={item.image2} alt={item.label + ' character'} style={item.image2Style || styles.categoryImage2} />
          )}
          {/* Label bar at bottom */}
          <div style={styles.categoryLabelBar}>
            <span style={styles.categoryLabel}>{item.label}</span>
          </div>
        </div>
      ))}
    </div>

    {/* 3 ── New games row */}
    <RowHeader title="New" />
    <div style={styles.gameGrid}>
      {newGames.map((item, i) => (
        <GameCard key={i} name={item.name} image={item.image} />
      ))}
    </div>
    <Dots />

    {/* 4 ── Live Dealer row */}
    <RowHeader title="Live Dealer" />
    <div style={styles.gameGrid}>
      {newGames.map((item, i) => (
        <GameCard key={i} name={item.name} image={item.image} />
      ))}
    </div>
    <Dots />

  </section>
);

const styles = {

  /* ── Outer section ── */
  section: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '16px',
    width: '1189px',
    maxWidth: '100%',
    boxSizing: 'border-box',
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
    height: '242px',
  },
  categoryCard: {
    position: 'relative',
    flex: 1,
    height: '242px',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    background: 'linear-gradient(180deg, #c1cfdb 0%, #dbe3e7 100%)',
  },
  /* Number — top-left of card, z-index 1 so images sit on top */
  categoryNumber: {
    position: 'absolute',
    top: '-10px',
    left: '-8px',
    fontSize: '151px',
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
  /* Primary image — slot machine, smaller, anchored bottom-left */
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
  /* Secondary character image — taller, anchored bottom-right */
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
  alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '28px',
    background: 'linear-gradient(90deg, #163e5e 0%, #266181 100%)',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '12px',
    zIndex: 3,
  },
  categoryLabel: {
    fontSize: '14px',
    fontWeight: '590',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
  },

  /* ── Sub-row headers (New / Live Dealer) ── */
  rowHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',
    border: '0px solid transparent',
  },
  rowTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#121212',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    border: '0px solid transparent',
    display: 'block',
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
  },
  gameCard: {
    width: '200px',
    minWidth: '200px',
    height: '226px',
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
    fontSize: '13px',
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
