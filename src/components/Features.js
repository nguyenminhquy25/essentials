import React from 'react';
import TopTitle from './TopTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <div className="features">   
            <TopTitle title="Amazing Features" text="There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration, by injected humour, or new randomised words."/>
            <div className="features-items">   
                <FeaturesItem icon={<FontAwesomeIcon icon={faTachometerAlt} />} title="Powerful Dashboard" text="
                    Utise wisi enim minim veniam, quis et stationes ullamcorper suscipit ets lobotis nisle 
                    consequat nihis etim." />
                <FeaturesItem icon={<FontAwesomeIcon icon={faChartLine} />} title="User Friendly" text="
                    Utise wisi enim minim veniam, quis et stationes ullamcorper suscipit ets lobotis nisle 
                    consequat nihis etim." />
                <FeaturesItem icon={<FontAwesomeIcon icon={faBell} />} title="Smart Notifications" text="
                    Utise wisi enim minim veniam, quis et stationes ullamcorper suscipit ets lobotis nisle 
                    consequat nihis etim." />
                <FeaturesItem icon={<FontAwesomeIcon icon={faHandHoldingUsd} />} title="Cost Control" text="
                    Utise wisi enim minim veniam, quis et stationes ullamcorper suscipit ets lobotis nisle 
                    consequat nihis etim." />
                <FeaturesItem icon={<FontAwesomeIcon icon={faRocket} />} title="Unique Features" text="
                    Utise wisi enim minim veniam, quis et stationes ullamcorper suscipit ets lobotis nisle 
                    consequat nihis etim." />
                <FeaturesItem icon={<FontAwesomeIcon icon={faComment} />} title="Support 24/7" text="
                    Utise wisi enim minim veniam, quis et stationes ullamcorper suscipit ets lobotis nisle 
                    consequat nihis etim." />
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
