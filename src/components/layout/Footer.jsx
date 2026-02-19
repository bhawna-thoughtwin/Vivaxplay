import { useState } from 'react';
import loginLogo from '../../assets/images/loginlogo.png';
import footerBg  from '../../assets/images/footer.png';

/* ── Mobile accordion sections ── */
const footerSections = [
  { title: 'SPORTS',      links: ['Football', 'Tennis', 'Basketball', 'Baseball', 'Boxing'] },
  { title: 'LIVE SPORTS', links: ['Football Live', 'Tennis Live', 'Basketball Live', 'Baseball Live'] },
  { title: 'CASINO',      links: ['Live Casino', 'Slots', 'Roulette', 'Blackjack', 'Roulette'] },
  { title: 'LIVE CASINO', links: ['Live Roulette', 'Live Blackjack', 'Live Baccarat'] },
  { title: 'SUPPORT',     links: ['Provably Fair', 'Partner Program', 'Responsible Gambling', 'Help Center', 'Live Support'] },
  { title: 'ABOUT US',    links: ['Policies', 'Licenses', 'Terms and Conditions'] },
];

/* ── Desktop columns ── */
const desktopSections = [
  { title: 'SPORTS',   links: ['Football', 'Tennis', 'Basketball', 'Baseball', 'Boxing'] },
  { title: 'CASINO',   links: ['Live Casino', 'Slots', 'Roulette', 'Blackjack', 'Roulette'] },
  { title: 'SUPPORT',  links: ['Provably Fair', 'Partner Program', 'Responsible Gambling', 'Help Center', 'Live Support'] },
  { title: 'ABOUT US', links: ['Policies', 'Licenses', 'Terms and Conditions'] },
];

/* ── Social Icons ── */
const InstagramIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
    <defs>
      <radialGradient id="ig" cx="30%" cy="107%" r="150%">
        <stop offset="0%"  stopColor="#fdf497"/>
        <stop offset="5%"  stopColor="#fdf497"/>
        <stop offset="45%" stopColor="#fd5949"/>
        <stop offset="60%" stopColor="#d6249f"/>
        <stop offset="90%" stopColor="#285AEB"/>
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="24" height="24" rx="6" fill="url(#ig)"/>
    <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none"/>
    <circle cx="17.2" cy="6.8" r="1.2" fill="white"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#1877F2"/>
    <path d="M16 8h-2a1 1 0 00-1 1v2h3l-.5 3H13v7h-3v-7H8v-3h2V9a4 4 0 014-4h2v3z" fill="white"/>
  </svg>
);
const XIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#000000"/>
    <path d="M17.5 4h2.5l-5.5 6.3L21 20h-5.1l-3.6-4.7L7.8 20H5.3l5.9-6.7L4 4h5.2l3.3 4.3L17.5 4zm-.9 14.4h1.4L7.5 5.5H6l10.6 12.9z" fill="white"/>
  </svg>
);
const TelegramIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#229ED9"/>
    <path d="M5.5 11.5l13-5-3 13-4-4-3 2.5V13l7-6.5-8.5 5L5.5 11.5z" fill="white"/>
  </svg>
);

/* ── Chevrons ── */
const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChevronUp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M18 15l-6-6-6 6" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Mobile accordion row ── */
const AccordionSection = ({ title, links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#1e1e1e]">
      <button
        className="w-full flex items-center justify-between px-5 py-4 bg-transparent border-none cursor-pointer"
        onClick={() => setOpen(p => !p)}
      >
        <span className="text-[13px] font-bold text-white tracking-[0.5px]">{title}</span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>
      {open && (
        <div className="flex flex-col px-5 pb-4 gap-2">
          {links.map((link) => (
            <button key={link} className="bg-transparent border-none text-left text-[12px] text-[#777] cursor-pointer p-0 leading-relaxed">
              {link}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* ── Desktop column ── */
const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-1.5">
    <h4 className="text-[13px] font-bold text-white m-0 mb-2 tracking-[0.5px]">{title}</h4>
    {links.map((link) => (
      <button key={link} className="bg-transparent border-none p-0 text-left text-[12px] text-[#777] cursor-pointer leading-relaxed hover:text-[#aaa] transition-colors">
        {link}
      </button>
    ))}
  </div>
);

/* ══════════════════════════════════════════════ */
const Footer = () => {
  return (
    <footer className="bg-[#080808] mt-[32px] box-border">

      <div className="relative rounded-xl overflow-hidden bg-[#0d0d0d] mx-3 md:mx-5 mb-3 md:mb-5">

        {/* Roulette bg — desktop only */}
        <img
          src={footerBg} alt=""
          className="absolute pointer-events-none hidden md:block"
          style={{
            top: '134px', left: '-97px',
            width: '317px', height: '316px',
            objectFit: 'contain', opacity: 0.55,
            mixBlendMode: 'luminosity',
            filter: 'brightness(0.4) sepia(0.4) hue-rotate(140deg) saturate(1.8)',
            zIndex: 0,
          }}
        />

        {/* ════ MOBILE ════ */}
        <div className="block md:hidden">

          {/* Logo */}
          <div className="flex justify-center py-6 border-b border-[#1e1e1e]">
            <img src={loginLogo} alt="VIVA X PLAY" className="w-[140px] h-auto object-contain" />
          </div>

          {/* Accordion */}
          <div>
            {footerSections.map((s) => (
              <AccordionSection key={s.title} title={s.title} links={s.links} />
            ))}
          </div>

          {/* Legal */}
          <p className="text-center text-[10px] text-[#555] leading-[1.7] m-0 px-5 pt-5 pb-3">
            VIVAXPLAY is operated by ASTERI LTD, registration number X-XXX-XXXXX, with registered
            address; Toronto, Canada. ASTERI LTD is licensed and regulated under the Gaming Act by
            the Curaçao Gaming Authority. Contact us at{' '}
            <a href="mailto:support@vivaxplay.com" className="text-[#1cd4ff] no-underline">
              support@vivaxplay.com
            </a>
          </p>

          {/* Socials */}
          <div className="flex justify-center gap-3 py-4">
            <span className="cursor-pointer"><InstagramIcon /></span>
            <span className="cursor-pointer"><FacebookIcon /></span>
            <span className="cursor-pointer"><XIcon /></span>
            <span className="cursor-pointer"><TelegramIcon /></span>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#2a2a3a] py-3 text-center">
            <span className="text-[10px] text-[#666] tracking-[0.3px]">
              ALL RIGHTS RESERVED | VIVAXPLAY@2026 @ Copyright
            </span>
          </div>

        </div>

        {/* ════ DESKTOP ════ */}
        <div className="hidden md:block">

          {/* Top row: logo + 4 columns */}
          <div className="relative z-[1] flex items-start pt-[48px] pl-[152px] pr-[40px] pb-[24px] gap-[130px]">
            <div className="shrink-0">
              <img src={loginLogo} alt="VIVA X PLAY" className="w-[160px] h-auto object-contain block" />
            </div>
            <div className="flex-1 flex justify-between">
              {desktopSections.map((s) => (
                <FooterColumn key={s.title} title={s.title} links={s.links} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#1e1e1e] mx-[40px]" />

          {/* Bottom: legal + socials */}
          <div className="relative z-[1] flex flex-col items-center px-[40px] py-[40px] gap-[44px]">
            <p className="text-center text-[11px] text-[#555] leading-[1.7] m-0 max-w-[700px]">
              VIVA x PLAY is operated by ASTERI LTD, registration number X-XXX-XXXXX, with registered address; Toronto,
              Canada. ASTERI LTD is licensed and regulated under the Gaming Act by the Curaçao Gaming Authority. Contact us at{' '}
              <a href="mailto:support@vivaxplay.com" className="text-[#1cd4ff] no-underline">support@vivaxplay.com</a>
            </p>
            <div className="flex gap-2">
              <span className="cursor-pointer rounded-md overflow-hidden"><InstagramIcon /></span>
              <span className="cursor-pointer rounded-md overflow-hidden"><FacebookIcon /></span>
              <span className="cursor-pointer rounded-md overflow-hidden"><XIcon /></span>
              <span className="cursor-pointer rounded-md overflow-hidden"><TelegramIcon /></span>
            </div>
          </div>

          {/* Copyright */}
          <div className="relative z-[1] border-t border-[#2a2a3a] px-10 py-3 text-center">
            <span className="text-[11px] text-[#666] tracking-[0.3px]">
              ALL RIGHTS RESERVED | VIVA x PLAY @ 2026 | Copyright
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
