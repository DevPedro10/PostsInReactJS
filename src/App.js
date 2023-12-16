import React, { Component } from 'react';

import './App.css'

import { loadPosts } from './utils/load-apis';
import { Posts } from './components/Posts';
import { Button } from './components/Button';
import { CampoDeTexto } from './components/CampoDeTexto';

class App extends Component {
  state = {
    posts: [],
    postsAndPhotos: [],
    page: 0,
    postsPerPage: 2,
    searchValue: ''
  }

  async componentDidMount() {
    const { posts, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(posts, postsPerPage),
      allPosts: postsAndPhotos
    })
  }

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage })
  }
  handleChange = (e) => {
    const { searchValue } = this.state
    console.log(searchValue)
    this.setState({ searchValue: e.target.value })
  }

  render() {
    const { posts, searchValue, allPosts } = this.state;

    const filteredPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : allPosts



    return (
      <div className='container'>
        <header>
          <CampoDeTexto
            onChange={this.handleChange}
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

        {
          searchValue.length <= 0 && (
            <Button
              title={"Carregar novos posts"}
              onClick={this.loadMorePosts}
              className={"btnLoadMorePosts"}
            />
          )
        }
      </div >
    )
  }
}

export default App;
