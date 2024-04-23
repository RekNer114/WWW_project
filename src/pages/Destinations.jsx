import React, {useState} from 'react' 
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import styles from  './Destinations.module.css'
import CardFlip from '../components/CardFlip/CardFlip.jsx'
import parisImg from '../assets/images/card_images/paris_front.jpg'
import barcelonaImg from '../assets/images/card_images/barcelona_front.jpg'
import romeImg from '../assets/images/card_images/rome_front.jpg'
import londonImg from '../assets/images/card_images/london_front.jpg'



function Destinations(){
    return(
        <div className={styles.main}>
        <Header/>
            <div className={styles.page_name}>
                <h1>Destinations</h1>
            </div> 
        <div className={styles.cards_container}>
            <div className={styles.paris_background}>
            {/* 1 - Paris*/}
                <CardFlip 
                    frontContent="Paris" 
                    backContent="Paris, the City of Light, captivates visitors with its timeless charm and romantic ambiance. Explore iconic landmarks like the Eiffel Tower, Notre-Dame Cathedral, and Louvre Museum. Indulge in delectable French cuisine at quaint bistros, stroll along the Seine River, or immerse yourself in the vibrant arts scene. With its blend of history, culture, and sophistication, Paris offers an unforgettable experience for every traveler."
                    front_imgSrc={parisImg} 
                    back_imgSrc={parisImg} 
                /> 
            </div>
            {/*Barcelona*/}
            <CardFlip 
                frontContent="Barcelona" 
                backContent="Barcelona beckons with its unique blend of Catalan culture, stunning architecture, and lively atmosphere. Discover the whimsical designs of Antoni Gaudí at Sagrada Familia and Park Güell, or wander through the historic streets of the Gothic Quarter. Relax on sun-kissed beaches, savor tapas and paella in bustling markets, and witness the passion of flamenco performances. From its vibrant street life to its rich artistic heritage, Barcelona delights at every turn."
                front_imgSrc={barcelonaImg} 
                back_imgSrc={parisImg} 
            /> 
            {/*Rome*/}
            <CardFlip 
                frontContent="Rome" 
                backContent="Rome, the Eternal City, is a living museum of ancient history and modern charm. Marvel at architectural wonders like the Colosseum, Pantheon, and Roman Forum, testifying to the grandeur of the Roman Empire. Wander through picturesque piazzas, toss a coin into the Trevi Fountain for luck, and indulge in authentic Italian cuisine at trattorias and gelaterias. With its rich heritage, vibrant street life, and mouthwatering food, Rome offers an unforgettable journey through time."
                front_imgSrc={romeImg} 
                back_imgSrc={romeImg} 
            /> 
            {/*London*/}
            <CardFlip 
                frontContent="London" 
                backContent="London, the dynamic capital of England, is a melting pot of history, culture, and innovation. Explore world-class museums like the British Museum and Tate Modern, or stroll through lush parks such as Hyde Park and Kensington Gardens. Admire architectural marvels like the Tower of London and Buckingham Palace, and experience the city's diverse culinary scene in trendy neighborhoods like Shoreditch and Soho. With its mix of tradition and modernity, London offers something for every traveler to discover and enjoy."
                front_imgSrc={londonImg} 
                back_imgSrc={parisImg} 
            /> 
            
        </div>

        <Footer/>
        </div>
    );
}

export default Destinations;