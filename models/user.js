const { Schema, model, trusted } = require("mongoose");

const User = new Schema ({
  username: {
    type: String, 
    required: true,
    unique: true, 
    trim: true,
  },
  email: {
    type: String, 
    required: true, 
    unique: true, 
    // match: [ regex script ]
  },
  thoughts: {
    // need to create thought.js model
  },
  friends: {
    // need to create friends.js model
  }

})


