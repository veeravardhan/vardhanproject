const router = require('express').Router();
let user = require("../models/user.model")



router.route('/add').post((req,res) => {
    console.log("vardhan here 2")
    console.log(req.body)
    let username = req.body
    user.create(username, (err, foodItem) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send("User added")
        }
    })
    // let username = req.body
    //     const newUser = new user(username)

    //     newUser.save()
    //     .then(() => {res.json("user added")})
    //     .catch(err => res.status(400).json('Error: '  +err))
})

router.route('/').get((req,res) => {
    console.log("vardhan here")
    user.find({ }).exec((err, result) => {
        if (err) { console.log(err); res.status(500).send("problem retrieving" + err); return; }
        res.status(200).send(result);
        console.log(result)
    })
    // user.find()
    //     .then(users => {
    //         res.json(users)
    //         console.log(users)
    //     })
    //     .catch(err => res.status(400).json('Error: '  +err))
})

module.exports = router;