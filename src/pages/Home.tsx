import { FeaturedProperties } from "components/HomePage/FeaturedProperties";
import { MainContent } from "components/HomePage/MainContent";
import { MainContentCards } from "components/HomePage/MainContentCards";
import { Reviews } from "components/HomePage/Reviews";
import React from "react";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <MainContent />
      <MainContentCards />
      <FeaturedProperties />
      <Reviews />
    </React.Fragment>
  );
};
