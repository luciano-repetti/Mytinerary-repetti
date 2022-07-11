import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import commentsActions from "../redux/actions/commentsActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Comment from "./Comment";
import toast, { Toaster } from 'react-hot-toast';

function Itinerary({itineraries, idCity}){

    const dispatch = useDispatch()
    const message = useSelector(store => store.userReducer.snackbar)
    const user = useSelector(store => store.userReducer.user)

    const [itineraryActivities, setItineraryActivities] = useState(false)
    const [text, setText] = useState("")
    const [reload, setReload] = useState(false)

    function expandItinerary(){
        setItineraryActivities(!itineraryActivities)
    }

    async function likes(idIconLike, idItinerary){
        if(user !== null){
            let icon = document.getElementById(idIconLike)
            if(icon.classList == "bi bi-hand-thumbs-up"){
                icon.classList.remove("bi-hand-thumbs-up")
                icon.classList.add("bi-hand-thumbs-up-fill")
            }else{
                icon.classList.remove("bi-hand-thumbs-up-fill")
                icon.classList.add("bi-hand-thumbs-up")
            }
            await dispatch(itinerariesActions.likes(idItinerary))
            setReload(!reload)
        }else{
            toast.error("You must first register")
        }
    }

        async function addComment(idItinerary){
            if(user !== null){
                const comment = {
                    itineraries: idItinerary,
                    comment: text
                }
                const res = await dispatch(commentsActions.addComment(comment))
                toast.success(res.message)
                setReload(!reload)
            }else{
                toast.error("You must first register")
            }
        }

        function handleReload(){
            setReload(!reload)
        }
    
        useEffect(()=>{
            dispatch(itinerariesActions.findTimFromCity(idCity))
        }, [reload])


    return(
    <div className="containerItineraries">
        {
            itineraries.map((itinerary, index) => {
                return(
                    <div key={index} className="itinerary">
                        <div className="infoItinerary">
                            <h2>{itinerary.nameItinerary}</h2>
                            <p>Duration: {itinerary.duration}</p>
                            <p>Price: {itinerary.price}</p>
                            <div className="containerLikes">
                                <p>likes: {itinerary?.likes.length}</p><p className="like" onClick={() =>{likes(`${index}`, itinerary._id)
                                }}><i id={index} className="bi bi-hand-thumbs-up"></i></p>
                            </div>
                        </div>
                        <div className="hashtags">
                        {itinerary.hashtags.map((hash, index) =>
                            <p key={index}>#{hash}</p>)}
                        </div>
                        <div className="seeMore">
                            <div className="itineraryFooter">
                                <img src={itinerary.user.imgUser} alt="" />
                                <p>{itinerary.user.nameUser}</p>
                            </div>
                            <div className="itineraryFooter right">
                                <button className="buttonItinerary" onClick={expandItinerary}>
                                    <img src={require("../img/flechaUp.png")} alt="" />
                                    <p>see more</p>
                                </button>
                            </div>
                        </div>
                        <div className={itineraryActivities ? "activities active" : "activities"}>
                        <h2>actividades</h2>
                        <div className="activitiesExpand">
                            {
                                itinerary.activities.map((activity, index) =>{
                                    return(
                                        <div key={index} className="activity">
                                            <img src={activity.imgUrl} alt="" />
                                            <p>{activity.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                            <div className="comments">
                                {
                                    itinerary.comments?.map((comment, index) =>{
                                        return(
                                            <Comment key={index} comment={comment} handleReload={handleReload}/>
                                        )
                                    })
                                }
                            </div>
                            <div key={index} className="addComment">
                                <textarea type="text" placeholder="add comment" onInput={(event) => (setText(event.target.value))} /><button onClick={() => addComment(itinerary._id)}>Add comment</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
)}

export default Itinerary;