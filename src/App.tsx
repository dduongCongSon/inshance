import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './page/home/Home';
import Inbox from './page/Inbox';
import Explore from './page/Explore';
import Profile from './page/Profile';
import PostDetails from "./components/profile/post/PostDetails.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/inbox' element={<Inbox/>}/>
                <Route path='/explore' element={<Explore/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path="post/:id" element={<PostDetails/>}/>
            </Routes>
        </Router>
    );
};

export default App;
