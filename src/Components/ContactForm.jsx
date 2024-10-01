import { useState } from "react"
import { closeContactForm } from "../Functions/contactFormFunctions"

function ContactForm(){

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phoneNmb,setPhoneNmb] = useState("")
    const [title,setTitle] = useState("")
    const [message,setMessage] = useState("")

    return(
        <div id="contactForm" className="contactForm notActive flexItems">
            <div className="contactFormHeader flexItems flexDisplay noGap">
                <div className="flexItems"></div>
                <p className="title flexItems">Contact Form</p>
                <div className="closeButton flexItems"><span onClick={closeContactForm} class="material-symbols-outlined">close</span></div>
            </div>
            <div className="contactFormMessage">
                <p className="heading">Contact us below if you have any questions or would want your free, no obligation quotation</p>
            </div>
            <div className="contactFormForm">
                <form className="flexDisplay column gap" action="#">
                    <input type="text" placeholder="Enter your Name..." value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Enter your Email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" placeholder="Enter your Phone Number..." value={phoneNmb} onChange={(e) => setPhoneNmb(e.target.value)}/>
                    <input type="text" placeholder="Enter the Email Title..." value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <textarea placeholder="Enter your Message..." rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type="button"><p className="heading flexItems">Send Message</p></button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm