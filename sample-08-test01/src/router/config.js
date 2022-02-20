import Home from "../pages/Home";
import OurTeam from "../pages/OurTeam";
import OurMap from "../pages/OurTeam";

const jsonData = [
    {
      "path": "/",
      "component": Home,
      "name": "Home"
    },
    {
      "path": "/ourteam",
      "component": OurTeam,
      "name": "Our Team",
      "data": "New World"
    },
    {
      "path": "/map",
      "component": OurMap,
      "name": "Our Map",
      "data": "Map"
    }
  ]

  export default jsonData;