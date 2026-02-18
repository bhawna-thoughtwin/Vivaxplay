import searchIcon from '../../assets/icons/icon-search.svg';

const SearchBar = () => {
  return (
    <div style={styles.wrapper}>
      
      <input
        type="text"
        placeholder="Search Game..."
        style={styles.input}
      />
      <img src={searchIcon} alt="search" style={styles.icon} />
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '2px',
    padding: '8px 12px',
    gap: '8px',
    border: '1px solid #e0e0e0',
  },
  icon: {
    width: '16px',
    height: '16px',
    opacity: 0.5,
  },
  input: {
    background: 'none',
    border: 'none',
    outline: 'none',
    color: '#4a4a4a',
    fontSize: '14px',
    width: '100%',
    fontFamily: 'inherit',
  },
};

export default SearchBar;
