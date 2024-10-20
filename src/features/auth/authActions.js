import { setAccessToken, setLoading } from './authSlice';
import { BASE_URL } from '../../utils';

export const loginUser = (credentials) => async (dispatch) => {
   dispatch(setLoading(true)); // Start loading
   try {
     // correctly format the fetch request with headers inside the options object
     const response = await fetch(BASE_URL, {
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
     dispatch(setAccessToken(data.token)); // dispatch token to Redux
     return data.token;
    
   } catch (error) {
     console.error('Login error:', error);
     throw error;
   } finally {
     dispatch(setLoading(false)); 
   }
};
