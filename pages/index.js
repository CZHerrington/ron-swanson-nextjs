import React, { useState } from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Card = ({ title, description, children }) => {
    return (
        <>
            <span className="card">
                <h3>{title} &rarr;</h3>
                <p>{description}</p>
                {children}
            </span>
            <style jsx>{`
                .card {
                    transition: all .25s;
                    padding: 18px 18px 24px;
                    width: 220px;
                    text-align: left;
                    text-decoration: none;
                    color: #434343;
                    border: 1px solid #9b9b9b;
                }
                .card:hover {
                    transition: all .25s;
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
                max-width: 880px;
                margin: 80px auto 40px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
        `}</style>
    </>
);

const TitleStyle = () => (
    <style jsx>{`
        a {
            color: #067df7;
        }
        a:visited {
            color: #067df7;
        }
    `}</style>
);
const SliderStyle = () => (
    <style jsx>{`.slidecontainer {
    width: 100%; /* Width of the outside container */
  }
  
  /* The slider itself */
  .slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 25px; /* Specified height */
    background: #d3d3d3; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
  }
  
  /* Mouse-over effects */
  .slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }
  
  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 10px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #067df7; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
  }`}</style>
);

const QuoteCount = ({}) => {
    const [count, setCount] = useState(1);
    const [names, setNames] = useState(["empty"]);
    const attributes = {
        title: (
            <>
                <a href={`/quotes?count=${count}`}>Fetch Ron Swanson Quotes</a>
                <TitleStyle />
            </>
        ),
        description: `Generate ${count} Ron Swanson ${(count === 1) ? 'quote' : 'quotes'}!`
    };
    const handleChange = e => {
        const { value } = e.target;
        setCount(Number(value));
    };

    return (
        <>
            <Row>
                <Card {...attributes}>
                    <div class="slidecontainer">
                        <input
                            onChange={handleChange}
                            type="range"
                            min="1"
                            max="25"
                            value={count}
                            className="slider"
                            id="myRange"
                        />
                        <SliderStyle />
                    </div>
                </Card>
            </Row>
        </>
    );
};

const Home = () => (
    <div>
        <Head>
            <title>Ron</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />
        <div>
          <img src="/ronBackground.jpeg"></img>
        <div>
            <p>Something useless</p>
        </div>
        <div className="hero">
            <h1 className="title">
                Welcome to the Ron Swanson Quote Generator!
            </h1>
            <p className="description">
                To get started, use this convenient component!
            </p>
            <QuoteCount />
            <Row>
                <Card
                    url="https://nextjs.org/docs"
                    title="Documentation"
                    description="Learn more about Next.js in the documentation."
                />
                <Card
                    url="https://nextjs.org/docs"
                    title="Documentation"
                    description="Learn more about Next.js in the documentation."
                />
                <Card
                    url="https://nextjs.org/docs"
                    title="Documentation"
                    description="Learn more about Next.js in the documentation."
                />
            </Row>
        </div>
        

        <style jsx>{`
            img {
                height: 45rem;
                width: 100%;
                box-shadow: 5px 5px 5px 5px black;
            }
            img:hover {
                border-radius: 5px;
                transform: rotate(180deg);
            }
        `}</style>
    </div>
);

export default Home;
