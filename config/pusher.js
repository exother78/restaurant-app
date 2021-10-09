const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1278957",
  key: "957d4302761e585c5d31",
  secret: "b1d2723988e3afa281b7",
  cluster: "ap2",
  useTLS: true,
});

// pusher.trigger("messages", "something", {
//   message: "hello world",
// });

module.exports = pusher;
