const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://end1989:whatever1@ds119052.mlab.com:19052/todolist"
);
mongoose.set("debug", true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({ task: String });

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
