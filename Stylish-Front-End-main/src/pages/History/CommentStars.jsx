import React, { useState } from "react";
import styled from "styled-components";

const WarpStars = styled.div`
  --size: ${(props) => props.$size}px;
  --space: ${(props) => props.$space}px;

  display: flex;
  gap: var(--space);
  .star {
    width: var(--size);
    height: var(--size);
    color: #f4980a;
    cursor: pointer;
  }
`;

const CommentStars = ({ size = 30, space = 8 }) => {
  const [starIndex, setStarIndex] = useState(0); // 這個是user商品的星星數，因為是index所以送出時應該要再加1

  function handleStarIndex(e) {
    const index = e.currentTarget.getAttribute("index");
    setStarIndex(+index);
  }

  console.log(starIndex);

  console.log(starIndex);
  return (
    <WarpStars $size={size} $space={space}>
      {Array(5)
        .fill(null)
        .map((_, index) => {
          return (
            <div key={index} index={index} onMouseEnter={handleStarIndex}>
              {index > starIndex ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 star"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 star"
                  key={index}
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
            </div>
          );
        })}
    </WarpStars>
  );
};

export default CommentStars;
