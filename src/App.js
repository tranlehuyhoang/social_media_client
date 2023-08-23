import React from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyProfile from './pages/MyProfile';
import AuthPage from './pages/AuthPage';
import ChatRoom from './pages/ChatRoom';
import { useSelector } from 'react-redux';

function App() {
  const authData = useSelector((state) => state.authReducer.authData)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          authData ? <HomePage /> : <AuthPage />

        } />

        <Route path='/home' element={
          authData ? <HomePage /> : <AuthPage />

        } >
        </Route>
        <Route path='/profile' element={
          authData ? <MyProfile /> : <AuthPage />
        } >
        </Route>


        <Route path='/chat' element={
          authData ? <ChatRoom /> : <AuthPage />
        } >
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
