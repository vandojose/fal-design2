import React from "react";
import Iframe from "react-iframe";

import { graphql, useStaticQuery, Link } from "gatsby";

import {
  Container,
  Content,
  Title,
  ImgBox,
  BgImage,
  WhatsappIcon,
  InstagramIcon,
  PhoneIcon,
  MapPinIcon,
} from "./styles";

function Contact() {
  const { banner } = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "bgImage/bg-contato2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Container>
      <ImgBox>
        <BgImage fluid={banner.childImageSharp.fluid}>
          <Title>Contato</Title>
        </BgImage>
      </ImgBox>
      <Content>
        <div className="description">
          <div className="local">
            <div className="address">
              <MapPinIcon />
              <h4>ENDEREÇO</h4>
              <span>Rua Simão Álvares, 941 - Pinheiros - São Paulo-SP</span>
            </div>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2303849599657!2d-46.69381658483459!3d-23.56016778468357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57cb8ac3ad13%3A0xf55d98985d0705df!2sDra%20Helena%20Campiglia!5e0!3m2!1spt-BR!2sbr!4v1570826001857!5m2!1spt-BR!2sbr"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
          </div>
          <div className="social">
            <ul>
              <li aria-label="Telefones">
                <PhoneIcon />
                <h4>Telefones</h4>
                <span>11 3813-5080</span>
                <span>11 3815-5066</span>
              </li>
              <li aria-label="Instagram">
                <Link to="https://www.instagram.com/helenacampiglia/" target="_blanc">
                  <InstagramIcon />
                  <h4>Instagram</h4>
                  <span>@helenacampiglia</span>
                </Link>
              </li>
              <li aria-label="Whatsapp">
                <Link to="https://wa.me/5511982288192?text=sua%20mensagem" target="_blanc">
                  <WhatsappIcon />
                  <h4>Whatsapp</h4>
                  <span>11 98228-8192</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Contact;
