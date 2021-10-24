import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostCard from "../Post/PostCard";
import CommentCard from "./CommentCard";

const Comment = () => {
  const { id } = useParams();
  const [onePost, setOnePost] = useState([]);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setOnePost(data));

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  return (
    <div>
      <PostCard post={onePost} />
      <h3 className="text-center text-pink-700 text-2xl bg-gray-300 h-10  ">Comment Section</h3>
      {comment.map((comments) => (
        <CommentCard allComments={comments}/>
      ))}
    </div>
  );
};

export default Comment;
