import Navigationbar from "./components/Navigationbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights"
function App() {
  return (
    <>
      <main className="bg-black text-white">
        <Navigationbar />
        <Hero />
        <Highlights />
      </main>
    </>
  );
}

export default App;
