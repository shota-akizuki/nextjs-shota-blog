import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";
import contactStyles from "../styles/contact.module.css";

export default () => (
  <>
    <Header titlePre="Works" />
    <div className={sharedStyles.layout}>
      <h1 className={sharedStyles.title}>Works</h1>
      <p className={contactStyles.links}>
        Urguement on the Ice（2017~: 活動休止中）
      </p>
    </div>
  </>
);
