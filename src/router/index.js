import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages';
import {Layout} from '../components/'
import { homePageLoader } from '../services/homePageLoader';

export const router = createBrowserRouter([
 {
   element: <Layout/>,
   children: [
     {
       index: true,
       element:<Home/>,
       loader: homePageLoader,
     },
     {
       path: "/*",
       element: <Home/>,
     }
   ]
 }
])