"use client";
import React, { useState } from "react";
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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpanding = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${styles.animatedCard} ${isExpanded ? styles.expanded : ""}`}
    >
      {isExpanded && (
        <button
          aria-label="close"
          className={styles.closeBtn}
          onClick={handleExpanding}
        >
          X
        </button>
      )}

      <div className={styles.imageWrapper} onClick={handleExpanding}>
        <img src={imageUrl} alt={title} className={styles.cardImage} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <button
          className={styles.zoomBtn}
          onClick={handleExpanding}
          aria-label="zoom"
        >
          <div className={styles.icon}>
            <span className={`${styles.corner} ${styles.topLeft}`} />
            <span className={`${styles.corner} ${styles.bottomRight}`} />
          </div>
        </button>
      </div>

      {isExpanded && (
        <div className={styles.expandedInfo}>
          <h2 className={styles.expandedTitle}>{title}</h2>
          <p className={styles.author}>By {authorName}</p>
        </div>
      )}
    </div>
  );
};

export default AnimatedCard;
