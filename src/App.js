import React, { Component, useCallback, useEffect, useState } from 'react';

import './App.css'

import { loadPosts } from './utils/load-apis';
import { Posts } from './components/Posts';
import { Button } from './components/Button';
import { CampoDeTexto } from './components/CampoDeTexto';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postsAndPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');
  const [allPosts, setAllPosts] = useState([])

  const filteredPosts = !!searchValue ? allPosts.filter(post => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  }) : allPosts


  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(posts, postsPerPage))
    setAllPosts(postsAndPhotos)
  }, [])


  useEffect(() => {
    handleLoadPosts(0, postsPerPage)
  }, [handleLoadPosts, postsPerPage])

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts);

    setPosts(posts)
    setPage(nextPage)
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <div className='container'>
      <header>
        <CampoDeTexto
          onChange={handleChange}
          className='inputText'
          tooltip='Procure artigos'
        />
      </header>


      {!!searchValue ? (
        <div className='filteredPosts'>
          <Posts posts={filteredPosts} />
        </div>
      ) : (
        <Posts posts={posts} />
      )}

      {searchValue.length <= 0 && (
        <Button
          id="buttonLoadMorePosts"
          title={"Carregar novos posts"}
          onClick={loadMorePosts}
          className={"btnLoadMorePosts"}
        />
      )}
    </div >
  )
}


export default App;
