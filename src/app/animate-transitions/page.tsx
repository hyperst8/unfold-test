import React from "react";
import BackButton from "@/components/BackButton/BackButton";
import AnimatedCard from "@/components/AnimatedCard/AnimatedCard";
import { bigCities } from "../../data/dummyData";

const AnimatePage = () => {
  return (
    <div className="titlePage">
      <div className="titleContainer">
        <BackButton />
        <h1>Animate transitions</h1>
      </div>

      <div className="flex-col-row">
        {bigCities.map((city, index) => (
          <AnimatedCard
            key={index}
            imageUrl={city.image}
            title={city.name}
            text={city.text}
            authorName={city.author}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatePage;
