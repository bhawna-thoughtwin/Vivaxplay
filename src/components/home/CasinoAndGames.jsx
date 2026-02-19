import SectionHeader from '../common/SectionHeader';
import { volleyballPlayer1 as casinoIcon } from '../../assets/icons';
import casino1 from '../../assets/images/casinoandgames1.png';
import casino2 from '../../assets/images/casinoandgmaes2.png';
import casino3 from '../../assets/images/casinoandgames3.png';
import casino4 from '../../assets/images/casinoandgames4.png';
import casino44 from '../../assets/images/casinoandgames44.png';
import casino5 from '../../assets/images/casinoandgames5.png';
import new1 from '../../assets/images/new1.png';
import new2 from '../../assets/images/new2.png';
import new3 from '../../assets/images/new3.png';
import new4 from '../../assets/images/new4.png';
import new5 from '../../assets/images/new5.png';
import new6 from '../../assets/images/new6.png';

const casinoCategories = [
  {
    label: 'Slots', number: '1', image: casino1,
    imageStyle: { position: 'absolute', top: '8.06px', left: '18.13px', width: '201.52px', height: '205.36px', objectFit: 'contain', zIndex: 2 },
  },
  {
    label: 'Blackjack', number: '2', image: casino2,
    imageStyle: { position: 'absolute', top: '-14.1px', left: '-10.07px', width: '226.61px', height: '226.61px', objectFit: 'contain', zIndex: 2 },
  },
  {
    label: 'Roulette', number: '3', image: casino3,
    imageStyle: { position: 'absolute', top: '-13.09px', left: '0px', width: '222.58px', height: '222.58px', objectFit: 'contain', zIndex: 2 },
  },
  {
    label: 'Jackpot', number: '4', image: casino4, image2: casino44,
    imageStyle:  { position: 'absolute', bottom: '28px', right: '0px',  width: '140px', height: '185px', objectFit: 'contain', zIndex: 3 },
    image2Style: { position: 'absolute', bottom: '28px', left: '10px',  width: '160px', height: '200px', objectFit: 'contain', zIndex: 2 },
  },
  {
    label: 'Baccarat', number: '5', image: casino5,
    imageStyle: { position: 'absolute', top: '-10px', left: '-8px', width: '230px', height: '230px', objectFit: 'contain', zIndex: 2 },
  },
];

const newGames = [
  { name: 'Fighter Pit',         image: new1 },
  { name: 'Wanted Dead or Wild', image: new2 },
  { name: 'Dragon Gold 88',      image: new3 },
  { name: 'Cash Quest',          image: new4 },
  { name: 'San Quentin Xways',   image: new5 },
  { name: 'Fighter Pit',         image: new6 },
];

/* ── Sub-section row header ── */
const RowHeader = ({ title }) => (
  <div className="flex items-center justify-between mb-3">
    <span className="text-[22px] font-bold text-[#121212]">{title}</span>
    <button className="bg-transparent border border-[#e0e0e0] text-[#1cd4ff] px-[14px] py-[5px] rounded-md text-[13px] font-semibold cursor-pointer outline-none">
      VIEW ALL &rsaquo;
    </button>
  </div>
);

/* ── Single game card ── */
const GameCard = ({ name, image }) => (
  <div className="w-[160px] min-w-[160px] md:w-[200px] md:min-w-[200px] h-[180px] md:h-[226px] rounded-2xl overflow-hidden relative cursor-pointer shrink-0">
    <img src={image} alt={name} className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 p-3" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)' }}>
      <span className="text-[11px] md:text-[13px] font-bold text-white uppercase leading-tight block">
        {name}
      </span>
    </div>
  </div>
);

/* ── Pagination dots ── */
const Dots = () => (
  <div className="flex justify-center gap-1.5 mb-5 mt-3">
    {[0, 1, 2, 3].map((i) => (
      <div
        key={i}
        className={`h-2 rounded-full cursor-pointer transition-all ${
          i === 0 ? 'w-[22px] bg-[#1cd4ff]' : 'w-2 bg-[#d0d0d0]'
        }`}
      />
    ))}
  </div>
);

const CasinoAndGames = () => (
  <section className="bg-white rounded-xl p-4 md:p-5 mb-3 md:mb-4 w-full box-border">

    {/* 1 ── Section header */}
    <SectionHeader
      icon={<img src={casinoIcon} alt="Casino & Games" className="w-full h-full object-contain" />}
      title="Casino & Games"
      subtitle="Bet on 30+ sports with the best odds"
      onViewAll={() => {}}
    />

    {/* 2 ── Category strip */}
    <div className="flex gap-2 md:gap-3 mb-6 w-full h-[160px] md:h-[242px]">
      {casinoCategories.map((item) => (
        <div
          key={item.label}
          className="relative flex-1 h-[160px] md:h-[242px] rounded-2xl overflow-hidden cursor-pointer"
          style={{ background: 'linear-gradient(180deg, #c1cfdb 0%, #dbe3e7 100%)' }}
        >
          {/* Number — behind images */}
          <span
            className="absolute top-[-10px] left-[-8px] font-black leading-none select-none z-[1]"
            style={{
              fontSize: 'clamp(60px, 8vw, 151px)',
              fontFamily: 'Impact, "Arial Narrow", Arial, sans-serif',
              background: 'linear-gradient(180deg, #1cd4ff 0%, #107f99 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {item.number}
          </span>

          {/* Primary image */}
          <img
            src={item.image}
            alt={item.label}
            style={item.imageStyle || {
              position: 'absolute', bottom: '28px', left: '4px',
              width: '55%', height: '65%', objectFit: 'contain',
              objectPosition: 'left bottom', zIndex: 2,
            }}
          />

          {/* Secondary image — Jackpot only */}
          {item.image2 && (
            <img
              src={item.image2}
              alt={item.label + ' character'}
              style={item.image2Style || {
                position: 'absolute', bottom: '28px', right: '0px',
                height: '90%', width: '60%', objectFit: 'contain',
                objectPosition: 'right bottom', zIndex: 3,
              }}
            />
          )}

          {/* Label bar */}
          <div
            className="absolute bottom-0 left-0 w-full h-7 flex items-center pl-3 z-[3]"
            style={{ background: 'linear-gradient(90deg, #163e5e 0%, #266181 100%)' }}
          >
            <span className="text-[11px] md:text-[14px] font-semibold text-white">{item.label}</span>
          </div>
        </div>
      ))}
    </div>

    {/* 3 ── New games row */}
    <RowHeader title="New" />
    <div
      className="flex gap-3 overflow-x-auto mb-3"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {newGames.map((item, i) => (
        <GameCard key={i} name={item.name} image={item.image} />
      ))}
    </div>
    <Dots />

    {/* 4 ── Live Dealer row */}
    <RowHeader title="Live Dealer" />
    <div
      className="flex gap-3 overflow-x-auto mb-3"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {newGames.map((item, i) => (
        <GameCard key={i} name={item.name} image={item.image} />
      ))}
    </div>
    <Dots />

  </section>
);

export default CasinoAndGames;
