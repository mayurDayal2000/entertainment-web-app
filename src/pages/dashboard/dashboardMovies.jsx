import { useEffect, useState } from "react";
import { CardTemplate } from "@components/cards/cardTemplate";
import { Navbar } from "@components/layout/navbar";
import { SearchPanel } from "@components/layout/search";
import { getMoviesData } from "@/api/homepage.api";

export const DashboardMovies = () => {
  const initialCardData = new Array(10).fill(null);
  const [cardData, setCardData] = useState(initialCardData);

  useEffect(() => {
    (async () => {
      const movieResponse = await getMoviesData();
      setCardData(movieResponse);
    })();
  }, []);

  return (
    <div className="dashboardContainer">
      <Navbar />

      <main>
        <SearchPanel placeholder="Search for movies" />

        <CardTemplate
          category="Movies"
          cardSize="SM"
          cardArr={cardData}
        />
      </main>
    </div>
  );
};
