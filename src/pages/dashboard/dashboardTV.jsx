import { Navbar } from "@components/layout/navbar";
import { SearchPanel } from "@components/layout/search";
import { CardTemplate } from "@components/cards/cardTemplate";
import { useFetchData } from "../../hooks/useFetchData";
import API_ENDPOINTS from "../../api/homepage.api.json";

export const DashboardTV = () => {
  const { endpoint, params } = API_ENDPOINTS.getSeriesData;
  const { data } = useFetchData(endpoint, params);
  return (
    <div className="dashboardContainer">
      <Navbar />

      <main>
        <SearchPanel placeholder="Search for TV series" />
        <CardTemplate
          category="TV Series"
          cardSize="SM"
          cardArr={data}
        />
      </main>
    </div>
  );
};
