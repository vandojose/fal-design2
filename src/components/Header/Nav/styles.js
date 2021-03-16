import styled, { css } from "styled-components";
import { Facebook, Twitter, Instagram } from "styled-icons/boxicons-logos";
import { ArrowDown } from "styled-icons/evaicons-solid";
import media from "styled-media-query";

export const Container = styled.div`
  display: none;
  ${media.greaterThan("large")`
  display: block;
  ul {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;

    li {
      position: relative;
      padding: 1.5rem .9rem;
      cursor: pointer;

      a,
      span {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        text-decoration: none;
        position: relative;
        padding-bottom: 0.5rem;
        transition: 0.2s;
        font-size: 1.6rem;

        ${(props) =>
          props.scroll > 100
            ? css`
                color: ${({ theme }) => theme.colors.body};
              `
            : css`
                color: ${({ theme }) => theme.colors.body};
              `}
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;

          width: 0;
          height: 0.1rem;
          ${(props) =>
            props.scroll > 100
              ? css`
                  background: ${({ theme }) => theme.colors.body};
                `
              : css`
                  background: ${({ theme }) => theme.colors.body};
                `}

          transition: 0.4s;
        }

        &:hover {
          &::before {
            width: 100%;
          }
        }
      }

      ul {
        list-style: none;
        position: absolute;
        padding: 0;
        width: 280px;
        left: 0;
        border-radius: .4rem;

        ${(props) =>
          props.scroll > 100
            ? css`
                background-color: ${({ theme }) => theme.colors.bgHeaderDark};
                top: 60px;
              `
            : css`
                background-color: ${({ theme }) => theme.colors.bgHeader};
                top: 70px;
              `}
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 20px;
        box-shadow: 0px 5px 8px -1px rgba(0, 0, 0, 0.12);
        opacity: 0;
        visibility: hidden;
        transition: 0.2s;

        li {
        }
      }
      &:hover ul {
        opacity: 1;
        visibility: visible;
        li {
          &::before {
            width: 100%;
          }
        }
      }
    }
  }
`}
`;

export const FacebookIcon = styled(Facebook)`
  width: 2rem;
  height: 2rem;
`;
export const TwitterIcon = styled(Twitter)`
  width: 2rem;
  height: 2rem;
`;
export const InstagramIcon = styled(Instagram)`
  width: 2rem;
  height: 2rem;
`;
export const ArrowDownIcon = styled(ArrowDown)`
  width: 1.6rem;
  height: 1.6rem;
`;
