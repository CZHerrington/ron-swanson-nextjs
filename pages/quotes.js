import React, { useState } from "react";
import Nav from "../components/nav";
import Heading from "../components/heading";
import Quotes from "../components/Quotes";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

const QuotesPage = ({ quotes }) => {
    return (
        <>
            <Nav />
            <Heading text={"Ron Swanson Quotes"} />
            <Quotes quotes={quotes} />
        </>
    );
};

QuotesPage.getInitialProps = async function({ query }) {
    const count = query.count || 3;


    const res = await fetch(
        `http://ron-swanson-quotes.herokuapp.com/v2/quotes/${count}`
    );
    const data = await res.json();
    // const quotes = {
    //     quotes: data.map(entry => entry)
    // };
    console.log('count: ' + count);
    return { quotes: data };
};

export default QuotesPage;
