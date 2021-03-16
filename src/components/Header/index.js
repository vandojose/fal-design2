import React, { useState, useEffect } from "react";

import { Link, useStaticQuery, graphql } from "gatsby";

import { Component, Logo, ToggleArea } from "./styles";

function Header({ siteTitle }) {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [menu, setMenu] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMenu = () => {
    setMenu(!menu);
  };

  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "common/FAL-Design-Logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 276) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <Component scroll={scrollPosition}>
      <div className="container">
        <div className="columns is-vcentered is-justify-content-space-between">
          <div className="column is-one-fifth logo">
            <Link to="/">
              <Logo fluid={logo.childImageSharp.fluid} alt={siteTitle} />
            </Link>
          </div>
          <div className="column is-three-fifths is-hidden-touch">
            <nav>
              <ul>
                <li>
                  <Link to="#">quem somos</Link>
                </li>
                <li>
                  <Link to="/portfolio">portfólio</Link>
                </li>
                <li>
                  <Link to="#">clientes</Link>
                </li>
                <li>
                  <Link to="#">blog da fal</Link>
                </li>
                <li>
                  <Link to="#">contato</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <ToggleArea onClick={openMenu} menu={menu} className="is-hidden-desktop">
        <div className="toggle">
          <span />
          <span />
          <span />
        </div>
      </ToggleArea>
    </Component>
  );
}

export default Header;
