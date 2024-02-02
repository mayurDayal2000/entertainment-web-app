import { CardTemplate } from "@components/cards/cardTemplate";
import { Navbar } from "@components/layout/navbar";
import { SearchPanel } from "@components/layout/search";
import API_ENDPOINTS from "../../api/homepage.api.json";
import { useFetchData } from "../../hooks/useFetchData";

export const Dashboard = () => {
  const { endpoint: trendingEndpoint, params: trendingParams } = API_ENDPOINTS.getTrendingData;
  const { data: trendingData } = useFetchData(trendingEndpoint, trendingParams);

  const { endpoint: recommendedEndpoint, params: recommendedParams } = API_ENDPOINTS.getRecommendedData;
  const { data: recommendedData } = useFetchData(recommendedEndpoint, recommendedParams);

  return (
    <div className="dashboardContainer">
      <Navbar />

      <main>
        <SearchPanel placeholder="Search for movies or TV series" />
        <div className="templateContainer">
          <CardTemplate
            category="Trending"
            cardSize="LG"
            cardArr={trendingData}
          />
          <CardTemplate
            category="Recommended for you"
            cardSize="SM"
            cardArr={recommendedData}
          />
        </div>
      </main>
    </div>
  );
};
