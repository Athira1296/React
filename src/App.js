import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contacts";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import UserContext from "./utils/context/userContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery")); // Lazy loading

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => { 
    const [userName, setUserName] = useState("");

    // Some authentication logic
    useEffect(() => {
        // make API call to get user data
        const userName = "Athira";
        setUserName(userName);
    }, []);

    return(
        <div className="app">
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <Header />
                <Outlet />
            </UserContext.Provider>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurent/:id",
                element: <ResMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading</h1>}> 
                            <Grocery /> 
                        </Suspense> 
            }
        ]
    }
]);

root.render(<RouterProvider router={appRouter} />);

/**
 * Lazy loading
 * Code splitting
 * Chunking
 * On demand loading
 * Dynamic bundling
 * Dynamic import
 */



