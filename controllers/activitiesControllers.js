const Activity = require('../models/activities')

const activityControllers ={

    addActivity: async (req, res) =>{
        const {title, imgUrl, description} = req.body.data
        let activity
        let error = null
        try{
            activity = await new Activity({
                title: title,
                imgUrl: imgUrl,
                description: description
            }).save()
        }catch(err) {error = err}
        res.json({
            response: error ? 'ERROR' : {activity},
            sucess: error ? false : true,
            error: error,
            console: console.log(error)
        })
    },

    getActivities: async (req, res) =>{
        let activities
        let error = null
        try{
            activities = await Activity.find()
        }catch(err) {error = err}
        res.json({
            response: error ? 'ERROR' : {activities},
            sucess: error ? false : true,
            error: error,
            console: console.log(error)
        })
    },

    removeActivity: async (req, res) =>{
        const id = req.params.id
        let activity
        let error = null
        try{
            activity = await Activity.findOneAndDelete({_id: id})
        }catch(err){error = err}
        res.json({
            response: error ? 'ERROR' : {activity},
            sucess: error ? false : true,
            error: error,
            console: console.log(error)
        })
    }
}

module.exports = activityControllers