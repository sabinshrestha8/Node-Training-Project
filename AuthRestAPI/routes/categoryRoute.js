const express = require("express");
const router = express.Router();
const verify = require("../middleware/verifyToken");

const {
    getAllCategory,
    storeCategory,
    getCategoryById,
    updateCategory,
    destroyCategory,
} = require("../controller/category-controller");

// get all Category, Request method: GET
router.get("/category", verify, getAllCategory);

// get all Category, Request method: GET
router.post("/category", verify, storeCategory);

// get a single Category, Request method: GET
router.get("/category", verify, getCategoryById);

// Update a Category, Request method: PATCH
router.patch("/category/:id", verify, updateCategory);

// Delete a Category, Request method: DELETE
router.delete("/category/:id", verify, destroyCategory);

module.exports = router;
