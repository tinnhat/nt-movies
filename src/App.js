import "./App.scss";
import "swiper/scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./config/Routes";

function App() {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
