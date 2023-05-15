import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedPost } from "../redux/actions/postActions";

const PostDetails = () => {
  const dispatch = useDispatch();

 const {id} = useParams();

  const selected_post = useSelector((state) => {return state.selected_post});


  const fetchComments = async (permalink) => {
    console.log(permalink);
    const response = await axios
      .get(
        "https://www.reddit.com/r/DestinyFashion/comments/13gx5l2/i_am_coping_hard_trying_to_make_this_thing_work/.json"
      )
      .catch((err) => {
        console.error("err", err);
      });
    console.log("guess", response.data[1].data.children);
    dispatch(selectedPost(response.data[1].data.children));
    let comments = response.data[1].data.children;
    const commentList = comments.map((comment) => {
      const { author, body } = comment.data;
      console.log("author", author);
      console.log("body", body);
    });
  };

  useEffect(() => {
    dispatch(selectedPost(id));
    fetchComments(selected_post.permalink);
  }, [dispatch, fetchComments]);

  return (
    <div>
      <h1>PostDetails</h1>
    </div>
  );
};

export default PostDetails;

// Below is the sample setup for the post/comment section
// return (
//   <div className="post-article">
//     <div className="article">
//       <div className="post-wrap">
//         <div className="post-container">
//           <h3 className="post-title">{title}</h3>
//           <div className="post-image-container">
//             <img
//               className="post-img"
//               src={url}
//               alt={`r/${subreddit} - ${title}`}
//             />
//           </div>
//           <h3>Comment Section</h3>
//           <div className="comment-main">
//             <div className="comment-header">
//               <img
//                 className="comment-avatar"
//                 src="../images/redditlogo.png"
//                 alt=""
//               />
//               <h4>{author}</h4>
//             </div>
//           </div>
//           <div className="post-comments">Comment Body</div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
