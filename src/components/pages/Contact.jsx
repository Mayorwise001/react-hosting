import React, {useState} from "react";

function Contacts(){
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = (e)=>{
    e.preventDefault();
    alert(`Message sent by ${email}: ${message}`);
    setEmail("");
    setMessage("");
}

return(
    <div>
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)} />


            <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e)=> setMessage(e.target.value)}>

            </textarea>

            <button type="submit">Send Message</button>
        </form>
    </div>
)
}

export default Contacts