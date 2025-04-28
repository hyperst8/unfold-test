import React from "react";
import BackButton from "@/components/BackButton/BackButton";
import GiphyLoader from "@/components/GiphyLoader/GiphyLoader";

const LoadGiphyPage = () => {
  return (
    <div className="titlePage">
      <div className="titleContainer">
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
