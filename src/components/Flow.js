import React from "react";

const Flow = () => {
  return (
    <div className="flow">
      <div className="flow--image">
        <img
          className="flow--image--img"
          src="images/illustration-flowing-conversation.svg"
          alt=""
        />
      </div>
      <div className="flow--content">
        <h3 className="flow--content--h3"> Flowing Conversations</h3>
        <p className="flow--content--p">
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
    </div>
  );
};

export default Flow;
