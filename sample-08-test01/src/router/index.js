// Router Page
import { Suspense } from "react";
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
        <Suspense fallback={<></>}>
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
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default CustomRouter;
  