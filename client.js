const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Establishing a connection to the server
  conn.on("connect", () => {
    console.log("Champ is here!") // code that does something when the connection is first established
  });

  // Accepting a message from the server
  conn.on("data", (data) => {
    console.log("Server says", data)
  });

  // Sending a name
  conn.on("connect", () => {
    conn.write("Name: SWJ");
  })



  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;