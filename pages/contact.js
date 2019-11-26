import React from 'react';
import ContactForm from '../components/contactUs';
import Nav from '../components/nav';

const Contact= () => {
    return (<>
        <Nav />
        <ContactForm />
        <style jsx>{`
            h1 {
                font-size: 48px;
                font-family: sans-serif;
                text-align: center;
            }
        `}</style>
    </>);
}

export default Contact;