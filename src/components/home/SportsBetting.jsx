import SectionHeader from '../common/SectionHeader';
import MatchCard from '../cards/MatchCard';
import useWindowWidth from '../../hooks/useWindowWidth';
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

const CardRow = ({ title, matches, isMobile }) => (
  <div style={styles.cardSection}>
    <div style={styles.cardSectionHeader}>
      <span style={{
        ...styles.cardSectionTitle,
        fontSize: isMobile ? '18px' : '22px',
      }}>{title}</span>
      <button style={styles.viewAllBtn}>VIEW ALL &rsaquo;</button>
    </div>
    <div style={{
      ...styles.cardGrid,
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '10px' : '12px',
    }}>
      {matches.map((match, i) => (
        <MatchCard key={i} {...match} isLive={false} />
      ))}
    </div>
  </div>
);

const SportsBetting = () => {
  const { isMobile } = useWindowWidth();

  return (
    <section style={{
      ...styles.section,
      width: '100%',
      padding: isMobile ? '14px' : '20px',
      boxSizing: 'border-box',
    }}>
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
            <div style={{
              ...styles.imgWrapper,
              width: isMobile ? '70px' : '180px',
              height: isMobile ? '90px' : '200px',
            }}>
              <span style={{
                ...styles.number,
                fontSize: isMobile ? '70px' : '160px',
              }}>{sport.number}</span>
              <img src={sport.image} alt={sport.label} style={{
                ...styles.image,
                height: isMobile ? '80px' : '190px',
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Trending */}
      <CardRow title="Trending" matches={trendingMatches} isMobile={isMobile} />

      {/* Recommendations */}
      <CardRow title="Recommendations" matches={recommendationMatches} isMobile={isMobile} />
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
  sportsStrip: {
    display: 'flex',
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
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  number: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    transform: 'translateX(-20%)',
    fontWeight: '900',
    fontFamily: 'Impact, "Arial Narrow", Arial, sans-serif',
    color: '#1cd4ff',
    lineHeight: 1,
    zIndex: 1,
    userSelect: 'none',
  },
  image: {
    position: 'relative',
    zIndex: 2,
    width: 'auto',
    objectFit: 'contain',
    objectPosition: 'bottom',
  },
  cardSection: {
    marginBottom: '20px',
  },
  cardSectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  cardSectionTitle: {
    fontWeight: '700',
    color: '#121212',
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
    outline: 'none',
  },
  cardGrid: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
};

export default SportsBetting;
