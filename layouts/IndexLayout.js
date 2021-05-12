import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexFooter from "../components/Footers/IndexFooter.js";

const Index = ({ children }) => {
  return (
    <div>
      <IndexNavbar />
      <div className="select-none py-20 pb-96 md:pb-20">{children}</div>
      <IndexFooter />
    </div>
  );
};

export default Index;
