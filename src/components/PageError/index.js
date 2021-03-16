import React from "react";

import { useStaticQuery, graphql, Link } from "gatsby";

import Layout from "../Layout";
import MailChimpPage from "../MailChimpPage";
import SEO from "../Seo";
import { Container, ImgBox, Title, BgImage, Content, Article } from "./styles";

function PageError() {
  return (
    <Layout>
      <SEO
        title="404"
        keywords="helena campiglia, helenacampiglia, medica clinica geral, medicaclinicageral, acupuntura, infertilidade, mente e corpo, meditação"
        description="Médica clínica geral e acupunturista, especilizada em avaliação e tratamento de dor e em distúrbios da mulher (infertilidade, gestação e menopausa)."
      />
      <Container>
        <Content>
          <Article>
            <h2>OPS!</h2>
            <p>Página não encontrada</p>
            <div className="button">
              <Link to="/">
                <span>Home</span>
              </Link>
            </div>
          </Article>
          <MailChimpPage />
        </Content>
      </Container>
    </Layout>
  );
}

export default PageError;
