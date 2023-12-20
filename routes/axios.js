const express = require("express");
const {
  getAllData,
  getsingleData,
  postData,
  putData,
  patchData,
  deleteData,
} = require("../controllers/axiosController");

const router = express.Router();

router.get("/getData", getAllData);
router.get("/getData/:id", getsingleData);
router.post("/postData", postData);
router.put("/putData/:id", putData);
router.patch("/patchData/:id", patchData);
router.delete("/deleteData/:id", deleteData);

module.exports = router;
