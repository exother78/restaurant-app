importScripts("https://js.pusher.com/beams/service-worker.js");

PusherPushNotifications.onNotificationReceived = ({
  pushEvent,
  payload,
  handleNotification,
}) => {
  // console.log("pusherpush here : ", PusherPushNotifications);
  // console.log("something happened here");
  //   navigator.doNotTrack();
  // console.log("payload: ", payload);
  // window.print();
  // let something = "<h1>someting is this </h1>";

  // console.log(
  //   "som:",
  //   something.props,
  //   "asd :",
  //   something.key,
  //   "asdfasdf",
  //   something.type
  // );
  // something.print();
  //   pushEvent.waitUntil(
  //     self.registration.showNotification("New Order", {
  //       body: "body is this",
  //       icon: "something else",
  //       data: "something nothing",
  //     })
  //   );
  pushEvent.waitUntil(handleNotification(payload));
};
