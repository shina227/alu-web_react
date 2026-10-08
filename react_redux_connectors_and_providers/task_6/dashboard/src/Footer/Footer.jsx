/* eslint-disable jsx-a11y/anchor-is-valid */
import { getFooterCopy, getFullYear } from "../utils/utils";
import './Footer.css';
import { connect } from "react-redux";

export function Footer({ user, isLoggedIn }) {
  return (
    <div className="App-footer" data-testid="App-footer">
      <p>Copyright {getFullYear()} - holberton School {isLoggedIn && <span>| <a href="#">contact us</a></span>}</p>
      <p>{getFooterCopy(false)}</p>
    </div>
  );
}


export function mapStateToProps(state) {
  const { ui } = state;
  return {
    user: ui?.get ? ui?.get('user') : ui?.user,
    isLoggedIn: ui?.get ? ui?.get('isUserLoggedIn') : ui?.isUserLoggedIn,
  };
}


export default connect(mapStateToProps)(Footer);