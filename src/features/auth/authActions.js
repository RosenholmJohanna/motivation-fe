import { setAccessToken, setLoading } from './authSlice';
 //import { BASE_URL } from '../../utils';

 const BACKEND_URL = "https://motivation-be.onrender.com"; 

export const loginUser = (credentials) => async (dispatch) => {
   dispatch(setLoading(true)); 
   try {
    // const response = await fetch(BASE_URL, {
    //  const response = await fetch("https://motivation-be.onrender.com/login", {
      const response = await fetch(`${BACKEND_URL}/login`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(credentials),
     });

     if (!response.ok) {
       throw new Error('Login failed!');
     }

     const data = await response.json();
     console.log(data)
     dispatch(setAccessToken(data.token)); 
     return data.token;
    
   } catch (error) {
     console.error('Login error:', error);
     throw error;
   } finally {
     dispatch(setLoading(false)); 
   }
};
