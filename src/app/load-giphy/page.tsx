import React from "react";
import BackButton from "@/components/BackButton/BackButton";
import GiphyLoader from "@/components/GiphyLoader/GiphyLoader";
import styles from "./giphyPage.module.css";

const LoadGiphyPage = () => {
  return (
    <div className={styles.giphyPage}>
      <div className={styles.titleContainer}>
        <BackButton />
        <h1>Load from Giphy</h1>
      </div>

      <div>
        <GiphyLoader />
      </div>
    </div>
  );
};

export default LoadGiphyPage;
