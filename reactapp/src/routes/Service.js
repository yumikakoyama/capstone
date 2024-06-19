import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
import ServiceImg from "../assets/1.jpg";

function Service (){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={ServiceImg}
                title="Service"
                btnClass="hide"
            />
            <Trip/>
            <Footer/>
        </>
    )
}

export default Service;