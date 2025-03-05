import styled from "styled-components";
import SubNavBar from "./SubNavbar";
import Avatar from "../avatar/AvatarStyled";
import { mockUsers } from "../../mockData/mockUser";

const user = mockUsers[1];

export const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderText>M</HeaderText>
        <AvatarContainer>
        <UserName>{user.name}</UserName>
          <Avatar src={user.avatar} alt={user.name} />
        </AvatarContainer>
      </HeaderContainer>
      <SubNavBar isLoggedIn={true} />
    </div>
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

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  margin-right: 5px; 
  font-size: 0.9rem;
  color: #f9ddf1fd;
`;