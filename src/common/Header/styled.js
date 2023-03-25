import styled, { css } from "styled-components";

export const Logo = styled.img`
  width: 300px;
  opacity: 0.6;
  transition: 1s;
  margin: 54px 100px 0 100px;
  width: 300px;

  @media(max-width: ${({ theme }) => theme.breakPoint.notebook}px) {
    margin: 48px 16px 0 16px;
  };
  
  @media(max-width: ${({ theme }) => theme.breakPoint.minimalVersion}px) {
    margin: 60px 16px 0 16px;
    width: 150px;  
  };  

  &:hover{
    opacity: 1;
    cursor: pointer;
  };
  
  &:active{
   transform: scale(1.5);
  }
`;

export const MenuContainer = styled.div`
  text-decoration: none;
  position: fixed;
  top:30px;
  right: 40px;
  display: flex;
  gap: 30px;

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    gap: 20px;
    top:8px;
    right: 8px;
  };
`;

export const Menu = styled.div`
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.menuText};
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  transition: 0.5s;

  &:hover{
    color: ${({ theme }) => theme.color.mainText}; 
    transform: scale(1.08)
    };
`;

export const MenuTitle = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: 22px;
margin: 0;
width: 100%;
height: 50px;
border-radius: 5px;
 @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    background-color: ${({ theme }) => theme.color.menuBackground};
     };
`;

export const Box = styled.div`
margin: 0;
&&{
    ${({ hideMenu }) => hideMenu && css`{
  visibility: hidden;
    }`};
  };
`;

export const SearchMovieInput = styled.input`
  text-align: center;
  padding: 8px;
  display: block;
  width: 200px;
  color: ${({ theme }) => theme.color.menuText};
  text-decoration:none;
  background: none;
  border-radius: 5px;
  border: 1px solid gray;
  margin: 0;
  cursor: pointer;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  transition: 0.5s;
  
  &:hover{
    color: ${({ theme }) => theme.color.mainText};
    };
  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    background-color: ${({ theme }) => theme.color.menuBackground}
  };
`;

export const ListOfMoviesComponent = styled.ul`
margin: 0;
text-align: center;
list-style: none;
padding: 0;
`;

export const Item = styled.li`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 5px;
  animation-name: rotateX;
  animation-duration: 0.5s;
  animation-timing-function: linear; 
  @keyframes rotateX {
    0% {
        opacity: 0;
        transform: rotateX(-90deg);
    }
    50% {
        transform: rotateX(-20deg);
    }
    100% {
        opacity: 1;
        transform: rotateX(0deg);
    };
};
  
  &:hover{
    color: ${({ theme }) => theme.color.hoverRed};
  };

  &&{
    ${({ hide }) => hide && css`{
  
    }`};
  };

  @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    background-color: ${({ theme }) => theme.color.menuBackground};
    border: 1px solid gray;
  };
`;

export const NoSearchResultMsg = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
@media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    background-color: ${({ theme }) => theme.color.menuBackground};
};
`;