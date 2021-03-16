import React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";

import {
  Container,
  Content,
  WhatsappIcon,
  LinkedinIcon,
  FacebookIcon,
  PinterestIcon,
  YoutubeIcon,
  TwitterIcon,
  MailIcon,
} from "./styles";

function Footer() {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "common/logo2_branco.png" }) {
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
      <Content className="container">
        <div className="info">
          <div className="items">
            <div className="item">
              <h4>Onde estamos</h4>
              <p>Rua Oscar Freire, 379 cj. 191</p>
              <p>Cerqueira Cesar - São Paulo SP</p>
              <Link
                to="https://api.whatsapp.com/send?phone=5511964376160"
                target="_blank">
                <WhatsappIcon /> +55 (11) 96437 - 6160
              </Link>
              <a href="mailto:fal@falzonialveslima.com.br">
                <MailIcon /> fal@falzonialveslima.com.br
              </a>
            </div>
          </div>
          <nav className="links">
            <h4>Links</h4>
            <ul>
              <li>
                <Link to="/sobre">Quem Somos</Link>
              </li>
              <li>
                <Link to="/telemedicina">Portifólio</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </nav>

          <div className="folow">
            <div className="social">
              <h4>Social</h4>
              <div className="icons">
                <Link to="">
                  <LinkedinIcon />
                </Link>
                <Link to="">
                  <FacebookIcon />
                </Link>
                <Link to="">
                  <PinterestIcon />
                </Link>
                <Link to="">
                  <YoutubeIcon />
                </Link>
                <Link to="">
                  <TwitterIcon />
                </Link>
              </div>
            </div>
            <div className="newsletter">
              <h4>NewsLetter</h4>
              <form action="">
                <input type="email" name="" id="" placeholder="Seu Email" />
              </form>
            </div>
          </div>
        </div>
        <div className="tdr">
          <p>todos os direitos reservados© {new Date().getFullYear()}</p>
        </div>
      </Content>
    </Container>
  );
}

export default Footer;
