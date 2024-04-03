import { createBrowserRouter } from "react-router-dom";

import MainLayout from '../layouts/MainLayout';
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import GalleryPage from "../pages/GalleryPage";
import PostsPage from "../pages/PostsPage";
import PlansPage from "../pages/PlansPage";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
         
            {
                path: '/',
                element: <HomePage /> 
            },         
            {
                path: '/gallery',
                element: <GalleryPage /> 
            },
            {
                path: '/posts',
                element: <PostsPage /> 
            },
            {
                path: '/plans',
                element: <PlansPage /> 
            },
        ]
    },
    {
        path: '/*',
        element: <ErrorPage />
    }
]);


export default Router;
