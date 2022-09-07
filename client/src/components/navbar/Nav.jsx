import "./nav.css";
import React from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  
  return (
    <div className="navContainer">
      <div className="navContainerWrapper">
        <div className="leftWrapper">
            <span className="leftWrapperLang">EN</span>
            <div className="leftSearchContainer">
                <input type="text" className="leftSearchInput" />
                <Search />
            </div>
        </div>
        <div className="centerWrapper">
            <div className="centerLogo">DIGITAL-SPINE</div>
        </div>
        <div className="rightWrapper">
            <Link to={"/register"}>
              <div className="rightMenuItem">Register</div>
            </Link>
            <Link to={"/login"}>
              <div className="rightMenuItem">Sign In</div>
            </Link>
            <Link to={"/cart"}>
              <div className="rightMenuItem">
                  <Badge  badgeContent={quantity} color="secondary">
                      <ShoppingCartOutlined />
                  </Badge>
              </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
