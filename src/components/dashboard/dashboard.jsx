import { Navbar } from "./navbar";
import { SearchPanel } from "./search";

export const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <Navbar />

      <main>
        <SearchPanel placeholder="Search for movies or TV series" />
      </main>
    </div>
  );
};
