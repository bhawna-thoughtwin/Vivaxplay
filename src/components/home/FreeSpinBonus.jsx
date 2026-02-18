import freeSpinImg from '../../assets/images/freespin.png';

const FreeSpinBonus = () => (
  <section style={styles.wrapper}>

    {/* Card */}
    <div style={styles.card}>

      {/* LEFT — freespin image overflows above the card */}
      <img src={freeSpinImg} alt="Free spin" style={styles.image} />

      {/* RIGHT — text block */}
      <div style={styles.textBlock}>
        <h2 style={styles.title}>Free Spin Bonus</h2>
        <p style={styles.subtitle}>
          Deposit $25,{' '}
          <strong style={styles.highlight}>Grab 50 free spins.</strong>
        </p>
      </div>

    </div>
  </section>
);

const styles = {

  wrapper: {
    width: '1189px',
    maxWidth: '100%',
    marginBottom: '16px',
    /* extra top padding so the overflowing image has room */
    paddingTop: '60px',
    boxSizing: 'border-box',
    position: 'relative',
  },

card: {
  position: 'relative',
  width: '100%',
  height: '240px',
  borderRadius: '12px',
  background: 'linear-gradient(90deg, #92FE9D 0%, #00C9FF 100%)',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden', // <-- clip anything outside the card
  boxSizing: 'border-box',
},


  /* Image anchored to bottom-left, overflows upward above the card */
image: {
  position: 'absolute',
  bottom: '-120px',      // push it partially behind
  left: '32px',          // instead of left: 20px + margin-left: 12px
  height: '350px',
  width: 'auto',
  objectFit: 'contain',
  objectPosition: 'bottom',
  zIndex: 1,             // behind text
},



  /* Text sits on the right side */
  textBlock: {
    position: 'absolute',
    top: '59px',
    left: '567px',
    width: '503px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32.41px',
    zIndex: 1,
  },

  title: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    fontSize: '72.03px',
    fontWeight: '510',
    color: '#131313',
    margin: 0,
    padding: 0,
    border: 'none',
    lineHeight: '48.02px',
  },

  subtitle: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    fontSize: '33.69px',
    fontWeight: '274',
    color: '#ffffff',
    margin: 0,
    lineHeight: '39.14px',
    textAlign: 'center',
  },

  highlight: {
    fontWeight: '590',
    fontSize: '33.69px',
    lineHeight: '39.14px',
    color: '#ffffff',
  },
};

export default FreeSpinBonus;
