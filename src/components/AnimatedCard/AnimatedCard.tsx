import React from "react";
import styles from "./animatedCard.module.css";

interface AnimatedCardProps {
  imageUrl: string;
  title: string;
  text: string;
  authorName: string;
}

const AnimatedCard = ({
  imageUrl,
  title,
  text,
  authorName,
}: AnimatedCardProps) => {
  return (
    <div className={styles.animatedCard}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default AnimatedCard;
