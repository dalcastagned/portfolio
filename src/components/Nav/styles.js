import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: flex;
  padding: 1rem 2.8rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 3.2rem;
  gap: 1.3rem;
  border-radius: 4.8rem;
  backdrop-filter: blur(0.15rem);
`;

export const Link = styled.a`
  ${({ theme, active }) => css`
    background: ${active ? theme.colorBackground : 'transparent'};
    padding: 1.5rem;
    border-radius: 50%;
    display: flex;
    color: ${active ? theme.colorWhite : theme.colorLight};
    font-size: 1.8rem;

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  `}
`;
