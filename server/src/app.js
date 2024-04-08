// use strict to throw more errors 
"use strict";

const express = require("express");

// Create instance of express app saved to 'app'
const app = express();

// Define a test route
app.get("/test/db", async (req, res) => {
  try {
    const result = await db.query("SELECT 1");

    res.status(200).json({ message: "Database connected successfully" });
  } catch (error) {
    console.error("Error connecting to database:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Handle 404 errors
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

// Generic error handler
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

// Export the app instance to be imported and used in other files
module.exports = app;