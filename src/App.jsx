import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import "./App.css";
import Companies from "./component/Companies/Companies";
import Residen from "./component/Residen/Residen";
import Value from "./component/Value/Value";
import GetStarted from "./component/GetStarted/GetStarted";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residen />
      <Value />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
