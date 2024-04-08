"use strict";

const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

// Create a new Client instance
const db = new Client({
  connectionString: getDatabaseUri(),
});

db.connect()
  .then(() => console.log("Connected to PostgreSQL database"))
  .catch((err) =>
    console.error("Error connecting to PostgreSQL database:", err)
  );

module.exports = db;
