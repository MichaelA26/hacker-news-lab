import React, {Component} from 'react';
import NewsList from '../components/NewsList';

class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      currentStory: null
    }
  }

  getStoryDetails(ids) {

  
    const urls = ids.map(id => `https://hacker-news.firebaseio.com/v0/item/${id}.json`)


    const arrayOfPromises = urls.map(url => {
      return fetch(url)
        .then(res => res.json())
    })


    const promisesForAll20Stories = Promise.all(arrayOfPromises)
    promisesForAll20Stories
      .then(all20stories => this.setState({stories: all20stories}))

  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(res => res.json())
    .then(results => this.getStoryDetails(results.slice(0, 20)))
    // .then(data => this.setState({ stories: data}))
  }



  render() {
    return (
      <div className='news-container'>
      <h1>Yo yo aces yo</h1>
      <NewsList stories={this.state.stories}/>
      </div>
    )
  }

}

export default NewsContainer;
