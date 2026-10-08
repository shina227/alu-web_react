import React from "react";
import close from "../assets/close.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite/no-important";
import { connect } from "react-redux";
import { markAsRead, fetchNotifications } from "../actions/notificationActionCreators";

class Notifications extends React.Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  componentDidMount() {
    this.props.fetchNotifications();
  }
  render() {
    const {
      handleDisplayDrawer,
      handleHideDrawer,
      displayDrawer,
      listNotifications,
      markAsRead
    } = this.props;

    console.log(displayDrawer, listNotifications.size, '======');
    return (
      <div className={css(styles.Notifications)}>
        <div className={css(styles.text)}>
          <p onClick={handleDisplayDrawer}>
            Here is the list of notifications{" "}
          </p>
          <button
            aria-label="close"
            style={{ textAlign: "right", display: "inline" }}
            onClick={handleHideDrawer}
          >
            <img src={close} alt="close" height={20} width={20} />
          </button>
        </div>

        {displayDrawer && <ul>
          {listNotifications.size > 0 ? (
            listNotifications.valueSeq().filter(notification => !notification.getIn(['context', 'isRead'])).map((notification) => (
              <NotificationItem
                id={notification.get("id")}
                markAsRead={() => {
                  markAsRead(notification.get('id'))}}
                key={notification.get("id")}
                type={notification.getIn(['context', 'type'])}
                value={notification.getIn(['context', 'value'])}
                html={notification.getIn(['context', 'html'])}
              />
            ))
          ) : (
            <NotificationItem markAsRead={() => { }} value="No new notification for now" />
          )}
        </ul>}
      </div>
    );
  }
}

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
  handleDisplayDrawer: () => { },
  handleHideDrawer: () => { },
  markNotificationAsRead: () => { },
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

const styles = StyleSheet.create({
  Notifications: {
    border: "2px solid pink",
    padding: "20px",
  },

  text: { display: "flex", justifyContent: "space-between" },
});

export function mapStateToProps(state) {
  return {
    listNotifications: state.notifications.get("notifications"),
    displayDrawer: state.ui.get ? state.ui.get("isNotificationDrawerVisible") : state.ui.isNotificationDrawerVisible,
  };
}

export default connect(mapStateToProps, {
  markAsRead,
  fetchNotifications,
})(Notifications);
