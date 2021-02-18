import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";

export default () => {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1 style={{ fontSize: 48 }}>Shota Akizuki</h1>
        <img src="/static/bosatsu.png" alt="bosatsu" width="720" />
      </div>
    </>
  );
};
