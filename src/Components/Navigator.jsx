import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Navigator(){

    const navigator = useNavigate()
    const location = useLocation()

    //Usestate variable to store whether to show the extended vertical menu
    const [showMenu, setShowMenu] = useState(false)

    //Setting one of the links as the active link
    useEffect(() => {
        if (location.pathname == "/"){document.getElementById("HomeLink").classList.add("active")}
        else if (location.pathname == "/Services"){document.getElementById("ServicesLink").classList.add("active")}
        else if (location.pathname == "/Contact"){document.getElementById("ContactLink").classList.add("active")}    
        else if (location.pathname == "/Reviews"){document.getElementById("ReviewsLink").classList.add("active")}   
    },[])

    return(
        <div className="Navigator">
            <div className="horizontalNavigator flexDisplay noGap">
                <div id="HomeLink" className="navItem flexItems" onClick={() => navigator("/")}><p className="flexItems subheading">Home</p></div>
                <div id="ServicesLink" className="navItem flexItems" onClick={() => navigator("/Services")}><p className="flexItems subheading">Our Services</p></div>
                <div id="ReviewsLink" className="navItem flexItems" onClick={() => navigator("/Reviews")}><p className="flexItems subheading">Reviews</p></div>
                <div id="ContactLink" className="navItem flexItems" onClick={() => navigator("/Contact")}><p className="flexItems subheading">Contact Us</p></div>
            </div>
            <div className="verticalNavigator flexItems flexDisplay column">
                <span onClick={() => setShowMenu(!showMenu)} id="menuSpan" class="material-symbols-outlined navItem flexItems">menu</span>
                {showMenu? 
                    <div className="verticalMenu flexItems flexDisplay column">
                        <p className="subheading navItem flexItems" onClick={() => navigator("/")}>Home</p>
                        <p className="subheading navItem flexItems" onClick={() => navigator("/Services")}>Our Services</p>
                        <p className="subheading navItem flexItems" onClick={() => navigator("/Reviews")}>Reviews</p>
                        <p className="subheading navItem flexItems" onClick={() => navigator("/Contact")}>Contact Us</p>
                    </div> 
                    : <div style={{display:"none"}}></div>}
            </div>
        </div>
    )
}

export default Navigator