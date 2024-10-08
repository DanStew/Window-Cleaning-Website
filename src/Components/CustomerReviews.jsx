import { useNavigate } from "react-router-dom"
import GoogleReviewsBadge from "./GoogleReviewsBadge"

function CustomerReviews({order}){

    const navigator = useNavigate()

    return(
        <div className={"customerReviews flexItems flexDisplay column " + order}>
            <p className="title">We're Highly Rated by our Customers</p>
            <GoogleReviewsBadge />
            <p className="bigSubheading">We're willing to go above and beyond to ensure that your windows <i>SPARKLE</i>. Please <a onClick={() => navigator("/Reviews")}>Read our Reviews</a> if you want to learn more about what our customers think.</p>
        </div>
    )
}

export default CustomerReviews