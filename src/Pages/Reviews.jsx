//Importing the needed components
import Navigator from "../Components/Navigator"
import TopBanner from "../Components/TopBanner"
import ContactForm from "../Components/ContactForm"
import OpenContactFormButton from "../Components/OpenContactButton"
import GoogleReviewsCarousel from "../Components/GoogleReviewsCarousel"
import GoogleReviewsBadge from "../Components/GoogleReviewsBadge"
import Footer from "../Components/Footer"

function Reviews(){
    return(
        <div className="reviews">
            <div className="header">
                <div id="header" className="header">
                    <TopBanner />
                    <Navigator />
                </div>
                <div id="mainBody" className="mainBody">
                    <div className="headerText">
                        <p className="title">Reviews</p>
                        <p className="bigSubheading">Please see below to read some reviews from our amazing customers or write a review of your own</p>
                    </div>
                    <GoogleReviewsBadge />
                    <GoogleReviewsCarousel className="flexItems"/>
                    <OpenContactFormButton />
                    <Footer />
                </div>
                {/* Implementing the contact form onto the website */}
                <ContactForm />
            </div>
        </div>
    )
}

export default Reviews