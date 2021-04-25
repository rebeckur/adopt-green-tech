import React from 'react';
import rebeccaImg from '../res/rebecca.jpg';
import githubLogo from '../res/GitHub-Mark/PNG/GitHub-Mark-64px.png';
import linkedinLogo from '../res/LinkedIn-Logos/LI-In-Bug.png';

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
                <h4>Find me on these platforms!</h4>
                <div>
                    <a href="https://github.com/rebeckur" target="_blank" rel="noreferrer noopener" className="link">
                        <img src={githubLogo} alt="Github octocat logo" width="32vrm" align="left" class="logo"/>
                        <p>rebeckur</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/leungrebecca/" target="_blank" rel="noreferrer noopener" className="link">
                        <img src={linkedinLogo} alt="LinkedIn logo" width="32vrm" align="left" class="logo"/>
                        <p>Rebecca Leung</p>
                    </a>
                </div>
            </div>
        )
    }
}