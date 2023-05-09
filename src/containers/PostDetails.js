import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedPost } from "../redux/actions/postActions";

const PostDetails = () => {

  return (
    <div>
      <h1>PostDetails</h1>
    </div>
  );
};

export default PostDetails;

// Old Api
// const post = useSelector((state) => state.post);
//   const { postId } = useParams();
//   const dispatch = useDispatch();
//   console.log("postId", postId);
//   console.log("post", post);

//   const fetchPostComments = async (permalink) => {
//     const response = await axios
//       .get(`https://www.reddit.com${permalink}.json`)
//       .catch((err) => {
//         console.log("err", err);
//       });
//     dispatch(selectedPost(response));
//   };

//   useEffect(() => {
//     if (postId && postId !== "") fetchPostComments();
//   }, [postId]);



// Old Api v2
// let {subreddit} = useParams();
// let {id} = useParams();

// const posts = useSelector((state) => state);

// const fetchPostComments = async () => {

//   const response = await axios
//     .get(`https://www.reddit.com/r/${subreddit}/comments/${id}`)
//     .catch((err) => {
//       console.log("There is an error fetching comments", err);
//     });
//   console.log(response);
// };

// useEffect(() => {
//   fetchPostComments();
// }, [id]);