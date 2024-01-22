import { Navbar } from "./navbar";
import { SearchPanel } from "./search";

export const DashboardBookmark = () => {
  return (
    <div className="dashboardContainer">
      <Navbar />

      <main>
        <SearchPanel placeholder="Search for bookmarked shows" />
      </main>
    </div>
  );
};
