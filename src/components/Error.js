// import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return(
        <div className="show-error">
            <h3>the page you are looking for is not found!</h3>
            ||
            {/* <h4>{err.status}:{err.statusText}</h4> */}
            <h2>Restaurant details are not yet updated</h2>
        </div>
    )
}

export default Error;