import { openContactForm } from "../Functions/contactFormFunctions"

//Importing the image
import domesticImg3 from "../Images/domesticImg3.jpg"

function WelcomePage(){
    return(
        <div className="welcome">
            <div className="backgroundImg flexItems">
                <img src={domesticImg3} alt="Background Image of a house" />
            </div>
            <div id="welcomeContent" className="welcomeContent flexDisplay column heightGap">
                <p className="title">Farnham and District Window Cleaning</p>
                <p className="heading">A family run window cleaning business established since 1972</p>
                <p className="heading">Contact us for a free, no obligation quote</p>
                <button onClick={() => openContactForm()} className="welcomeButton"><p className="subheading flexItems ignoreWidth">Get a Free Quote</p></button>            
            </div>
        </div>
    )
}

export default WelcomePage