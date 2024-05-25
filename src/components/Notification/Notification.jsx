import css from "./Notification.module.css";

const Notification = ({ text }) => {
  return (
    <div>
      <p className={css.text}>{text}</p>
    </div>
  );
};

export default Notification;
