import "../styles/global.css";
import Footer from "../components/footer";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}
