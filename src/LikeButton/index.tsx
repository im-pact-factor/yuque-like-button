import { useState } from "react";
import "./index.css";
import classNames from "classnames";

export const LikeButton = () => {
  const [isHover, setIsHover] = useState(false);
  const [isLike, setIsLike] = useState(false);

  const handleMouseEnter = () => {
    if (!isLike) setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleLikeClick = () => {
    setIsLike((prevIsLike) => !prevIsLike);
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleLikeClick}
        className="like-button"
      ></span>
    </div>
  );
};
