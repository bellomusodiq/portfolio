import React from 'react';
import './About.css';

const About = (props) => {
    let frontEndTechs = null;
    let backEndTechs = null;
    let ml = null;
    let devTechs = null;
    if (props.techs) {
        frontEndTechs = props.techs.frontend.map((el, i) => <li key={i}><a target="blank" href={el.url}>{el.name}</a></li>)
        backEndTechs = props.techs.backend.map((el, i) => <li key={i}><a target="blank" href={el.url}>{el.name}</a></li>)
        ml = props.techs.ml.map((el, i) => <li key={i}><a target="blank" href={el.url}>{el.name}</a></li>)
        devTechs = props.techs.dev.map((el, i) => <li key={i}><a target="blank" href={el.url}>{el.name}</a></li>)
    }
    return (
        <div className="About">
            <p>I have over 3 years of experience in full stack web development and also I have experience in Data Science and Machine Learning.</p>
            <p>I have worked as a freelancer, full-time remote software developer for agencies and full-time software developer.</p>
            <p>I also have collaborated with great minds to develop scalable and robost web application</p>
            <p></p>
            <div>
                <div>
                    <h4>Front-end technologies</h4>
                    <ul>
                        {frontEndTechs}
                    </ul>
                </div>
                <div>
                    <h4>Backend technologies</h4>
                    <ul>
                        {backEndTechs}
                    </ul>
                </div>
                <div>
                    <h4>Data Science/Machine Learning technologies</h4>
                    <ul>
                        {ml}
                    </ul>
                </div>
                <div>
                    <h4>Dev Tools</h4>
                    <ul>
                        {devTechs}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default About;