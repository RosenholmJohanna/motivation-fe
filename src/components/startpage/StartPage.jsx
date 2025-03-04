// import React, { useEffect } from "react";
// import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginButton } from "../login/Login";

const StartPage = () => {
//   const accessToken = useSelector((store) => store.user.accessToken);
//   const userId = useSelector((store) => store.user.id)
  const navigate = useNavigate();
  
//   useEffect(() => {
//     if (accessToken) {
//       navigate(`/profile/${userId}`);
//     }
//   }, [accessToken])

  const goLogin = () => {
    navigate("/Login")
  }

  return (
    <TextWrapper> 
      <StartText>Let yor motivational balance decide what to do!</StartText>
      <LoginButton type="button" onClick={goLogin}>Start</LoginButton> 
    </TextWrapper>
    
  );
}

export default StartPage;


export const TextWrapper = styled.div`
margin-top: 20%;
padding: 20px; 
text-align: center;
justify-content: center;
/* background-color: rgba(255, 255, 255, 0.8);  */
 `

export const StartText = styled.p`
  text-shadow:0.4px 1px 1px #e95bb3;
  font-size: 1.5rem;
  font-weight: 200;
`;
