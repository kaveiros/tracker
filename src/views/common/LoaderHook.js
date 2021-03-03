import {Loader} from "rsuite";
import React from "react";

const LoaderHook = (props) => {

    const {message} = props

    return(
        <Loader backdrop center vertical size="md" content={message}/>
    )


}
export default LoaderHook
