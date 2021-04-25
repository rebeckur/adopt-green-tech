import React from 'react';
import greenImg from '../res/green.png'

export default class Home extends React.Component {
    render() {
        return(
            <div className="page">
                <img src={greenImg} alt="Green graphic curtesy of rawpixel.com" width="100%" height="100%"/>

                <h1>Adopt Green Tech</h1>
                <p>Let's save the planet one device at a time. Explore the different actions you can take to be a sustainable technology consumer.</p>

                <br />
                <h2>Did you know?</h2>
                <p>Climate change is a big issue affecting our planet. Companies and consumers play a role in pollution and protection of our environment.</p>
                
                <h3>What are companies doing?</h3>
                <p>
                Companies play an enormous role in climate change and pollution.
                Some tech companies such as <a href="https://www.apple.com/environment/" target="_blank" rel="noreferrer noopener">Apple</a>, <a 
                href="https://www.microsoft.com/en-us/corporate-responsibility/sustainability" target="_blank" rel="noreferrer noopener">Microsoft</a>, and <a href="https://sustainability.google/" target="_blank" rel="noreferrer noopener">Google</a> have 
                been carbon neutral for years now and pledge to do more to be sustainble and save our environment.
                For a business or individual to be carbon neutral, their actions result in a zero net release of carbon dioxide to the atmosphere. 
                Microsoft is even taking a step further; they announced in <a href="https://news.microsoft.com/climate/#january-carbon-announcement">January 2020</a> that 
                the company will be carbon negative by 2030, which means their actions will remove carbon dioxide from the atmosphere.
                 
                </p>

                <h3>How can I be a sustainable tech consumer?</h3>
                <p>Reduce, Reuse, Recycle! Learn more about the different ways you can reduce, reuse, and recycle your tech.</p>
                
            </div>
        )
    }
}