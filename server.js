const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 8080;
const sgMail = require("@sendgrid/mail");
const brewerRouter = require("./routes/brewerRouter");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profileRoutes")

// env.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//Middleware
app.use(express.json());
app.use(morgan("dev"));

//connect to mongo
mongoose.connect(`mongodb://localhost:27017/brewery-db`, { useNewUrlParser: true})
    .then(() => console.log("MongoDB is now connected"))
    .catch(err => console.error(err))


//decode jwt and add a req.body on all request send to /api
app.use("/api", expressJwt({ secret: process.env.SECRET }));

//routes
app.use("/brewers", brewerRouter);
app.use("/auth", authRoutes);
app.use("/api/profile", profileRoutes)

//logic for sending email
app.post("/send", (req, res) => {
  const msg = {
    to: process.env.DB_USER,
    from: req.body.email,
    subject:
      req.body.fName + " " + req.body.lName + " sent a message from Webpage",
    text: req.body.message
  };
  sgMail.send(msg);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
