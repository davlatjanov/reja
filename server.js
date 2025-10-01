const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://davlatjanov:Davlatjonov1@cluster0.mdkoqje.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, data) => {
    if (err) {
      console.log("ERROR:", err);
    } else {
      console.log("Connected to MongoDB successfully");
      module.exports = data;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3001;

      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on PORT: http://localhost:${PORT}`
        );
      });
    }
  }
);
