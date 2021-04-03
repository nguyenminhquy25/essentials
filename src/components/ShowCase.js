import React, { useState, useEffect } from 'react';
import TopTitle from './TopTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

const ShowCase = () => {
    const [showcaseActiveSlide, setShowcaseActiveSlide] = useState(0);
    useEffect(() => {
        var slides = document.getElementsByClassName("showcase-items");
        var indexs = document.getElementsByClassName("showcase-index-slide");
        for(let i = 0; i < slides.length; i++) {
            if(slides[i].classList.contains("showcase-active-slide")) {
                slides[i].classList.remove("showcase-active-slide");
                slides[(i + 1) % 2].classList.add("showcase-active-slide");
                indexs[i].classList.remove("showcase-active-index");
                indexs[(i + 1) % 2].classList.add("showcase-active-index");
                return;
            }  
        }
        slides[showcaseActiveSlide].classList.add("showcase-active-slide");
        indexs[showcaseActiveSlide].classList.add("showcase-active-index");
    }, [showcaseActiveSlide]);
    var changeSlide = () => {
        setShowcaseActiveSlide((showcaseActiveSlide + 1) % 2);
    };
    return (
        <div className="showcase">
            <div className="showcase-title">
                <TopTitle title="Explore Latest Projects" text="There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration, by injected humour, or new randomised words."/>
            </div>
            <ShowcaseCarousel changeSlide={changeSlide}/>
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
const ShowcaseCarousel = (props) => {
    return (
        <>
            <div className="showcase-carousel">
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
                <button className="showcase-next-slide" onClick={props.changeSlide}><FontAwesomeIcon icon={faForward} /></button>
                <button className="showcase-prev-slide" onClick={props.changeSlide}><FontAwesomeIcon icon={faBackward} /></button>
            </div>
            <div className="showcase-index-container">
                <div className="showcase-index-slide"></div>
                <div className="showcase-index-slide"></div>
            </div>
        </>
    );
};

export default ShowCase;
