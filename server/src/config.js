"use strict";
/* shared configuration for application - can be required many places */

const PORT = 3001;

function getDatabaseUri() {
  return 'postgres://postgres:nellestar@localhost:5432/todo';
};

console.log("todo config:");
console.log("PORT", PORT.toString());

module.exports = {
    PORT,
    getDatabaseUri,
}