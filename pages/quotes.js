import React, { useState } from "react";
import Nav from "../components/nav";
import Heading from "../components/heading";
import Quotes from "../components/Quotes";
import fetch from 'isomorphic-unfetch';

const QuotesPage = ({quotes}) => {
    return (<>
        <Nav/>
        <Heading text="Ron Swanson Quotes"/>
        <Quotes
            quotes={quotes}
        />
    </>);
};

QuotesPage.getInitialProps = async function() {
    const res = await fetch(
        "http://ron-swanson-quotes.herokuapp.com/v2/quotes/5"
    );
    const data = await res.json();
    // const quotes = {
    //     quotes: data.map(entry => entry)
    // };
    console.log(data);
    return { quotes: data };
};

export default QuotesPage;
