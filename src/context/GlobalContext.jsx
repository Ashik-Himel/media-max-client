import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AllContext = createContext({});

const GlobalContext = ({children}) => {
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);

  const value = {
    user,
    setUser,
    userLoaded
  };

  return (
    <AllContext.Provider value={value}>
      {children}
    </AllContext.Provider>
  );
};

export default GlobalContext;

GlobalContext.propTypes = {
  children: PropTypes.node
}