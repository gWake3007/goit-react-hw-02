import css from "./Options.module.css";

const Options = ({ btnTxt1, btnTxt2, btnTxt3, values }) => {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={() => values}>
        {btnTxt1}
      </button>
      <button className={css.btn} onClick={() => updateFeedback("neutral")}>
        {btnTxt2}
      </button>
      <button className={css.btn} onClick={() => updateFeedback("bad")}>
        {btnTxt3}
      </button>
    </div>
  );
};

export default Options;
