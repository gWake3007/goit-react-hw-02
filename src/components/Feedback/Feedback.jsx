import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, number }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          {good}
          <span className={css.number}>{number}</span>
        </li>
        <li className={css.item}>
          {neutral}
          <span className={css.number}>{number}</span>
        </li>
        <li className={css.item}>
          {bad}
          <span className={css.number}>{number}</span>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
