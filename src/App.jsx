import './App.css'
import React from 'react'


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from './Layout';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
import Items from './pages/Items';
import Pages from './pages/Pages';
import About from './pages/About';
import Contact from './pages/Contact';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
         <Route index element={<Home />}></Route>
         <Route path="/registration" element={<Registration />}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/about" element={<About />}></Route>
         <Route path="/items" element={<Items />}></Route>
         <Route path="/pages" element={<Pages />}></Route>
         <Route path="/contact" element={<Contact />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App