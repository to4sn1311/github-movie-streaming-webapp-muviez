import { createContext } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.element,
};

export default AppProvider;
