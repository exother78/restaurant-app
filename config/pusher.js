const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1280334",
  key: "0c82d85a358b4a26fd15",
  secret: "883b8d720d06bf27ab29",
  cluster: "ap2",
  useTLS: true,
});

// pusher.trigger("messages", "something", {
//   message: "hello world",
// });

module.exports = pusher;
