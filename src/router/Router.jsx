import { createBrowserRouter } from "react-router-dom";

import MainLayout from '../layouts/MainLayout';
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
         
            {
                path: '/',
                element: <HomePage />
            }
        ]
    },
    {
        path: '/*',
        element: <ErrorPage />
    }
]);


export default Router
