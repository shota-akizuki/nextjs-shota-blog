import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";
import profileStyles from "../styles/profile.module.css";

const Works = () => (
  <>
    <Header titlePre="Works" />
    <div className={sharedStyles.layout}>
      <h1 className={sharedStyles.title}>Works</h1>
      <p className={profileStyles.links}>
        Urguement on the Ice（2017~: 活動休止中）
      </p>
    </div>
  </>
);

export default Works;
