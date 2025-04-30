import { MainLayout } from "../Layout/MainLayout/MainLayout";
import Home from "../Home/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PackageDetails from "../Component/PackageDetails/PackageDetails";
import Error from "../Component/Error404/Error";
import { PrivateRoute } from "./PrivateRoute";
import GuideDetails from "../Component/GuideDetails/GuideDetails";
import Community from "../Component/Community/Community";
import AboutUs from "../Pages/AboutUs";
import Trips from "../Pages/trips";
import PackDetails from "../Component/PackDetails/PackDetails";
import Dashboard from "../DashBoard/Dashboard";
import Manage_Profile from "../DashBoard/Tourist/Manage_Profile";
import AddStories from "../DashBoard/Tourist/AddStories";
import Manag_Stories from "../DashBoard/Tourist/Manag_Stories";
import JoinAsTourGuide from "../DashBoard/Tourist/JoinAsTourGuide";
import Bookings from "../DashBoard/Tourist/Bookings";
import PaymentPage from "../DashBoard/Tourist/PaymentPage";


const routes = [
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>,

        },

        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/packagedetails',
            element: <PackDetails></PackDetails>

        },

        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/packageDetails/:id',
            element: <PrivateRoute><PackageDetails></PackageDetails></PrivateRoute>,
            loader: () => fetch('https://assignment-12-server-five-ebon.vercel.app/tourpackages')
           
            
        },

        {
            path: '/guideDetails/:id',
            element: <GuideDetails></GuideDetails>,
            loader: () => fetch('../../public/Guides.json')
        },
        {

            path: '/community',
            element: <Community></Community>

        },

        {
            path: '/about',
            element: <AboutUs></AboutUs>,
        },

        {
            path: '/trips',
            element: <Trips></Trips>
        },

        {
            path: "*",
            element: <Error></Error>
        }
    ],


    
  },

//   dashboard routes

  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [

       {
        path:'/dashboard/tourist/manage-profile',
        element:<Manage_Profile></Manage_Profile>,
        loader: () => fetch('https://assignment-12-server-five-ebon.vercel.app/allusers')
        

        
        
       },
       
       {
        path: '/dashboard/add-stories',
        element: <AddStories></AddStories>

       },

       {
        path: '/dashboard/manage-stories',
        element: <Manag_Stories></Manag_Stories>
       },
       {
        path: '/dashboard/tourist/JoinTourGuide',
        element: <JoinAsTourGuide></JoinAsTourGuide>
       },
       {
        path: '/dashboard/tourist/my-bookings',
        element: <Bookings></Bookings>
       },

       {
        path: '/dashboard/payment',
        element: <PaymentPage></PaymentPage>
       },

       {
        path: '/dashboard/tourist/manage-stories',
        element: <Manag_Stories></Manag_Stories>
       },
       {
        path: '/dashboard/tourist/add-stories',
        element: <AddStories></AddStories>
       }

      

    ],
        
  }
];

export default routes;
