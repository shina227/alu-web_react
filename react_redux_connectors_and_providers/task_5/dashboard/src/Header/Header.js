/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../assets/logo.jpeg";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { logout } from "../actions/uiActionCreators";

export function Header({ user, isLoggedIn, logout }) {
  console.log(user, '======', isLoggedIn);
  return (
    <>
      <div className={css(styles.AppHeader)} data-testid="App-header">
        <img className={css(styles.AppHeaderImg)} src={logo} alt="logo" />
        <h1 className={css(styles.AppHeaderH1)}>School dashboard</h1>
      </div>
      {isLoggedIn && <h2 id="logoutSection">Welcome {user.email} <a href="#" data-testid="logout-link" onClick={(e) => {
        e.preventDefault();
        logout();
      }}>logout</a></h2>}
    </>

  );
}


const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    borderBottom: '4px solid red',
    marginBottom: ' 40px',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
  AppHeaderImg: {
    height: '300px',
  },
  AppHeaderH1: {
    color: 'red',
    fontSize: '60px'
  },
});

export function mapStateToProps(state) {
  const { ui } = state;
  return {
    user: ui?.get ? ui?.get('user') : ui?.user,
    isLoggedIn: ui?.get ? ui?.get('isUserLoggedIn') : ui?.isUserLoggedIn,
  };
}

export default connect(mapStateToProps, { logout })(Header);

