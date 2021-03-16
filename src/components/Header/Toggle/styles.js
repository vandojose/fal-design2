import styled, { css, keyframes } from "styled-components";
/* eslint-disable max-len */
import { InstagramAlt, FacebookSquare } from "styled-icons/boxicons-logos";
import { Newsletter } from "styled-icons/entypo";
import { ArrowDown } from "styled-icons/evaicons-solid";
import media from "styled-media-query";

import Img from "gatsby-image";

export const ArrowDownIcon = styled(ArrowDown)`
  width: 2rem;
  height: 2rem;
`;

const FadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`;
const FadeOut = keyframes`
  0% {opacity:1;}
  100% {opacity:0;display: none;}
`;

export const InstagramIcon = styled(InstagramAlt)``;
export const NewsletterIcon = styled(Newsletter)``;
export const FacebookIcon = styled(FacebookSquare)``;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem;

  ${media.greaterThan("large")`
    display: none;
  `}
`;

export const ImgContent = styled(Img)``;

export const ToggleArea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  width: 2.25rem;
  height: 1.85rem;
  z-index: 1;

  span:nth-child(n) {
    width: 2.25rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.body};
    box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.12),
      0 0.1rem 0.2rem rgba(0, 0, 0, 0.24);
  }

  ${(props) =>
    props.menu === true &&
    css`
      span:nth-child(n) {
        position: absolute;
        top: 0.9rem;
        transition: transform ease-out 0.2s;

        background: ${({ theme }) => theme.colors.primary};
      }
      span:nth-child(1) {
        transform: translate(0) rotate(-45deg);
      }
      span:nth-child(2) {
        display: none;
      }
      span:nth-child(3) {
        transform: translate(0) rotate(45deg);
      }
    `};
`;
export const Menu = styled.div`
  ${(props) =>
    props.menu === true
      ? css`
          position: absolute;
          top: 0;
          right: 0;
          width: 100vw;
          height: 100vh;
          background: #fff;
          z-index: 0;
          display: block;
          animation-name: ${FadeIn};
          animation-duration: 0.5s;
          overflow-y: scroll;
          ${ImgContent} {
            opacity: 0.5;
            width: 20rem;
            height: auto;
          }
          @media (min-width: 576px) {
            width: 40rem;
          }
        `
      : css`
          display: none;
          animation-name: ${FadeOut};
          animation-duration: 0.5s;
        `}

  .menu {
    padding: 1.6rem;
    list-style: none;
    li {
      padding: 1rem 0;
      a,
      span {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.8rem;
      }
      a {
        text-decoration: none;
      }
    }
  }
  .group {
  }
  .submenu {
    list-style: none;
    margin-left: 1.6rem;
    display: none;
    li {
      a {
        color: ${({ theme }) => theme.colors.text};
      }
    }
    // by default hide all sub menus
  }
  input {
    position: absolute;
    opacity: 0;
  }

  label {
    position: relative;

    padding: var(--space-sm) var(--space-md);
    background: var(--cd-color-1);
    box-shadow: inset 0 -1px lightness(var(--cd-color-1), 1.2);
    color: var(--color-white);
  }

  input:checked ~ .submenu {
    // show children when item is checked
    display: flex;
    flex-direction: column;
  }
  input ~ label span ${ArrowDownIcon} {
    // show children when item is checked
    transition: 0.2s;
  }
  input:checked ~ label span ${ArrowDownIcon} {
    // show children when item is checked
    transition: 0.2s;
    transform: translate(0) rotate(180deg);
  }
  .social {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 2rem 0;
    li {
      ${InstagramIcon}, ${FacebookIcon}, ${NewsletterIcon} {
        color: ${({ theme }) => theme.colors.primary};
        width: 3.5rem;
        height: 3.5rem;
      }
    }
  }
`;
