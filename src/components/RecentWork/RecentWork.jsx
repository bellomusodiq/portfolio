import React from 'react';
import './RecentWork.css';


const RecentWork = props => {
    let recentWorks = null;
    if (props.recent) {
        recentWorks = props.recent.map((el, i) => (
            <div key={i} className="Work">
                <h3>{el.title}</h3>
                <img src={el.image}
                    onClick={() => props.showImage(el.image)}
                    alt="" />
                <div dangerouslySetInnerHTML={{ __html: el.description }}></div>
                <a href={el.url}>{el.url}</a>
            </div>
        ))
    }
    return (
        <div className="RecentWork">
            <h2>Recent work</h2>
            <div className="Works">
                {recentWorks}
            </div>
        </div>
    )
}

export default RecentWork;