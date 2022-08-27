import Footer from "./Footer";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { selectServ } from "../slices/Services";

function Layout({ children }) {
  const servs = useSelector(selectServ);
  // console.log(servs);
  return (
    <div>
      <Navbar /> <div>{children}</div>{" "}
      <Footer services={servs?.serv?.services} />
    </div>
  );
}

export default Layout;
