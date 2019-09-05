require("dotenv").config();
const server = require('./api/server.js');

const port = process.env.PORT;
console.log("Port ", port)
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
