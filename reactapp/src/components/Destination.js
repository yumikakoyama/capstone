import "./DestinationStyles.css"
import DestinationData from "./DestinationData"
import Montain1 from "../assets/15.jpg"
import Montain2 from "../assets/16.jpg"
import Montain3 from "../assets/13.jpg"
import Montain4 from "../assets/14.jpg"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
        
            <DestinationData className="first-des"
                heading="Mt.Yasur, Vanuatu"
                text="Mount Yasur, located on Tanna Island in Vanuatu, is an active volcano renowned for its frequent and spectacular eruptions. It is one of the most accessible volcanoes in the world, allowing visitors to witness its awe-inspiring displays of lava, ash, and smoke from relatively close proximity. The volcano holds cultural significance for the local indigenous people and attracts tourists seeking adventure and natural beauty."
                img1={Montain1}
                img2={Montain2}
            />

            <DestinationData className="first-des-reverse"
                img1={Montain3}
                img2={Montain4}
                heading="Mt.Denali, Alaska"
                text="Mount Denali, formerly known as Mount McKinley, is North America's tallest peak, standing at 20,310 feet (6,190 meters) in Alaska's Denali National Park. Its majestic summit attracts climbers from around the globe, presenting significant challenges due to extreme weather and altitude. Denali's rugged beauty and wilderness allure also draw hikers, wildlife enthusiasts, and photographers to explore its pristine surroundings."
                
            />  
        </div>

        
    )
}

export default Destination