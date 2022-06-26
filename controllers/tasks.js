const Task = require('../models/tasks.js');

module.exports = {
    // default
    index: (req, res)=>{
        Task.find({}, (error, tasks)=>{
            if(error) console.log(`there was an error: ${error}`);
            else{
                res.render("todo.ejs", {todotasks: tasks});
            }
        })
    },
    // create
    create: (req, res)=>{
        const firstTask = new Task({title: req.body.title});
        firstTask.save().then( res.redirect('/'));
    },

    // update 
    update: (req, res)=>{
        let id = req.params.id;
        Task.findByIdAndUpdate(id, {title: req.body.title}, error=>{ 
            if(error) return res.send(500, error);
            else{
                res.redirect('/');
            }
        });
    },

    // edit
    edit: (req, res)=>{
        let id = req.params.id;
        Task.find({}, (error, tasks)=>{
            if(error) console.log(`there was an error: ${error}`);
            else{
                res.render("todoEdit.ejs", {todotasks: tasks, idTask: id})
            }
        })
    },

    // delete
    delete: (req, res)=>{
        Task.findByIdAndDelete({_id: req.params.id}, (error)=>{
            if(error) console.log(`there was an error: ${error}`);
            else {
                res.redirect('/');
            }
        })
    }
}