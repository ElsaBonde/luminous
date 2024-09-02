import "./App.css";
import Header from "./Header";
import NewInCards from "./NewInCards";
import SeasonPicture from "./SeasonPicture";

function App() {
  return (
    <>
      <Header />
      <main>
        <SeasonPicture />
        <NewInCards />
      </main>
    </>
  );
}

export default App;
