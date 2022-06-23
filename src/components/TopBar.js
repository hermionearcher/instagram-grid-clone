import React from 'react';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar--left">
        <i class="fa fa-lock" aria-hidden="true"></i>
        <h3>hermz._</h3>
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </div>
      <div className="topbar--right">
        <i class="fa fa-plus-square" aria-hidden="true"></i>
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
  );
}
