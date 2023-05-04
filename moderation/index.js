import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
 * 1. Receive event from event bus
 * 2. Check if comment contains the word 'orange'
 * 3. If it does, update the the query service with the status of 'rejected'
 * 4. If it doesn't, update the the query service with the status of 'approved'
 */

app.listen(3004, () => {
  console.log("Moderation server is running on port 3004");
});
