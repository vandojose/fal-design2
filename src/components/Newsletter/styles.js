import styled, { keyframes } from "styled-components";
import { Bell } from "styled-icons/boxicons-regular";
import { Article, Spa, LaptopMac } from "styled-icons/material-outlined";
import media from "styled-media-query";

import BackgroundImage from "gatsby-background-image";

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

export const SubjectIcon = styled(Article)``;
export const SpaIcon = styled(Spa)``;
export const LaptopMacIcon = styled(LaptopMac)``;

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.titlePage};
  text-shadow: 3px 3px 2px rgba(115, 41, 55, 1);
  position: relative;
  padding-bottom: 1rem;
  max-width: 80%;
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

export const Content = styled.div`
  width: 95vw;
  height: 100%;
  margin: 9rem auto 2.5rem;
  padding: 2.5rem 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;

  p {
    font-size: 1.6rem;
    line-height: 3.2rem;
    margin-bottom: 3rem;
    font-weight: 400;
    font-family: "Lora", serif;
  }
  h2 {
    margin: 3.2rem 0 1.6rem;
    font-size: 2.2rem;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.primary};
  }
  &::before,
  &::after {
    border-radius: 0.5rem;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    max-width: 800px;
  }
  @media (min-width: 1025px) {
    max-width: 960px;
  }
`;

export const Article2 = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6362920168067228);
  padding: 1.6rem;

  border-radius: 0.4rem;
  .description {
    h2 {
      font-size: 3.2rem;
      text-align: center;
      font-weight: 600;
    }
    ul {
      list-style: none;
      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 2rem auto;
        padding: 1.6rem;

        background: ${({ theme }) => theme.colors.primary};
        border-radius: 0.4rem;
        h4 {
          font-size: 2rem;
          font-weight: 500;
          color: #fff;
          width: 90%;
        }

        ${SubjectIcon},
        ${SpaIcon},
        ${LaptopMacIcon} {
          color: #fff;
          width: 6.5rem;
          height: 6.5rem;
          margin: 1.6rem;
        }
      }
    }
  }
  .form {
    border: 0.2rem solid ${({ theme }) => theme.colors.primary};
    border-radius: 0.4rem;
    width: 100%;
    padding: 1.6rem;
    background: #fff;
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2.5rem 0;
      flex-direction: column;
      div {
        display: flex;
        flex-direction: column;
        padding: 1.6rem 0;
        width: 100%;

        label {
          color: ${({ theme }) => theme.colors.primary};
          font-size: 2rem;
        }
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        margin: 2rem auto;
        padding: 1.6rem;
        border: 0.1rem solid ${({ theme }) => theme.colors.primary};
        color: #fff;
        background: ${({ theme }) => theme.colors.primary};
        cursor: pointer;

        > span {
          position: relative;
          display: flex;
          align-items: center;
          font-weight: 500;
          color: #fff;
          font-size: 2rem;
          background-repeat: repeat;
          background-size: 200%;
          background-position: 100% 0;
          transition: 0.5s;
          ${BellIcon} {
            color: #fff;
            width: 2rem;
            height: 2rem;
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
          background: #fff;

          transition: 0.5s;
        }

        &:hover {
          span {
            background-position: 0 0;

            color: ${({ theme }) => theme.colors.primary};
            ${BellIcon} {
              color: ${({ theme }) => theme.colors.primary};
            }
          }
          &::before {
            width: 100%;
          }
        }
      }
    }
    input {
      width: 100%;
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
    }
  }

  ${media.between("small", "large")`
    max-width: 70vw;
  `}

  ${media.greaterThan("large")`
    max-width: 680px; 
 
  `}
`;
