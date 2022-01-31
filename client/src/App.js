import "./App.css";
import Airbnb from "./components/Airbnb/Airbnb-component";
import Traditional from "./components/Traditional/Traditional-component";
import Search from "./components/Search/Search";

function App() {
  return (
    <div>
      <header>Rent Compare</header>
      <Search />
      <div className="houses">
        <Traditional />
        <Airbnb />
      </div>
      <footer>This site was created and is maintained by Bryce Perez</footer>
    </div>
  );
}

export default App;
