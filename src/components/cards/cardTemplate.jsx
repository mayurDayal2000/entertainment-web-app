/* eslint-disable react/prop-types */
import { Card } from "./card";

export const CardTemplate = ({ category, cardSize, cardArr }) => {
  return (
    <section>
      <h1>{category}</h1>

      <ul className={cardSize === "SM" ? "smallCardUL" : ""}>
        {cardArr.map((item) => (
          <li key={item?.mal_id}>
            <Card
              cardSize={cardSize}
              cardData={item}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
