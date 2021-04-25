import React from 'react';
import reuseImg from '../res/reuse.png';

export default class Reuse extends React.Component {
    render() {
        return(
            <div className="page">
                <img src={reuseImg} alt="Reuse typography graphic curtesy of rawpixel.com" width="100%" height="100%"/>
                <h1>Reuse</h1>

                <p>There are many ways you can reuse techonology to be sustainble!</p>
                <p>Here are some quick tips:</p>
                <ul>
                    <li>Consider purchasing refurbished devices. Many times, refurbished devices have had previous owners
                        and are fixed to work as if it was brand new. Plus, you can also save some money by purchasing refurbished devices!
                    </li>
                    <li>When possible, replace the faulty parts of the device and reuse parts you already have.</li>
                    <li>When purchasing peripherals such as monitors, mice, and keyboards, consider purchasing ones that could
                        be used by many different devices. For mice and keyboards, I personally recommend getting a <a href="https://www.logitech.com/en-us/products/mice/mx-master-3.910-005620.html" 
                        target="_blank" rel="noreferrer noopener">Logitech MX Master</a> mouse and a <a href="https://www.keychron.com/" target="_blank" rel="noreferrer noopener">Keychron</a> mechanical 
                        keyboard since these peripherals can be used for both PCs and Macs.
                    </li>
                    <li>Donate or sell your old but functional devices.</li>
                    <ul>
                        <li>
                            The <a href="https://worldcomputerexchange.org/" target="_blank" rel="noreferrer noopener">World Computer Exchange</a> is an organization
                            working to diminish the digital divide in developing countries and promote the reuse of electronics.
                        </li>
                        <li><a href="https://charity.ebay.com/" target="_blank" rel="noreferrer noopener">eBay for Charity</a> allows you to sell your used devices and donate some or all of the proceeds to a charity of your choice.</li>
                        <li>
                            Dell Reconnect is a partnership with Goodwill, and you can donate your devices to any Goodwill location.
                        </li>
                    </ul>
                </ul>
            </div>
        )
    }
}