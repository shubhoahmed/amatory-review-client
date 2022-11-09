import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main';
import AddServices from '../../pages/AddServices/AddServices';
import Blog from '../../pages/Blog/Blog';
import Home from '../../pages/Home/Home';
import Services from '../../pages/Home/Services';
import MyReviews from '../../pages/MyReviews/MyReviews';
import ServiceDetails from '../../pages/ServiceDetails/ServiceDetails';
import Login from '../../pages/Shared/Login/Login';
import SignUp from '../../pages/Shared/SignUp/SignUp';

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
                element: <Services></Services>
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
                element: <MyReviews></MyReviews>
            },
            {
                path: '/add-service',
                element: <AddServices></AddServices>
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