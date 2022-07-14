//Base page should be clean 
import './sass/page.scss';
import CustomRouter from './router';


import React, { useEffect, useState } from 'react';
import https from './api';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    (async () => {
       try {
         let cardDetails = await https.get("product");
         setData(cardDetails.data);
       } catch (e) {
          throw new Error(e.message);
       }
     })();
  }, [data]);

  return (
    <>
        {data.length > 0 && console.log("app")}
        {data.length > 0 && console.log(data)}
        {<CustomRouter data={data}></CustomRouter>}
    </>
  );
}

export default App;
