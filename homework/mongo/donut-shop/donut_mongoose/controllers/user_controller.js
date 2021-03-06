const express = require('express')
    //this will pull in all params that existed before the router was created/run key is mergeParams: true
const router = express.Router({ mergeParams: true })
const Schema = require("../models/donuts.js")

const DonutModel = Schema.DonutModel
const UserModel = Schema.UserModel

router.get('/', (req, res) => {

    const studentId = req.params.studentId

    StudentModel.findById(studentId)
        .then((student) => {
            res.render('projects/index', {
                student
            })
        })
        .catch((err) => {
            res.send(err);
        })
})


module.exports = router