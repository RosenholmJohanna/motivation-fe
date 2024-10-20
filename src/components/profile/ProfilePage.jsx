import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { selectAccessToken } from '../../features/auth/authSelectors';

const ProfilePage = () => {
    const [loading, setLoading] = useState(true);
    const accessToken = useSelector(selectAccessToken);
  
    useEffect(() => {
      if (accessToken) {
        setLoading(false); //  stop loading if token available
      }
    }, [accessToken]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        {accessToken ? (
          <p>Token: {accessToken}</p>
        ) : (
          <p>Not logged in</p>
        )}
      </div>
    );
  };
  

export default ProfilePage;



// import React from "react";
// import { useSelector } from "react-redux";
// import { selectAccessToken } from "../../features/auth/authSelectors";

// const ProfilePage = () => {
//     //const accessToken = useSelector((state) => state.auth.accessToken);
//     const accessToken = useSelector(selectAccessToken);
//     const state = useSelector((state) => state); 

//     console.log("Current Redux State: ", state);
    
//     return (
//         <>
//         <h1>My profile</h1>
//         <p>Your Access Token: {accessToken}</p>;
//         </>
//     )
// }

// export default ProfilePage;