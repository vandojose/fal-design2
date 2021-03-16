const React = require("react");

const ThemeProvider = require("styled-components");

const theme = require("./theme/default");

exports.wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
