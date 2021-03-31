import React from 'react';
const Home = () => {
    return (
        <div className="home">
            <div className="home-left">
                <h1 className="home-title">Welcome To Essentials, The Wold's Most Powerful SaaS Solution</h1> 
                <p className="home-text">Essentials is designed with your customers in mind, so you can track and analyze all your data in one 
                    central location. There are no limits to how you can look at your data.</p>
                <div>
                    <button className="home-button">Start Your Free Trial</button>
                </div>
            </div>
            <div className="home-right">
                <img src="images/website-development.jpg"></img>
            </div>
        </div>
    )
}

export default Home;
