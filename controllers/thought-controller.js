const { thought, user } = require('../models'); 

// get all thoughts 
const thoughtController = {
  getAllThought(req, res) {
    thought.find({})
    .populate({
      path: "reactions", 
      select: "//"
    })
    .select("-__v")
    //sort via id in order of 1
    .sort({ _id: -1 })
    .then((dbThoughtData)=> res.json(dbThoughtData))
    .catch((err) => {
      console.log(err);
      res.sendStatus(400); 
    }); 
  }, 

  //get single Thought by id 
  getThoughtById({ params }, res) {
    thought.findOne({ _id: params.id })
    .populate({
      path: "reactions", 
      select: "-__v", 
    })
    .select("-__V")
    .then((dbThoughtData) => {
      if(!dbThoughtData) {
        return res.status(400).json({ message: "No thought with this ID"}); 
      }
      res.json(dbThoughtData); 
    })
    .catch((err)=> {
      console.log(err);
      res.status(400); 
    }); 
  },
  //create thought and 'push' id to thoughts array
  createThought({params, body}, res) {
    thought.create(body)
    .then(({ _id }) => {
      return user.findOneAndUpdate (
        { _id: body.userId }, 
        { $push: { thoughts: _id } },
        { new: true }
      );
    }) 
    .then((dbUserData) => {
      if (!dbUserData) {
        return res 
        .status(400)
        .json({ message: "No user ID created with this thought"})
      }
      res.json({ message: "Created Thought - Success!"}); 
    })
    .catch((err) => res.json(err)); 
  }
}