import Divider from "@material-ui/core/Divider";
import FooterStyles from "../styles/footer.module.css";

export default () => {
  return (
    <footer className={FooterStyles.layout}>
      <span>Copyright©Shota Akizuki All rights reserved.</span>
      <div>
        <span>Built with Vercel App.</span>
      </div>
    </footer>
  );
};
