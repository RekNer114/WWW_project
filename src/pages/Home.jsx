import React  from 'react';
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import styles from'./Home.module.css';
import barcelonaImg from '../assets/images/barcelona.jpg'
import londonImg from '../assets/images/london.jpg'
import parisImg from '../assets/images/paris.jpg'
import romeImg from '../assets/images/rome.jpg'
import { useNavigate } from 'react-router-dom';

function Home(){

    //explore button handling
    const navigate = useNavigate();
    const exp_handle = () =>{
        navigate('/destinations');
    }

    return(
        <div className={styles.body}>
            
            
            <Header/>

            <div id={styles.navigationName}>
            <h1>Home</h1>
            </div>

            <div className={styles.carousel_container}>

                <div className={styles.main_background}>
                    <div className={styles.image_slider}>
                        <img src={barcelonaImg} />
                        <img src={londonImg} />
                        <img src={parisImg} />
                        <img src={romeImg} />
                    </div>
                    <div className={styles.image_slider}>
                        <img src={barcelonaImg} />
                        <img src={londonImg} />
                        <img src={parisImg} />
                        <img src={romeImg} />
                    </div>
                </div>

                {/* Content on top of the background */}

                <div className={styles.content_overlay}>
                    <div className={styles.carousel_content}>
                        <h1 id={styles.home_main_header}>Welcome to Travel Explore!</h1>
                        
                        <p className={styles.home_text}>Embark on a journey with us and unlock the wonders of the world. At Travel Explore, we're not just about trips; we're about experiences that linger in your memory long after you've returned home. Whether you're seeking adrenaline-pumping adventures, tranquil getaways, or cultural immersions, we have the perfect itinerary tailored just for you.</p>
                        <p className={styles.home_text}>Our team of passionate globetrotters scours the globe to curate unforgettable experiences, ensuring that every moment of your journey is filled with wonder and discovery. From the bustling streets of Tokyo to the serene landscapes of Patagonia, let us guide you through a world of endless possibilities.</p>
                        <p className={styles.home_text}>With Travel Explore, you're not just a traveler—you're an explorer, venturing into the unknown and discovering the beauty of our planet. So pack your bags, leave your worries behind, and let us take you on the adventure of a lifetime. Your journey starts here.</p>
                        <button id={styles.exp_button} onClick={exp_handle}> Explore now! </button>
                    </div>
                </div>

            </div>

        <Footer/>
    </div>
    );
}

export default Home;