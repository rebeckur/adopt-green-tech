import React from 'react';

export default class Recycle extends React.Component {
    render() {
        return(
            <div className="page">
                <h1>Recycle</h1>
                <br />
                <div id="batteries">
                    <h2>Batteries</h2>
                    <p> You can recycle your old single-use and rechargeable batteries! 
                        Find a local battery recycle center with <a href="https://www.call2recycle.org/locator/">Call2Recycle</a>.</p>
                    <p>In addition, some states have special recycling laws -- be sure to double check with your local requirements before disposing your batteries. 
                        Call2Recycle also has a <a href="https://www.call2recycle.org/recycling-laws-by-state/">resource</a> for learning more about each state's recycling laws.</p>
                </div>
                <br />
                <div id="phones">
                    <h2>Phones</h2>
                </div>
                <br />
                <div id="laptops-computers">
                    <h2>Laptops and Computers</h2>
                </div>
            </div>
        )
    }
}