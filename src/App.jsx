import "./App.css";
import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [values, setValues] = useState({ good: 0, neutral: 0, bad: 0 });
  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };
  const resetFeedback = () => {
    setValues({
      ...values,
      good: (values.good = 0),
      neutral: (values.neutral = 0),
      bad: (values.bad = 0),
    });
  };
  const totalFeedback = values.good + values.neutral + values.bad;
  return (
    <>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        btnTxt1="good"
        btnTxt2="neutral"
        btnTxt3="bad"
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        btnReset="Reset"
      />
      {totalFeedback > 0 ? (
        <Feedback
          good="Good"
          neutral="Neutral"
          bad="Bad"
          goodFeedback={values.good}
          neutralFeedback={values.neutral}
          badFeedback={values.bad}
        />
      ) : (
        <Notification text="No feedback yet" />
      )}
    </>
  );
}

export default App;
