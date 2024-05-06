import CardDetails from "./components/CardDetails";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="bg-light-bg flex flex-col justify-center items-center">
      <Header />
      <SearchBar />
      <CardDetails />
    </div>
  );
}

export default App;
