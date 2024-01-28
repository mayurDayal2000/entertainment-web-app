/* eslint-disable react/prop-types */
import { Card } from "./card";

export const CardTemplate = ({category, cardSize, cardArr}) => {
  return (
    <section>
      <h1>{category}</h1>

      <ul className={cardSize === "SM" ? "smallCardUL" : ""}>
        {cardArr.map((items, index) => (
          <li key={index}>
            <Card cardSize={cardSize} />
          </li>
        ))}
      </ul>
    </section>
  );
};
