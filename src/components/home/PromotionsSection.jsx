import SectionHeader from '../common/SectionHeader';
import PromotionCard from '../cards/PromotionCard';
import promo1 from '../../assets/images/promo1.png';
import promo2 from '../../assets/images/promo2.png';
import promo3 from '../../assets/images/promo3.png';
import promotionsIcon from '../../assets/icons/volleyball-player 2.png';

const promotions = [
  {
    title: 'Double Deposit',
    line1: 'Deposit',
    line1Bold: '$50',
    line2: 'Get',
    line2Highlight: '$50 to play.',
    btnLabel: 'Deposit Now',
    image: promo1,
    gradient: 'linear-gradient(135deg, #163e5e 0%, #1e6e8f 100%)',
  },
  {
    title: 'Free Spin Bonus',
    line1: 'Deposit $25,',
    line2: 'Grab',
    line2Highlight: '50 free spins.',
    btnLabel: 'Deposit Now',
    image: promo2,
    gradient: 'linear-gradient(90deg, #9EBB9C 0%, #85AB91 100%)',
  },
  {
    title: 'Bet & Win',
    line1: 'Place a bet.',
    line2: 'Earn',
    line2Highlight: 'Instant Rewards.',
    btnLabel: 'Bet Now',
    image: promo3,
    gradient: 'linear-gradient(135deg, #163e5e 0%, #1e6e8f 100%)',
  },
];

const PromotionsSection = () => {
  return (
    <section style={styles.section}>
      <SectionHeader
        title="Promotions"
        icon={
          <img
            src={promotionsIcon}
            alt="Promotions"
          />
        }
        onViewAll={() => { }}
      />
      <div style={styles.grid}>
        {promotions.map((promo) => (
          <PromotionCard key={promo.title} {...promo} />
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
  },
  grid: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    scrollbarWidth: 'none',       /* Firefox */
    msOverflowStyle: 'none',      /* IE/Edge */
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

export default PromotionsSection;
