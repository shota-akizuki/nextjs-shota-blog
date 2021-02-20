import Header from "../components/header";
import ExtLink from "../components/ext-link";
import sharedStyles from "../styles/shared.module.css";
import contactStyles from "../styles/contact.module.css";
import profileStyles from "../styles/profile.module.css";
import Envelope from "../components/svgs/envelope";
import Instagram from "../components/svgs/instagram";
import Twitter from "../components/svgs/twitter";

const contacts = [
  {
    Comp: Twitter,
    alt: "twitter icon",
    link: "https://twitter.com/shota_akizuki",
  },
  {
    Comp: Instagram,
    alt: "instagram icon",
    link: "https://www.instagram.com/shota_akizuki/",
  },
  {
    Comp: Envelope,
    alt: "envelope icon",
    link: "mailto:shota0609akizuki@gmail.com",
  },
];

export default () => (
  <>
    <Header titlePre="Profile" />
    <div className={sharedStyles.layout}>
      <img
        className={profileStyles.avatar}
        src="/static/shota.JPG"
        alt="shota"
        width="180"
      />
      <h1 className={profileStyles.title} style={{ fontSize: 24 }}>
        Shota Akizuki
      </h1>
      <h2 className={profileStyles.name2} style={{ fontSize: 24 }}>
        Vocalist / Guitarist / Composer
      </h2>
      <h2 className={profileStyles.name} style={{ fontSize: 16 }}></h2>
      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={24} />
            </ExtLink>
          );
        })}
      </div>
    </div>
  </>
);
