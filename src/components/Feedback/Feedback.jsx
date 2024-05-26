import css from "./Feedback.module.css";

const Feedback = ({
  good,
  neutral,
  bad,
  total,
  positive,
  goodFeedback,
  neutralFeedback,
  badFeedback,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          {good}: <span className={css.number}>{goodFeedback}</span>
        </li>
        <li className={css.item}>
          {neutral}: <span className={css.number}>{neutralFeedback}</span>
        </li>
        <li className={css.item}>
          {bad}: <span className={css.number}>{badFeedback}</span>
        </li>
        <li className={css.item}>
          {total}: <span className={css.number}>{totalFeedback}</span>
        </li>
        <li className={css.item}>
          {positive}: <span className={css.number}>{positiveFeedback}%</span>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
