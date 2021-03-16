import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import MailChimp from "../MailChimp";
import {
  Container,
  Content,
  Article2,
  LaptopMacIcon,
  SpaIcon,
  SubjectIcon,
} from "./styles";

function NewsLetter() {
  return (
    <Container>
      <Article2>
        <div className="description">
          <h2>Inscreva-se para receber:</h2>
          <ul>
            <li>
              <LaptopMacIcon />
              <h4>Informações sobre cursos e treinamentos</h4>
            </li>
            <li>
              <SpaIcon />
              <h4>Novidades sobre tratamentos</h4>
            </li>
            <li>
              <SubjectIcon />
              <h4>Novos Artigos</h4>
            </li>
          </ul>
        </div>
        <MailChimp />
      </Article2>
    </Container>
  );
}

export default NewsLetter;
