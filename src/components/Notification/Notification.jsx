import css from "./Notification.module.css";

const Notification = ({ text }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>{text}</p>
    </div>
  );
};

export default Notification;
