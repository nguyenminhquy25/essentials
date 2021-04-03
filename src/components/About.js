import React from 'react';
import TopTitle from './TopTitle';

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


export default About;
