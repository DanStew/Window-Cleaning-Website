import { useState } from "react"

function SmallContactForm({order}){

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phoneNmb,setPhoneNmb] = useState("")
    const [title,setTitle] = useState("")
    const [message,setMessage] = useState("")

    return(
        <div className={"smallContactForm flexDisplay column heightGap " + order}>
            <p className="heading">Contact Form</p>
            <p className="bigSubheading">Please Contact us below if you have any queries about the services we provide or would like a Free, No Obligation Quote</p>
            <form className="flexDisplay column gap" action="#">
                <input type="text" placeholder="Enter your Name..." value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Enter your Email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="Enter your Phone Number..." value={phoneNmb} onChange={(e) => setPhoneNmb(e.target.value)}/>
                <input type="text" placeholder="Enter the Email Title..." value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea placeholder="Enter your Message..." rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="button"><p className="heading flexItems">Send Message</p></button>
            </form>
        </div>
    )
}

export default SmallContactForm