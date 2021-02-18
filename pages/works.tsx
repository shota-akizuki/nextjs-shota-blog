import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";
import contactStyles from "../styles/contact.module.css";

export default () => (
  <>
    <Header titlePre="Works" />
    <div className={sharedStyles.layout}>
      <h1>Works</h1>
      <p className={contactStyles.links}>
        Urguement on the Ice（2009~2016:活動休止）
      </p>
    </div>
  </>
);
