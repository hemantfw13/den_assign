import React from "react";
import { HeadingLayout } from "../styles/HeadingSubHeadingLayout";
import { VisionariesLayout } from "../styles/VisionariesLayout";
import VisionariesCard from "./VisionariesCard";
const Visionaries = () => {
  return (
    <VisionariesLayout>
      <HeadingLayout style={{ width: 775 }}>
        Meet the <strong>Visionaries</strong> behind Density.
      </HeadingLayout>
      <VisionariesCard />
    </VisionariesLayout>
  );
};

export default Visionaries;
