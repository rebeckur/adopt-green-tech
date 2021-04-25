import React from 'react';
import rebeccaImg from '../res/rebecca.jpg';

export default class AboutUs extends React.Component {
    render() {
        return(
            <div className="page">
                <h1>About Us</h1>
                <div class="square">
                    <img src={rebeccaImg} alt="Photo of girl in front of cherry blossom tree" width="40%" align="left" class="rounded-corners"/>
                    <p>Rebecca Leung is a fourth-year Computer Science major at UC Irvine. She is passionate about saving the environment 
                        and being a mindful consumer of technology and electronics. In her free time, she enjoys raising her pothos and cooking.</p>
                </div>
            </div>
        )
    }
}