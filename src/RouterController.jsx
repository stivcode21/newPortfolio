import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from './pages/Feed';
import About from './pages/About';
import Projects from './pages/Projects';
import Guestbook from './pages/Guestbook';

const RouterController = () => {
    const routes = [
        { path: "/", element: <Feed /> },
        { path: "/feed", element: <Feed /> },
        { path: "/about", element: <About /> },
        { path: "/projects", element: <Projects /> },
        { path: "/guestbook", element: <Guestbook /> },
    ];

    return (
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
        </Router>
    );
};

export default RouterController;