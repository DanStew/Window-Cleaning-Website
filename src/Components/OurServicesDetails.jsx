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
                <div className="details flexSetup widthGap">
                    <img src={domesticImage} alt="" />
                    <div className="serviceText">

                    </div>
                </div>
                <div id="CommercialWindows"></div>
            </div>
            <div className="service flexItems">
                <p className="heading">Commercial Window Cleaning</p>
                <div className="details flexSetup widthGap">
                    <img src={commercialImage} alt="" />
                    <div className="serviceText">
                        
                    </div>
                </div>
                <div id="ConservatoryRoofs"></div>
            </div>
            <div className="service flexItems">
                <p className="heading">Conservatory Roof Cleaning</p>
                <div className="details flexSetup widthGap">
                    <img src={conservatoryRoofImage} alt="" />
                    <div className="serviceText">
                        
                    </div>
                </div>
                <div id="GutterCleaning"></div>
            </div>
            <div className="service flexItems">
                <p className="heading">Gutter Cleaning</p>
                <div className="details flexSetup widthGap">
                    <img src={gutterCleaningImage} alt="" />
                    <div className="serviceText">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServicesDetails