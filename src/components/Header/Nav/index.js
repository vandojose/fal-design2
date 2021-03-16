import React from "react";
/* eslint-disable max-len */

import { Link } from "gatsby";

import { Container, ArrowDownIcon } from "./styles";

function Nav({ scroll }) {
  return (
    <Container scroll={scroll}>
      <ul>
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

        <li>
          <span>
            Tratamentos <ArrowDownIcon />
          </span>
          <ul>
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
          <span>
            Livros <ArrowDownIcon />
          </span>
          <ul>
            <li>
              <Link to="/livros/psique-e-medicina-tradicional-chinesa">
                Psique e Medicina Tradicional Chinesa
              </Link>
            </li>
            <li>
              <Link to="/livros/dominio-do-yin-da-fertilidade-a-maternidade-a-mulher-e-suas-fases-na-medicina-tradicional-chinesa">
                Domínio do Yin
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/telemedicina">Telemedicina</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </Container>
  );
}

export default Nav;
