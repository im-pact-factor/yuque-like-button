import { useState } from "react";
import "./index.css";
import classNames from "classnames";

export const LikeButton = () => {
  const [isHover, setIsHover] = useState(false);
  const [isLike, setIsLike] = useState(false); // 假设你有一个isLike状态
  const handleLikeClick = () => {
    setIsLike(!isLike);
  };

  const likeIconClasses = classNames(
    "like-button-container h-full w-full flex items-center justify-center",
    {
      "like-button-hover": isHover && !isLike,
      "like-button-active": isLike,
    }
  );
  return (
    <div className={likeIconClasses}>
      <span
        onMouseEnter={() => {
          if (!isLike) {
            setIsHover(true);
          }
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onClick={handleLikeClick}
        className="like-button"
      ></span>
    </div>
  );
};
