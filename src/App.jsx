import "./App.css";
import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [values, setValues] = useState({ good: 0, neutral: 0, bad: 0 });
  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good") {
      setValues({ ...values, good: values.good + 1 });
    } else if (feedbackType === "neutral") {
      setValues({ ...values, neutral: values.neutral + 1 });
    } else if (feedbackType === "bad") {
      setValues({ ...values, bad: values.bad + 1 });
    }
  };
  return (
    <>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        btnTxt1="Good"
        btnTxt2="Neutral"
        btnTxt3="Bad"
        updateFeedback={feedbackType}
      />
      <Feedback
        updateFeedback
        good="Good"
        neutral="Neutral"
        bad="Bad"
        updateFeedback={feedbackType}
      />
    </>
  );
}

export default App;
