import React from 'react';
import NewsDetail from './NewsDetail';

const NewsList = ({stories}) => {
  const newsNodes = stories.map(newsDetail => {
    return (
      <NewsDetail key={newsDetail.id}>{newsDetail.id}</NewsDetail>
    );
  });

  return (
    <div>
    <p>Yo yo aces yo</p>
    {newsNodes}
    </div>
  )
}

export default NewsList;
