const Course = require('../models/Course') ;
const User = require("../models/User");
// const Lesson = require("../models/Lesson"); // Import the Lesson model
const multer = require('multer');
const upload = require('../middleware/uploadMiddleware');
const fs = require('fs');
const path = require('path');
const Lesson = require('../models/Lesson');
const Discussion = require('../models/Discussion');
const mongoose = require('mongoose');


// GET all lessons
module.exports.getAllLessons = async (req, res) => {
    try {
      const lessons = await Lesson.find();
      res.json(lessons);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // GET a single lesson by id
  module.exports.getLessonById = async (req, res) => {
    try {
      const lesson = await Lesson.findById(req.params.id);
      if (!lesson) {
        return res.status(404).json({ error: "Lesson not found" });
      }
      res.json(lesson);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  
// POST create a new lesson with files
module.exports.createLesson = [
  async (req, res) => {
    try {
      // Check if the request body contains base64 encoded file data
      if (req.body.file) {
        // Decode the base64 data to a Buffer
        const fileData = Buffer.from(req.body.file, 'base64');

        // Create a temporary file to write the Buffer data
        const tempFileName = 'temp_' + Date.now();
        fs.writeFileSync(tempFileName, fileData);

        // Create the file object for multer upload
        const tempFile = {
          originalname: 'lesson_file',
          mimetype: req.body.mimetype,
          buffer: fs.readFileSync(tempFileName)
        };

        // Add the file object to the request files array
        req.files = [tempFile];
      }

      // Extract the files from the request and add them to the gallery array
      const gallery = req.files.map(file => ({
        contentType: file.mimetype,
        data: file.buffer,
        // postedBy: req.user._id
      }));

      // Create the lesson object
      const lesson = new Lesson({
        title: req.body.title,
        description: req.body.description,
        gallery: gallery,
        course: req.body.course
      });

        // Create discussion forum associated with the lesson
        const discussion = new Discussion({
        lesson: lesson._id,
        messages: []
       });
       await discussion.save();
       
       const users = [...course.students, ...course.teachers];

       for (const user of users) {
          const notification = {
          user: user,
          sender: req.user._id,
          message: `New lesson "${lesson.title}" created in ${course.title}`
        };
      await addNotification(notification);
      }
      
       // Add the new lesson to the course
       const course = await Course.findById(req.body.course);
       course.lessons.push(lesson._id);
       await course.save();


      // Save the lesson object
      await lesson.save();

      res.json(lesson);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
];
  

// PUT update a lesson with files
module.exports.updateLesson = [
  async (req, res) => {
    try {

      // Check if the request body contains base64 encoded file data
      if (req.body.file) {
        // Decode the base64 data to a Buffer
        const fileData = Buffer.from(req.body.file, 'base64');

        // Create a temporary file to write the Buffer data
        const tempFileName = 'temp_' + Date.now();
        fs.writeFileSync(tempFileName, fileData);

        // Create the file object for multer upload
        const tempFile = {
          originalname: 'lesson_file',
          mimetype: req.body.mimetype,
          buffer: fs.readFileSync(tempFileName)
        };

        // Add the file object to the request files array
        req.files = [tempFile];

        
      }
      const lesson = await Lesson.findById(req.params.id);
      // Extract the files from the request and add them to the gallery array
      if (req.body.file) {
        const gallery = req.files.map(file => ({
          contentType: file.mimetype,
          data: file.buffer,
          postedBy: req.user._id
        }));

        lesson.gallery = gallery;
      }


      // Update the lesson object

      if(req.body.title){
        lesson.title = req.body.title;
      }
      if(req.body.description){
        lesson.description = req.body.description;
      }
    
    
      await lesson.save();

      res.json(lesson);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
];


  // DELETE a lesson by id
 
  
  module.exports.deleteLesson = async (req, res) => {
    try {

      const _id = req.params.id;
  
      // Delete the lesson and associated discussion forum
    
      const deletedLesson = await Lesson.findByIdAndDelete(_id);
      // await Discussion.deleteOne({ lesson: lessonId });

       // Remove the lesson ID from the associated course
    const course = await Course.findOneAndUpdate(
      { lessons: _id }, // Find the course that has the lesson ID in its lessons array
      { $pull: { lessons: _id } }, // Remove the lesson ID from the lessons array field
      { new: true }
    );
      
      if (!deletedLesson) {
        return res.status(404).json({ message: 'Lesson not found' });
      }
  
      res.status(200).json({ message: 'Lesson deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  