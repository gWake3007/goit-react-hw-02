import css from "./Options.module.css";

const Options = ({ btnTxt1, btnTxt2, btnTxt3 }) => {
  return (
    <div className={css.container}>
      <button className={css.btn}>{btnTxt1}</button>
      <button className={css.btn}>{btnTxt2}</button>
      <button className={css.btn}>{btnTxt3}</button>
    </div>
  );
};

export default Options;
