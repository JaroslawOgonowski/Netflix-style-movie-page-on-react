import styled from "styled-components";
export const Container = styled.div`
  margin: 54px 100px 0 100px;
  display: flex;
  justify-content: space-between;
  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) {
    margin: 48px 16px 0 16px;
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  `;

export const NetflixLogo = styled.img`
  max-width: 200px;
  max-height: 54px;
  `;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  animation-name: optionsAnimation;
  animation-duration: 5s;
  animation-timing-function: linear;
  @keyframes optionsAnimation {
    0%, 90%{opacity: 0%;}
    100%{opacity: 100%}   
  };
  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) {
    margin-top: 30px;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 20px;
  };
`;
export const OptionsButton = styled.a`
  text-decoration:none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  gap: 8px;
  color: ${({ theme }) => theme.color.mainText};
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  transition: 0.5s;
  &:hover{
    transform: scale(1.2);
  };
`;

export const Menu = styled.ul`
  padding: 0;
  margin: 0;
  text-decoration:none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: nowrap;
  background: none;
  border: none;
  cursor: pointer;
  gap: 8px;
  color: ${({ theme }) => theme.color.mainText};
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  transition: 0.5s;
  &:hover{
    transform: scale(1.2);
  };
`