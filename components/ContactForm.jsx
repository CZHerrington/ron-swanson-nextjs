import React, { useState } from "react";
import Nav from "./nav";
import Heading from "./heading";

const ContactForm = () => {
    const [state, setState] = useState({
        contact_name: "",
        contact_email: "",
        contact_message: "",
        isSubmitted: false
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = event => {
        setState({ ...state, isSubmitted: true });
        console.log(state);
    };

    return (
        <>
            <Nav />
        <Heading text="contact us" />
            {state.isSubmitted ? (
                <div>thank you for your submission, {state.contact_name}!</div>
            ) : (
                <form className="form-container">
                    <label>
                        name
                        <input
                            type="text"
                            placeholder="your name"
                            name="contact_name"
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        email address
                        <input
                            type="email"
                            placeholder="name@email.com"
                            name="contact_email"
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        message
                        <textarea
                            name="contact_message"
                            placeholder="what do you want to say?"
                            onChange={handleChange}
                        />
                    </label>
                    <button onClick={handleSubmit}>send message</button>
                </form>
            )}
            <style jsx>{`
                h1 {
                    font-size: 128px;
                }
                
                .form-container {
                    background-color: blue;
                    border-radius: 5px;
                    background-color: #b6d7fc;
                    display: flex;
                    flex-direction: column;
                    width: 30%;
                    margin: 0 auto;
                    padding: 20px;
                }

                input {
                    background-color: #323232;
                    border: none;
                    padding: 4px;
                    color: white;
                }
                input::placeholder {
                    color: red;
                }

                .form-container > label {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    // width: 60%;
                    margin: .5rem;
                }
            `}</style>
        </>
    );
};

export default ContactForm;
