const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

// for parsing json
app.use(
  bodyParser.json({
    limit: "20mb",
  })
);
// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "20mb",
  })
);

mongoose.connect('mongodb+srv://lucas:dev2020@dialogflowcluster.nlhma.mongodb.net/chatboxDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, (err, res) => {
  if (err) return console.log("hay un error en la db", err);
  console.log("todo bien");
}
);

app.use("/messenger", require("./Facebook/facebookBot"));
app.use("/api", require("./routes/api"))


app.get("/", (req, res) => {
  return res.send("Chatbot Funcionando 🤖🤖🤖");
});

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
