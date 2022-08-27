import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar /> <div>{children}</div> <Footer />
    </div>
  );
}

export default Layout;
