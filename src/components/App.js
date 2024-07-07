import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './Contact';
import Error from './Error';
import RestaurantMenu from './RestaurantMenu';
import UserContext from '../../utils/UserContext';

const Grocery = lazy(() => import('./Grocery'));
const About = lazy(() => import('./About'))

const AppLayout = () => {

    const [userName, setuserName] = useState();

    useEffect(() => {
        const data = {
            name: "Vishal Mali",
        }
        setuserName(data.name)
    }, []);

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
            <div className='app'>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);