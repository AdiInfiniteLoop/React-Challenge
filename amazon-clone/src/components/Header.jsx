import "../header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Header = () => {
  return (
    <div className="header">
      <img className="header_logo" src="/amazon_files/amazon_PNG11.png" />
      <div className="header_search">
        <input
          className="header_searchIn"
          type="text"
          placeholder="Search Amazon.in"
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_line0"> EN</span>
        </div>
        <div className="header_option">
          <span className="header_option_line0"> Hello sign in</span>
          <span className="header_option_line1">Account & Lists</span>
        </div>
        <div className="header_option">
          <span className="header_option_line0"> Returns</span>
          <span className="header_option_line1"> & Orders</span>
        </div>
        <div className="header_basket">
          <AddShoppingCartIcon className="cart_icon" />
          <span className="header_option_line1  header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
