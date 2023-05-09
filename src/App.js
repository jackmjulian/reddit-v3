import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import AllPosts from "./containers/AllPosts";
import PostDetails from "./containers/PostDetails";
import Subreddits from "./containers/Subreddits";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-aside">
          <div className="main">
            <Routes>
              <Route path="/" element={<AllPosts />} />
              <Route path="/:subreddit" element={<AllPosts />} />
              <Route path="/:subreddit/:id" element={<PostDetails />} />
              <Route>404 Not Found!</Route>
            </Routes>
          </div>
          <aside>
            <Subreddits />
          </aside>
        </div>
      </Router>
    </div>
  );
}

export default App;
