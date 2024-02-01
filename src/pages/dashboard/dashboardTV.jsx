import { useEffect, useState } from "react";
import { Navbar } from "@components/layout/navbar";
import { SearchPanel } from "@components/layout/search";
import { getSeriesData } from "@/api/homepage.api";
import { CardTemplate } from "@components/cards/cardTemplate";

export const DashboardTV = () => {
  const initialCardData = new Array(10).fill(null);
  const [cardData, setCardData] = useState(initialCardData);

  useEffect(() => {
    (async () => {
      const movieResponse = await getSeriesData();
      setCardData(movieResponse);
    })();
  }, []);
  return (
    <div className="dashboardContainer">
      <Navbar />

      <main>
        <SearchPanel placeholder="Search for TV series" />
        <CardTemplate
          category="TV Series"
          cardSize="SM"
          cardArr={cardData}
        />
      </main>
    </div>
  );
};
