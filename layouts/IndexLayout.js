import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexFooter from "../components/Footers/IndexFooter.js";
import Head from "next/head";

export default function Index({ children }) {
  return (
    <div className="select-none">
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <IndexNavbar />

      <div className="pt-10 pb-24 md:pb-20">{children}</div>
      {/* <IndexFooter /> */}
    </div>
  );
}
