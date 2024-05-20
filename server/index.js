const express = require("express")
const app = express();
const cors = require("cors");
const dotenv = require("dotenv")

dotenv.config()

//middleware

app.use(express.json())
app.use(cors())

//routes
app.use("/auth", require("./routes/jwtAuth"))


//dashboard
app.use("/dashboard", require("./routes/dashboard"))

app.listen(process.env.PORT, () => {
    console.log("server is running on port 3000");
})