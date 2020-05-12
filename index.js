const { ServiceBroker } = require("moleculer");
const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");

const broker = new ServiceBroker();

// Create a Mongoose service for `user` entities
broker.createService({
    name: "users",
    mixins: [DbService],
    adapter: new MongoDBAdapter("mongodb+srv://user:user@moleculer-wurfx.mongodb.net/moleculeer"),
    collection: "users"
});

broker.start()
// Create a new user
.then(() => broker.call("users.create", {
    username: "nithin",
    name: "Nithin Joy Jose",
    status: 1
}))
then(() => broker.call("users.create", {
    username: "paul",
    name: "Paul Hamber",
    status: 1
}))

// Get all posts
.then(() => broker.call("users.find").then(console.log));
// Get a user by Id

broker.start()
.then(() => broker.call("users.get", { id: "5eba6d8ca1d9c30ce81242ac" }).then(console.log));

// Update a user by Id
broker.start()
.then(() => broker.call("users.update", { id: "5eba6d8ca1d9c30ce81242ac", name: "PssDoe" }).then(console.log));

// Delete a user by Id
broker.start()
.then(() => broker.call("users.remove", { id: "5eba6d8ca1d9c30ce81242ac" }).then(console.log));
