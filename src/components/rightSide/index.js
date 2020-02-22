import React from 'react';
import RandomShape from "../RandomShape";

const RightSide = ({shape,right,weight}) => {
    return (
        <RandomShape shape={shape}  right={right} weight={weight}/>
    );
};


export default RightSide;