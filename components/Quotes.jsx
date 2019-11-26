import React, { useState } from "react";
import Heading from "./heading";

const Card = ({ title, description }) => {
    return (
        <>
            <span className="card">
                <h3>{title} &rarr;</h3>
                <p>{description}</p>
            </span>
            <style jsx>{`
                .card {
                    min-width: 200px;
                    min-height: 100px;
                    padding: 18px 18px 24px;
                    width: 220px;
                    text-align: left;
                    text-decoration: none;
                    color: #434343;
                    border: 1px solid #9b9b9b;
                }
                .card:hover {
                    border-color: #067df7;
                }
                .card h3 {
                    margin: 0;
                    color: #067df7;
                    font-size: 18px;
                }
                .card p {
                    margin: 0;
                    padding: 12px 0 0;
                    font-size: 13px;
                    color: #333;
                }
            `}</style>
        </>
    );
};

const Row = ({ children }) => (
    <>
        <div className="row">{children}</div>
        <style jsx>{`
            .row {
                flex-wrap: wrap;
                max-width: 880px;
                margin: 80px auto 40px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
        `}</style>
    </>
);

const Quotes = ({ quotes }) => {
    const [state, setState] = useState({});

    return (
        <>
            <Row>
            {quotes.map((quote, index) => (
                <Card
                    title={"quote #" + (index + 1)}
                    description={quote}
                />
            ))}
            </Row>
        </>
    );
};

export default Quotes;
