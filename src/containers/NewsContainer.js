import React, {Component} from 'react';

class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      currentStory: null
    }

  }

  render() {
    return (
      <div className='news-container'>
      <h1>A dark code question for Slughorn</h1>
      </div>
    )
  }

}

export default NewsContainer;


// fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
// .then(res => res.json())
// .then(data => yo = data)
