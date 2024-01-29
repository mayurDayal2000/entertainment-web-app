import { useEffect, useState } from "react";
import { CardTemplate } from "../cards/cardTemplate";
import { Navbar } from "./navbar";
import { SearchPanel } from "./search";
import { getRecommendedData, getTrendingData } from "../../api/homepage.api";

export const Dashboard = () => {
  const initialCardData = new Array(10).fill(null);
  const [cardData, setCardData] = useState({
    trending: initialCardData,
    recommend: initialCardData,
  });

  useEffect(() => {
    (async () => {
      const [trendingResp, recommendResp] = await Promise.all([getTrendingData(), getRecommendedData()]);
      setCardData({ trending: trendingResp || initialCardData, recommend: recommendResp || initialCardData });
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
            cardArr={cardData.trending}
          />
          <CardTemplate
            category="Recommended for you"
            cardSize="SM"
            cardArr={cardData.recommend}
          />
        </div>
      </main>
    </div>
  );
};
