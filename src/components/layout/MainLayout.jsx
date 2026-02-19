import { useApp } from '../../context/AppContext';
import useWindowWidth from '../../hooks/useWindowWidth';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  const { sidebarOpen } = useApp();
  const { isMobile } = useWindowWidth();

  /* On mobile sidebar is an overlay — never push content */
  const marginLeft = !isMobile && sidebarOpen ? '300px' : '0px';

  return (
    <div style={styles.root}>

      <Navbar />

      <div style={styles.body}>
        {/* Desktop: sidebar drawer | Mobile: bottom tab bar (always rendered) */}
        <Sidebar />

        <div style={styles.mainWrapper}>
          <main
            style={{
              ...styles.main,
              marginLeft,
              padding: isMobile ? '12px 12px 0' : '20px 20px 0',
              /* On mobile add bottom padding so content isn't hidden behind tab bar */
              paddingBottom: isMobile ? '80px' : '0px',
            }}
          >
            {children}
          </main>
          <Footer sidebarOpen={!isMobile && sidebarOpen} />
        </div>
      </div>

    </div>
  );
};

const styles = {
  root: {
    minHeight: '100vh',
    backgroundColor: '#ececec',
  },
  body: {
    display: 'flex',
    paddingTop: '56px',   /* matches new navbar height */
  },
  main: {
    flex: 1,
    transition: 'margin-left 0.3s ease',
    minHeight: 'calc(100vh - 56px)',
    backgroundColor: '#ececec',
  },
  mainWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
};

export default MainLayout;
