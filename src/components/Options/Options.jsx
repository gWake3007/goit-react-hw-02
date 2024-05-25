import css from "./Options.module.css";

const Options = ({
  btnTxt1,
  btnTxt2,
  btnTxt3,
  updateFeedback,
  totalFeedback,
  btnReset,
  resetFeedback,
}) => {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={() => updateFeedback(btnTxt1)}>
        {btnTxt1}
      </button>
      <button className={css.btn} onClick={() => updateFeedback(btnTxt2)}>
        {btnTxt2}
      </button>
      <button className={css.btn} onClick={() => updateFeedback(btnTxt3)}>
        {btnTxt3}
      </button>
      {totalFeedback > 0 ? (
        <button className={css.btn} onClick={() => resetFeedback()}>
          {btnReset}
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Options;
