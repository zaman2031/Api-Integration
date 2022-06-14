import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './pagination';
import Posts from './posts';
import "./Integration.scss";

const Integration = (props) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const apiHandler = () => {
      axios.get(" https://api.punkapi.com/v2/beers")
        .then((response) => setPosts(response.data))
    }
    apiHandler()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>
      <Posts posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Integration;