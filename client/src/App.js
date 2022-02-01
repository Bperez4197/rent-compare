import "./App.css";
import ForSale from "./components/ForSale/ForSale-component";
import ForRent from "./components/ForRent/ForRent-component";
import Search from "./components/Search/Search";

function App() {
  return (
    <div>
      <header>Rent Compare</header>
      <Search />
      <div className="houses">
        <ForSale />
        <ForRent />
      </div>
      <footer>This site was created and is maintained by Bryce Perez</footer>
    </div>
  );
}

export default App;
