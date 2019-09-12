const express = require('express')
const Projects = require('../data/helpers/projectModel')

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: "Error getting projects"})
    });
});

router.get('/:id', validateUserId, (req, res) => {
    //sele
   
});

router.get('/:id', (req, res) => {
    
});

router.get('/:id/posts', (req, res) => {
    const { id } = req.projects;
    Projects.remove(id)
      .then(() => res.status(204).end())
      .catch(err => {
        console.log(err);
        res.status(500).json({error: "Error deleting projects"});
    });
});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {
    Projects.update()
    .then(updated => {
        res.status(200).json(updated);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:"Error getting updates"})
    })
});