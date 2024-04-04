import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data.js";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {data.map((data) => {
          return (
            <Card
              key={data.id}
              {...data}
            />
          );
        })}
      </section>
    </div>
  );
}
export default App;
