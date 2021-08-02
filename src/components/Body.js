import React from "react";
import "./Body.css";
import AppleIcon from "@material-ui/icons/Apple";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ContactlessIcon from "@material-ui/icons/Contactless";
import RefreshIcon from "@material-ui/icons/Refresh";

function Body() {
  return (
    <div className="body">
      {/* ------navigation - items ie supermarket, home office */}
      <div className="navbar">
        <div className="navbar__items">
          <a href="">
            <AppleIcon />
            Supermarket
          </a>
          <a href="">Health & Beauty</a>
          <a href="">Home & Office</a>
          <a href="">Phone & Tablets</a>
          <a href="">Computing</a>
          <a href="">Electronics</a>
          <a href="">Fashion</a>
          <a href="">Gaming</a>
          <a href="">Baby Products</a>
          <a href="">Sporting Goods</a>
          <a href="">Garden & Outdoors</a>
          <a href="">
            <MoreHorizIcon />
            Other categories
          </a>
        </div>
      </div>
      {/* ------banner carousel */}
      <div className="carousel">
        <img src="https://ke.jumia.is/cms/2021/W26/NewHome/Webp.net-resizeimage-(62)-(1).jpg" />
      </div>
      {/* ------navigation small like jumia global jumia food */}
      <div className="second__navbar">
        <div className="navbar__second">
          <h5>
            <HelpOutlineIcon />
            HELP CENTER <br />
            <span className='secondCaption'>Guide To Customer care</span>
          </h5>
          <h5>
            <RefreshIcon />
            EASY RETURN <br />
            <span className='secondCaption'>Quick Refund</span>
          </h5>
          <h5>
            <ContactlessIcon />
            SELL ON JUMIA <br />
            <span className='secondCaption'>Millions Of Visitors</span>
          </h5>
        </div>
        <div className="second__carousel">
          <h1>Second Carousel will be here</h1>
        </div>
      </div>
    </div>
  );
}

export default Body;
