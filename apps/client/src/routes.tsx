import { createBrowserRouter } from 'react-router-dom'
import App from './pages/SPA/App';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ErrorPage from './pages/ErrorPage';



export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/:userId",
    element: <App/>,
  },
  {
    path: "/",
    element: <Login />,
    // loader: Loader,
   },
   {
    path: "*",
    element: <ErrorPage/>,
  },
]);
