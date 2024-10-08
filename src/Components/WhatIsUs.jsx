import { openContactForm } from "../Functions/contactFormFunctions"

function WhatIsUs({order}){
    return(
        <div className={"WhatIsUs flexItems flexDisplay column largeGap " + order}>
            <p className="heading flexItems">Why choose Farnham and District Window Cleaning</p>
            <div className="mainText flexDisplay column largeGap">
                <p className="subheading flexItems">Farnham and District Window Cleaning are a professional window cleaning company, solving all your window cleaning issues since 1972</p>
                <p className="subheading flexItems">We offer many services, from Domestic and Commercial window cleaning to Conservatory roof and Gutter Cleaning. Feel free to <i onClick={() => openContactForm()}>ENQUIRE</i> if you are unsure about the service you want provided</p>
            </div>
            <p className="subheading flexItems">We operate in and around the Farnham and District area, some locations included can be seen below : </p>
            <div className="locations flexItems flexDisplay column gap">
                <div className="locationsRow flexItems flexDisplay">
                    <p className="subheading flexItems">Farnham</p>
                    <p className="subheading flexItems">Aldershot</p>
                    <p className="subheading flexItems">Alton</p>
                </div>
                <div className="locationsRow flexItems flexDisplay">
                    <p className="subheading flexItems">Fleet</p>
                    <p className="subheading flexItems">Badshot Lea</p>
                    <p className="subheading flexItems">Ash</p>
                </div>
                <div className="locationsRow flexItems flexDisplay">
                    <p className="subheading flexItems">Bentley</p>
                    <p className="subheading flexItems">Beacon Hill</p>
                    <p className="subheading flexItems">Many, many more</p>
                </div>
            </div>
        </div>
    )
}

export default WhatIsUs