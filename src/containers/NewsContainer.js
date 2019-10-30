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

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(res => res.json())
    .then(data => this.setState({ stories: data}))
  }

  render() {
    return (
      <div className='news-container'>
      <h1>A dark code question for Slughorn</h1>
      <NewsList stories={this.state.stories}/>
      </div>
    )
  }

}

export default NewsContainer;
