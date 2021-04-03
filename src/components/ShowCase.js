import React, { useState, useEffect } from 'react';
import TopTitle from './TopTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

const ShowCase = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    useEffect(() => {
        var slides = document.getElementsByClassName("showcase-items");
        var indexs = document.getElementsByClassName("index-slide");
        for(let i = 0; i < slides.length; i++) {
            if(slides[i].classList.contains("active-slide")) {
                slides[i].classList.remove("active-slide");
                slides[(i + 1) % 2].classList.add("active-slide");
                indexs[i].classList.remove("active-index");
                indexs[(i + 1) % 2].classList.add("active-index");
                return;
            }  
        }
        slides[activeSlide].classList.add("active-slide");
        indexs[activeSlide].classList.add("active-index");
    }, [activeSlide]);
    var changeSlide = () => {
        setActiveSlide((activeSlide + 1) % 2);
    };
    return (
        <div className="showcase">
            <div className="showcase-title">
                <TopTitle title="Explore Latest Projects" text="There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration, by injected humour, or new randomised words."/>
            </div>
            <div className="carousel">
                <div className="showcase-items">
                    <ShowCaseItem src="/images/showcase1.jpg"/>
                    <ShowCaseItem src="/images/showcase2.jpg"/>
                    <ShowCaseItem src="/images/showcase3.jpg"/>
                    <ShowCaseItem src="/images/showcase4.jpg"/>
                </div>
                <div className="showcase-items">
                    <ShowCaseItem src="/images/showcase5.jpg"/>
                    <ShowCaseItem src="/images/showcase6.jpg"/>
                    <ShowCaseItem src="/images/showcase7.jpg"/>
                    <ShowCaseItem src="/images/showcase8.jpg"/>
                </div>
                <button className="next-slide" onClick={changeSlide}><FontAwesomeIcon icon={faForward} /></button>
                <button className="prev-slide" onClick={changeSlide}><FontAwesomeIcon icon={faBackward} /></button>
            </div>
            <div className="index-slide-container">
                <div className="index-slide"></div>
                <div className="index-slide"></div>
            </div>
        </div>
    )
};
const ShowCaseItem = (props) => {
    return (
        <div className="showcase-item">
            <img src={props.src}></img>
        </div>
    );
};

export default ShowCase;
