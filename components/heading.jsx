import React from 'react';

const Heading = ({text}) => {
    return (<>
        <h1>{text}</h1>
        <style jsx>{`
            h1 {
                font-size: 48px;
                font-family: sans-serif;
                text-align: center;
            }
        `}</style>
    </>);
}

export default Heading;