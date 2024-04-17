import React, {useState} from 'react' 
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import styles from  './Destinations.module.css'
import CardFlip from '../components/CardFlip/CardFlip.jsx'
import parisImg from '../assets/images/paris.jpg'

function Destinations(){
    const image = 'https://img.pixers.pics/pho_wat(s3:700/FO/27/40/97/12/700_FO27409712_74ceb037c1bdab961ad3bf4537b77daa.jpg,487,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,267,650,jpg)/stickers-vertical-oriented-image-famous-eiffel-tower-in-paris-france.jpg.jpg'
    return(
        <>
        <Header/>
            {/* <div>
                <h1>Destinations</h1>
            </div> */}

        <div className={styles.cards_container}>
            <CardFlip 
                frontContent="Hello!" 
                backContent="Goodbye!"
                front_imgSrc={image} 
                back_imgSrc={image} 
            /> 
            <CardFlip 
                frontContent="Hello!" 
                backContent="Goodbye!"
                front_imgSrc={parisImg} 
                back_imgSrc={parisImg} 
            /> 
            <CardFlip 
                frontContent="Hello!" 
                backContent="Goodbye!"
                front_imgSrc={parisImg} 
                back_imgSrc={parisImg} 
            /> 
            <CardFlip 
                frontContent="Hello!" 
                backContent="Goodbye!"
                front_imgSrc={parisImg} 
                back_imgSrc={parisImg} 
            /> 
            
        </div>

        <Footer/>
        </>
    );
}

export default Destinations;