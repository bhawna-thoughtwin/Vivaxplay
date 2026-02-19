import SectionHeader from '../common/SectionHeader';
import MatchCard from '../cards/MatchCard';
import sportsIcon from '../../assets/icons/volleyball-player 3.png';
import sport1 from '../../assets/images/sport1.png';
import sport2 from '../../assets/images/sport2.png';
import sport3 from '../../assets/images/sport3.png';
import sport4 from '../../assets/images/sport4.png';
import sport5 from '../../assets/images/sport5.png';

const sports = [
  { label: 'Football',   image: sport1, number: '1' },
  { label: 'Tennis',     image: sport2, number: '2' },
  { label: 'Basketball', image: sport3, number: '3' },
  { label: 'Baseball',   image: sport4, number: '4' },
  { label: 'Boxing',     image: sport5, number: '5' },
];

const trendingMatches = [
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
];

const recommendationMatches = [
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
];

/* Reusable card row with section sub-header */
const CardRow = ({ title, matches }) => (
  <div style={styles.cardSection}>
    <div style={styles.cardSectionHeader}>
      <span style={styles.cardSectionTitle}>{title}</span>
      <button style={styles.viewAllBtn}>VIEW ALL &rsaquo;</button>
    </div>
    <div style={styles.cardGrid}>
      {matches.map((match, i) => (
        <MatchCard key={i} {...match} isLive={false} />
      ))}
    </div>
  </div>
);

const SportsBetting = () => {
  return (
    <section style={styles.section}>
      {/* Header */}
      <SectionHeader
        icon={<img src={sportsIcon} alt="Sports Betting" style={styles.iconImg} />}
        title="Sports Betting"
        subtitle="Bet on 30+ sports with the best odds"
        onViewAll={() => {}}
      />

      {/* Sports image strip */}
      <div style={styles.sportsStrip}>
        {sports.map((sport) => (
          <div key={sport.label} style={styles.sportItem}>
            {/* Big number sits behind the image */}
            <div style={styles.imgWrapper}>
              <span style={styles.number}>{sport.number}</span>
              <img src={sport.image} alt={sport.label} style={styles.image} />
            </div>
          </div>
        ))}
      </div>

      {/* Trending */}
      <CardRow title="Trending" matches={trendingMatches} />

      {/* Recommendations */}
      <CardRow title="Recommendations" matches={recommendationMatches} />
    </section>
  );
};

const styles = {
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

  /* Sports strip */
  sportsStrip: {
    display: 'flex',
    gap: '0px',
    marginBottom: '24px',
    overflow: 'hidden',
  },
  sportItem: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  imgWrapper: {
    position: 'relative',
    width: '180px',
    height: '200px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  number: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    transform: 'translateX(-20%)',
    fontSize: '160px',
    fontWeight: '900',
    fontFamily: 'Impact, "Arial Narrow", Arial, sans-serif',
    color: '#1cd4ff',
    lineHeight: 1,
    zIndex: 1,
    userSelect: 'none',
    opacity: 1,
  },
  image: {
    position: 'relative',
    zIndex: 2,
    height: '190px',
    width: 'auto',
    objectFit: 'contain',
    objectPosition: 'bottom',
  },

  /* Card sub-sections (Trending / Recommendations) */
  cardSection: {
    marginBottom: '20px',
    border: '0px solid transparent',
  },
  cardSectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',
    border: '0px solid transparent',
  },
  cardSectionTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#121212',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    border: '0px solid transparent',
    display: 'block',
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
    outline: 'none',
  },
  cardGrid: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
};

export default SportsBetting;
