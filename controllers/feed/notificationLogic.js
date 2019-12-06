import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import axios from 'axios';

export const configureNotifications = () => {
  PushNotification.configure({
    // Called when token is generated (IOS and Android)
    onRegister: function(token) {
      console.log('TOKEN:', token);
    },
    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
      console.log('NOTIFICATION:', notification);
      // process the notification
      // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
    //senderID: 'YOUR GCM (OR FCM) SENDER ID',
    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    // Should the initial notification be popped automatically
    popInitialNotification: true,
    /**
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     */
    requestPermissions: true,
  });
};

export const scheduleNotification = (timestamp, id, title, message, repeat) => {
  PushNotification.localNotificationSchedule({
    title: title,
    message: message,
    id: id,
    date: new Date(timestamp),
    userInfo: {id: id},
    repeatType: repeat,
  });
};

export const cancelNotification = id => {
  PushNotification.cancelLocalNotifications({id: id});
};

export const setReminderDatabase = (timeString, reminderId, adviesId) => {
  return axios.post(serverUrl + '/back-up-plan/v1/set_new_reminder', {
    reminderId,
    adviesId,
    timeString,
  });
};

export const getRemindersDatabase = adviesId => {
  return axios.post(serverUrl + '/back-up-plan/v1/get_advies_reminders', {
    adviesId,
  });
};

export const removeReminderDatabase = reminderId => {
  return axios.post(serverUrl + '/back-up-plan/v1/remove_reminder', {
    reminderId,
  });
};
