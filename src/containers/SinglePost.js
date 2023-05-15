import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../css/Posts.css";

const SinglePost = () => {
  const posts = useSelector((state) => state.allPosts.posts);
  const renderPostList = posts.map((post) => {
    const {
      id,
      title,
      author,
      score,
      url,
      created_utc,
      subreddit,
      num_comments,
      permalink,
    } = post.data;
    // console.log("newPost", post);

    return (
      <div className="article">
        <div className="post-wrap">
          <div className="vote-container">
            <i class="fa-solid fa-arrow-up"></i>
            <p className="vote-count">{score}</p>
            <i class="fa-solid fa-arrow-down"></i>
          </div>
          <div className="post-container">
            <h3 className="post-title">{title}</h3>
            <div className="post-image-container">
              <img
                className="post-img"
                src={url}
                alt={`r/${subreddit} - ${title}`}
              />
            </div>
            <div className="post-details">
              <div>
                <h5>{author}</h5>
              </div>
              <div>
                <h5>{created_utc} - To be converted</h5>
              </div>
              <div>
                <NavLink to={`/${subreddit}/${id}`}>
                  {/* <NavLink to={permalink}> */}
                  <button>
                    <i class="fa-regular fa-comment"></i>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderPostList}</>;
};

export default SinglePost;
