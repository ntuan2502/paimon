import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexFooter from "../components/Footers/IndexFooter.js";
import Head from "next/head";

const Index = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexNavbar />
      <div className="select-none py-16 pb-24 md:pb-20">{children}</div>
      <IndexFooter />
    </div>
  );
};

export default Index;
