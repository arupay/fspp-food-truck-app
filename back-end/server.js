//DEPENDENCIES
const app = requires("./apps");

//CONFIGURATION
require("dotenv").config();

const PORT = process.env.PORT;

//LISTEN
app.listen(PORT, () => {
  console.log(` Trucking' on port ${PORT}  `);
});
