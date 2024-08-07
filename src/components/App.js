import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import appStore from '../../utils/appStore';
import UserContext from '../../utils/UserContext';
import Body from './Body';
import Cart from './Cart';
import Contact from './Contact';
import Error from './Error';
import Header from './Header';
import RestaurantMenu from './RestaurantMenu';

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
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
                <div className='app'>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);