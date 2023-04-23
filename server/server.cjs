
// import dotenv from 'dotenv';
// dotenv.config();

require('dotenv').config();

// const express = require("express");
const mongoose = require('mongoose');
// const app = express();
const cors = require('cors');


const express = require('express');
const { json } = require('express');
const app = express();

// import cookieParser from 'cookie-parser';
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


app.use(express.json({ limit: '1000mb' })); // Increase limit to 10 MB
app.use(express.urlencoded({ limit: '1000mb', extended: true }));

const userRoute = require('./app/routes/userRoute.js');
const courseRoute = require('./app/routes/courseRoute.js');
// import discussionRoute from './app/routes/discussionRoute.js';
// const notificationRoute = require('./app/routes/notificationRoute.js');
// const assignmentRoute = require('./app/routes/assignmentRoute.js');
// const submissionRoute = require('./app/routes/submissionRoute.js');
// const commentRoute = require('./app/routes/commentRoute.js');
// import quizzRoute from './app/routes/quizzRoute.js';
// const scheduleRoute = require('./app/routes/scheduleRoute.js');
const lessonRoute = require('./app/routes/lessonRoute.js');
// import adminRoute from './app/routes/adminRoute.js';
const adminRoute = require('./app/routes/adminRoute.js');
const announcementRoute = require('./app/routes/announcementRoute.js');

const server = require('http').createServer(app);
// const io = require('socket.io')(server);

// io.on('connection', (socket) => {
//   console.log('A user connected');
//   socket.on('disconnect', () => {
//   console.log('A user disconnected');
//   });
// });

// app.set('io', io);
app.use(cors());
app.use(json());
app.use(cookieParser());

 // "type": "module",
const dbURI = 'mongodb+srv://elite:elite@elite.2mfo0dl.mongodb.net/?retryWrites=true&w=majority';



app.get("/", (req, res) => {
  res.json({ message: "Welcome elite" });
});
mongoose.set({strictQuery: true});
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() =>{
    console.log('DataBase connected...');
    app.listen(3000);
  })
  .catch((err) => console.log(err));


  app.use(userRoute);
  app.use(courseRoute);
  // app.use(discussionRoute);
  // app.use(notificationRoute);
  // app.use(assegnmentRoute);
  // app.use(submissionRoute);
  // app.use(commentRoute);
  // app.use(quizzRoute);
  // app.use(scheduleRoute);
  app.use(lessonRoute);
  app.use(adminRoute);
  app.use(announcementRoute);
  
  // Set the maximum request body size to 10mb
app.use(bodyParser.json({ limit: '1000mb' }));
app.use(bodyParser.urlencoded({ limit: '1000mb', extended: true, parameterLimit:50000 }));

// app.use(express.json({ limit: '1000mb' })); // Increase limit to 10 MB
// app.use(express.urlencoded({ limit: '1000mb', extended: true }));

// app.use(bodyParser({limit: '50mb'}));

  



