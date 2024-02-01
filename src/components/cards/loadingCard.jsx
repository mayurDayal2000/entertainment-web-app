/* eslint-disable react/prop-types */
import placeholderImg from "@assets/placeholder-img.svg";

export const SkeletonCard = ({ cardSize }) => {
  return (
    <article className={`${cardSize === "SM" ? "smallCard" : "largeCard"} loadingCard`}>
      <div className="placeholder-img">
        <img
          src={placeholderImg}
          alt="placeholder icon"
        />
      </div>
    </article>
  );
};
