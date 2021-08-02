import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <div className="header">
      <div className="headerSection__top">
        <div className="header__advert">
          <img
            src="https://ke.jumia.is/cms/2021/SuperBrandDay/LOreal/Tease/Banners/ezgif.com-gif-maker-(2).gif"
            alt=""
          />
        </div>
        <div className="header__wording">
          <h5>FOOD</h5>
          <h5>PAY</h5>
        </div>
      </div>
      <div className="headerSection__bottom">
        {/* ------navigation - logo, searchbar login .... */}
        <div className="jumia__logo">
          {/* logo */}
          <img
            src="https://cdn.freelogovectors.net/wp-content/uploads/2019/02/jumia-logo.png"
            alt=""
          />
        </div>
        {/* searchbar and button */}
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search products, brands and categories"
          />
          <button>SEARCH</button>
        </div>
        {/* user login */}
        <div className="logIns">
          <PersonIcon />
          <span className="">Hi, Valentine</span>
          <ExpandMoreIcon />
        </div>
        {/* help */}
        <div className="help">
          <HelpOutlineIcon />
          <span className="">Help</span>
          <ExpandMoreIcon />
        </div>
        {/* cart */}
        <div className="cart">
          <ShoppingCartIcon />
          <span className="">Cart</span>
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
