//Importing the needed components
import Navigator from "../Components/Navigator"
import TopBanner from "../Components/TopBanner"
import ContactForm from "../Components/ContactForm"
import WelcomePage from "../Components/WelcomePage"
import OpenContactFormButton from "../Components/OpenContactButton"
import WhatIsUs from "../Components/WhatIsUs"

function Home(){

    return(
        <div className="Home">
            <div id="header" className="header">
                <TopBanner />
                <Navigator />
            </div>
            <div id="mainBody" className="mainBody">
                <WelcomePage />
                <WhatIsUs order="odd"/>
                <OpenContactFormButton />
            </div>
            {/* Implementing the contact form onto the website */}
            <ContactForm/>
        </div>
    )
}

export default Home