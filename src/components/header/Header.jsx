import styled from "styled-components";


export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderText>M</HeaderText>
      </HeaderContainer>
    </>
  ) 
}



const HeaderContainer = styled.header`
text-align: center;
display: flex;  
justify-content: space-between; 
align-items: center; 
border-bottom: 1px solid white;

  @media (min-width: 768px) {
    margin-left: 1%;
    margin-right: 1%;
  } 

  @media (min-width: 1024px) {
    margin-left: 1%;
    margin-right: 1%;
  } 
`
export const HeaderText = styled.h1`
font-weight: lighter;


  @media (min-width: 768px) {
    margin-right: 20%;
  } 

  @media (min-width: 1024px) {
    margin-right: 40%;
  } 
`