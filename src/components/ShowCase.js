import React from 'react';
import TopTitle from './TopTitle';

const ShowCase = () => {
    return (
        <div className="showcase">
            <div className="showcase-title">
                <TopTitle title="Explore Latest Projects" text="There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration, by injected humour, or new randomised words."/>
            </div>
            <div className="showcase-items">
                <ShowCaseItem src="/images/showcase1.jpg"/>
                <ShowCaseItem src="/images/showcase2.jpg"/>
                <ShowCaseItem src="/images/showcase3.jpg"/>
                <ShowCaseItem src="/images/showcase4.jpg"/>
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
