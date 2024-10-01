import Navigator from "../Components/Navigator"
import TopBanner from "../Components/TopBanner"

//Importing the image
import domesticImg3 from "../Images/domesticImg3.jpg"

function Home(){

    //Function used to open up the contact form
    function openContactForm(){
        //Animating the contactForm up
        document.getElementById("contactForm").classList.remove("notActive")
        //Removing the background information
        setTimeout(() => {
            document.getElementById("header").classList.add("notActive")
            document.getElementById("mainBody").classList.add("notActive")
        },600)
    }

    //Function to close the contact form
    function closeContactForm(){
        //Animating the contactForm down 
        document.getElementById("contactForm").classList.add("removeContactForm")
        document.getElementById("header").classList.remove("notActive")
        document.getElementById("mainBody").classList.remove("notActive")
        //Completely removing the contact form
        setTimeout(() => {
            //Appending / Removing the classes needed
            document.getElementById("contactForm").classList.add("notActive")
            document.getElementById("contactForm").classList.remove("removeContactForm")
        },600)
    }

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
                    <div className="welcomeContent flexDisplay column heightGap">
                        <p className="title">Farnham and District Window Cleaning</p>
                        <p className="heading">A family run window cleaning business established since 1972</p>
                        <p className="heading">Contact us for a free, no obligation quote</p>
                        <button onClick={() => openContactForm()} className="welcomeButton"><p className="subheading flexItems ignoreWidth">Get a Free Quote</p></button>
                    </div>
                    <div onClick={() => openContactForm()} className="contactButton flexDisplay">
                        <span onClick={() => openContactForm()} class="material-symbols-outlined">chat</span>
                    </div>
                </div>
            </div>
            <div id="contactForm" className="contactForm notActive flexItems">
                <div onClick={() => closeContactForm()} className="contactButton flexDisplay">
                    <span onClick={() => closeContactForm()} class="material-symbols-outlined">close</span>
                </div>
            </div>
        </div>
    )
}

export default Home