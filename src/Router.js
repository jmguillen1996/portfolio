import { createBrowserRouter } from 'react-router-dom';
import Home from './Routes/Home';
import Project from './Routes/Project';

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/project", element: <Project /> }
]);