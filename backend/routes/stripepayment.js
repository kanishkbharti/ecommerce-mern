const { makePayment } = require("../controllers/stripepayment");

const router = require("express").Router();


router.post("/stripepayment", makePayment)


module.exports = router;