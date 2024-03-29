const User = require('../models/User');
const jwt = require('jsonwebtoken');

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'elite', {
    expiresIn: maxAge
  });
};


// controller actions

module.exports.getUser = async (req, res) =>{
    _id = req.params.id;
    try{
<<<<<<< HEAD
      const user = await User.findById(_id)
    .populate({
        path: 'courses.courseID',
        populate: [
            { path: 'assignments' },
            { path: 'schedules' },
            { path: 'quizzes' }
        ]
    }).populate({
      path: 'notifications',
    });
      ;if(user){
=======
        const user = await User.findById(_id)
        .populate({path:'courses.courseID',populate:[{path:'assignments',populate:[{path:'course'}]}, {path:'quizzes'}, {path:'schedules'}, {path:'announcements'}]}).populate('notifications')


        if(user){
>>>>>>> ab6ff38bd999d1afae72dcd51f5739dee5886aa8
            res.status(200).send(user);
        
        }else{
            res.status(404).json({message: "User not found"});
        }
        
    }catch(err){
        console.log("fetch failed");
        res.status(500).json({message: err.message});
    }
}

module.exports.updateProfile = async (req, res)=>{
    try {
        _id = req.params.id;
        
        const user = await User.findOneAndUpdate({_id}, req.body, {new: true});

        if(user){
            res.status(200).json(user);

        }else{
            res.status(400).json({message: 'User not found'})
        }

    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports.login_get = async (req, res) => {
    res.status(200).send("this is the login page");
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    // const maxAge = 1000 * 60 * 60 * 24;  
    try {
      const user = await User.login(email, password);
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({user: user._id,
                            isAdmin: user.isAdmin,
                            message : "login successfull",
                            token: token });
    } 
    catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
  
  }
  

  module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}

