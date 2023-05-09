import React from "react";
import "../css/Subreddits.css";
import { NavLink } from "react-router-dom";

const Subreddits = () => {
  return (
    <div className="subreddits-container">
      <div className="subreddits">
        <h3>Subreddits</h3>
        <div className="subreddit-list">
          <div className="list-items">
            <NavLink to={`/DestinyFashion`}>
              <button>
                <img
                  src="./images/destiny-fashion.jpg"
                  alt=""
                  className="subreddit-icon"
                />
                <h4 className="subreddit-title">r/DestinyFashion</h4>
              </button>
            </NavLink>

            <NavLink to={`/NintendoSwitch`}>
              <button>
                <img
                  src="./images/nintendo-switch.jpg"
                  alt=""
                  className="subreddit-icon"
                />
                <h4 className="subreddit-title">r/NintendoSwitch</h4>
              </button>
            </NavLink>

            <NavLink to={`/DeathsDoor`}>
              <button>
                <img
                  src="./images/deaths-door-icon.png"
                  alt=""
                  className="subreddit-icon"
                />
                <h4 className="subreddit-title">r/Death's Door</h4>
              </button>
            </NavLink>

            <NavLink to={`/gaming`}>
              <button>
                <img
                  src="./images/gaming-icon.png"
                  alt=""
                  className="subreddit-icon"
                />
                <h4 className="subreddit-title">r/Gaming</h4>
              </button>
            </NavLink>

            <NavLink to={`/TMNT`}>
              <button>
                <img
                  src="./images/tmnt-icon.png"
                  alt=""
                  className="subreddit-icon"
                />
                <h4 className="subreddit-title">r/TMNT</h4>
              </button>
            </NavLink>

            <NavLink to={`/pixar`}>
              <button>
                <img
                  src="./images/pixar-icon.png"
                  alt=""
                  className="subreddit-icon"
                />
                <h4 className="subreddit-title">r/Pixar</h4>
              </button>
            </NavLink>

            <NavLink to={`/disney`}>
              <button>
                <img
                  src="./images/disney-icon.png"
                  alt=""
                  className="subreddit-icon"
                />
                <h4 className="subreddit-title">r/Disney</h4>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subreddits;
