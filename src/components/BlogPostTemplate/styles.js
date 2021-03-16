import styled, { keyframes } from "styled-components";
import { Facebook, Twitter, Instagram } from "styled-icons/boxicons-logos";
import { Bell } from "styled-icons/boxicons-regular";
import media from "styled-media-query";

import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";

const Slide = keyframes`
  from {  transform: scale(1.2)} 
  to {   transform: scale(1)}
`;
const Ring = keyframes`
  0% { transform: rotate(0); }
  1% { transform: rotate(30deg); }
  3% { transform: rotate(-28deg); }
  5% { transform: rotate(34deg); }
  7% { transform: rotate(-32deg); }
  9% { transform: rotate(30deg); }
  11% { transform: rotate(-28deg); }
  13% { transform: rotate(26deg); }
  15% { transform: rotate(-24deg); }
  17% { transform: rotate(22deg); }
  19% { transform: rotate(-20deg); }
  21% { transform: rotate(18deg); }
  23% { transform: rotate(-16deg); }
  25% { transform: rotate(14deg); }
  27% { transform: rotate(-12deg); }
  29% { transform: rotate(10deg); }
  31% { transform: rotate(-8deg); }
  33% { transform: rotate(6deg); }
  35% { transform: rotate(-4deg); }
  37% { transform: rotate(2deg); }
  39% { transform: rotate(-1deg); }
  41% { transform: rotate(1deg); }
  43% { transform: rotate(0); }
  100% { transform: rotate(0); }
`;
export const BellIcon = styled(Bell)``;
export const FacebookIcon = styled(Facebook)``;
export const TwitterIcon = styled(Twitter)``;
export const InstagramIcon = styled(Instagram)``;

export const Container = styled.div`
  background: #fff;
  width: 95vw;
  height: 100%;
  margin: 9rem auto 2.5rem;
  padding: 2.5rem 0;
  border-radius: 0.5rem;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
`;
export const ImgBox = styled.div`
  object-fit: cover;
  overflow: hidden;
`;
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;
  padding-bottom: 1rem;
  width: 100%;
  text-align: center;
  background: #fff;
  ${media.greaterThan("large")`   
      font-size: 3.4rem;
  `}
`;

export const BgImage = styled(BackgroundImage)`
  width: 100% !important;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 25rem;

  &::before,
  &::after {
    background-position: 50% 50% !important;
    animation-name: ${Slide};
    animation-duration: 5.5s;
    filter: opacity(0.5);
  }

  ${media.greaterThan("large")`
    height: 30rem;  
  `}
`;

export const Article = styled.article`
  max-width: 95vw;
  margin: auto;
  background: #fff;
  padding: 1rem;

  ${media.between("small", "large")`
    max-width: 80vw;
  `}

  ${media.greaterThan("large")`
    max-width: 680px; 
  `}
`;

export const Author = styled.div`
  margin: auto;
  width: 100%;
  div {
    margin-bottom: 1rem;
    text-align: center;
    span {
      margin-right: 1rem;
      font-size: 1.3rem;
      a {
        position: relative;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
        text-decoration: none;
        margin-right: 15px;
        text-transform: uppercase;
        transition: 0.4s;
        &:hover {
          color: ${({ theme }) => theme.colors.secondary};
        }
        &::before {
          content: "";
          position: absolute;

          width: 3px;
          top: 50%;
          right: -10px;
          height: 3px;
          background: ${({ theme }) => theme.colors.primary};
          z-index: 0;
          border-radius: 50%;
        }
      }
    }
    p {
      font-weight: 300;
      font-style: italic;
      font-size: 1.4rem;
      margin: 0.5rem 0;
      font-family: "Lora", serif;
    }
  }
`;
export const Share = styled.div`
  margin: 1.3rem auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
  position: relative;
  max-width: 95vw;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background: linear-gradient(
      241deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.secondary} 100%
    );
    z-index: 0;
  }

  ${FacebookIcon}, ${TwitterIcon}, ${InstagramIcon} {
    width: 2.5rem;
    height: 2.5rem;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-radius: 0.2rem;
    padding: 0.3rem;
    transition: 0.5s;
    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }

  ${media.between("small", "large")`
    max-width: 80vw;
  `}

  ${media.greaterThan("large")`
    max-width: 680px;
  `}

  div {
    margin-left: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    button {
      margin: 0 2rem 0 0;
    }
  }
  span {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 1.3rem;
  }
`;

export const Content = styled.div`
  max-width: 95vw;
  margin: auto;
  overflow: hidden;

  p {
    font-size: 1.6rem;
    line-height: 3.2rem;
    margin-bottom: 2.5rem;
    font-weight: 400;
    font-family: "Lora", serif;
  }
  h2 {
    margin: 3.2rem 0 1.6rem;
    font-size: 2.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
  }
  figure {
    margin: 2.5rem auto;
    div {
      margin: auto;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
  }
`;
export const ImgFooter = styled(Img)``;

export const Subscribe = styled.div`
  width: 100%;
  background: rgb(115, 41, 55);

  background: linear-gradient(
    241deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );

  padding: 2.5rem;
  margin: auto;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
    flex-direction: column;
    button {
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      width: 16rem;
      margin: 2.5rem auto;
      padding: 0.5rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.primary};

      color: ${({ theme }) => theme.colors.primary};
      background: #fff;
      cursor: pointer;

      > span {
        position: relative;
        display: flex;
        align-items: center;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.6rem;
        background-repeat: repeat;
        background-size: 200%;
        background-position: 100% 0;
        transition: 0.5s;
        ${BellIcon} {
          color: ${({ theme }) => theme.colors.primary};
          width: 1.6rem;
          height: 1.6rem;
          margin: 0 0 0 1rem;
          transition: 0.5s;
          animation: ${Ring} 4s 0.7s ease-in-out infinite;
          transform-origin: 50% 4px;
        }
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: ${({ theme }) => theme.colors.primary};

        transition: 0.5s;
      }

      &:hover {
        span {
          background-position: 0 0;

          color: #fff;
          ${BellIcon} {
            color: #fff;
          }
        }
        &::before {
          width: 100%;
        }
      }
    }
  }

  input {
    width: 30rem;
    padding: 0.5rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background: #fff;
    font-size: 1.6rem;

    color: #000;
    outline: none;
    font-weight: 500;
    &::placeholder {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: #fff !important;
  }

  @media (min-width: 576px) {
    form {
      flex-direction: row;
      button {
        margin: 0 0 0 2.5rem;
      }
    }
  }
`;

export const Tags = styled.div`
  ul {
    display: flex;
    list-style: none;
    li {
      span {
        padding: 0.3rem 0.5rem;
        font-size: 1.3rem;
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.body};
        margin-right: 0.3rem;
        border-radius: 0.2rem;
      }
    }
  }
`;

export const PostFooter = styled.div`
  max-width: 95vw;
  margin: 0 auto 2rem;
  h3 {
    font-weight: 400;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding-bottom: 0.3rem;
    margin: 1rem 0;
  }
  ${media.between("small", "large")`
    max-width: 80vw;
  `}
  ${media.greaterThan("large")`
    max-width: 900px;
  `}
`;

export const PostFooterContent = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    h4 {
      position: absolute;
      left: 0;
      right: 0;
      font-weight: 400;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.primary};
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      position: relative;
      padding-bottom: 0.3rem;
      max-width: 80%;
      margin-bottom: 0.2rem;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1rem;
        background: ${({ theme }) => theme.colors.primary};
        z-index: 0;
      }
    }

    div {
      object-fit: cover;
      overflow: hidden;

      width: 22rem;
      height: 15rem;
      margin-bottom: 2rem;

      ${ImgFooter} {
        width: 22rem;
        height: auto;
      }
    }
  }

  ${media.greaterThan("900px")`
    flex-direction: row;
    justify-content: space-between;
    a{
      div{
      margin-bottom: 0;

      }
    }
  `}
`;
