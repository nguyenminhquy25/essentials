import React from 'react';
import TopTitle from './TopTitle';

const Pricing = () => {
    return (
        <div className="pricing">
            <TopTitle title="Pricing for every business, at any stage" text="All pricing packages are backed up by 
                        a 30-day money back guarantee."/>
            <div className="pricing-items">
                <PricingItem title="BASIC" price="$25" expiryDate="Per Month" benefit={["Custom Charts", 
                        "5 Mailboxes, 10 Gb Storage", "Unlimited Free Dashboards", "Access to all APIs"]}/>
                <PricingItem title="STANDARD" price="$99" expiryDate="Per Month" benefit={["All Basic Features", 
                        "15 Mailboxes, 50 Gb Storage", "Interactive Screen Sharing", "Full Reports History"]}/>
                <PricingItem title="PRO" price="$199" expiryDate="Per Month" benefit={["All Standard Features", 
                        "50 Mailboxes, 90 Gb Storage", "Dedicated Account Manager", "24/7 Priority Support"]}/>
            </div>
        </div>  
    )
};
const PricingItem = (props) => {
    return (
        <div className="pricing-item">
            <h3>{props.title}</h3>
            <h1>{props.price}</h1>
            <p>{props.expiryDate}</p>
            <div className="pricing-benefits">
                <PricingBenefit benefit={props.benefit[0]}/>
                <PricingBenefit benefit={props.benefit[1]}/>
                <PricingBenefit benefit={props.benefit[2]}/>
                <PricingBenefit benefit={props.benefit[3]}/>
            </div> 
            <div className="pricing-button-container">
                <button className="pricing-item-button">FREE 15-DAY TRIAL</button>
            </div>
        </div>
    );
};
const PricingBenefit = (props) => {
    return (
        <>
            <div>
                <i className="fa fa-check"></i>
                <span>{props.benefit}</span>
            </div>
        </>
    );
};
export default Pricing;
