import SectionHeader from '../common/SectionHeader';
import MatchCard from '../cards/MatchCard';
import liveSportsIcon from '../../assets/icons/volleyball-player 1 (1).png';

const matches = [
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
];

const LiveBetting = () => {
  return (
    <section style={styles.section}>
      <SectionHeader
        icon={<img src={liveSportsIcon} alt="Live Betting" style={styles.iconImg} />}
        title="Live Betting"
        subtitle="Real-time odds • Instant payouts"
        onViewAll={() => {}}
      />
      <div style={styles.grid}>
        {matches.map((match, i) => (
          <MatchCard key={i} {...match} />
        ))}
      </div>
      <div style={styles.dots}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{ ...styles.dot, ...(i === 0 ? styles.dotActive : {}) }} />
        ))}
      </div>
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
    border: 'none',
    outline: 'none',
  },
  iconImg: {
    width: '60px',
    height: '60px',
  },
  grid: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    width: '1240px',
    maxWidth: '100%',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '6px',
    marginTop: '14px',
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

export default LiveBetting;
