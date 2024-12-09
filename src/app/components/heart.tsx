import React, { useState } from "react";

const HeartButton: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        all: "unset",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "24px",
        height: "24px",
      }}
      aria-label={isLiked ? "Unlike" : "Like"}
    >
      <img
        src={isLiked ? "/redheart.png" : "/whiteheart.png"}
        alt={isLiked ? "Red heart" : "White heart"}
        style={{
          width: "24px",
          height: "24px",
        }}
      />
    </button>
  );
};

export default HeartButton;