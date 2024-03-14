import React, { useEffect, useState } from "react";

export default function Buttons({ btnClass, text, url }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${url}`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [url]);
  return (
    <div>
      <h1>JSON Placeholder</h1>
      <button className={`btn ${btnClass}`}>{!text ? "Click Me" : text}</button>
      {posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            <div className="card-title">
              <h2>{post.title || post.name}</h2>
            </div>
            <div className="card-body">
              <p>{post.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
