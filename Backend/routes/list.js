const router = require("express").Router();
const User = require("../models/user.model.js");
const List = require("../models/list.model.js");

//Task Creation ----> Create
router.post("/add-task", async (req, res) => {
  try {
    const { title, description, id } = req.body;
    const isUserExist = await User.findById(id);
    if (isUserExist) {
      const list = new List({ title, description, user: isUserExist });
      await list.save().then(() => res.status(200).json({ list: list }));
      isUserExist.list.push(list);
      await isUserExist.save();
    }
  } catch (error) {
    res.status(200).json({ message: "Invalid User" });
  }
});

//Task Update -------> Update
router.put("/update-task/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    const list = await List.findByIdAndUpdate(req.params.id, {
      title,
      description,
    });
    list.save().then(() => res.status(200).json({ message: "Task Updated" }));
  } catch (error) {
    res.status(400).json({ message: "Invalid User" });
  }
});

//Delete Task -------> Delete
router.delete("/delete-task/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const isUserExist = await User.findByIdAndUpdate(id, {
      $pull: { list: req.params.id },
    });
    if (isUserExist) {
      await List.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({ message: "Task Deleted" });
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid User" });
  }
});

//Get All Task -------> Read
router.get("/get-all-task/:id", async (req, res) => {
  try {
    const list = await List.find({ user: req.params.id }).sort({
      createdAt: -1,
    });
    if (list.length !== 0) {
      res.status(200).json({ list: list });
    } else {
      res.status(200).json({ message: "Please Add Task" });
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid User No Task Found" });
  }
});

module.exports = router;
