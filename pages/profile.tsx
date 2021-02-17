import Header from "../components/header";
import ExtLink from "../components/ext-link";
import sharedStyles from "../styles/shared.module.css";
import contactStyles from "../styles/contact.module.css";

export default () => (
  <>
    <Header titlePre="Profile" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}></div>
      <h1 className={contactStyles.title}>Profile</h1>
      <h2 className={contactStyles.name}>Shota Akizuki</h2>
      <div className={contactStyles.links}></div>
    </div>
  </>
);
