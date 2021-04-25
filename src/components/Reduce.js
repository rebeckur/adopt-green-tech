import React from 'react';
import reduceImg from '../res/reduce.png';

export default class Reduce extends React.Component {
    render() {
        return(
            <div className="page">
                <img src={reduceImg} alt="Reduce typography graphic curtesy of rawpixel.com" width="100%" height="100%"/>
                <h1>Reduce</h1>
                <p>There are many ways you can reduce the consumption of techonology!</p>
                <p>Here are some quick tips:</p>
                <ul>
                    <li>Try not to buy a new device every year if the device you currently have is still functional.</li>
                    <ul>
                        <li>
                            Upgrade your phone after at least 3-4 years, depending on its ability to receive software updates. As tempting as it is, try to avoid upgrading your devices every year.
                        </li>

                        <li>
                            Protect your device with a case and a screen protector to extend your device's lifetime.
                        </li>
                    </ul>
                    <li>When possible, replace the faulty parts of the device instead of replacing and purchasing an entirely new device.</li>
                    <ul>
                        <li>
                            If the only problem with an older phone is battery life, consider getting the battery replaced
                            rather than replacing the entire phone.
                            <ul>
                                <li>
                                    Apple replaces some <a href="https://support.apple.com/iphone/repair/service/battery-power" target="_blank" rel="noreferrer noopener">iPhone batteries</a> for 
                                    free if you are enrolled in AppleCare+, otherwise the replacement cost is less than buying an entirely new phone.
                                </li>
                                <li>
                                    Consider Third-Party authorized repair partners to replace phone parts.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Consider purchasing hardware such as SSDs and RAM that can extend the lifetime of your computer.
                        </li>
                    </ul>
                </ul>

            </div>
        )
    }
}