import React from 'react';
import TopTitle from './TopTitle';

const Features = () => {
    return (
        <div>   
            <TopTitle title="Amazing Features" text="There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration, by injected humour, or new randomised words."/>
            <div>
                <FeaturesItem icon={<i class="fa fa-tachometer-alt"></i>} />
                <FeaturesItem icon={<i class="fa fa-chart-line"></i>} />
                <FeaturesItem icon={<i class="fa fa-bell"></i>} />
                <FeaturesItem icon={<i class="fa fa-hand-holding-usd"></i>} />
                <FeaturesItem icon={<i class="fa fa-rocket"></i>} />
                <FeaturesItem icon={<i class="fa fa-rocketchat"></i>} />
            </div>
        </div>
    )
};
const FeaturesItem = (props) => {
    return (
        <div className="features-item">
            <div className="features-icon">{props.icon}</div>
            <h4 className="features-title">{props.title}</h4>
            <p className="features-text">{props.text}</p>
        </div>
    );
};

export default Features;
