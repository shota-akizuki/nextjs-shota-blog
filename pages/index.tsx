import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";

export default () => {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>Shota Akizuki</h1>
        <div>
          <img
            src="/static/bosatsu.png"
            alt="bosatsu"
            height="200"
            width="720"
          />
        </div>
      </div>
    </>
  );
};
