import loginInfo from './login-success.json'
import notifications from './notifications.json'
import courses from './courses.json'

export function getLoginInfo() {
    return Promise.resolve(loginInfo);
}

export function getNotifications() {
    return Promise.resolve(notifications);
}

export function getCourses() {
    console.log(courses, '====== courses, ')
    return Promise.resolve(courses);
}



