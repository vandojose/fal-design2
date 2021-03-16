/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import { ThemeProvider } from "styled-components";

import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

import theme from "../../../config/theme/default";
import GlobalStyle from "../../../config/theme/global";
import Footer from "../Footer";
import Header from "../Header";
import "../../assets/all.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
