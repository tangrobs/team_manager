const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/team_manager')

const PlayerSchema = new mongoose.Schema({
    name:{type:String, required:[true,"A player name is required."], minlength:[2,"A name must be at least 2 characters long."]},
    position:String,
    status:{type:[String], default:["undecided","undecided","undecided"]}
},{timestamps:true})

module.exports = mongoose.model("Players",PlayerSchema)
