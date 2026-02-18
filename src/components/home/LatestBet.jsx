import bookOfTimeImg from '../../assets/images/bookoftime.png';
import juicyFruitImg from '../../assets/images/juicyfruit.png';
import sugarRushImg from '../../assets/images/sugarrush.png';
import pinkoImg from '../../assets/images/pinko.png';

const mockRows = [
  { game: "Book Of Time", user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Pinko", user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Juicy Fruits Multihold", user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Sugar Rush 1000", user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Pinko", user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Book Of Time", user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Sugar Rush 1000", user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Juicy Fruits Multihold", user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Book Of Time", user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Juicy Fruits Multihold", user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
];

const LatestBet = () => {
  return (
    <section style={styles.section}>
      {/* Tabs */}
      <div style={styles.tabs}>
        <button style={{ ...styles.tabBtn, ...styles.tabBtnActive }}>
          Latest Bet
        </button>
        <button style={styles.tabBtn}>High Rollers</button>
      </div>

      {/* Table */}
      <div style={styles.tableWrapper}>
        {/* Header */}
        <div style={styles.headerRow}>
          <span>Game</span>
          <span>User</span>
          <span>Time</span>
          <span>Bet Amount</span>
          <span>Multiplier</span>
          <span>Payout</span>
        </div>

        {/* Data Rows */}
        <div style={styles.tableBody}>
          {mockRows.map((row, i) => (
            <div
              key={i}
              style={{
                ...styles.dataRow,
                backgroundColor: i % 2 === 0 ? "#f9fafc" : "#ffffff",
              }}
            >
              <span style={styles.gameCell}>
                <img
                  src={
                    row.game.startsWith('Book Of Time')
                      ? bookOfTimeImg
                      : row.game.startsWith('Juicy Fruits')
                      ? juicyFruitImg
                      : row.game.startsWith('Sugar Rush')
                      ? sugarRushImg
                      : pinkoImg
                  }
                  alt={row.game}
                  style={styles.gameIcon}
                />
                <span>{row.game}</span>
              </span>
              <span style={styles.cell}>{row.user}</span>
              <span style={styles.cell}>{row.time}</span>
              <span style={styles.cell}>$ {row.betAmount}</span>
              <span style={{ ...styles.cell, color: "#00b15a", fontWeight: 600 }}>
                ~ {row.multiplier}
              </span>
              <span style={styles.cell}>$ {row.payout}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    marginTop: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
  },

  /* Tabs */
  tabs: {
    display: "inline-flex",
    borderRadius: "24px",
    border: "1px solid #1CD4FF",
    overflow: "hidden",
    marginBottom: "16px",
  },
  tabBtn: {
    padding: "8px 20px",
    fontSize: "13px",
    border: "none",
    background: "transparent",
    color: "#1CD4FF",
    cursor: "pointer",
  },
  tabBtnActive: {
    backgroundColor: "#1CD4FF",
    color: "#121212",
    fontWeight: "600",
  },

  /* Table */
  tableWrapper: {
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #e6e8ec",
  },

  headerRow: {
    display: "grid",
    gridTemplateColumns: "2.5fr 1.2fr 1fr 1.2fr 1.2fr 1.2fr",
    backgroundColor: "#f4f6f9",
    padding: "12px 16px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#6b7280",
  },

  tableBody: {
    maxHeight: "350px",
    overflowY: "auto",
  },

  dataRow: {
    display: "grid",
    gridTemplateColumns: "2.5fr 1.2fr 1fr 1.2fr 1.2fr 1.2fr",
    padding: "12px 16px",
    fontSize: "13px",
    alignItems: "center",
  },

  cell: {
    color: "#333333",
  },
  gameCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#333333',
  },
  gameIcon: {
    width: '28px',
    height: '28px',
    borderRadius: '4px',
    objectFit: 'cover',
  },
};

export default LatestBet;
