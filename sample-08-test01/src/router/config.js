import Home from "../pages/Home";
import OurTeam from "../pages/OurTeam";
import OurLocation from "../pages/OurLocation";

const jsonData = [
    {
      "path": "/",
      "component": Home,
      "name": "Home"
    },
    {
      "path": "/ourteam",
      "component": OurTeam,
      "name": "Our Products",
      "data": "New World"
    },
    {
      "path": "/ourlocation",
      "component": OurLocation,
      "name": "Our Location",
      "data": "Map"
    }
  ]

  export default jsonData;