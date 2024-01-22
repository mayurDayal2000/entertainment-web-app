import { Navbar } from "./navbar";
import { SearchPanel } from "./search";

export const DashboardMovies = () => {
  return (
    <div className="dashboardContainer">
      <Navbar />

      <main>
        <SearchPanel placeholder="Search for movies" />
      </main>
    </div>
  );
};
