import sports1 from "../../assets/images/sportssection1.png";
import sports2 from "../../assets/images/sportssection2.png";
import sports3 from "../../assets/images/sportsection3.png";

const SportsHero = () => {
  return (
    /* Outer wrapper — gives room for images that overflow above the card */
    <div className="w-full max-w-full relative mb-3 md:mb-4" style={{ height: 'clamp(280px, 40vw, 482px)' }}>

      {/* Teal card — sits at the bottom of the wrapper */}
      <div
        className="absolute bottom-0 left-0 right-0 rounded-xl flex items-center overflow-visible box-border pl-5 md:pl-10 pr-5 md:pr-10"
        style={{
          height: 'clamp(220px, 32vw, 406px)',
          background: 'linear-gradient(0deg, #025877, #025877)',
        }}
      >

        {/* LEFT — images anchored to bottom-left of card, overflow upward */}
        <div
          className="absolute bottom-0 left-2 md:left-[10px]"
          style={{ width: 'clamp(180px, 30vw, 448px)', height: 'clamp(280px, 40vw, 482px)' }}
        >
          <img
            src={sports1}
            alt="player 1"
            className="absolute bottom-0 object-contain object-bottom"
            style={{ height: 'clamp(160px, 28vw, 400px)', left: 0, zIndex: 1 }}
          />
          <img
            src={sports2}
            alt="player 2"
            className="absolute bottom-0 object-contain object-bottom"
            style={{ height: 'clamp(185px, 32vw, 460px)', left: 'clamp(50px, 9vw, 130px)', zIndex: 3 }}
          />
          <img
            src={sports3}
            alt="player 3"
            className="absolute bottom-0 object-contain object-bottom"
            style={{ height: 'clamp(172px, 30vw, 430px)', left: 'clamp(100px, 18vw, 270px)', zIndex: 2 }}
          />
        </div>

        {/* RIGHT — text content */}
        <div className="ml-auto flex flex-col gap-4 md:gap-8 text-right items-end" style={{ width: 'clamp(180px, 55%, 668px)' }}>

          <h2
            className="font-bold text-white m-0 p-0 leading-snug"
            style={{ fontSize: 'clamp(16px, 3vw, 43px)' }}
          >
            Your Sports. Your Plays. Your Wins.
          </h2>

          <p
            className="text-white/90 m-0 hidden md:block"
            style={{ fontSize: 'clamp(13px, 1.5vw, 18px)', lineHeight: '1.9' }}
          >
            With <strong>VIVA x PLAY,</strong> enjoy top odds across a huge
            range of global sports, including football, baseball, and more.
            Bet live in real time or pre-match, and never miss out on the
            excitement.
          </p>

          <button className="h-[40px] md:h-[52px] rounded-lg border border-[#1CD4FF] bg-[#1CD4FF] text-white font-bold text-[11px] md:text-[13px] tracking-[1px] cursor-pointer whitespace-nowrap px-5 md:px-8 box-border">
            EXPLORE ALL SPORTS
          </button>

        </div>
      </div>
    </div>
  );
};

export default SportsHero;
