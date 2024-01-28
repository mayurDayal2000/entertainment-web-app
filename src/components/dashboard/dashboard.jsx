import { CardTemplate } from "../cards/cardTemplate";
import { Navbar } from "./navbar";
import { SearchPanel } from "./search";

export const Dashboard = () => {
  const cardArr = new Array(10).fill(null);
  
  return (
    <div className="dashboardContainer">
      <Navbar />

      <main>
        <SearchPanel placeholder="Search for movies or TV series" />
        <div className="templateContainer">
          <CardTemplate
            category="Trending"
            cardSize="LG"
            cardArr={cardArr}
          />
          <CardTemplate
            category="Recommended for you"
            cardSize="SM"
            cardArr={cardArr}
          />
        </div>
      </main>
    </div>
  );
};
