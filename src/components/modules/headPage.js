import React from 'react';

// Composing the HeadPage with a component
const HeadPage = (props) =>{
    return (
        <div>
            <h1 className="display-5">{props.titlePage}</h1>
            <p className="lead">{props.shortDesc}</p>
        </div>
    )
}

export default HeadPage;