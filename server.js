const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const plansController = require("./controllers/plans-controller");

app.use(cors())
app.use(express.json())

app.use("/", plansController);
app.use("/tweets", plansController);

app.listen(PORT, console.log(`server runnig on port ${PORT}`));
