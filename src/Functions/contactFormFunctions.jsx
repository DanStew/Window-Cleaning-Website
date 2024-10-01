//Function used to open up the contact form
export const openContactForm = () => {
    //Animating the contactForm up
    document.getElementById("contactForm").classList.remove("notActive")
    //Removing the background information
    setTimeout(() => {
        document.getElementById("header").classList.add("notActive")
        document.getElementById("mainBody").classList.add("notActive")
    },600)
}

//Function to close the contact form
export const closeContactForm = () => {
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