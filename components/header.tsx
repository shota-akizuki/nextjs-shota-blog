import Link from "next/link";
import Head from "next/head";
import ExtLink from "./ext-link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: "Home", page: "/" },
  { label: "Profile", page: "/profile" },
  // { label: "Works", page: "/works" },
];

export default ({ titlePre = "" }) => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ""} Shota Artist Webite</title>
        <meta name="description" content="Next.js site" />
        <meta name="og:title" content="Shota Artist Site" />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? "active" : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
};
