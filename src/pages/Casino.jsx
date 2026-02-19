import { useState } from 'react';
import PromotionsSection from '../components/home/PromotionsSection';
import HeroBanner from '../components/home/HeroBanner';

import {
  sportsIconPng,
  casinoIcon,
  liveDealerIconAlt,
} from '../assets/icons';

const sportsTabIcon = sportsIconPng;
const casinoTabIcon = casinoIcon;
const liveDealerTabIcon = liveDealerIconAlt;

/* ── Filter tabs ── */
/* static = display only, no toggle; active = clickable toggle */
const tabs = [
  { label: 'All',         icon: null,              static: true },
  { label: 'Sports',      icon: sportsTabIcon,     static: true },
  { label: 'Casino',      icon: casinoTabIcon,     static: false },
  { label: 'Live Dealer', icon: liveDealerTabIcon, static: false },
];

/* ── T&C bullet sections ── */
const tcSections = [
  {
    heading: 'Eligibility',
    points: [
      'The 500% First Deposit Bonus is available only to newly registered players at TigerBet247 who are aged 18 years or older.',
      'This promotion is available from 22nd August 2025 and remains valid for 1 year unless otherwise terminated by TigerBet247.',
      'Players must make a first deposit of $20 or more. Subsequent deposits are not eligible.',
      'The maximum bonus amount is $10,000 and is credited only on the first deposit.',
    ],
  },
  {
    heading: 'Game Restrictions',
    points: [
      'This Casino Welcome Offer is valid only for casino games.',
      'Only wagers placed on the Casino page contribute toward the wagering requirements.',
      'Bets placed on Sportsbook or other products do not count and may result in the confiscation of all winnings.',
      'Players must adhere to these terms to qualify for the bonus and any associated winnings.',
    ],
  },
  {
    heading: 'Wagering Requirements',
    points: [
      'The bonus is subject to a 60x wagering requirement on the bonus amount before withdrawal.',
      'A maximum of $20 per bet will contribute toward the wagering requirement, regardless of the actual stake amount.',
      'The maximum conversion amount from the Welcome Bonus is $40,000.',
      'Not all games contribute to this promotion. Bonus-exempt games contribute 0% toward wagering requirements.',
    ],
  },
  {
    heading: 'Wagering Contributions by Game Type:',
    points: [
      'Slots – 100%',
      'Roulette – 68%',
      'Instant Games & Baccarat – 25%',
      'Live Casino, Table Games & Blackjack – 17%',
      'Progressive Jackpot Slots – 0%',
    ],
    note: 'The wagering requirement applies to the bonus amount only (subject to change).',
  },
  {
    heading: 'Bonus Usage and Restrictions',
    points: [
      'The deposited amount is played first, followed by the bonus amount.',
      'Players may forfeit the bonus at any time and receive the remaining balance in the real money wallet.',
      'Wagering requirements must be completed within 30 days from the date the bonus is credited. After this period, the bonus and any related winnings will expire.',
      'No withdrawals will be permitted until the full wagering requirement is met or the bonus is forfeited.',
      'Failure to meet the wagering requirement will result in the forfeiture of the bonus and any winnings derived from it.',
      'It is strictly prohibited to use the Sportsbook to hold real money funds while an active casino bonus is in play. Violations may result in confiscation of winnings.',
      'The bonus will automatically forfeit once the bonus balance drops below $0.20.',
    ],
  },
  {
    heading: 'General Rules',
    points: [
      'TigerBet247 reserves the right to amend, suspend, or cancel the Welcome Offer at any time.',
      'Any violation of these terms may result in forfeiture of the bonus and associated winnings.',
      "TigerBet247's General Terms & Conditions apply to this promotion.",
    ],
  },
];

/* ════════════════════════════════════════════════════════ */
const Casino = ({ defaultTab = 'Casino' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div style={styles.page}>

      {/* ── 1. Filter tabs ── */}
      <div style={styles.tabBar}>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            style={{
              ...styles.tab,
              ...(tab.static ? styles.tabStatic : {}),
              ...(!tab.static && activeTab === tab.label ? styles.tabActive : {}),
            }}
            onClick={() => !tab.static && setActiveTab(tab.label)}
          >
            {tab.icon && (
              <img
                src={tab.icon}
                alt={tab.label}
                style={{
                  ...styles.tabIcon,
                  ...(!tab.static && activeTab === tab.label ? styles.tabIconActive : {}),
                }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── 2. Promotions section ── */}
      <PromotionsSection />

      {/* ── 3 & 4. Conditional content by active tab ── */}
      {activeTab === 'Casino' ? (
        <>
          {/* Casino: heading on top of card, HeroBanner below */}
          <div style={styles.heroWrapper}>
            <div style={styles.heroHeadingBlock}>
              <h2 style={styles.heroMainHeading}>Casino Welcome Offer</h2>
              <p style={styles.heroSubHeading}>Get a 500% Bonus up to $10,000</p>
            </div>
            <HeroBanner />
          </div>

          {/* Casino content */}
          <div style={styles.contentBlock}>
            <h3 style={styles.sectionTitle}>Get a 500% Bonus up to $10,000</h3>
            <p style={styles.sectionLabel}>What are you waiting for?</p>
            <p style={styles.bodyText}>
              Kick things up a notch with a 500% deposit match up to $10,000 when you sign up as a new
              customer at TigerBet247. Sounds exciting, right?
            </p>
            <div style={styles.divider} />
            <h3 style={styles.sectionTitle}>How to Claim Your Offer</h3>
            <ol style={styles.orderedList}>
              <li style={styles.listItem}>Sign up for a new account at TigerBet247</li>
              <li style={styles.listItem}>Make a deposit of $20 to $2,000</li>
              <li style={styles.listItem}>Get a casino bonus matching 500% of your deposit amount</li>
              <li style={styles.listItem}>Play with up to $12,000</li>
            </ol>
            <div style={styles.divider} />
            <h3 style={styles.sectionTitle}>Terms and Conditions – 500% Deposit Bonus for New Customers</h3>
            {tcSections.map((sec) => (
              <div key={sec.heading} style={styles.tcBlock}>
                <p style={styles.tcHeading}>{sec.heading}</p>
                <ul style={styles.bulletList}>
                  {sec.points.map((pt, i) => (
                    <li key={i} style={styles.bulletItem}>{pt}</li>
                  ))}
                </ul>
                {sec.note && <p style={styles.tcNote}>{sec.note}</p>}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Live Dealer: heading on top of card, HeroBanner below */}
          <div style={styles.heroWrapper}>
            <div style={styles.heroHeadingBlock}>
              <h2 style={styles.heroMainHeading}>Live Casino Welcome Reward</h2>
              <p style={styles.heroSubHeading}>
                Enter the world of live gaming with Tigerbet247's immersive Live Casino welcome reward.
              </p>
            </div>
            <HeroBanner />
          </div>

          {/* Live Dealer content */}
          <div style={styles.contentBlock}>
            <h3 style={styles.sectionTitle}>Live Dealer Bonus</h3>
            <p style={styles.sectionLabel}>What are you waiting for?</p>
            <ul style={styles.bulletList}>
              <li style={styles.bulletItem}>Extra bonus on your first Live Casino deposit.</li>
              <li style={styles.bulletItem}>Use your bonus on popular games like Live Roulette, Blackjack, Baccarat, and Game Shows.</li>
            </ul>
            <div style={styles.divider} />
            <h3 style={styles.sectionTitle}>How It Works</h3>
            <ol style={styles.orderedList}>
              <li style={styles.listItem}>Register a new account</li>
              <li style={styles.listItem}>Make a first deposit on Live Casino games</li>
              <li style={styles.listItem}>The Live Casino bonus is credited to your account</li>
              <li style={styles.listItem}>Play with real dealers in real time</li>
            </ol>
            <div style={styles.divider} />
            <h3 style={styles.sectionTitle}>Terms You Should Know</h3>
            <ul style={styles.bulletList}>
              <li style={styles.bulletItem}>Live Casino games contribute to wagering at their own rate</li>
              <li style={styles.bulletItem}>Some games may offer higher contribution rates toward clearing the bonus</li>
              <li style={styles.bulletItem}>Wagering requirements must be completed before cashing out</li>
              <li style={styles.bulletItem}>Maximum bet limits apply when playing with bonus funds</li>
            </ul>
          </div>
        </>
      )}

    </div>
  );
};

/* ════════════════════════════════════════════════════════ */
const styles = {

  page: {
    width: '1189px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    paddingBottom: '40px',
    boxSizing: 'border-box',
  },

  /* ── Tab bar — single rounded pill container ── */
  tabBar: {
    display: 'inline-flex',
    alignSelf: 'flex-start',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#ffffff',
    borderRadius: '999px',
    padding: '4px',
    border: '0px solid transparent',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 18px',
    borderRadius: '999px',
    border: '0px solid transparent',
    background: 'transparent',
    color: '#0d0c22',
    fontSize: '14px',
    fontWeight: '510',
    cursor: 'pointer',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    whiteSpace: 'nowrap',
  },
  tabActive: {
    background: '#1CD4FF',
    color: '#0d0c22',
    fontWeight: '600',
    boxShadow: '0 1px 6px rgba(28,212,255,0.35)',
  },
  /* Static tabs — no pointer, slightly muted */
  tabStatic: {
    cursor: 'default',
    color: '#888888',
  },
  tabIcon: {
    width: '16px',
    height: '16px',
    objectFit: 'contain',
    opacity: 0.7,
  },
  tabIconActive: {
    opacity: 1,
  },

  /* ── White card wrapping heading + banner ── */
  heroWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '24px 24px 0px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    border: '0px solid transparent',
    overflow: 'hidden',
  },

  /* Heading block: top of card, full width so text fits in one line, gap:12 */
  heroHeadingBlock: {
    width: '100%',
    minHeight: '96px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    border: '0px solid transparent',
  },

  /* Heading block: below banner (Live Dealer), full width, padding */
  heroHeadingBlockBelow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px 24px',
    boxSizing: 'border-box',
    border: '0px solid transparent',
  },

  heroMainHeading: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    fontWeight: '700',
    fontSize: '42px',
    lineHeight: '64px',
    letterSpacing: '0',
    textTransform: 'uppercase',
    color: '#333333',
    margin: 0,
    whiteSpace: 'nowrap',
    border: '0px solid transparent',
  },

  heroSubHeading: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    fontWeight: '510',
    fontSize: '24px',
    lineHeight: '20px',
    letterSpacing: '0',
    color: '#333333',
    margin: 0,
    whiteSpace: 'nowrap',
    border: '0px solid transparent',
  },

  /* ── Content block ── */
  contentBlock: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '22px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
    border: '0px solid transparent',
  },

  divider: {
    height: '1px',
    backgroundColor: '#f0f0f0',
    margin: '20px 0',
    border: '0px solid transparent',
  },
  sectionTitle: {
    fontSize: '25px',
    fontWeight: '700',
    color: '#0d0c22',
    margin: '0 0 10px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", "Helvetica Neue", sans-serif',
    border: '0px solid transparent',
  },
  sectionLabel: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#0d0c22',
    margin: '0 0 8px',
    border: '0px solid transparent',
  },
  bodyText: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#555555',
    lineHeight: 1.7,
    margin: 0,
    border: '0px solid transparent',
  },
  orderedList: {
    margin: '0',
    paddingLeft: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    border: '0px solid transparent',
    listStyleType: 'decimal',
  },
  listItem: {
    fontSize: '14px',
    color: '#555555',
    lineHeight: 1.6,
    display: 'list-item',
    listStyleType: 'decimal',
  },

  /* T&C */
  tcBlock: {
    marginTop: '16px',
    border: '0px solid transparent',
  },
  tcHeading: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#0d0c22',
    margin: '0 0 8px',
    border: '0px solid transparent',
  },
  bulletList: {
    margin: 0,
    paddingLeft: '28px',
    listStyleType: 'disc',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    border: '0px solid transparent',
  },
  bulletItem: {
    fontSize: '13.5px',
    color: '#555555',
    lineHeight: 1.65,
  },
  tcNote: {
    fontSize: '13px',
    fontStyle: 'italic',
    color: '#777777',
    margin: '8px 0 0',
    border: '0px solid transparent',
  },
};

export default Casino;
