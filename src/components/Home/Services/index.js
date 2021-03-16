import React from "react";

import { useStaticQuery, graphql, Link } from "gatsby";

import { ImgTest, Description, Flower, Content } from "./styles";

function Services() {
  const { ana, havainas, newBalance, sony } = useStaticQuery(graphql`
    query {
      ana: file(
        relativePath: { eq: "home/about/FAL-Portfolio-Ana-Hickmann-07.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      havainas: file(
        relativePath: { eq: "home/about/FAL-Portfolio-Havaianas-02.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      newBalance: file(
        relativePath: { eq: "home/about/FAL-Portfolio-New-Balance-01.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sony: file(relativePath: { eq: "home/about/FAL-Portfolio-Sony-05.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <Description side="right">
        <Content
          data-sal="zoom-in"
          data-sal-delay="300"
          data-sal-duration="1500"
          data-sal-easing="easeInSine">
          <span>ARQUITETURA & INTERIORES</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper
            consectetur velit, sit amet cursus diam. Pellentesque luctus vitae
            nunc in luctus. Aenean faucibus mauris sem. In ac diam et tortor
            lobortis porta vitae sit amet purus. Nam id enim sit amet ipsum
            sollicitudin laoreet. Sed eu cursus sapien.
          </p>
          <Link to="#">
            <span>Mais Info</span>
          </Link>
        </Content>

        <Flower
          data-sal="zoom-in"
          data-sal-delay="600"
          data-sal-duration="1500"
          data-sal-easing="easeInSine">
          <ImgTest fluid={ana.childImageSharp.fluid} />
        </Flower>
      </Description>
      <Description side="left">
        <Flower
          data-sal="zoom-in"
          data-sal-delay="600"
          data-sal-duration="1500"
          data-sal-easing="easeInSine">
          <ImgTest fluid={havainas.childImageSharp.fluid} />
        </Flower>
        <Content
          data-sal="zoom-in"
          data-sal-delay="300"
          data-sal-duration="1500"
          data-sal-easing="easeInSine">
          <span>BRANDING & DESIGN</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper
            consectetur velit, sit amet cursus diam. Pellentesque luctus vitae
            nunc in luctus. Aenean faucibus mauris sem. In ac diam et tortor
            lobortis porta vitae sit amet purus. Nam id enim sit amet ipsum
            sollicitudin laoreet. Sed eu cursus sapien.
          </p>
          <Link to="#">
            <span>Mais Info</span>
          </Link>
        </Content>
      </Description>

      <Description side="right">
        <Content
          data-sal="zoom-in"
          data-sal-delay="300"
          data-sal-duration="1500"
          data-sal-easing="easeInSine">
          <span>VISUAL MERCHANDISING</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper
            consectetur velit, sit amet cursus diam. Pellentesque luctus vitae
            nunc in luctus. Aenean faucibus mauris sem. In ac diam et tortor
            lobortis porta vitae sit amet purus. Nam id enim sit amet ipsum
            sollicitudin laoreet. Sed eu cursus sapien.
          </p>
          <Link to="#">
            <span>Mais Info</span>
          </Link>
        </Content>

        <Flower
          data-sal="zoom-in"
          data-sal-delay="600"
          data-sal-duration="1500"
          data-sal-easing="easeInSine">
          <ImgTest fluid={newBalance.childImageSharp.fluid} />
        </Flower>
      </Description>

      <Description side="left">
        <Flower
          data-sal="zoom-in"
          data-sal-delay="600"
          data-sal-duration="1500"
          data-sal-easing="easeInSine">
          <ImgTest fluid={sony.childImageSharp.fluid} />
        </Flower>
        <Content
          data-sal="zoom-in"
          data-sal-delay="300"
          data-sal-duration="1500"
          data-sal-easing="easeInSine">
          <span>INTELIGÊNCIA</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper
            consectetur velit, sit amet cursus diam. Pellentesque luctus vitae
            nunc in luctus. Aenean faucibus mauris sem. In ac diam et tortor
            lobortis porta vitae sit amet purus. Nam id enim sit amet ipsum
            sollicitudin laoreet. Sed eu cursus sapien.
          </p>
          <Link to="#">
            <span>Mais Info</span>
          </Link>
        </Content>
      </Description>
    </>
  );
}

export default Services;
