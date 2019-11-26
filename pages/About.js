import React from "react";
import Nav from "../components/nav";
import Heading from "../components/heading";

const AboutMe = () => {
    return (
        <>
            <Nav />
            <h1>about me</h1>
            <Heading text="rfsrf" />
            <style jsx>{`
                h1 {
                    font-size: 128px;
                }
            `}</style>
        </>
    );
};

export default AboutMe;
