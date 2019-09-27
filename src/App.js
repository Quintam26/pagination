import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { async } from 'q';

function App() {

  /*hooks*/
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  /* Same as before/no hook
    state = {
      posts: []
    }
  */

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1>App</h1>
    </div>
  );
}

export default App;
