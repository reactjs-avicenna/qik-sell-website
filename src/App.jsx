import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import Category from './Pages/Category';
import ProductView from './Pages/ProductView';
import Chat from './Pages/Chat';

export default function App() {
  // const RequireAuth = ({ children }) => {
  //   const currentUser = localStorage.getItem('token');
  //   return currentUser?.length > 0 && currentUser !== undefined ? children : <Navigate to='/' />;
  // };
  // const RequireAuthhome = ({ children }) => {
  //   const currentUser = localStorage.getItem('token');
  //   if (currentUser) {
  //     return <Navigate to="/dashboard" />;
  //   }
  //   return children;
  // };
  
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/category" element={<Category/>}/>
    <Route path="/productView" element={<ProductView/>}/>
    <Route path="/chat" element={<Chat/>}/>
    </Routes>
    </Router>
    <Toaster
    position="bottom-right"
    reverseOrder={false}
    gutter={8}
    containerClassName=""
    containerStyle={{}}
    toastOptions={{
     
      className: '',
      duration: 5000,
      style: {
        background: '#363636',
        color: '#fff',
      },
  
 
      success: {
        duration: 3000,
        theme: {
          primary: 'green',
          secondary: 'black',
        },
      },
    }}
  />
    </>
  )
}
