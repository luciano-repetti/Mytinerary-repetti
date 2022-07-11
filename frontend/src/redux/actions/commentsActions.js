import axios from "axios";

const commentsActions = {
  addComment: (comment) => {
    const token = localStorage.getItem("token");
    return async (dispatch, getState) => {
      if (comment.comment !== "") {
        const res = await axios.post(
          `http://localhost:4000/api/itinerary/comments`, { comment },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch({
          type: 'MESSAGE',
          payload: {
            view: true,
            message: res.data.message,
            success: res.data.success,
          },
        });
        return res.data;
      } else {
        dispatch({
          type: 'MESSAGE',
          payload: {
            view: true,
            message: "ingresa un comentario para guardarlo",
            success: false,
          },
        });
      }
    };
  },

  modifyComment: (comment) => {

    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
      const res = await axios.put(`http://localhost:4000/api/itinerary/comments`, { comment },
        { headers: { 'Authorization': `Bearer ${token}` } })
      dispatch({
        type: 'message',
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success
        }
      })

      return res.data;
    }
  },
  deleteComment: (id) => {
    const token = localStorage.getItem("token");
    return async (dispatch, getState) => {
      const res = await axios.post(
        `http://localhost:4000/api/itinerary/comments/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: 'MESSAGE',
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success,
        },
      });
      return res.data;
    };
  },
};

export default commentsActions;