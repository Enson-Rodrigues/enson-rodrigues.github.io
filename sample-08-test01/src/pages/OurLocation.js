import React from 'react';

const OurLocation = (props) => {
    console.log("location page");
    console.log(props.data);

    return (
        <section className="layer1">
            <div className="vessel">
                <p className="h2">Our Location Section</p>
            </div>
        </section>
    )
}

export default OurLocation;