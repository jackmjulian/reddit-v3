import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import SinglePost from "./SinglePost";
import { setPosts } from "../redux/actions/postActions";
import { useParams } from "react-router-dom";

const AllPosts = () => {
  let { subreddit } = useParams();
  subreddit = subreddit ?? "popular";

  const posts = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchSubredditPosts = async (subreddit) => {
    const response = await axios
      .get(`https://www.reddit.com/r/${subreddit}.json`)
      .catch((err) => {
        console.error("err", err);
      });
    dispatch(setPosts(response.data.data.children));
    console.log(response.data.data.children.permalink);
    console.log(response.data.data.children[0].data.url);
  };

  useEffect(() => {
    fetchSubredditPosts(subreddit);
  }, [subreddit]);

  console.log("Posts:", posts);

  return (
    <div>
      <h1>Viewing r/{subreddit} </h1>
      <SinglePost />
    </div>
  );
};

export default AllPosts;
