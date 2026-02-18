import HeroBanner from '../components/home/HeroBanner';
import PromotionsSection from '../components/home/PromotionsSection';
import CasinoAndGames from '../components/home/CasinoAndGames';
import LiveBetting from '../components/home/LiveBetting';
import SportsBetting from '../components/home/SportsBetting';
import SportsHero from '../components/home/SportsHerosection';
import FreeSpinBonus from '../components/home/FreeSpinBonus';
import LatestBet from '../components/home/LatestBet';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <PromotionsSection />
     
      <LiveBetting />
      <SportsBetting />
      <SportsHero />
      <CasinoAndGames />
       <FreeSpinBonus />
      <LatestBet />
    </div>
  );
};

export default Home;
