importScripts("https://js.pusher.com/beams/service-worker.js");

PusherPushNotifications.onNotificationReceived = ({
  pushEvent,
  payload,
  handleNotification,
}) => {
  // Your custom notification handling logic here 🛠️
  // This method triggers the default notification handling logic offered by
  // the Beams SDK. This gives you an opportunity to modify the payload.
  // E.g. payload.notification.title = "A client-determined title!"
  pushEvent.waitUntil(handleNotification(payload));
};
