const { Schema, model } = require('mongoose'); 

const ThoughtSchema = new.Schema(
  {
    thoughtText: {
      type: String, 
      required: "Must have thought", 
      minlength: 1, 
      maxlength: 280,  
    }, 
    createdAt: {
      type: Date, 
      default: Date.now, 

      // figure out how to get current 'now' date
    }, 
    username: {
      type: String, 
      required: true
    },
  }
)


module.exports = thought; 
