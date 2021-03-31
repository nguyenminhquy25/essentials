import React from 'react';
import TopTitle from './TopTitle';

const Team = () => {
    return (
        <div class="team">
            <TopTitle title="The Team Behind Essentials" text="There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration, by injected humour, or new randomised words."/>
            <div className="team-items">
                <TeamItem src="/images/team1.jpg" name="CHRISTINA HAWKINS" title="Head of SEO" description="
                    Johnathan is our co-founder and has developed search strategies for a variety
                    of clients for over 5 years."/>
                <TeamItem src="/images/team4.jpg" name="ANDRES JOHANSON" title="Marketing Manager" description="
                    Andres fell in love with marketing at the school and looks forward to being part 
                    of the industry for years."/>
                <TeamItem src="/images/team3.jpg" name="ALEXANDRA SMITHS" title="ALEXANDRA SMITHS" description="
                    Graduating with a degree in Spanish, English and French, she has always loved writing."/>
            </div>
        </div>
    )
};
const TeamItem = (props) => {
    return (
        <div className="team-item">
            <img src={props.src}></img>
            <h3>{props.name}</h3>
            <div className="team-item-title">{props.title}</div>
            <div className="border-div"></div>
            <div className="team-item-description">{props.description}</div>
            <div className="team-item-icons">
                <div className="team-icon-container twitter">
                    <a>
                        <i class="fa fa-twitter"></i>
                    </a>
                </div>
                <div className="team-icon-container pinterest">
                    <a>
                        <i class="fa fa-pinterest"></i>
                    </a>
                </div>
                <div className="team-icon-container linkedin">
                    <a>
                        <i class="fa fa-linkedin"></i>
                    </a>
                </div>
                <div className="team-icon-container dribbble">
                    <a>
                        <i class="fa fa-dribbble"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Team;
