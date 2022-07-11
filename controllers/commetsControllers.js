const Itinerary = require('../models/itineraries')

const commentsControllers = {

    addComment: async (req, res) => {
        const {itineraries,comment} = req.body.comment
        const user = req.user._id
        try {
            const nuevoComment = await Itinerary.findOneAndUpdate({_id:itineraries}, {$push: {comments: 
                {userID: user, comment: comment,}}}, {new: true})
            console.log(nuevoComment)
                res.json({ success: true,
                    response:{nuevoComment}, 
                    message:"Thanks you for let us your comment" })
        }
        catch (error) {
            
            console.log(error)
            res.json({
                success: false, 
                message: "Something went wrong please try again",
                console:console.log(error) 
            })
        }

    },
    modifyComment: async (req, res) => {
        const { commentID, comment } = req.body.comment
        try {
          const modifyComment = await Itinerary.findOneAndUpdate({ "comments._id": commentID }, { $set: { "comments.$.comment": comment, "comments.$.date": Date.now() } }, { new: true })
          console.log(modifyComment)
          res.json({ success: true, response: { modifyComment }, message: "Comment edited"})
        }
        catch (error) {
          console.log(error)
          res.json({ success: true, message: "Something went wrong please try again" })
        }
    
      },
    deleteComment: async (req, res) => {
        const id = req.params.id
        const user = req.user._id
        try {
            const deleteComment = await Itinerary.findOneAndUpdate({"comments._id":id}, {$pull: {comments: {_id: id}}}, {new: true})
          console.log(deleteComment)
            res.json({ success: true, response:{deleteComment}, message: "Comment deleted"})

        }
        catch (error) {
            console:console.log(error)
            res.json({ success: false, message: "Something went wrong please try again",console:console.log(error) })
        }

    },
    
}
module.exports = commentsControllers