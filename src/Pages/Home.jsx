//Importing the needed components
import Navigator from "../Components/Navigator"
import TopBanner from "../Components/TopBanner"
import ContactForm from "../Components/ContactForm"

//Importing the needed functions
import { openContactForm, closeContactForm } from "../Functions/contactFormFunctions"

//Importing the image
import domesticImg3 from "../Images/domesticImg3.jpg"

function Home(){

    return(
        <div className="Home">
            <div id="header" className="header">
                <TopBanner />
                <Navigator />
            </div>
            <div id="mainBody" className="mainBody">
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
                {/* Fixed button made for the user to open the contact form */}
                <div onClick={() => openContactForm()} className="contactButton flexDisplay">
                    <span onClick={() => openContactForm()} class="material-symbols-outlined">chat</span>
                </div>
            </div>
            {/* Implementing the contact form onto the website */}
            <ContactForm closeContactForm={() => closeContactForm()}/>
        </div>
    )
}

export default Home