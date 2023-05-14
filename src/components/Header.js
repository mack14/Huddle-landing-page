import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <img className="nav--image" src="images/logo.svg" alt="" />
        <button className="nav--button">Try it free</button>
      </div>
      <div className="community">
        <div className="community--fan">
          <h2 className="community--fan--h2">
            Build The Community Your Fans Will Love
          </h2>
          <p className="community--fan--p">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="community--fan--button">
            Get Started For Free
          </button>
        </div>
        <div className="community--img">
          <img
            className="community--img--src"
            src="images/illustration-mockups.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
