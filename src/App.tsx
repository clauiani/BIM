import "./App.css";
import Testimonial1 from "./assets/Testimonial1.png";
import { Testimonial } from "./components/Testimonial/Testimonial/Testimonial";
import { PageHero } from "./components/PageHero/PageHero/PageHero";
import { Employee } from "./components/EmployeeThumbnail/Employee";
import Employee1 from "./assets/Poza Alex.png";
import { SectionIntro } from "./components/SectionIntro/SectionIntro";
import { BimPage } from "./Pages/BimPage/BimPage";
import { HomePage } from "./Pages/HomePage/HomePage";
import { HistoryPage } from "./Pages/HistoryPage/HistoryPage";
import { RegulationsPage } from "./Pages/RegulationsPage/RegulationsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { Video } from "./components/VideoThumbnail/Video";
import { Benefits } from "./components/Benefit/Benefits/Benefits";
import { Prizes } from "./components/Prize/Prizes/Prizes";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Testimonials } from "./components/Testimonial/Testimonials/Testimonials";
function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/History" component={HistoryPage} />
              <Route exact path="/Bim" component={BimPage} />
              <Route exact path="/Regulations" component={RegulationsPage} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
