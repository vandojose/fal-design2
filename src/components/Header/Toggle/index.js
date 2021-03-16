import React, { useState } from "react";

import { Link, useStaticQuery, graphql } from "gatsby";

import {
  Container,
  ToggleArea,
  Menu,
  ArrowDownIcon,
  InstagramIcon,
  NewsletterIcon,
  FacebookIcon,
  ImgContent,
} from "./styles";

function Toggle() {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };
  const { cerejeira } = useStaticQuery(graphql`
    query {
      cerejeira: file(relativePath: { eq: "common/cerejeira-menu.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <Container>
      <ToggleArea onClick={openMenu} menu={menu}>
        <span />
        <span />
        <span />
      </ToggleArea>
      <Menu menu={menu}>
        <ImgContent fluid={cerejeira.childImageSharp.fluid} />
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link
              to="http://cursos.helenacampiglia.com.br/saude-da-mulher-na-medicina-tradicional-chinesa/"
              target="_blanc">
              Cursos
            </Link>
          </li>

          <li className="group">
            <input type="checkbox" name="group-1" id="group-1" />
            <label htmlFor="group-1">
              <span>
                Tratamentos <ArrowDownIcon />
              </span>
            </label>
            <ul className="submenu">
              <li>
                <Link to="/medicina-tradicional-chinesa">
                  Medicina Tradiciona Chinesa
                </Link>
              </li>
              <li>
                <Link to="/infertilidade">Infertilidade</Link>
              </li>
              <li>
                <Link to="/acupuntura">Acupuntura</Link>
              </li>
              <li>
                <Link to="/mente-e-corpo">Mente e Corpo</Link>
              </li>
              <li>
                <Link to="/meditacao">Meditação</Link>
              </li>
            </ul>
          </li>

          <li>
            <input type="checkbox" name="group-2" id="group-2" />
            <label htmlFor="group-2">
              <span>
                Livros <ArrowDownIcon />
              </span>
            </label>
            <ul className="submenu">
              <li>
                <Link to="/livros/psique-e-medicina-tradicional-chinesa">
                  Psique e Medicina Tradicional Chinesa
                </Link>
              </li>
              <li>
                <Link to="/livros/dominio-do-yin-da-fertilidade-a-maternidade-a-mulher-e-suas-fases-na-medicina-tradicional-chinesa">
                  Domínio do Yin
                </Link>
              </li>{" "}
            </ul>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/telemedicina">Telemedicina</Link>
          </li>

          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
        <ul className="social">
          <li>
            <Link
              to="https://www.instagram.com/helenacampiglia"
              target="_blanc"
              alt="Instagram">
              <InstagramIcon />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.facebook.com/drahelenacampiglia"
              target="_blanc"
              alt="Facebook">
              <FacebookIcon />
            </Link>
          </li>
          <li>
            <Link to="/newsletter" alt="Newsletter">
              <NewsletterIcon />
            </Link>
          </li>
        </ul>
      </Menu>
    </Container>
  );
}

export default Toggle;
