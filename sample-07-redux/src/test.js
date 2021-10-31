import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
    const value = useSelector(state=> state.Counter);
    return (
        <>
          hello {value}
        </>
    )
}

export default Test;