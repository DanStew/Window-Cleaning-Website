//Importing the needed components
import Navigator from "../Components/Navigator"
import TopBanner from "../Components/TopBanner"
import ContactForm from "../Components/ContactForm"
import OpenContactFormButton from "../Components/OpenContactButton"
import ContactUs from "../Components/ContactUs"
import SmallContactForm from "../Components/SmallContactForm"
import Footer from "../Components/Footer"

function Contact(){
    return(
        <div className="contact">
            <div className="header">
                <div id="header" className="header">
                    <TopBanner />
                    <Navigator />
                </div>
                <div id="mainBody" className="mainBody flexDisplay column">
                    <ContactUs order="odd"/>
                    <SmallContactForm order="even" />
                    <OpenContactFormButton />
                    <Footer />
                </div>
                {/* Implementing the contact form onto the website */}
                <ContactForm/>
            </div>
        </div>
    )
}

export default Contact