import React from "react";

const LiveStream = () => {
  return (
    <div>
      {" "}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/nYREhMLsTrA?si=1vPLIP73kkuWDsTE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default LiveStream;
