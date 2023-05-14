import React from "react";

const Users = () => {
  return (
    <div className="users">
      <div className="users--content">
        <h3 className="users--content--h3"> Your Users</h3>
        <p className="users--content--p">
          It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </p>
      </div>
      <div className="users--image">
        <img
          className="users--image--img"
          src="images/illustration-your-users.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Users;
