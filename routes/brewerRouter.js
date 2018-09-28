const express = require('express');
const brewerRouter = express.Router();
const brewers = require('../models/brewer')


//Get request all, and post one to database
brewerRouter.route('/')
    .get((req, res) => {
        brewers.find((err, brewer) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(brewer)
        })
    })
    .post((req, res) => {
        const newBrewer = new brewers(req.body)
        newBrewer.save((err, newSavedBrewer) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(newSavedBrewer)
        })
    })

    //get one id specifically, delete one specifically, update on specifically
brewerRouter.route('./:id')
    .get((req, res) => {
        brewers.findById(req.params.id, (err, foundBrewer) => {
            if(err) return res.status(500).send(err)
            return res.status(200).sendFile(foundBrewer)
        })
    })
    .delete((req, res) => {
        brewers.findOneAndRemove(
            { _id: req.params.id },
            (err, deletedBrewer) => {
                if(err) return res.status(500).send(err)
                return res.status(204).send(deletedBrewer)
            }
        )
    })
    .put((req, res) => {
        brewers.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
            (err, updatedBrewers) => {
                if(err) return res.status(500).send(err)
                return res.status(201).send(updatedBrewers)
            }
        )
    })

module.exports = brewerRouter