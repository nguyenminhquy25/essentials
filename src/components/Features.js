import React, { useState, useEffect } from 'react';
import TopTitle from './TopTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <div className="features">   
            <TopTitle title="Amazing Features" text="There are many variations of passages of Lorem Ipsum available, but 
                the majority have suffered alteration, by injected humour, or new randomised words."/>
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
            <FeaturesCarousel />
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
const FeaturesCarousel = (props) => {
    const [featuresActiveSlide, setFeaturesActiveSlide] = useState(0);
    useEffect(() => {
        var slides = document.getElementsByClassName("features-carousel-item");
        var indexs = document.getElementsByClassName("features-carousel-index");
        for(let i = 0; i < slides.length; i++) {
            if(slides[i].classList.contains("features-active-slide")) {
                slides[i].classList.remove("features-active-slide");
                slides[(i + 1) % 3].classList.add("features-active-slide");
                indexs[i].classList.remove("features-active-index");
                indexs[(i + 1) % 3].classList.add("features-active-index");
                return;
            }  
        }
        slides[showcaseActiveSlide].classList.add("features-active-slide");
        indexs[featuresActiveSlide].classList.add("features-active-index");
    }, [featuresActiveSlide]);
    var nextSlide = () => {
        setFeaturesActiveSlide((featuresActiveSlide + 1) % 3);
    };
    var prevSlide = () => {
        setFeaturesActiveSlide((featuresActiveSlide + 2) % 3);
    }
    return (
        <div className="features-carousel">
            <FeaturesCarouselItem src="/images/testimonials1.jpg" text="The attention of a traveller, should be particularly 
                turned to the various works of nature, to mark the distinctions of the climates he may explore, and to
                offer such useful observations on the different productions as may occur." author="Jennifer Smith - Web Designer"/>
            <FeaturesCarouselItem src="/images/testimonials2.jpg" text="The attention of a traveller, should be particularly 
                turned to the various works of nature, to mark the distinctions of the climates he may explore, and to
                offer such useful observations on the different productions as may occur." author="John Doe - General Manager"/>
            <FeaturesCarouselItem src="/images/testimonials3.jpg" text="The attention of a traveller, should be particularly 
                turned to the various works of nature, to mark the distinctions of the climates he may explore, and to
                offer such useful observations on the different productions as may occur." author="Alexandra Smith - 
                App Magazine Editor"/>
            <div className="features-carousel-indexs">
                <div className="features-carousel-index"></div>
                <div className="features-carousel-index"></div>
                <div className="features-carousel-index"></div>
            </div>
            <button className="features-next-slide"><FontAwesomeIcon icon={faForward} /></button>
            <button className="features-prev-slide"><FontAwesomeIcon icon={faBackward} /></button>
        </div>
    );
};
const FeaturesCarouselItem = (props) => {
    return (
        <div className="features-carousel-item">
            <div className="features-carousel-image"><img src={props.src}></img></div>
            <div className="features-carousel-text">{props.text}</div>
            <div className="features-carousel-author">{props.author}</div>
        </div>
    );
};

export default Features;
