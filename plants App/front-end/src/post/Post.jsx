
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
        const response = await axios.get('/products/');
        console.log(response.data);
        setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id}>
            <h1>{post.desc}</h1>
            {post.img && <img src={`/assets/images/${post.img}`} alt={post.desc} />}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  
}

