const Course = require("../models/Course");

const createCourse = async (req, res) => {
  try {
    const { title, description } = req.body;

    const course = await Course.create({
      title,
      description,
      user: req.user._id,
    });

    res.status(201).json(course);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCourses = async (req, res) => {
  try {

    const courses =
      await Course.find({
        user: req.user._id,
      });

    res.json(courses);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCourse,
  getCourses,
};