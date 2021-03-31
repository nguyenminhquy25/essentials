import React from 'react'

const TopTitle = (props) => {
    return (
        <div>
            <h2 className="top-title">{props.title}</h2>
            <p className="top-text">{props.text}</p>
        </div>
    );
};

export default TopTitle;
