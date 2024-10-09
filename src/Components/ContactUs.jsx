import facebookLogo from "../Images/facebookLogo.jpg"
import MapAPIImplementation from "../Functions/MapAPIImplementation"

function ContactUs({order}){
    return(
        <div className={"contactUs flexDisplay column heightGap " + order}>
            <p className="title flexItems">Contact Us</p>
            <p className="bigSubheading mainText">If you live in Farham or Surrounding areas and have any questions about our services or would like a Free, No obligation quotation, please contact us using the information or form below : </p>
            <MapAPIImplementation className="map"/>
            <div className="contactInfo flexItems flexDisplay column heightGap">
                <div className="contactRow flexDisplay flexItems">
                    <p className="heading flexItems">Email : </p>
                    <p className="bigSubheading flexItems">w.stewart76@btinternet.com</p>
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