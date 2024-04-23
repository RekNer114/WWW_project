import React from "react";
import { useState } from "react";
import styles from "./CardFlip.module.css";
import ReactCardFlip from "react-card-flip";

const CardFlip = ({ frontContent, backContent, front_imgSrc, back_imgSrc }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  const handleMouseEnter = () => {
    if (!isFlipped) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (isFlipped) {
      setIsFlipped(false);
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.card}>
      <ReactCardFlip
        flipDirection="horizontal"
        isFlipped={isFlipped}
        flipSpeedBackToFront={0.9}
      >
        <div className={styles.frontSide}>
          <div className={styles.img_overlay}></div>
          <img src={front_imgSrc} className={styles.img_styles} />
          <div className={styles.destination_name}>
            <h1>{frontContent}</h1>
          </div>
        </div>

        {/*back side*/}
        <div className={styles.backSide}>
          <p className={styles.backText}>{backContent}</p>
        </div>
        
      </ReactCardFlip>
    </div>
  );
};

export default CardFlip;
