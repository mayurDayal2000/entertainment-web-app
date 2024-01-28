import { useEffect, useState } from "react";
import { CardTemplate } from "../cards/cardTemplate";
import { Navbar } from "./navbar";
import { SearchPanel } from "./search";
import { getTrendingData } from "../../api/homepage.api";

export const Dashboard = () => {
  const initialCardData = new Array(10).fill(null);
  const [cardData, setCardData] = useState(initialCardData);

  useEffect(() => {
    (async () => {
      const response = await getTrendingData();
      setCardData(response);
    })();
  }, []);

  return (
    <div className="dashboardContainer">
      <Navbar />

      <main>
        <SearchPanel placeholder="Search for movies or TV series" />
        <div className="templateContainer">
          <CardTemplate
            category="Trending"
            cardSize="LG"
            cardArr={cardData}
          />
          <CardTemplate
            category="Recommended for you"
            cardSize="SM"
            cardArr={cardData}
          />
        </div>
      </main>
    </div>
  );
};
