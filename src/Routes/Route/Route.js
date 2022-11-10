import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main';
import AddServices from '../../pages/AddServices/AddServices';
import AllServices from '../../pages/AllServices/AllServices';
import Blog from '../../pages/Blog/Blog';
import Home from '../../pages/Home/Home';
import Services from '../../pages/Home/Services';
import MyReviews from '../../pages/MyReviews/MyReviews';
import ServiceDetails from '../../pages/ServiceDetails/ServiceDetails';
import Login from '../../pages/Shared/Login/Login';
import SignUp from '../../pages/Shared/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute>
                    <MyReviews></MyReviews>
                </PrivateRoute>
            },
            {
                path: '/add-service',
                element: <PrivateRoute>
                    <AddServices></AddServices>
                </PrivateRoute>
            },
            {
                path: '*',
                element: <div>
                    <h1 className="text-center">This routes are not found:: 404 </h1>
                </div>
            },

        ]
    }
]);

export default router;