import React from 'react';
import "./index.css";

const TopController = ({win ,startGame,name,rightWeight,leftWeight,rightDistance, leftDistance}) => {
    return (
        <div className="controller">
            <div className="details"><p>Weight : {leftWeight}</p><p>Distance : {leftDistance}</p></div>
            <button className='btn btn-primary' onClick={startGame}>{name}</button>
    <div className="details"><p>Weight : {rightWeight}</p><p>Distance : {rightDistance}</p> <p>Wins : {win}</p></div>
        </div>
    );
};


export default TopController;