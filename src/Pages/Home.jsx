import Navigator from "../Components/Navigator"
import TopBanner from "../Components/TopBanner"

//Importing the image
import domesticImg3 from "../Images/domesticImg3.jpg"

function Home(){
    return(
        <div className="Home">
            <div className="header">
                <TopBanner />
                <Navigator />
            </div>
            <div className="mainBody">
                <div className="welcome">
                    <div className="backgroundImg flexItems">
                        <img src={domesticImg3} alt="Background Image of a house" />
                    </div>
                    <div className="welcomeContent flexDisplay column heightGap">
                        <p className="title">Farnham and District Window Cleaning</p>
                        <p className="heading">A family run window cleaning business established since 1972</p>
                        <p className="heading">Contact us for a free, no obligation quote</p>
                        <button className="welcomeButton"><p className="subheading flexItems">Get a Free Quote</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home