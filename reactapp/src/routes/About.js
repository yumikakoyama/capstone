import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import AboutImg from "../assets/17.jpg";

function About (){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="About"
                btnClass="hide"
            />
            <AboutUs/>
            <Footer/>
        </>
    )
}

export default About;