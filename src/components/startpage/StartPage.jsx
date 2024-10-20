import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <StartButton type="button" onClick={goLogin}>Start</StartButton> 
    </TextWrapper>
    
  );
}

export default StartPage;


export const TextWrapper = styled.div`
padding: 20px; 
text-align: center;
justify-content: center;
/* background-color: rgba(255, 255, 255, 0.8);  */
 `

export const StartText = styled.p`
  font-family: 'Tangerine';
  text-shadow:4px 4px 4px #aaa;
  font-size: 24px;
  margin-bottom: 10px; 
`;

export const StartButton = styled.button`
width: 7em;
height:30px;
border-radius:25px;
/* background-color: #106c72; */
margin-top: 50%;
margin: 2%;
justify-content: center;
color: white;
  background-color: #ddc963;
box-shadow: 4px 4px 4px #aaa;
`;