import styled from "styled-components";
import {
  LinkedinWithCircle,
  FacebookWithCircle,
  PinterestWithCircle,
  YoutubeWithCircle,
  TwitterWithCircle,
  MailWithCircle,
} from "styled-icons/entypo-social";
import { Whatsapp } from "styled-icons/remix-fill";
import media from "styled-media-query";

export const LinkedinIcon = styled(LinkedinWithCircle)``;
export const FacebookIcon = styled(FacebookWithCircle)``;
export const PinterestIcon = styled(PinterestWithCircle)``;
export const YoutubeIcon = styled(YoutubeWithCircle)``;
export const TwitterIcon = styled(TwitterWithCircle)``;
export const MailIcon = styled(MailWithCircle)``;

export const WhatsappIcon = styled(Whatsapp)``;

export const Container = styled.footer`
  background-color: #fff;
  width: 100%;
  margin: auto;
`;

export const Content = styled.div`
  h4 {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 1.6rem 0;

    color: ${({ theme }) => theme.colors.secondary};
  }
  .tdr {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.4rem;
    margin: 2rem 0;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2rem 0;

    .folow {
      .social {
        width: 30rem;
        .icons {
          display: flex;
          justify-content: space-between;
          margin: 0 0 2.5rem 0;
          a {
            ${LinkedinIcon},
            ${FacebookIcon},
            ${PinterestIcon},
            ${YoutubeIcon},
            ${TwitterIcon},
            ${MailIcon} {
              width: 3.5rem;
              color: ${({ theme }) => theme.colors.primary};
              transition: 0.3s;
              &:hover {
                color: ${({ theme }) => theme.colors.secondary};
              }
            }
          }
        }
      }
      .newsletter {
        form {
          input {
            border: 0.2rem solid ${({ theme }) => theme.colors.primary};
            border-radius: 0;
            padding: 1rem;
            transition: 0.2s;
            width: 30rem;
            &:focus {
              outline: none;
              border: 0.2rem solid ${({ theme }) => theme.colors.secondary};
              border-radius: 0;
            }
          }
        }
      }
    }

    .items {
      display: block;
      .item {
        display: block;
        color: ${({ theme }) => theme.colors.text};
        p,
        a {
          font-size: 1.6rem;
          margin-bottom: 1.4rem;
        }
        a {
          display: block;
          color: ${({ theme }) => theme.colors.text};

          ${WhatsappIcon}, ${MailIcon} {
            margin: 0 1rem 0.5rem 0;
            width: 2.2rem;
            color: ${({ theme }) => theme.colors.text};
            transition: 0.3s;
          }
          &:hover {
            color: ${({ theme }) => theme.colors.secondary};
            ${WhatsappIcon}, ${MailIcon} {
              color: ${({ theme }) => theme.colors.secondary};
            }
          }
        }
      }
    }
    .links {
      width: 30rem;
      ul {
        list-style: none;
        li {
          padding: 0 0 1.6rem 0;
          a {
            color: ${({ theme }) => theme.colors.text};
            text-decoration: none;
            font-size: 1.6rem;
            &:hover {
              color: ${({ theme }) => theme.colors.link};
            }
          }
        }
      }
      ${media.greaterThan("madium")`
      width: auto;
      `}
    }
    ${media.greaterThan("large")`
    flex-direction: row;
    
  `}
  }
`;
