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

export const Card = ({ cardSize, cardData }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const cardDataContent = {
    image: cardData?.images.webp.large_image_url,
    title: cardData?.title_english ?? cardData?.title,
    aired: cardData?.year,
    type: cardData?.type,
    rating: cardData?.rating.split(" ")[0],
  };

  return (
    <article className={cardSize === "SM" ? "smallCard" : "largeCard"}>
      <div className="cardImg">
        <img
          src={cardDataContent.image}
          alt={`${cardDataContent.title} banner`}
        />
        <BookmarkButton
          isBookmarked={isBookmarked}
          onClick={() => setIsBookmarked(!isBookmarked)}
        />
      </div>

      <div className="cardContent">
        <div className="cardData">
          <time dateTime={cardDataContent.aired}>{cardDataContent.aired}</time>
          &bull;
          <CategoryIcon category={cardDataContent.type} />
          &bull;
          <span>{cardDataContent.rating}</span>
        </div>

        <h3>{cardDataContent.title}</h3>
      </div>
    </article>
  );
};
