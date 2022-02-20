// Router Page
import {
  Route, Routes, BrowserRouter
} from "react-router-dom";  
import Header from '../pages/Header';
import Home from "../pages/Home";
import OurTeam from "../pages/OurTeam";

/*import data from "./config.json";
const configRoute = data;*/
const configRoute = [
  {
    path: '/',
    component: Home,
    name: "Home"
  },
  {
    path: '/ourteam',
    component: OurTeam,
    name: "Test",
    data: "New World"
  }
]
  
const CustomRouter = (props) => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header/>

        <Routes>
          {
            configRoute.map(
              ({path, component: MapComponent, data}, key) => 
                <Route 
                  key={key}
                  path={path} 
                  element={<MapComponent data={data} /> }
                />
            )
          }

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default CustomRouter;
  