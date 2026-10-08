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
  return {
    user: state.get ? state.get('user') : state.user,
    isLoggedIn: state.get ? state.get('isUserLoggedIn') : state.isUserLoggedIn,
  };
}


export default connect(mapStateToProps)(Footer);