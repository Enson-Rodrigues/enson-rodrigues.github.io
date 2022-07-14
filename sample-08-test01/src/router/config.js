
import { lazy } from "react";

const Home = lazy(()=> import('../pages/Home'));
const OurTeam = lazy(()=> import('../pages/OurTeam'));
const OurLocation = lazy(()=> import('../pages/OurLocation'));
const ContactUs = lazy(()=> import('../pages/ContactUs'));
const Dashboard = lazy(()=> import('../pages/Dashboard'));

//import Home from "../pages/Home";
//import OurTeam from "../pages/OurTeam";
//import OurLocation from "../pages/OurLocation";


const jsonData = [
    {
      "path": "/",
      "component": Home,
      "name": "Home",
      "routeType": 'public'
    },
    {
      "path": "/ourteam",
      "component": OurTeam,
      "name": "Our Products",
      "routeType": 'public'
    },
    {
      "path": "/ourlocation",
      "component": OurLocation,
      "name": "Our Location",
      "routeType": 'public'
    },
    {
      "path": "/contactus",
      "component": ContactUs,
      "name": "Contact Us",
      "routeType": 'public'
    },
    {
      "path": "/dashboard",
      "component": Dashboard,
      "name": "Dashboard",
      "routeType": 'private'
    }
  ]

  export default jsonData;