import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";

export default () => {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1 className={sharedStyles.title} style={{ fontSize: 48 }}>
          Shota Akizuki
        </h1>
        <h2>-Aritist Website-</h2>
        <img src="/static/senju_bosatsu.jpg" alt="bosatsu" width="420" />
      </div>
    </>
  );
};
