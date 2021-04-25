import React from 'react';
import recycleImg from '../res/recycle.png'

export default class Recycle extends React.Component {
    render() {
        return(
            <div className="page">
                <img src={recycleImg} alt="Recycle graphic curtesy of rawpixel.com" width="100%" height="100%"/>
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
                    <h3>Tech Firm Programs</h3>
                    <ul>
                        <li>
                            Through Apple's <a href="https://www.apple.com/shop/trade-in" target="_blank" rel="noreferrer noopener">Trade In program</a>, you can give your device a second life 
                            where it is either recycled for free or passed on to another owner. In return, you have the option to receive an Apple Gift Card or credit towards your next purchase. 
                            Consumers are able to exchange iPhone, iPads, and Android devices through the Trade In program.
                        </li>
                        <li>
                            Trade in a qualifying phone through <a href="https://www.amazon.com/Trade-In/b?ie=UTF8&node=9187220011" target="_blank" rel="noreferrer noopener">Amazon</a> in 
                            exchange for gift cards. Amazon accepts phones from the following manufacturers:
                            <ul>
                                <li>Apple</li>
                                <li>Google</li>
                                <li>LG</li>
                                <li>Motorola</li>
                                <li>Samsung</li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
                <br />
                <div id="laptops-computers">
                    <h2>Laptops and Computers</h2>
                    <h3>Tech Firm Programs</h3>
                    <ul>
                        <li>
                            Apple's <a href="https://www.apple.com/shop/trade-in" target="_blank" rel="noreferrer noopener">Trade In program</a> allows you to give your device a second life 
                            where it is either recycled for free or passed on to another owner. In return, you have the option to receive an Apple Gift Card or credit towards your next purchase. 
                            Macs are eligible to be exchanged for Apple credit, however other laptops and computers are not but will still get recycled for free.
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}