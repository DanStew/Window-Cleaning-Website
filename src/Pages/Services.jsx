//Importing the needed components
import Navigator from "../Components/Navigator"
import TopBanner from "../Components/TopBanner"
import ContactForm from "../Components/ContactForm"
import OpenContactFormButton from "../Components/OpenContactButton"

function Services(){
    return(
        <div>
            <div className="header">
                <div id="header" className="header">
                    <TopBanner />
                    <Navigator />
                </div>
                <div id="mainBody" className="mainBody">
                    <OpenContactFormButton />
                </div>
                {/* Implementing the contact form onto the website */}
                <ContactForm/>
            </div>
        </div>
    )
}

export default Services