import React from 'react';
import { posts } from '../data/posts';

export default function Grid() {
  return (
    <div>
      <div className="grid---banner">
        <div className="grid--column1">
          <i class="fa fa-th" aria-hidden="true"></i>
        </div>
        <div className="grid--column2">
          <i class="fa fa-tags" aria-hidden="true"></i>
        </div>
      </div>
      <div className="grid">
        {posts.map((post) => {
          return (
            <span className="grid--img">
              <img src={post.image}/>     
            </span>     
          )
        })}
      </div>
    </div>
  );
}