import React from 'react';
import TopTitle from './TopTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    return (
        <div className="blog">
            <TopTitle title="Our Blog" text="Latest news, tips and best practices."/>
            <div className="blog-items">
                <BlogItem src="/images/blog1.jpg" title="The Guide To LinkedIn Ads" author="Paul Smith" tags="WordPress" text="
                    Quis autem velis ets reprehender net etid quiste voluptate velite esse quam nihis etsa sedit netsid varias."/>
                <BlogItem src="/images/blog2.jpg" title="Affinity Designer Quick Start" author="John Doe" tags="Marketing" text="
                    Quis autem velis ets reprehender net etid quiste voluptate velite esse quam nihis etsa sedit netsid varias."/>
                <BlogItem src="/images/blog3.jpg" title="Our Happy Team" author="John Doe" tags="Design" text="
                    Quis autem velis ets reprehender net etid quiste voluptate velite esse quam nihis etsa sedit netsid varias."/>
            </div>
        </div>
    )
};
const BlogItem = (props) => {
    return (
        <div className="blog-item">
            <div className="blog-image-container">
                <div className="blog-image-front"><img src={props.src}></img></div>
                <a className="blog-image-back" href="#"></a>
            </div>
            <div className="blog-item-content">
                <h3 className="blog-title"><a href="#">{props.title}</a></h3>
                <div className="blog-info">
                    <div className="blog-info-item">
                        <a href="#">
                            <span className="blog-icon"><FontAwesomeIcon icon={faUser} /></span>
                            {props.author}
                        </a>
                    </div>
                    <div className="blog-info-item">
                        <a href="#">
                            <span className="blog-icon"><FontAwesomeIcon icon={faTags} /></span>
                            {props.tags}
                        </a>
                    </div>
                </div>
                <div className="blog-text">{props.text}</div>
            </div> 
        </div>
    );
}

export default Blog;
