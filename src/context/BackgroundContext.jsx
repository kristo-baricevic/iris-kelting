import { createContext, useState, useContext } from 'react';

const BackgroundContext = createContext();

export const useBackground = () => useContext(BackgroundContext);

export const BackgroundProvider = ({ children }) => {
  const [background, setBackground] = useState('');

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

BackgroundProvider.propTypes = {
    children: BackgroundProvider.string.isRequired
};

