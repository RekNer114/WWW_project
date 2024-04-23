import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import styles from  './AboutUs.module.css'

function AboutUs(){
    return(
        <>
        <Header/>
        <h1 className={styles.ab}>About Us</h1>
            <main id='about_main'>
            <div className="about-us-container">
                <p>Welcome to Travel Explore!</p>
                <p>At Travel Explore, we are passionate about providing unforgettable travel experiences to our customers. Whether you're dreaming of exploring the streets of Paris, soaking up the sun in Barcelona, or discovering the rich history of Rome, we're here to make your travel dreams a reality.</p>
                <p>Our team of experienced travel experts is dedicated to crafting personalized itineraries tailored to your interests and preferences. From romantic getaways to family adventures, we're committed to ensuring that every aspect of your journey is seamless and memorable.</p>
                <p>Travel Explore is more than just a travel company – we're your trusted partner in exploration and discovery. Join us on an adventure and let's create unforgettable memories together!</p>
            </div>
            </main>
        <Footer/>
        </>
    );
}

export default AboutUs;