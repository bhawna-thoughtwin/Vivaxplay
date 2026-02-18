import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeNav, setActiveNav] = useState('Sports');

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <AppContext.Provider value={{ sidebarOpen, toggleSidebar, activeNav, setActiveNav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
