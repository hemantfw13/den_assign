import React from "react";
import { FeedbackLayout } from "../styles/FeedbackLayout";
import {
  HeadingLayout,
  SubHeadingLayout,
} from "../styles/HeadingSubHeadingLayout";
import FeedbackCard from "./FeedbackCard";
const Feedback = () => {
  return (
    <FeedbackLayout>
      <HeadingLayout
        style={{
          color: "#0E0E0F",
          marginTop: 117,
          position: "absolute",
          marginLeft: 320,
        }}
      >
        Don’t take our word for it.
      </HeadingLayout>
      <SubHeadingLayout
        style={{
          width: 660,
          position: "absolute",
          color: "#32333A",
          marginLeft: 400,
          marginTop: 227,
        }}
      >
        Hear it from our expert community of traders who have made insane
        amounts in a short amount of time
      </SubHeadingLayout>
      <FeedbackCard />
    </FeedbackLayout>
  );
};

export default Feedback;
