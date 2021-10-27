import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Counter from "./features/counter/Counter";
import Navbar from "./features/nav/Navbar";
import BlogPosts from "./features/blog/BlogPosts";
import AddBlogPost from "./features/blog/AddBlogPost";
import SinglePost from "./features/blog/SinglePost";
import UpdatePost from "./features/blog/UpdatePost";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="w-screen">
        <div className="w-5/6 mx-auto">
          <Switch>
            <Route exact path="/blog">
              <div className="space-y-4 mt-10 ">
                <AddBlogPost />
                <BlogPosts />
              </div>
            </Route>
            <Route exact path="/blog/:postId" component={SinglePost} />
            <Route exact path="/blog/edit/:postId" component={UpdatePost} />

            <Route exact path="/">
              <Counter />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
