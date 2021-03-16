import styled, { keyframes } from "styled-components";
import { Instagram, Whatsapp } from "styled-icons/fa-brands";
import { Phone, MapPin } from "styled-icons/fa-solid";
import media from "styled-media-query";

import BackgroundImage from "gatsby-background-image";

const Slide = keyframes`
  from {  transform: scale(1.2)} 
  to {   transform: scale(1)}
`;

export const WhatsappIcon = styled(Whatsapp)``;
export const InstagramIcon = styled(Instagram)``;
export const PhoneIcon = styled(Phone)``;
export const MapPinIcon = styled(MapPin)``;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.titlePage};
  text-shadow: 3px 3px 2px rgba(115, 41, 55, 1);
  position: relative;
  padding-bottom: 1rem;
  max-width: 80%;
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background: ${({ theme }) => theme.colors.titlePage};
    z-index: 0;
    box-shadow: 0 1px 1px rgba(115, 41, 55, 1);
  }

  ${media.greaterThan("large")`   
      font-size: 5rem;
  `}
`;
export const Container = styled.div`
  width: 100%;
  margin: auto;
`;
export const ImgBox = styled.div`
  margin-bottom: 3rem;
  object-fit: cover;
  overflow-x: hidden;
`;
export const BgImage = styled(BackgroundImage)`
  width: unset !important;
  height: 100vh;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before,
  &::after {
    background-position: 50% 50% !important;
    animation-name: ${Slide};
    animation-duration: 5s;
    filter: opacity(0.7);
  }

  ${media.greaterThan("large")`
    height: 30rem;  
  `}
`;
export const Content = styled.div`
  background: #fff;
  width: 95vw;
  height: 100%;
  margin: 9rem auto 2.5rem;
  padding: 2.5rem 1.6rem;
  border-radius: 0.5rem;
  p,
  strong {
    font-size: 1.6rem;
    line-height: 3.2rem;
    margin-bottom: 3rem;
    font-weight: 400;
    font-family: "Lora", serif;
  }
  strong {
    a {
      font-weight: 600;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      transition: 0.5s;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
  .description {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    flex-flow: wrap;

    ${WhatsappIcon},
    ${InstagramIcon},
    ${PhoneIcon},
    ${MapPinIcon} {
      width: 3rem;
      height: 3rem;
      color: #fff;
    }

    .local {
      text-align: center;
      width: 100%;
      iframe {
        border: none;
        width: 100%;
        height: 30rem;
      }
      .address {
        padding: 2rem 0;

        ${MapPinIcon} {
          color: ${({ theme }) => theme.colors.primary};
        }
        h4 {
          color: ${({ theme }) => theme.colors.primary};
          font-size: 2.5rem;
          padding: 1rem;
        }
        span {
          font-size: 2rem;
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
    .social {
      display: flex;
      justify-content: center;
      margin: 1.6rem 0;

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        flex-flow: wrap;

        li {
          background: ${({ theme }) => theme.colors.primary};
          border-radius: 0.4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.6rem;
          margin: 1.6rem 0;
          width: 100%;
          h4 {
            color: #fff;
            font-size: 2.5rem;
            padding: 1rem;
          }
          span {
            font-size: 2rem;
            color: #fff;
          }
          a {
            text-align: center;
            text-decoration: none;
          }
        }
      }
    }
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
    .description {
      .social {
        display: flex;
        justify-content: center;
        margin: 1.6rem 0;

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
          flex-flow: nowrap;

          li {
            padding: 1.6rem;
            margin: 1.6rem;
            width: 25rem;
            height: 19rem;
          }
        }
      }
    }
  }

  h2 {
    margin: 3.2rem 0 1.6rem;
    font-size: 2.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
  }
  figure {
    width: 30rem;
    height: auto;
    margin: 2.5rem auto 3.5rem;
    div {
      margin: auto;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
  }
`;
