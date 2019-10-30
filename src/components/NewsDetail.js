import React from 'react';

const NewsDetail = ({children, id}) => (
  <div className="news-detail">
  <p>{children}</p>
  <p>{id}</p>
  </div>
);

export default NewsDetail;
