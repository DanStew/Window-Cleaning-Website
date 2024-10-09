import domesticImage from "../Images/domesticImg2.jpg"
import commercialImage from "../Images/commercialImg2.jpg"
import conservatoryRoofImage from "../Images/conservatoryCleaning1.jpg"
import gutterCleaningImage from "../Images/gutterCleaningImg1.jpg"

function OurServicesDetails({order}){
    return(
        <div id="DomesticWindows" className={"ourServicesDetails " + order}>
            <p className="title">Learn more about our Services</p>
            <div className="service flexItems">
                <p className="heading">Domestic Window Cleaning</p>
                <div className="details flexDisplay widthGap">
                    <img src={domesticImage} alt="Domestic Window Cleaning Image" />
                    <div className="serviceText">
                        <p className="mediumSubheading">With over 50 years in the Window Cleaning industry, we specialise in Domestic Window Cleaning, bringing a sparkle to your homes. Our equipment allows us to give you a streak-free finish to windows which you'll love.</p>
                    </div>
                </div>
                <div id="CommercialWindows"></div>
            </div>
            <div className="service flexItems">
                <p className="heading">Commercial Window Cleaning</p>
                <div className="details flexDisplay widthGap">
                    <img src={commercialImage} alt="Commercial Window Cleaning Image" />
                    <div className="serviceText">
                        <p className="mediumSubheading flexItems">We can offer Commercial Window Cleaning to meet all window cleaning issues in the area. If your business needs any window cleaning services, be sure to contact us. We can even other early morning, off hours work, if it would be more beneficial for your business.</p>
                    </div>
                </div>
                <div id="ConservatoryRoofs"></div>
            </div>
            <div className="service flexItems">
                <p className="heading">Conservatory Roof Cleaning</p>
                <div className="details flexDisplay widthGap">
                    <img src={conservatoryRoofImage} alt="Conversatory Roof Cleaning Image" />
                    <div className="serviceText">
                        <p className="mediumSubheading">We also offer conservatory cleaning services, ensuring your conservatory is sparkling clean. Whether it's the glass roof or the hard-to-reach corners, we'll delivers a spotless finish, letting you enjoy a cleaner, brighter space all year round.</p>
                    </div>
                </div>
                <div id="GutterCleaning"></div>
            </div>
            <div className="service flexItems">
                <p className="heading">Gutter Cleaning</p>
                <div className="details flexDisplay widthGap">
                    <img src={gutterCleaningImage} alt="Gutter Cleaning Image" />
                    <div className="serviceText">
                        <p className="mediumSubheading">We also provides gutter cleaning services to keep your home protected from blockages and water damage. We remove debris, leaves, and dirt to ensure your gutters are clear and functioning properly, maintaining the integrity of your property by preventing costly repairs and ensuring proper water drainage.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServicesDetails