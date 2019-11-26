import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

function getAlert(image) {
    alert('You are hovering on the image on the webpage')
  }

const Home = () => (
    <div>
        <Head>
            <title>Ron</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav /> 
        <div>
        <img onMouseOver={getAlert}src="/ronBackground.jpeg"></img>
        <div>
            <p>Something useless</p>
        </div>
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
