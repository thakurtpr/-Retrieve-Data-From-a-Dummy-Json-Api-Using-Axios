const express = require("express");
const {
  getAllData,
  getsingleData,
  postData,
  putData,
  patchData,
  deleteData,
} = require("../controllers/axiosController");
// const {
//   postvalidator,
//   putvalidator,
//   patchvalidator,
// } = require("../validator/validator");
const postvalidator = require("../validator/validator");

const router = express.Router();

router.get("/getData", getAllData);
router.get("/getData/:id", getsingleData);
router.post("/postData", postvalidator, postData);
// router.put("/putData/:id", putvalidator, putData);
// router.patch("/patchData/:id", patchvalidator, patchData);
router.delete("/deleteData/:id", deleteData);

module.exports = router;
