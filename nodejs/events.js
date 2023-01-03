const EventEmitter = require("events");

const customEvent = new EventEmitter();

customEvent.on("response", (name, id) => {
  console.log(`data recived ${name} ,    id ${id}`);
});
customEvent.emit("response", "john", 22);
