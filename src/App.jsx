import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import store from './store';
import StartPage from './components/startpage/StartPage';
import ProfilePage from './components/profile/ProfilePage';
import Login from './components/login/Login';
import './App.css'

// const reducer = combineReducers({
//   user: user.reducer,
// });
// const store = configureStore({reducer});

function App() {
  

  return (
    <BrowserRouter>
    <Provider store={store}>
        <Routes>
          <Route path='/' element={<StartPage/>}></Route>
          <Route path='/login' element={<Login/>}></Route> 
          <Route path='/profile' element={<ProfilePage/>}></Route>
        </Routes>
    </Provider>
  </BrowserRouter>
  )
}

export default App
