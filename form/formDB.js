// I brought in the database configuration
const db = require("../data/db-config");

// Export the helper function so that it can be used in the formRouter
module.exports = {
  postForms,
  getFormById,
  getAllForms, //Function for adding a new form to the database
};

function getAllForms() {
  // i will use 'db' to do sql with JS
  //  SELECT * FROM posts;
  return db("forms");
}

function getFormById(utmeReg) {
  // This is the SQL equivalent of WHERE id = id
  // It resolves to an array of records
  return db("forms").where({ utmeReg }).first();
}

function postForms({ utmeReg, amountDue }) {
  // This is the SQL equivalent of INSERT INTO forms (doctor_name, department, doctors_rank,task_description) VALUES (data to be added)
  return db("forms").insert({
    utmeReg: utmeReg,
    amountDue: amountDue,
  });
}
