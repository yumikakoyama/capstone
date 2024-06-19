import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
import HomeImg from "../assets/12.jpg";

function Home (){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero"
                heroImg={HomeImg}
                title="Your Journy Story"
                text="Choose Your Favorite Destinations."
                buttonText="TravelPlan"
                url="/"
                btnClass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    );
}

export default Home;