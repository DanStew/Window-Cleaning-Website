import facebookLogo from "../Images/facebookLogo.jpg"

function ContactUs({order}){
    return(
        <div className={"contactUs flexDisplay column heightGap " + order}>
            <p className="title">Contact Us</p>
            <p className="bigSubheading mainText">Please use the contact information or contact form below if you any questions about the services we provide or would want a Free, No Obligation Quote</p>
            <div className="contactInfo flexItems flexDisplay column heightGap">
                <div className="contactRow flexDisplay flexItems">
                    <p className="heading flexItems">Email : </p>
                    <p className="heading flexItems">w.stewart76@btinternet.com</p>
                </div>
                <div className="contactRow flexDisplay flexItems">
                    <p className="heading flexItems">Phone Number : </p>
                    <p className="heading flexItems">01252722665</p>
                </div>
                <button onClick={() => window.open("https://www.facebook.com/profile.php?id=100054523986920")} className="flexDisplay smallGap"><img src={facebookLogo} alt="Facebook Logo" /><p className="bigSubheading">View our Facebook</p></button>
            </div>
        </div>
    )
}

export default ContactUs