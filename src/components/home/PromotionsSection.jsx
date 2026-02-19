import SectionHeader from '../common/SectionHeader';
import PromotionCard from '../cards/PromotionCard';
import useWindowWidth from '../../hooks/useWindowWidth';
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
  const { isMobile } = useWindowWidth();

  return (
    <section style={{
      ...styles.section,
      padding: isMobile ? '16px 14px' : '20px',
      marginBottom: isMobile ? '12px' : '16px',
    }}>

      <SectionHeader
        title="Promotions"
        icon={<img src={promotionsIcon} alt="Promotions" style={{
          width: isMobile ? '40px' : '51px',
          height: isMobile ? '40px' : '51px',
          objectFit: 'contain',
        }} />}
        onViewAll={() => {}}
      />

      {/* Cards row — horizontal scroll with snap */}
      <div style={{
        ...styles.grid,
        gap: isMobile ? '12px' : '16px',
        scrollSnapType: isMobile ? 'x mandatory' : 'none',
      }}>
        {promotions.map((promo) => (
          <div key={promo.title} style={{
            scrollSnapAlign: isMobile ? 'start' : 'none',
            flexShrink: 0,
            width: isMobile ? 'calc(100vw - 52px)' : 'auto',
            minWidth: isMobile ? 'calc(100vw - 52px)' : 'auto',
          }}>
            <PromotionCard {...promo} isMobile={isMobile} />
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div style={styles.dots}>
        {[0, 1, 2].map((i) => (
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
    boxSizing: 'border-box',
    width: '100%',
  },
  grid: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
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

export default PromotionsSection;
