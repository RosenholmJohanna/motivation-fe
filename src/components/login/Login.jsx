import { useState } from "react";
import styled from 'styled-components';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
       const response = await fetch("https://motivation-be.onrender.com/login", {
       // const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(`Welcome, ${data.user.username}!`);
      } else {
        setMessage("Login failed: " + data.message);
      }
    } catch (error) {
      setMessage(error, "An error occurred during login.");
    }
  };

  return (
    <LoginContainer>
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <div className="mb-4">
          <input
          placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <input
          placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <LoginButton
            type="submit"
          >
            Log In
          </LoginButton>
        </div>
        {message && (
          <div className="mt-4 text-center text-red-500">{message}</div>
        )}
      </form>
      <RegisterLinkText>
          Register here if new to Motivational{" "}
         </RegisterLinkText>
    </LoginContainer>
  );
};

export default Login;

export const LoginButton=styled.button`
width: 15em;
height:40px;
border-radius:25px;
background-color: #f5008f;
margin-bottom: 5%;
margin-top: 10%;
justify-content: center;
color: white;
font-weight: 600;
font-size: 0.9em;
`

export const LoginContainer = styled.div`
color: white;
margin-top: 20%;
margin-bottom: 50%;
display: flex;
flex-direction: column;
justify-content: center;
 align-content: center; 
align-items: center;
text-align: center;
background-color: #1e1f28; 
//background-color: #98afc7;
margin-left: 15%;
margin-right: 20%;
padding: 5%;
border-radius: 25px;

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
`

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




// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../features/auth/authActions';
// //import { selectAccessToken } from '../features/auth/authSelectors';
// import { selectAccessToken } from '../../features/auth/authSlice';
// //import { login } from "../authSlice";

// const Login = () => {
//   const accessToken = useSelector(selectAccessToken);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(loginUser({ username, password })); 
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };


// useEffect(() => {
//   if (accessToken) {
//     navigate('/profile');
//   }
// }, [accessToken, navigate]);

//   return (
//     <LoginContainer>
//      <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <LoginButton type="submit">Login</LoginButton>
//     </form>
//     </LoginContainer>
//   );
// };

// export default Login;




// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
// import { LOGIN_URL } from "../utils";
// //import user from "../reducers/user";
// import { loginUser } from "../features/auth/authActions";

// const BASE_URL = (mode) => {
//   return mode === "login"
//     ? "http://localhost:8080/login"
//     : "http://localhost:8080/register";
// };

// const Login = () => {
//   //const accessToken = useSelector((store) => store.user.accessToken);
//   //const userId = useSelector((store) => store.user.id);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   //const [jwt, setJwt] = useState("");
//   const [mode, setMode] = useState("login");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   //   useEffect(() => {
//   //     if (accessToken) {
//   //       navigate(`/profile/${userId}`);
//   //   }}, [accessToken])

//   const onFormSubmit = (event) => {
//     event.preventDefault();
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username: username, password: password }),
//     };
//     fetch(BASE_URL(mode), options)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           console.log(data)
//           dispatch(user.actions.setUsername(data.response.username));
//           dispatch(user.actions.setJwt(data.response.jwt));
//           dispatch(user.actions.setError(null));
//           const persistedStateJSON = {
//             username: data.response.username,
//             jwt: data.response.jwt
//           };
//           localStorage.setItem(
//             "userReduxState",
//             JSON.stringify(persistedStateJSON),
//             console.log(localStorage.setItem)
//           );
//         } else {
//           dispatch(user.actions.setUsername(null));
//           dispatch(user.actions.setError(data.response));
//         }
//       });
//   };
//   return (
//     <>
//       <LoginContainer>
//         <LoginForm>
//           <Logintext>Log In</Logintext>
//           <LogintextSub>
//             Please log in with your username and password to visit Motivational
//           </LogintextSub>
//           <form onSubmit={onFormSubmit} onChange={() => setMode("login")}>
//             <label htmlFor="username">Username</label>
//             <input
//               required=""
//               type="username"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <label htmlFor="Password">Password</label>

//             <input
//               required=""
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <label htmlFor="login"></label>
//             <LoginButton>Submit</LoginButton>
//           </form>
//         </LoginForm>
//         <Link to="/register">
//           <RegisterLinkText>
//             Register here if new to Motivational{" "}
//           </RegisterLinkText>
//         </Link>
//       </LoginContainer>
//     </>
//   );
// };

// export default Login;

// export const LoginButton = styled.button`
//   width: 15em;
//   height: 40px;
//   border-radius: 25px;
//   background-color: #c4aead;
//   margin-bottom: 5%;
//   margin-top: 10%;
//   justify-content: center;
//   border: 0.5px solid white;
// `;

// export const LoginContainer = styled.div`
//   margin-top: 10%;
//   margin-bottom: 50%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   text-align: center;

//   @media (min-width: 768px) {
//     margin-bottom: 30%;
//   }

//   @media (min-width: 1024px) {
//     margin-top: 3%;
//     margin-bottom: 15%;
//   }

//   a {
//     text-decoration: none;
//     color: white;
//     text-decoration: none;
//   }
// `;


// export const Logintext = styled.h3`
//   margin: 2%;
// `;

// export const LogintextSub = styled.p`
//   font-weight: lighter;
//   margin-bottom: 5%;
// `;
