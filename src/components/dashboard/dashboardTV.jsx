import { Navbar } from "./navbar";
import { SearchPanel } from "./search";

export const DashboardTV = () => {
  return (
    <div className="dashboardContainer">
      <Navbar />

      <main>
        <SearchPanel placeholder="Search for TV series" />
      </main>
    </div>
  );
};
