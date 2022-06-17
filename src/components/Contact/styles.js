import styled, { css } from 'styled-components';
import { Container } from '../../styles/globalStyles';

export const Section = styled.section`
  padding-top: 3rem;
`;

export const ContainerContact = styled(Container)`
  ${({ theme }) => css`
    width: 58%;
    display: grid;
    grid-template-columns: 30% 58%;
    gap: 12%;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 3.2rem;
    }

    @media screen and (max-width: 600px) {
      width: ${theme.containerWidthSm};
    }
  `}
`;

export const Options = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.9rem;

    svg {
      font-size: 2.4rem;
    }

    article {
      background: ${theme.colorBackgroundVariant};
      padding: 1.9rem;
      border-radius: 1.9rem;
      text-align: center;
      border: 0.1rem solid transparent;
      transition: ${theme.transition};

      &:hover {
        background: transparent;
        border-color: ${theme.colorPrimaryVariant};
      }
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.9rem;

    input,
    textarea {
      width: 100%;
      padding: 2.4rem;
      border-radius: 0.8rem;
      background: transparent;
      border: 0.2rem solid ${theme.colorPrimaryVariant};
      resize: none;
      color: ${theme.colorWhite};
    }

    button {
      width: max-content;
      display: inline-block;
      color: ${theme.colorBackground};
      padding: 1.2rem 1.9rem;
      border-radius: 0.65rem;
      cursor: pointer;
      border: 0.1rem solid ${theme.colorPrimary};
      transition: ${theme.transition};
      background: ${theme.colorPrimary};
      font-size: 1.6rem;

      &:hover {
        background: ${theme.colorWhite};
        color: ${theme.colorBackground};
        border-color: transparent;
      }
    }
  `}
`;
