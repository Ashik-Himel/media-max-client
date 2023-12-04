import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from "../firebase.config";
import { axiosInstance } from "../hooks/useAxios";

export const AllContext = createContext({});

const GlobalContext = ({children}) => {
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    axiosInstance.post('/views', {}, {withCredentials: true})
      .then(res => console.log(res.data))
  }, [])

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      setUserLoaded(true);
    });
    return () => unSubscribe();
  }, []);

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