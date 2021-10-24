import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const Post = () => {
  // data collect from API request
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
      console.log(post)
  }, []);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {post.map((onePost) => (
          <PostCard post={onePost} key={onePost.id}/>
        ))}
      </div>
    </section>
  );
};

export default Post;
