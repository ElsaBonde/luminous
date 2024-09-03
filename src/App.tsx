import "./App.css";
import CategoryCards from "./components/CategoryCards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewInCards from "./components/NewInCards";
import Newsletter from "./components/Newsletter";
import SeasonPicture from "./components/SeasonPicture";
import VideoMarketing from "./components/VideoMarketing";

function App() {
  return (
    <>
      <Header />
      <main>
        <SeasonPicture />
        <NewInCards />
        <VideoMarketing />
        <CategoryCards />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
