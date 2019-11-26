import React, { useState } from 'react';
// import GetName from '../components/nameGenerator';

const ContactForm = ({}) => {
    const [count, setCount] = useState(0);


const handleChange = e => {
    const { value } = e.target;
    setCount(value)

}
    return (<>
        <h1>hello</h1>
        <form>
            <label>Name
                <input type="text"
                placeholder="Hello You"
                ></input>
            </label>
            <label>Email
                <input type="email" name="email_name"
                placeholder="okay"></input>
            </label>
            <label>Phone Number {count}
            <input
                            onChange={handleChange}
                            type="range"
                            min="1"
                            max="9999999999"
                            value={count}
                            className="slider"
                            id="myRange"
                        />
                        </label>
        </form>
        {/* <GetName /> */}
        <style jsx>{`
            h1 {
                font-size: 48px;
                font-family: sans-serif;
                text-align: center;
            }
        `}</style>
    </>);
}


export default ContactForm; 