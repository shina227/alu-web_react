import loginInfo from './login-success.json'
import notifications from './notifications.json'

export function getLoginInfo() {
    return Promise.resolve(loginInfo);
}

export function getNotifications() {
    return Promise.resolve(notifications);
}



