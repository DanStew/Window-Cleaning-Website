import { openContactForm } from "../Functions/contactFormFunctions"

function OurServicesSimple({order}){
    return(
        <div className={"ourServicesSimple " + order}>
            <p className="title flexItems">Our Services</p>
            <p className="bigSubheading">We offer many services to help with all your Window Cleaning and Gutter Cleaning needs, see below. Please feel free to <i onClick={() => openContactForm()}>ENQUIRE</i> if you have any questions about the services we provide</p>
            <div className="serviceRow flexItems flexDisplay">
                <a className="flexItems" href="#DomesticWindows"><p className="bigSubheading flexItems">Domestic Window Cleaning</p></a>
                <a className="flexItems" href="#CommercialWindows"><p className="bigSubheading flexItems">Commercial Window Cleaning</p></a>
            </div>
            <div className="serviceRow flexItems flexDisplay">
                <a className="flexItems" href="#ConservatoryRoofs" ><p className="bigSubheading flexItems">Conservatory Roof Cleaning</p></a>
                <a className="flexItems" href="#GutterCleaning"><p className="bigSubheading flexItems">Gutter Cleaning Cleaning</p></a>
            </div>
        </div>
    )
}

export default OurServicesSimple