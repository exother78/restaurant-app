importScripts("https://js.pusher.com/beams/service-worker.js");

const func = async (payload) => {
  return await fetch("http://localhost:5376/api/print/receipt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

PusherPushNotifications.onNotificationReceived = ({
  pushEvent,
  payload,
  handleNotification,
}) => {
  // let dataReceived;

  Promise.resolve(func(payload))
    .then((data) => data.json())
    .then((response) => {
      console.log("this is fetched data: ", response);
      // dataReceived = response;
    });
  console.log("payload is here: ", payload);

  pushEvent.waitUntil(handleNotification(payload));
};

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
// fetch("localhost:5376/api/print/receipt", {
//   headers: {
//     "Content-Type": "application/json",
//   },
//   method: "GET",
// })
//   .then((something) => alert("something has done successfully: ", something))
//   .catch((error) => alert("error is here: ", error));

// something.print();
//   pushEvent.waitUntil(
//     self.registration.showNotification("New Order", {
//       body: "body is this",
//       icon: "something else",
//       data: "something nothing",
//     })
//   );
