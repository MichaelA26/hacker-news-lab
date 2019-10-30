import React from 'react';
import NewsDetail from './NewsDetail';

const NewsList = ({stories}) => {
  const newsNodes = stories.map((newsDetail, index) => {
    return (
      <NewsDetail key={index}>{newsDetail.title}</NewsDetail>
    );
  });

  return (
    <div>
    {newsNodes}
    </div>
  )
}

export default NewsList;
