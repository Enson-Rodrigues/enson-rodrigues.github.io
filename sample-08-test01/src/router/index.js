// Router Page
import { Suspense } from "react";
import {
  Route, Routes, BrowserRouter, useLocation 
} from "react-router-dom";
import Header from '../pages/Header';
import jsonData from "./config";

const configRoute = jsonData;
  
const CustomRouter = (props) => {
  console.log("router data");
  console.log(props.data);
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header/>
        <Suspense fallback={<>Loading... </>}>
          <Routes>
            {
              configRoute.map(({path, component: MapComponent, data, routeType}, key) =>  {
                switch (routeType) {
                  case 'private':
                    console.log("private routes");
                    return (
                      <Route 
                        key={key}
                        path={path} 
                        element={<MapComponent data={props.data} /> }
                      />
                    )
                  case 'public':
                    console.log("public routes");
                    return (
                      <Route 
                        key={key}
                        path={path} 
                        element={<MapComponent data={props.data} /> }
                      />
                    )
                }
              })
            }
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default CustomRouter;
  