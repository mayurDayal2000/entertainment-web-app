/* eslint-disable react/prop-types */
import { Card } from "./card";
import { SkeletonCard } from "./loadingCard";

export const CardTemplate = ({ category, cardSize, cardArr }) => {
  return (
    <section>
      <h1>{category}</h1>

      <ul className={cardSize === "SM" ? "smallCardUL" : ""}>
        {cardArr.map((item, index) =>
          item === null ? (
            <li key={index}>
              <SkeletonCard cardSize={cardSize} />
            </li>
          ) : (
            <li key={item?.mal_id}>
              <Card
                cardSize={cardSize}
                cardData={item}
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
};
