import { useApp } from '../../context/AppContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  const { sidebarOpen } = useApp();

  return (
    <div style={styles.root}>
      
      <Navbar />
      <div style={styles.body}>
        {sidebarOpen && <Sidebar />}
        <div style={styles.mainWrapper}>
          <main
            style={{
              ...styles.main,
              marginLeft: sidebarOpen ? '300px' : '0px',
            }}
          >
            {children}
          </main>
          <Footer sidebarOpen={sidebarOpen} />
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
    paddingTop: '62px',
  },
  main: {
    flex: 1,
    padding: '20px 20px 0',
    transition: 'margin-left 0.3s ease',
    minHeight: 'calc(100vh - 62px)',
    backgroundColor: '#ececec',
  },
  mainWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
};

export default MainLayout;
