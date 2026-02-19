import bookOfTimeImg from '../../assets/images/bookoftime.png';
import juicyFruitImg from '../../assets/images/juicyfruit.png';
import sugarRushImg from '../../assets/images/sugarrush.png';
import pinkoImg from '../../assets/images/pinko.png';

const mockRows = [
  { game: "Book Of Time",          user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Pinko",                 user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Juicy Fruits Multihold",user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Sugar Rush 1000",       user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Pinko",                 user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Book Of Time",          user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Sugar Rush 1000",       user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Juicy Fruits Multihold",user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Book Of Time",          user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
  { game: "Juicy Fruits Multihold",user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.18x", payout: "5.00" },
];

const getImage = (game) => {
  if (game.startsWith('Book Of Time'))    return bookOfTimeImg;
  if (game.startsWith('Juicy Fruits'))    return juicyFruitImg;
  if (game.startsWith('Sugar Rush'))      return sugarRushImg;
  return pinkoImg;
};

const LatestBet = () => {
  return (
    <section className="mt-4 md:mt-5 bg-white rounded-xl p-4 md:p-5 shadow-[0_4px_14px_rgba(0,0,0,0.04)] w-full box-border">

      {/* Tabs */}
      <div className="inline-flex rounded-3xl border border-[#1CD4FF] overflow-hidden mb-4">
        <button className="px-4 md:px-5 py-2 text-[12px] md:text-[13px] border-none bg-[#1CD4FF] text-[#121212] font-semibold cursor-pointer">
          Latest Bet
        </button>
        <button className="px-4 md:px-5 py-2 text-[12px] md:text-[13px] border-none bg-transparent text-[#1CD4FF] cursor-pointer">
          High Rollers
        </button>
      </div>

      {/* Table */}
      <div className="rounded-xl overflow-hidden border border-[#e6e8ec]">

        {/* Header — hidden on small mobile, shown from sm up */}
        <div className="hidden sm:grid bg-[#f4f6f9] px-3 md:px-4 py-3 text-[11px] md:text-[12px] font-semibold text-[#6b7280]"
          style={{ gridTemplateColumns: '2.5fr 1.2fr 1fr 1.2fr 1.2fr 1.2fr' }}
        >
          <span>Game</span>
          <span>User</span>
          <span>Time</span>
          <span>Bet Amount</span>
          <span>Multiplier</span>
          <span>Payout</span>
        </div>

        {/* Data Rows */}
        <div className="max-h-[350px] overflow-y-auto">
          {mockRows.map((row, i) => (
            <div
              key={i}
              className="grid px-3 md:px-4 py-3 text-[12px] md:text-[13px] items-center"
              style={{
                gridTemplateColumns: '2.5fr 1.2fr 1fr 1.2fr 1.2fr 1.2fr',
                backgroundColor: i % 2 === 0 ? '#f9fafc' : '#ffffff',
              }}
            >
              {/* Game cell */}
              <span className="flex items-center gap-2 text-[#333]">
                <img
                  src={getImage(row.game)}
                  alt={row.game}
                  className="w-6 h-6 md:w-7 md:h-7 rounded object-cover shrink-0"
                />
                <span className="truncate">{row.game}</span>
              </span>

              <span className="text-[#333]">{row.user}</span>
              <span className="text-[#333]">{row.time}</span>
              <span className="text-[#333]">$ {row.betAmount}</span>
              <span className="text-[#00b15a] font-semibold">~ {row.multiplier}</span>
              <span className="text-[#333]">$ {row.payout}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBet;
