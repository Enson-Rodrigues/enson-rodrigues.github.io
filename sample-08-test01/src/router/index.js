// Router Page
import {
  Route, Routes, BrowserRouter
} from "react-router-dom";  
import Header from '../pages/Header';

import jsonData from "./config";
const configRoute = jsonData;
  
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
  