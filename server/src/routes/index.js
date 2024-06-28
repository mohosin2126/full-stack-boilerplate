import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Mohosin I'm Running!");
});

export default router;