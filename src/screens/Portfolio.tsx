import LeftPart from "../components/leftpart";
import MobileMenu from "../components/mobile/menu";
import RightPart from "../components/rightpart";

const Portfolio = () => {
  return (
    <>
      <div className="arlo_tm_wrapper_all">
        <div id="arlo_tm_popup_blog">
          <div className="container">
            <div className="inner_popup scrollable"></div>
          </div>
          <span className="close">
            <a href="#"></a>
          </span>
        </div>
        {/* <!-- MOBILE MENU --> */}
        <MobileMenu />
        {/* <!-- /MOBILE MENU -->  */}
        {/* <!-- CONTENT --> */}
        <div className="arlo_tm_content">
          {/* left */}
          <LeftPart />
          {/* right */}
          <RightPart />
          <a className="arlo_tm_totop" href="#"></a>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
