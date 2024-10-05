import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { LOGIN_URL } from "../utils";
import user from "../reducers/user";

const BASE_URL = (mode) => {
  return mode === "login"
    ? "http://localhost:8080/login"
    : "http://localhost:8080/register";
};

const Login = () => {
  //const accessToken = useSelector((store) => store.user.accessToken);
  //const userId = useSelector((store) => store.user.id);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (accessToken) {
  //       navigate(`/profile/${userId}`);
  //   }}, [accessToken])

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    };
    fetch(BASE_URL(mode), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setError(null));
          const persistedStateJSON = {
            username: data.response.username,
          };
          localStorage.setItem(
            "userReduxState",
            JSON.stringify(persistedStateJSON)
          );
        } else {
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setError(data.response));
        }
      });
  };
  return (
    <>
      <LoginContainer>
        <LoginForm>
          <Logintext>Log In</Logintext>
          <LogintextSub>
            Please log in with your username and password to visit Motivational
          </LogintextSub>
          <form onSubmit={onFormSubmit} onChange={() => setMode("login")}>
            <label htmlFor="username">Username</label>
            <input
              required=""
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="Password">Password</label>

            <input
              required=""
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="login"></label>
            <LoginButton>Submit</LoginButton>
          </form>
        </LoginForm>
        <Link to="/register">
          <RegisterLinkText>
            Register here if new to Motivational{" "}
          </RegisterLinkText>
        </Link>
      </LoginContainer>
    </>
  );
};

export default Login;

export const LoginButton = styled.button`
  width: 15em;
  height: 40px;
  border-radius: 25px;
  background-color: #c4aead;
  margin-bottom: 5%;
  margin-top: 10%;
  justify-content: center;
  border: 0.5px solid white;
`;

export const RegisterLinkText = styled.p`
  margin-top: 3%;
  color: #f0f6fc;
  text-decoration: underline;
  a {
    text-decoration: none;
    color: white;
    text-decoration: none;
  }
`;

export const LoginContainer = styled.div`
  margin-top: 10%;
  margin-bottom: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 30%;
  }

  @media (min-width: 1024px) {
    margin-top: 3%;
    margin-bottom: 15%;
  }

  a {
    text-decoration: none;
    color: white;
    text-decoration: none;
  }
`;

export const LoginForm = styled.div`
  justify-content: center;
  margin-top: 30%;
  flex-direction: column;
  width: 80%;
  padding: 2%;
  background-color: #98afc7;
  border-radius: 5%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (min-width: 768) {
    margin-top: 10%;
    width: 15%;
    flex-direction: flex-wrap;
  }

  @media (min-width: 1024px) {
    margin-top: 5%;
    width: 40%;
    flex-direction: flex-wrap;
  }
`;
export const Logintext = styled.h3`
  margin: 2%;
`;

export const LogintextSub = styled.p`
  font-weight: lighter;
  margin-bottom: 5%;
`;
