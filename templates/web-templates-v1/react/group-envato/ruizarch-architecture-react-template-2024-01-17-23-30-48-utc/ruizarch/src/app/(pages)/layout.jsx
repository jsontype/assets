import Header from "@layouts/headers/Index";
import Footer from "@layouts/footers/Index";

const PagesLayouts = ({
  children
}) => {
  return (
    <>
      <Header layout={"default"} />

      {/* content */}
      <div id="content">
        {children}

        <Footer layout={"default"} />
      </div>
      {/* content */}
    </>
  );
};
export default PagesLayouts;
