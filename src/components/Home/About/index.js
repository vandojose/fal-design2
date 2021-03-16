import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import { ImgTest, Description, Flower, Content } from "./styles";

function About() {
  const { omniera } = useStaticQuery(graphql`
    query {
      omniera: file(
        relativePath: {
          eq: "home/about/FAL-Portfolio-OMNIERA–Loja-do-Futuro-09.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <Description
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="800"
        data-sal-easing="easeInSine">
        <Flower>
          <ImgTest fluid={omniera.childImageSharp.fluid} />
        </Flower>
        <Content>
          <h2>FILOSOFIA DE TRABALHO</h2>
          <p>
            A filosofia da FAL é a de criar experiências memoráveis sem se
            descuidar dos reais objetivos do cliente. Compreendemos claramente
            que a avaliação do resultado do trabalho será diretamente
            proporcional à sua capacidade de gerar vendas e valor adicional para
            a marca.
          </p>
        </Content>
      </Description>
    </>
  );
}

export default About;
