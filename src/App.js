import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import axios from 'axios';
import './App.css';

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

  console.log(posts);
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>App</h1>
      <Posts posts={posts} loading={loading}/>
    </div>
  );
}

export default App;
