/* eslint-disable react/prop-types */
import { useState } from "react";
import bookmarkEmptyIcon from "../../assets/icon-bookmark-empty.svg";
import bookmarkFilledIcon from "../../assets/icon-bookmark-full.svg";
import movieIcon from "../../assets/icon-category-movie.svg";
import tvIcon from "../../assets/icon-category-tv.svg";

const CategoryIcon = ({ category }) => {
  const icon = category === "movie" ? movieIcon : tvIcon;
  const title = category === "movie" ? "Movie" : "TV Series";

  return (
    <span className="flex">
      <img
        src={icon}
        alt={`${title} icon`}
      />
      {title}
    </span>
  );
};

const BookmarkButton = ({ isBookmarked, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={isBookmarked ? "Add bookmark" : "Remove bookmark"}>
    <img
      src={isBookmarked ? bookmarkFilledIcon : bookmarkEmptyIcon}
      alt={isBookmarked ? "bookmarked icon" : "not bookmarked icon"}
    />
  </button>
);

export const Card = ({ cardSize }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const currentCategory = "movie";

  return (
    <article className={cardSize === "SM" ? "smallCard" : "largeCard"}>
      <div className="cardImg">
        <img
          src="https://placehold.co/250x150"
          alt=""
        />
        <BookmarkButton
          isBookmarked={isBookmarked}
          onClick={() => setIsBookmarked(!isBookmarked)}
        />
      </div>

      <div className="cardContent">
        <div className="cardData">
          <time dateTime="2019">2019</time>
          &bull;
          <CategoryIcon category={currentCategory} />
          &bull;
          <span>18+</span>
        </div>

        <h3>The Great Lands</h3>
      </div>
    </article>
  );
};
