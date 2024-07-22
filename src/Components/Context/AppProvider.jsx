import { createContext } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

const AppProvider = ({ children }) => {};

AppProvider.propTypes = {
  children: PropTypes.element,
};

export default AppProvider;
