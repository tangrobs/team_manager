const api = require('./controller.js')

module.exports = function(app){
    app.get('/api/player',(req,res)=>api.getAll(req,res))
    app.post('/api/player',(req,res)=>api.create(req,res))
    app.put('/api/player/:id',(req,res)=>api.update(req,res))
    app.delete('/api/player/:id',(req,res)=>api.destroy(req,res))
    app.put('/api/playerstatus/:id',(req,res)=>api.updateStatus(req,res))
}