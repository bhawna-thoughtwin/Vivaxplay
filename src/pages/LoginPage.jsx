import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginLogo from '../assets/images/loginlogo.png';
import loginPageImg from '../assets/images/loginpage.png';
import bottom1 from '../assets/images/bottom.png';
import bottom2 from '../assets/images/bottom2.png';
import bottom3 from '../assets/images/bottom3.png';
import bottom4 from '../assets/images/bottom4.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div style={styles.root}>

      {/* ── Left panel — centered card ── */}
      <div style={styles.leftPanel}>

        {/* ── Outer card: w541 h656 border-radius:16 border:1 padding:32 ── */}
        <div style={styles.card}>

          {/* ── Inner content: w477 h592 gap:64 ── */}
          <div style={styles.innerContent}>

            {/* Logo */}
            <img src={loginLogo} alt="VIVA X PLAY" style={styles.logo} />

            {/* ── Tab + Heading + Form block: w477 h487 gap:72 ── */}
            <div style={styles.formBlock}>

              {/* Tab toggle: w477 h41 border-radius:4 border:1 */}
              <div style={styles.tabBar}>
                <button
                  style={styles.tabInactive}
                  onClick={() => navigate('/register')}
                >
                  Register
                </button>
                <button
                  style={styles.tabActive}
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
              </div>

              {/* Heading + Form + Socials */}
              <div style={styles.headingFormBlock}>

                {/* Heading */}
                <h1 style={styles.heading}>YOU'RE BACK!</h1>

                {/* Form */}
                <form style={styles.form} onSubmit={e => e.preventDefault()}>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Email Or Username</label>
                    <input
                      type="text"
                      placeholder="Email or Username"
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>Password</label>
                    <div style={styles.inputWrapper}>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        style={styles.inputWithIcon}
                      />
                      <button
                        type="button"
                        style={styles.eyeBtn}
                        onClick={() => setShowPassword(p => !p)}
                      >
                        {showPassword ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                            <line x1="1" y1="1" x2="23" y2="23"/>
                          </svg>
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember + Forgot */}
                  <div style={styles.rememberRow}>
                    <label style={styles.checkLabel}>
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={e => setRemember(e.target.checked)}
                        style={styles.checkbox}
                      />
                      <span style={styles.checkText}>Remember me</span>
                    </label>
                    <button type="button" style={styles.forgotBtn}>Forgot Password?</button>
                  </div>

                  {/* Login button */}
                  <button type="submit" style={styles.submitBtn}>LOGIN</button>

                  {/* Divider */}
                  <div style={styles.dividerRow}>
                    <div style={styles.dividerLine} />
                    <span style={styles.dividerText}>Or continue with</span>
                    <div style={styles.dividerLine} />
                  </div>

                  {/* Social login icons */}
                  <div style={styles.socialRow}>
                    <button type="button" style={styles.socialBtn}>
                      <img src={bottom1} alt="social" style={styles.socialIcon} />
                    </button>
                    <button type="button" style={styles.socialBtn}>
                      <img src={bottom2} alt="social" style={styles.socialIcon} />
                    </button>
                    <button type="button" style={styles.socialBtn}>
                      <img src={bottom3} alt="social" style={styles.socialIcon} />
                    </button>
                    <button type="button" style={styles.socialBtn}>
                      <img src={bottom4} alt="social" style={styles.socialIcon} />
                    </button>
                  </div>

                </form>
              </div>{/* end headingFormBlock */}

            </div>{/* end formBlock */}
          </div>{/* end innerContent */}
        </div>{/* end card */}
      </div>

      {/* ── Right panel — image ── */}
      <div style={styles.rightPanel}>
        <img src={loginPageImg} alt="Login Visual" style={styles.rightImage} />
      </div>

    </div>
  );
};

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
    // backgroundColor: '#f0f0f0',
    backgroundColor: "#F5F5F5",
    overflow: 'hidden',
  },

  /* ── Left panel — fills remaining space, centers the card ── */
  leftPanel: {
    flex: 1,
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    boxSizing: 'border-box',
  },

  /* ── Outer card: w541 h656 gap:10 border-radius:16 border:1 padding:32 ── */
  card: {
    width: '541px',
    minHeight: '656px',
    borderRadius: '16px',
    border: '1px solid #e0e0e0',
    padding: '32px',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },

  /* ── Inner content: w477 h592 gap:64 (logo + formBlock stacked) ── */
  innerContent: {
    width: '477px',
    minHeight: '592px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '64px',
    boxSizing: 'border-box',
  },

  logo: {
    width: '160px',
    height: 'auto',
    objectFit: 'contain',
    flexShrink: 0,
  },

  /* ── Tab + heading + form: w477 h487 gap:72 ── */
  formBlock: {
    width: '477px',
    minHeight: '487px',
    display: 'flex',
    flexDirection: 'column',
    gap: '72px',
    boxSizing: 'border-box',
  },

  /* Tab toggle: w477 h41 border-radius:4 border:1 */
  tabBar: {
    display: 'flex',
    width: '477px',
    height: '41px',
    border: '1px solid #1CD4FF80',
    borderRadius: '4px',
    overflow: 'hidden',
    gap: '4px',
    padding: '4px',
    boxSizing: 'border-box',
    alignItems: 'center',
    flexShrink: 0,
  },
  tabActive: {
    flex: 1,
    height: '100%',
    padding: '4px 10px',
    background: 'linear-gradient(180deg, #E3FC7B 0%, #C2D95A 100%)',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '700',
    color: '#1a1a1a',
    fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
    boxSizing: 'border-box',
  },
  tabInactive: {
    flex: 1,
    height: '100%',
    padding: '4px 10px',
    background: 'transparent',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    color: '#555555',
    fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
    boxSizing: 'border-box',
  },

  /* Heading + form stacked */
  headingFormBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
  },

  heading: {
    fontSize: '32px',
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#111111',
    margin: '0 auto',
    width: '100%',
    fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
    lineHeight: '20px',
    letterSpacing: '0',
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },

  label: {
    fontSize: '13px',
    fontWeight: '500',
    color: '#555555',
    fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
  },

  input: {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    fontSize: '14px',
    color: '#111111',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
    backgroundColor: '#fafafa',
  },

  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },

  inputWithIcon: {
    width: '100%',
    padding: '12px 40px 12px 14px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    fontSize: '14px',
    color: '#111111',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
    backgroundColor: '#fafafa',
  },

  eyeBtn: {
    position: 'absolute',
    right: '14px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 0,
  },

  rememberRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  checkLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
  },

  checkbox: {
    accentColor: '#1cd4ff',
    width: '16px',
    height: '16px',
    cursor: 'pointer',
  },

  checkText: {
    fontSize: '13px',
    color: '#333333',
    fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
  },

  forgotBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '590',
    fontStyle: 'normal',
    color: '#333333',
    fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
    lineHeight: '25px',
    letterSpacing: '0',
    verticalAlign: 'middle',
    textDecoration: 'underline',
    textDecorationStyle: 'solid',
    padding: 0,
  },

  submitBtn: {
    width: '477px',
    height: '44px',
    background: '#1CD4FF',
    border: '1px solid #1CD4FF',
    borderRadius: '4px',
    color: '#333333',
    fontSize: '14px',
    fontWeight: '590',
    fontStyle: 'normal',
    cursor: 'pointer',
    letterSpacing: '0',
    lineHeight: '20px',
    textTransform: 'uppercase',
    fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: '10px',
    paddingRight: '10px',
    gap: '4px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dividerRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },

  dividerLine: {
    flex: 1,
    height: '1px',
    backgroundColor: '#e0e0e0',
  },

  dividerText: {
    fontSize: '12px',
    color: '#999999',
    whiteSpace: 'nowrap',
    fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
  },

  socialRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    width: '328px',
    margin: '0 auto',
  },

  socialBtn: {
    width: '70px',
    height: '44px',
    background: 'none',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    flexShrink: 0,
  },

  socialIcon: {
    width: '24px',
    height: '24px',
    objectFit: 'contain',
  },

  /* ── Right panel — image ── */
  rightPanel: {
    width: '796px',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh',
    flexShrink: 0,
  },

  rightImage: {
    position: 'absolute',
    top: '-110px',
    left: '0',
    width: '796px',
    height: '1300px',
    objectFit: 'cover',
    objectPosition: 'center',
  },
};

export default LoginPage;
