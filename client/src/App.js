import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Counter from "./features/counter/Counter";
import Navbar from "./features/nav/Navbar";
import BlogPosts from "./features/blog/BlogPosts";
import AddBlogPost from "./features/blog/AddBlogPost";
import SinglePost from "./features/blog/SinglePost";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="w-screen">
          <Switch>
            <Route exact path="/blog">
              <AddBlogPost />
              <BlogPosts />
            </Route>
            <Route exact path="/blog/:postId" component={SinglePost} />
            <Route exact path="/">
              <Counter />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
