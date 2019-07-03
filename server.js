const express = require("express");
require('dotenv').config();
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = "./routes";
var passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var cookieParser = require("cookie-parser");
var cookieSession = require("cookie-session");

var profile;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(passport.initialize());
require("./config/passport");
app.use(passport.session());

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY]
  })
);
app.use(cookieParser());

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.

passport.serializeUser(function(user, done) {
  done(null, user);
 });
 passport.deserializeUser(function(user, done) {
  done(null, user);
 });
 passport.use(
  new GoogleStrategy(
   {
    clientID: "REACT_APP_GOOGLE_CLIENT_ID",
    clientSecret: "REACT_APP_GOOGLE_CLIENT_SECRET",
    callbackURL: "http://localhost:3000/auth/google/callback"
   },
   function(accessToken, refreshToken, profile, done) {
    var userData = {
     email: profile.emails[0].value,
     name: profile.displayName,
     token: accessToken
    };
    done(null, userData);
   }
  )
 );


// Add routes
app.use(routes);

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
