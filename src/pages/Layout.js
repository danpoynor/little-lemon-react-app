import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeedbackForm from "../components/forms/FeedbackForm";

const Layout = () => {
  return (
    <>
      <Header />
      <FeedbackForm />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;
