import React, { useState } from "react";
import Heading from "./heading";

const Card = ({ title, description }) => {
    return (
        <>
            <span className="card">
                <h3>{title} &rarr;</h3>
                <hr></hr>
                <p>{description}</p>
            </span>
            <style jsx>{`
                .card {
                    background-color: pearl;
                    z-index: 100;
                    transition: all 0.25s;
                    min-width: 200px;
                    min-height: 150px;
                    padding: 18px 18px 24px;
                    width: 220px;
                    text-align: left;
                    text-decoration: none;
                    color: #434343;
                    border: 1px solid #9b9b9b;
                    margin: 10px;
                    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
                        0 8px 16px -8px rgba(0, 0, 0, 0.3),
                        0 -6px 16px -6px rgba(0, 0, 0, 0.025);
                }
                .card:hover {
                    transform: translateY(-10px);
                    margin: 10px;
                    transition: all 0.25s;
                    border-color: #067df7;
                    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
                        0 18px 36px -18px rgba(0, 0, 0, 0.3),
                        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
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
                        key={quote}
                        title={"quote #" + (index + 1)}
                        description={quote}
                    />
                ))}
            </Row>
        </>
    );
};

export default Quotes;
