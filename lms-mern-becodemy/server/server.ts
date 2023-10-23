import { app } from "./app";
require("dotenv").config();

// Create Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
