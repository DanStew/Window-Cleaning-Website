import FacebookLogo from "../Images/facebookLogo.jpg"

function Footer(){
    return(
        <div className="Footer flexItems flexDisplay column">
            <p className="smallSubheading flexItems">Website Designed and Built by <a onClick={() => window.open("https://danielfstewart.com/")}>Daniel Stewart</a></p>
            <div className="footerBottom flexItems flexDisplay smallGap">
                <p className="smallSubheading flexItems">w.stewart76@btinternet.com</p>
                <div className="flexItems flexDisplay">
                    <img className="footerImg" onClick={() => window.open("https://www.facebook.com/profile.php?id=100054523986920")} src={FacebookLogo} alt="Link to the Facebook Page" />
                </div>
                <p className="smallSubheading flexItems">01252726833</p>
            </div>
        </div>
    )
}

export default Footer