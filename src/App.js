import { RouterProvider } from 'react-router-dom'
import './App.css';
import router from './Routes/Route/Route';
import 'react-photo-view/dist/react-photo-view.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
