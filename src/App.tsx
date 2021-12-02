import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import data from "./data";

function App() {
  const cards = data.map(item => {
    return <Cards {...item} />;
  });

  return (
    <div>
      <Navbar />
      <main className="main">{cards}</main>
    </div>
  );
}

export default App;
