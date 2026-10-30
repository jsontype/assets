import { Fragment } from "react";
import ContentModal from "../components/popup/ContentModal";
import ImageGallery from "../components/popup/ImageGallery";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <ImageGallery />
      <ContentModal />
      <div className="container">
        <Header />
        <div className="wrapper">{children}</div>
        <Footer />
      </div>
    </Fragment>
  );
};
export default Layout;
