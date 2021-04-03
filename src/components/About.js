import React from 'react';
import TopTitle from './TopTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="about">
            <TopTitle title="Integrated solutions designed for small business" text="Communicate with flexible 
                            tools that go where your team goes."/>
            <div className="about-items-container">
                <AboutItem src="/images/main-service1.png" title="Designer" text="Curabitur quam etsum lacus netsum nulat iaculis 
                ets vitae etsum nisle varius sed aliquam ets vitae netsum." buttonText="Essentials for Designers"/>
                <AboutItem src="/images/main-service2.png" title="Marketers" text="Curabitur quam etsum lacus netsum nulat iaculis 
                ets vitae etsum nisle varius sed aliquam ets vitae netsum." buttonText="Essentials for Marketers"/>
                <AboutItem src="/images/main-service3.png" title="Agencies" text="Curabitur quam etsum lacus netsum nulat iaculis 
                ets vitae etsum nisle varius sed aliquam ets vitae netsum." buttonText="Essentials for Agencies"/>
            </div>
            <AboutChart />
        </div>
    )
};
const AboutItem = (props) => {
    return (
        <div className="about-item">
            <div className="about-image-container">
                <img src={props.src}></img>
            </div>
            <h3 className="about-item-title">{props.title}</h3>
            <p className="about-item-text">{props.text}</p>
            <button className="about-item-button">{props.buttonText}</button>
        </div>
    );
};
const AboutChart = (props) => {
    return (
        <div className="about-chart">
            <div className="about-chart-left">
                <AboutChartItem icon={<FontAwesomeIcon icon={faChartLine} />} title="Customize your workflow." text="
                    Manage any process and be ready to address any challenge with total ease."/>
                <AboutChartItem icon={<FontAwesomeIcon icon={faNetworkWired} />} title="Easy onboarding, fast adoption." text="
                    With Essentials getting your team on board is as simple as sending an email."/>
                <AboutChartItem icon={<FontAwesomeIcon icon={faRocket} />} title="Improve subscriber retention." text="
                    Analyze customers by region, discounts and more and put a plan in place to improve subscriber retention."/>
            </div>
            <div className="about-chart-right">
                <img src="/images/img0.png"></img>
            </div>
        </div>
    );
};
const AboutChartItem = (props) => {
    return (
        <div className="about-chart-item"> 
            <div className="chart-item-icon">{props.icon}</div>
            <div>
                <h4 className="chart-item-title">{props.title}</h4>
                <p className="chart-item-text">{props.text}</p>
            </div>
        </div>
    );
};

export default About;
