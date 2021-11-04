import React from "react";
import { useParams } from "react-router";

const Page = (props) => {

    const {input, colors, backgroundColors} = useParams()

    

    let numORword = true;
    if(isNaN(+input)){
        numORword = false;
    }

    const changeColor = {
        color: colors,
        backgroundColor: backgroundColors,
    };

    return (
        numORword ? <h1 className="display-1" style={ changeColor }>The number is: {input}</h1> : 
                <h1 className="display-1" style={ changeColor }>The word is: {input}</h1>
    )

};

export default Page;