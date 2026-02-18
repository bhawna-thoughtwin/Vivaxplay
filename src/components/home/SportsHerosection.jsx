import sports1 from "../../assets/images/sportssection1.png";
import sports2 from "../../assets/images/sportssection2.png";
import sports3 from "../../assets/images/sportsection3.png";

const SportsHero = () => {
  return (
    /* Outer wrapper — holds the overflowing images above the card */
    <div style={styles.wrapper}>

      {/* The teal card */}
      <div style={styles.card}>

        {/* LEFT — images sit over the card, anchored to bottom */}
        <div style={styles.imageBlock}>
          {/* Player 1 — leftmost */}
          <img src={sports1} alt="player 1" style={{ ...styles.playerImg, height: '400px', left: '0px', zIndex: 1 }} />
          {/* Player 2 — centre, tallest */}
          <img src={sports2} alt="player 2" style={{ ...styles.playerImg, height: '460px', left: '130px', zIndex: 3 }} />
          {/* Player 3 — rightmost */}
          <img src={sports3} alt="player 3" style={{ ...styles.playerImg, height: '430px', left: '270px', zIndex: 2 }} />
        </div>

        {/* RIGHT — text content */}
        <div style={styles.textBlock}>

          <h2 style={styles.heading}>
            Your Sports. Your Plays. Your Wins.
          </h2>

          <p style={styles.body}>
            With <strong>VIVA x PLAY,</strong> enjoy top odds across a huge
            range of global sports, including football, baseball, and more.
            Bet live in real time or pre-match, and never miss out on the
            excitement.
          </p>

          <button style={styles.btn}>EXPLORE ALL SPORTS</button>

        </div>
      </div>
    </div>
  );
};

const styles = {
  /* Outer wrapper gives room for images that overflow above the card */
  wrapper: {
    width: '1188px',
    maxWidth: '100%',
    height: '482px',
    position: 'relative',
    marginBottom: '16px',
  },

  /* Teal card — sits at the bottom of the wrapper */
  card: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '406px',
    borderRadius: '12px',
    background: 'linear-gradient(0deg, #025877, #025877)',
    display: 'flex',
    alignItems: 'center',
    overflow: 'visible',
    paddingRight: '40px',
    boxSizing: 'border-box',
  },

  /* Image container — anchored to the bottom-left of the card */
  imageBlock: {
    position: 'absolute',
    bottom: 0,
    left: '10px',
    width: '448px',
    height: '482px',
  },

  playerImg: {
    position: 'absolute',
    bottom: 0,
    objectFit: 'contain',
    objectPosition: 'bottom',
  },

  /* Text block — right side */
  textBlock: {
    marginLeft: 'auto',
    width: '668px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    textAlign: 'right',
    alignItems: 'flex-end',
  },

  heading: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    fontWeight: 700,
    fontSize: '43.17px',
    lineHeight: '52px',
    letterSpacing: '0%',
    color: '#ffffff',
    margin: 0,
    padding: 0,
    border: 'none',
  },

  body: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '34px',
    letterSpacing: '0%',
    color: 'rgba(255,255,255,0.9)',
    margin: 0,
  },

  btn: {
    width: '208px',
    height: '52px',
    borderRadius: '8px',
    border: '1px solid #1CD4FF',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '32px',
    paddingRight: '32px',
    backgroundColor: '#1CD4FF',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    fontWeight: 700,
    fontSize: '13px',
    letterSpacing: '1px',
    cursor: 'pointer',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
  },
};

export default SportsHero;
