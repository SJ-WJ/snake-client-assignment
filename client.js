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
    // Send message upon connecting
    console.log("Champ is here!")

    // Sending a name
    conn.write("Name: SWJ");

    // Moving up
    conn.write("Move: up");

  });
 
  // Accepting a message from the server
  conn.on("data", (data) => {
    console.log("Server says", data)
  });

  return conn;
};

module.exports = connect;