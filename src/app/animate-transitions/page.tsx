import React from "react";
import BackButton from "@/components/BackButton/BackButton";
import AnimatedCard from "@/components/AnimatedCard/AnimatedCard";

const AnimatePage = () => {
  return (
    <div className="titlePage">
      <div className="titleContainer">
        <BackButton />
        <h1>Animate transitions</h1>
      </div>

      <div>
        <AnimatedCard
          imageUrl="https://chopsticksontheloose.com/wp-content/uploads/2023/08/ce0d98f97cb947559ba1af37f059ee86-jpg.webp"
          title="Tokyo"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae."
          authorName="John Doe"
        />
      </div>
    </div>
  );
};

export default AnimatePage;
