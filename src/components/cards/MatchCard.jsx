const MatchCard = ({ league, team1, team2, score1, score2, odds, isLive = true }) => {
  return (
    <div style={styles.card}>
      {/* Top row: league text + LIVE badge */}
      <div style={styles.header}>
        <span style={styles.league}>{league}</span>
        {isLive && (
          <span style={styles.liveTag}>
            <span style={styles.liveDot} />
            LIVE
          </span>
        )}
      </div>

      {/* Divider */}
      <div style={styles.divider} />

      {/* Teams + scores */}
      <div style={styles.teams}>
        <div style={styles.teamRow}>
          <span style={styles.teamName}>{team1}</span>
          <span style={styles.score}>{score1}</span>
        </div>
        <div style={styles.teamRow}>
          <span style={styles.teamName}>{team2}</span>
          <span style={styles.score}>{score2}</span>
        </div>
      </div>

      {/* Divider */}
      <div style={styles.divider} />

      {/* Odds buttons */}
      <div style={styles.oddsRow}>
        {odds.map((odd, i) => (
          <button
            key={i}
            style={{
              ...styles.oddBtn,
              ...(i === odds.length - 1 ? styles.oddBtnGreen : {}),
            }}
          >
            {odd}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#f5f5f7',
    borderRadius: '12px',
    padding: '16px',
    width: '301px',
    minWidth: '301px',
    height: '202px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  league: {
    fontSize: '13px',
    fontWeight: '510',
    color: '#555555',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
  },
  liveTag: {
    backgroundColor: '#ff6a00',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: '700',
    padding: '3px 10px',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    flexShrink: 0,
  },
  liveDot: {
    display: 'inline-block',
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '#ff2d2d',
    flexShrink: 0,
  },
  divider: {
    height: '1px',
    backgroundColor: '#e0e0e0',
    margin: '0 -4px',
  },
  teams: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  teamRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamName: {
    fontSize: '14px',
    color: '#222222',
    fontWeight: '600',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
  },
  score: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#3b6fd4',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
  },
  oddsRow: {
    display: 'flex',
    gap: '6px',
  },
  oddBtn: {
    flex: 1,
    backgroundColor: '#ffffff',
    border: 'none',
    color: '#222222',
    padding: '8px 0',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '600',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    textAlign: 'center',
  },
  oddBtnGreen: {
    backgroundColor: '#7ed321',
    color: '#ffffff',
  },
};

export default MatchCard;
