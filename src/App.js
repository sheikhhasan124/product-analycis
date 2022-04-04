import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './component/about/About';
import Blogs from './component/blogs/Blogs';
import Dashbord from './component/dashbord/Dashbord';
import Header from './component/header/Header';
import Home from './component/home/Home';
import NotFound from './component/NotFound/NotFound';
import Reviews from './component/reviews/Reviews';
import  './App.css'

const App = () => {
    return (
        <div className='total-shop'>
            <Header></Header>
           <Routes>
               <Route path="/" element={<Home></Home>}></Route>
               <Route path="/home" element={<Home></Home>}></Route>
               <Route path="/reviews" element={<Reviews></Reviews>}></Route>
               <Route path="/dashbord" element={<Dashbord></Dashbord>}></Route>
               <Route path="/blogs" element={<Blogs></Blogs>}></Route>
               <Route path="/about" element={<About></About>}></Route>
               <Route path="*" element={<NotFound></NotFound>}></Route>
           </Routes>
        </div>
    );
};

export default App;