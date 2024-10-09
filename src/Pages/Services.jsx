//Importing the needed components
import Navigator from "../Components/Navigator"
import TopBanner from "../Components/TopBanner"
import ContactForm from "../Components/ContactForm"
import OpenContactFormButton from "../Components/OpenContactButton"
import OurServicesSimple from "../Components/OurServicesSimple"
import OurServicesDetails from "../Components/OurServicesDetails"
import Footer from "../Components/Footer"

function Services(){
    return(
        <div className="services">
            <div className="header">
                <div id="header" className="header">
                    <TopBanner />
                    <Navigator />
                </div>
                <div id="mainBody" className="mainBody">
                    <OurServicesSimple order="odd" />
                    <OurServicesDetails order="even" />
                    <OpenContactFormButton />
                    <Footer />
                </div>
                {/* Implementing the contact form onto the website */}
                <ContactForm/>
            </div>
        </div>
    )
}

export default Services