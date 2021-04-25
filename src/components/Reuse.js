import React from 'react';
import reuseImg from '../res/reuse.png';

export default class Reuse extends React.Component {
    render() {
        return(
            <div className="page">
                <img src={reuseImg} alt="Reuse typography graphic curtesy of rawpixel.com" width="100%" height="100%"/>
                <h1>Reuse</h1>
            </div>
        )
    }
}