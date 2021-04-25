import React from 'react';
import reduceImg from '../res/reduce.png';

export default class Reduce extends React.Component {
    render() {
        return(
            <div className="page">
                <img src={reduceImg} alt="Reduce typography graphic curtesy of rawpixel.com" width="100%" height="100%"/>
                <h1>Reduce</h1>
            </div>
        )
    }
}