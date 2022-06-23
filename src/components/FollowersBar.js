import React from 'react';

export default function FollowersBar() {
  return (
    <div className="followersBar">
      <div className="followersBar--left">
        <img
          className="followersBar--img"
          src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
        />
        <i class="fa fa-plus-circle" aria-hidden="true"></i>
      </div>
      <div className="followersBar--right">
        <p>25</p>
        <p>Posts</p>
        <p>651</p>
        <p>Followers</p>
        <p>624</p>
        <p>Following</p>
      </div>
    </div>
  );
}
