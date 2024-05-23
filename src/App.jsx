import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  return (
    <>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options btnTxt1="Good" btnTxt2="Neutral" btnTxt3="Bad" />
      <Feedback good="Good" neutral="Neutral" bad="Bad" />
    </>
  );
}

export default App;
