//Importing the needed components
import Navigator from "../Components/Navigator"
import TopBanner from "../Components/TopBanner"
import ContactForm from "../Components/ContactForm"

//Importing the needed functions
import { openContactForm, closeContactForm } from "../Functions/contactFormFunctions"

function Contact(){
    return(
        <div>
            <div className="header">
                <div id="header" className="header">
                    <TopBanner />
                    <Navigator />
                </div>
                <div id="mainBody" className="mainBody">
                    {/* Fixed button made for the user to open the contact form */}
                    <div onClick={() => openContactForm()} className="contactButton flexDisplay">
                        <span onClick={() => openContactForm()} class="material-symbols-outlined">chat</span>
                    </div>
                </div>
                {/* Implementing the contact form onto the website */}
                <ContactForm closeContactForm={() => closeContactForm()}/>
            </div>
        </div>
    )
}

export default Contact