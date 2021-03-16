import React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Container } from "./styles";

function Logo({ scroll, siteTitle }) {
  // const { logo } = useStaticQuery(graphql`
  //   query {
  //     logo: file(relativePath: { eq: "common/FAL-Design-Logo.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 276) {
  //           ...GatsbyImageSharpFluid_noBase64
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    <Container scroll={scroll}>
      <Link to="/">
        {/* <Img fluid={logo.childImageSharp.fluid} alt={siteTitle} /> */}
      </Link>
    </Container>
  );
}

export default Logo;
