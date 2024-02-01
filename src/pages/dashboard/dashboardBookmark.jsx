import { Navbar } from "@components/layout/navbar";
import { SearchPanel } from "@components/layout/search";

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
