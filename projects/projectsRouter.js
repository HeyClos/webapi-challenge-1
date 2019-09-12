const express = require('express')
const Projects = require('../data/helpers/projectModel')

const router = express.Router()

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    console.log("HERE IS THE REQUEST", req)
    Projects.get()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: "Error getting projects"})
    });
});

router.get('/:id', (req, res) => {
    //sele
   
});

router.get('/:id', (req, res) => {
    
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {
    const { id } = req.projects;
    Projects.remove(id)
      .then(() => res.status(204).end())
      .catch(err => {
        console.log(err);
        res.status(500).json({error: "Error deleting projects"});
      });
});

router.put('/:id', (req, res) => {

    Projects.update(req.projects)
    .then(updated => {
        res.status(200).json(updated);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:"Error getting updates"})
    })
});


module.exports = router;