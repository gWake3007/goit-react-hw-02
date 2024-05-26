import "./App.css";
import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [values, setValues] = useState(() => {
    const saveUseState = localStorage.getItem("values");
    return saveUseState
      ? JSON.parse(saveUseState)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    const reset = { good: 0, neutral: 0, bad: 0 };
    setValues(reset);
    localStorage.setItem("values", JSON.stringify(reset));
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);
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
        btnReset="Reset"
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good="Good"
          neutral="Neutral"
          bad="Bad"
          total="Total"
          positive="Positive"
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
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
