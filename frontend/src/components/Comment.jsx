import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import commentsActions from "../redux/actions/commentsActions";
import toast from 'react-hot-toast';

function Comment({comment, handleReload}) {

    const [modify, setModify] = useState("")
    const [cardEdit, setCardEdit] = useState(false)
    const dispatch = useDispatch()

    const user = useSelector(store => store.userReducer.user)


    async function modifyComment(idComment){
        const commentData = {
            commentID: idComment,
            comment: modify
        }
        const res = await dispatch(commentsActions.modifyComment(commentData))
        toast.success(res.message)
        handleReload()
    }

    async function deleteComment(idComment){
        const res = await dispatch(commentsActions.deleteComment(idComment))
        toast.success(res.message)
        handleReload()
    }

  return (
    <div key={comment._id} className="comment">
      <div className="commentPerfil">
        <div className="perfilComment">
          <img src={comment.userID.imgUrl} alt="" />
          <p>{comment.userID.fullName}</p>
        </div>
        <p className="commentText">{comment.comment}</p>
      </div>
      <div className={cardEdit ? "cardEditComment show" : "cardEditComment"}>
        <button onClick={() => setCardEdit(!cardEdit)} className="buttonClose"><i className="bi bi-x-lg"></i></button>
        <h2>Edit comment</h2>
        <textarea type="text" placeholder="add comment" onInput={(event) => setModify(event.target.value)}/>
        <button onClick={() => { modifyComment(comment._id); setCardEdit(!cardEdit);}}>Edit comment</button>
      </div>
      {console.log(user, comment)}
      {
        user?.id == comment.userID._id ? <div className="commentEdit">
        <button
          className="buttonComment"
          onClick={() => setCardEdit(!cardEdit)}
        >
          Edit
        </button>
        <button
          className="buttonComment"
          onClick={() => deleteComment(comment._id)}
        >
          Delete
        </button>
      </div> : <></>
      }
    </div>
  );
}

export default Comment;
