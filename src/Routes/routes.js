import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from '../Form/Login';
import ProfileDetails from '../Dashboard/ProfileDetails';
import  geanologytree from '../Dashboard/Geanology';
import myearnings from '../Dashboard/MyEarnings';
import MemberDashboard from '../Dashboard/MemberDashboard';


const Layout = () =>{
    return();
}

const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
  
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ProductedRoutes>
              <HomeContent />
            </ProductedRoutes>
          ),
        },
        {
          path: "/jobs",
          element: (
            <ProductedRoutes>
             <JobListings />
            </ProductedRoutes>
          ),
        },
        {
          path: "/add-new-jobs",
          element: (
            <ProductedRoutes>
               <CreatingJobs />
            </ProductedRoutes>
          ),
        },
        {
          path: "/jobs-created",
          element: (
            <ProductedRoutes>
              <JobsListThatEmployer />
            </ProductedRoutes>
          ),
        },
      ],
    },
  ]);
  
  export default function BaseRoutes() {
    return <RouterProvider router={router} />;
  }