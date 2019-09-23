const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());


const publicVapidKey = 'BCRwdS1Q1IKFKRqQvuFfgAgSJVJGHh4Ve0YFCaNItkXZS9s-xm8iTuThc3M50K2YC2Vg6mv7ZUkfxb5aPIEvKc8';
const privateVapidKey = 'I5HjxL255EZPNiV2T4a5WcOW7QYN4Vjzk0C0s-hk1p8';


webpush.setVapidDetails(
    "mailto:test@test.com",
    publicVapidKey,
    privateVapidKey
  );
  
  // Subscribe Route
  app.post("/subscribe", (req, res) => {
    // Get pushSubscription object
    const subscription = req.body;
  
    // Send 201 - resource created
    res.status(201).json({});
  
    // Create payload
    const payload = JSON.stringify({ title: "Push Test" });
  
    // Pass object into sendNotification
    webpush
      .sendNotification(subscription, payload)
      .catch(err => console.error(err));
  });
  
  const port = 9000;
  
  app.listen(port, () => console.log(`Server started on port ${port}`));
  