import React, { useEffect, useState } from 'react';
import https from '../api';

const OurTeam = (props) => {
    console.log(props.data);
    const [data, setData] = useState([]);

    useEffect(()=>{
      (async () => {
         try {
           let cardDetails = await https.get("products");
           setData(cardDetails.data);
         } catch (e) {
           console.error(e.message);
         }
       })();
    }, []);

    const cardDetails = data.map(target=>(
      <div key={target.id} className="card">
            <img alt="dummy" src={target.image}/>
            <h1>{target.category}</h1>
            <h5>{target.description}</h5>
            <p className="title">Price {target.price}</p>
            <p className="title">{target.title} followed with {target.rating.rate} & count {target.rating.count}</p>
      </div>
   ))

    return (
        <section className="layer1">
            <div className="vessel">
               <p className="h2">Our Products Section</p>
               {data !== [] ? cardDetails : <p>We dont have any product to display</p>}
            </div>
        </section>
    )
}

export default OurTeam;