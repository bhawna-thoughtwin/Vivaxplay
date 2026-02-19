import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  /* On mobile (< 768px) sidebar starts closed; on desktop it starts open */
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 768);
  const [activeNav, setActiveNav] = useState('Sports');

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <AppContext.Provider value={{ sidebarOpen, toggleSidebar, activeNav, setActiveNav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
