import { CardTemplate } from "@components/cards/cardTemplate";
import { Navbar } from "@components/layout/navbar";
import { SearchPanel } from "@components/layout/search";
import { useFetchData } from "../../hooks/useFetchData";
import API_ENDPOINTS from "../../api/homepage.api.json";

export const DashboardMovies = () => {
  const { endpoint, params } = API_ENDPOINTS.getMoviesData;
  const { data } = useFetchData(endpoint, params);

  return (
    <div className="dashboardContainer">
      <Navbar />

      <main>
        <SearchPanel placeholder="Search for movies" />

        <CardTemplate
          category="Movies"
          cardSize="SM"
          cardArr={data}
        />
      </main>
    </div>
  );
};
