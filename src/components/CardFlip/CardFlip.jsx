import React from "react";
import { useState } from "react";
import styles from './CardFlip.module.css'
import ReactCardFlip from 'react-card-flip'

const CardFlip = ({frontContent, backContent, front_imgSrc, back_imgSrc}) =>{
    const [isFlipped, setIsFlipped] = useState(false);
    
    function handleFlip(){
            setIsFlipped(!isFlipped);
    }

    function handleMouseOver(){
        if (!isFlipped) {
            setIsFlipped(true);
        }
    }

    function handleMouseOut(){
        if (isFlipped) {
            setIsFlipped(false);
        }
    }

    return(
        <div>
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} flipSpeedBackToFront={0.9} >
                <div className={styles.frontSide} onMouseOver={handleMouseOver}>
                    <h1>{frontContent}</h1>
                </div>

            {/*back side*/ }
                <div className={styles.backSide} onMouseOut={handleMouseOut}>
                    <div className={styles.img_overlay}></div>
                        <img src={front_imgSrc} className={styles.img_styles}/>
                </div>

            </ReactCardFlip>
        </div>
    );
}

export default CardFlip;