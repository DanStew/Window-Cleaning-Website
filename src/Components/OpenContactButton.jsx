import { openContactForm } from "../Functions/contactFormFunctions"

function OpenContactFormButton(){
    /* Fixed button made for the user to open the contact form */
    return(
        <div onClick={() => openContactForm()} className="contactButton flexDisplay">
            <span onClick={() => openContactForm()} class="material-symbols-outlined">chat</span>
        </div>
    )
}

export default OpenContactFormButton