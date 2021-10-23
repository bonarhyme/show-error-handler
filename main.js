const express = require("express");
const app = express();

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const testRoutes = require("./routers/testRouter");

app.use("/", testRoutes);

// Not found URL middleware
app.use(notFound);

//Error handler for the whole app
app.use(errorHandler);

app.listen(3678, () => {
  console.log("Server running on port 3678");
});
