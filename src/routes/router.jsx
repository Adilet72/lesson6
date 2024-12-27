import HomePage from "../pages/home-page/HomePage.jsx";

export const routes = [
    {
        path: '/',
        name: 'Home',
        element: <HomePage/>,
    },
    {
        path: '/cart',
        name: 'cart',
        element: <h1>cart Page</h1>,
    },
    {
        path: '/',
        name: '',
        element: <h1>Not Found Page 404</h1>,
    },
]