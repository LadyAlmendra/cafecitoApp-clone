import { createBrowserRouter } from "react-router-dom";

import MainLayout from '../layouts/MainLayout';

import HomePage from "../pages/User/HomePage";
import GalleryPage from "../pages/User/GalleryPage";
import PostsPage from "../pages/User/PostsPage";
import PlansPage from "../pages/User/PlansPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import DashboardPage from "../pages/User/DashboardPage";
import ChooseUserNamePage from "../pages/User/ChooseUserNamePage";

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
        path: '/dashboard',
        element: <DashboardPage />
    },
    {
        path: '/chooseUserName',
        element: <ChooseUserNamePage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/sign-up',
        element: <SignUpPage />
    },
    {
        path: '/*',
        element: <ErrorPage />
    },

]);


export default Router;
