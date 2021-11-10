const Joke = require('../models/jokes.model')

const getAlljokes = (req, res) => {
    Joke.find()
        .then((allJokes) => res.json(allJokes))
        .catch((err) => console.log(err));
};

const getJokeById = (req, res) => {
    const { params } = req;
    Joke.findOne({_id: params._id})
    .then((joke) => res.json(joke))
    .catch((err) => console.log(err));
};

const addNewJoke = (req, res) => {
    const {body} = req;
    Joke.create(body)
        .then((newJoke) => res.json(newJoke))
        .catch((err) => console.log(err));
};

const updateJoke = (req, res) => {
    Joke.findByIdAndUpdate({_id: req.params._id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then((updatedJoke) => res.json(updatedJoke))
    .catch((err) => console.log(err))
};

const deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
    .then((deletedJoke) => res.json(deletedJoke))
    .catch((err) => console.log(err))
};

module.exports ={
    getAlljokes, getJokeById, addNewJoke, updateJoke, deleteJoke
}