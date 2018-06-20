const Player = require('./mongoose.js')

module.exports = {
    getAll:getAll,
    create:create,
    update:update,
    destroy:destroy,
    updateStatus:updateStatus
}
function updateStatus(req,res){
    Player.findById(req.params.id)
        .then(player=>{
            player.status.set(req.body.game, req.body.status)
            return player.save()
        })
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function getAll(req,res){
    Player.find({})
        .then(data=>res.json({players:data}))
        .catch(err=>res.json(err))
}

function create(req,res){
    Player.create(req.body)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function update(req,res){
    Player.findByIdAndUpdate(req.params.id,req.body,{new:true})
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function destroy(req,res){
    Player.findByIdAndRemove(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}