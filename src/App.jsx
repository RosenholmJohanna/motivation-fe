import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';
import StartPage from './pages/StartPage';
import Login from './pages/Login'
import './App.css'

const reducer = combineReducers({
  user: user.reducer,
});
const store = configureStore({reducer});

function App() {
  

  return (
    <BrowserRouter>
    <Provider store={store}>
        <Routes>
          <Route path='/' element={<StartPage/>}></Route>
          <Route path='/login' element={<Login/>}></Route> 
        </Routes>
    </Provider>
  </BrowserRouter>
  )
}

export default App
