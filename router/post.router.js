const express = require('express');
const router = express.Router();
const formidableMiddleware = require('formidable');

const model = require('../models/index');
const Post = model.post;

// create
router.post('/api/posts', (request, response) => {
    const form = formidableMiddleware({});

    form.parse(request, (err,fields, files) => {
        if(err) {
            next(err);
            return;
        }

        Post.create(fields).then(result => {
            response.status(201).json({
                message: "Created post successfully",
                payload: fields
            });
        })
    })
})

// get all / find all

router.get('/api/posts', (request, response) => {
    Post.findAll().then(result => {
        response.status(200).json({data: result});
    }).catch(err => {
        console.error(err);
        throw err;
    })
})

// get by id / find by pk

router.get('/api/posts/:id', (request, response) => {
    Post.findByPk(request.params.id).then(result => {
        if(result == null) {
            response.status(404).json({data: {}});
            return;
        }
        response.status(200).json({data: result});
    }).catch(err => {
        console.error(err);
        throw err;
    })
})

// update

router.put('/api/posts/:id', (request, response) => {
    const form = formidableMiddleware({});

    form.parse(request, (err, fields, files) => {
        if(err) {
            next(err);
            return;
        }

        Post.findByPk(request.params.id).then(result => {
            if(result == null) {
                response.status(404).json({data: {}});
                return;
            }

            Post.update(fields, {where: {id: request.params.id}}).then(result => {
                response.status(200).json({data: result});
            }).catch(err => {
                console.error(err);
                throw err;
            })            
        }).catch(err => {
            console.error(err);
            throw err;
        })
    })
})

// delete

router.delete('/api/posts/:id', (request, response) => {
    Post.findByPk(request.params.id).then(result => {
        if(result == null) {
            response.status(404).json({data: {}})
            return;
        }
        Post.destroy({where: {id: request.params.id}}).then(result => {
            response.status(204).json({data: {}});
        });
    }).catch(err => {
        console.error(err);
        throw err;
    })
})

module.exports = router;