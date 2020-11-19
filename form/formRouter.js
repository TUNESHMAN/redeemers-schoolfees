const express = require("express");
const { getAllForms, postForms, getFormById } = require("./formDB");
// Import the helper functions and save it in a variable
const form = require("./formDB");

// Bring in the router
const router = express.Router();

// The forms endpoint here 👇👇👇
router.get("/", async (req, res) => {
  try {
    const allForms = await getAllForms();
    res.json(allForms);
  } catch (e) {
    console.log(e);
  }
});

router.get(`/:utmeReg`, async (req, res) => {
  try {
    const desiredForm = await getFormById(req.params.utmeReg);
    res.json(desiredForm);
  } catch (error) {
    console.log(error);
  }
});

// Endpoint for adding forms
router.post("/", (req, res) => {
  // We are adding a new form so we need req.body
  const newForm = req.body;
  log;
  form
    .postForms(newForm)
    .then((freshForm) => {
      res.status(201).json(freshForm);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

module.exports = router;
