const { log } = require("console")
const fs = require("fs")
const EventEmitter = require("events")

const emitter = new EventEmitter()

emitter.on("alarm", (args1, args2) => {
	// log({ args1, args2 })
	const data = `User logged in on ${args1} and ${args2} logged.`
	fs.writeFileSync("log.txt", data)
})

emitter.on("alarm", () => {
	log("new alarm")
})

emitter.on("notification", () => {
	log("Notification sent") // Notification
})

emitter.emit("alarm", "12pm", "13HR")
emitter.emit("notification")

// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// eventEmitter.emit('my_event');
// eventEmitter.on('my_event', () => {
//   console.log('data received successfully.');
// });
