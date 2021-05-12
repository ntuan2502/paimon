import "../styles/globals.css";
import "../styles/tailwind.css";
// import "../styles/tailwind-custom.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import IndexLayout from "../layouts/IndexLayout";

function MyApp({ Component, pageProps }) {
  return (
    <IndexLayout>
      <Component {...pageProps} />
    </IndexLayout>
  );
}

export default MyApp;
