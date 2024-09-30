import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Navigator(){

    const navigator = useNavigate()
    const location = useLocation()

    //Setting one of the links as the active link
    useEffect(() => {
        if (location.pathname == "/"){document.getElementById("HomeLink").classList.add("active")}
        else if (location.pathname == "/Services"){document.getElementById("ServicesLink").classList.add("active")}
        else if (location.pathname == "/Contact"){document.getElementById("ContactLink").classList.add("active")}       
    },[])

    return(
        <div className="Navigator flexDisplay noGap">
            <div id="HomeLink" className="flexItems" onClick={() => navigator("/")}><p className="flexItems subheading">Home</p></div>
            <div id="ServicesLink" className="flexItems" onClick={() => navigator("/Services")}><p className="flexItems subheading">Our Services</p></div>
            <div id="ContactLink" className="flexItems" onClick={() => navigator("/Contact")}><p className="flexItems subheading">Contact Us</p></div>
        </div>
    )
}

export default Navigator