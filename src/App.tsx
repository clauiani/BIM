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
              <Route exact path="/Home" component={HomePage} />
              <Route exact path="/History" component={HistoryPage} />
              <Route exact path="/Bim" component={BimPage} />
              <Route exact path="/Regulations" component={RegulationsPage} />
            </Switch>
          </div>
        </Router>
      </div>
      <PageHero
        title="Project Name"
        subtitle="By Strujac Alexandru/Update date"
      />

      <br />
      <br />
      <Testimonial
        image={Testimonial1}
        quote=" 
        ”Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.” "
        employee="Gabriel Tironeac"
        employeejobtitle="Head of Game Development "
      />
      <br />

      <br />
      <Employee
        image={Employee1}
        name="Alexandru Boca"
        job="Head of Mobile Development"
      />
      <br />
      <SectionIntro
        centered={false}
        title="Testimonials"
        subtitle=" What Participants Say"
        description="These are things that participants who have used our features and works says."
      />
      <SectionIntro
        centered
        title="Testimonials"
        subtitle=" What Participants Say"
        description="These are things that participants who have used our features and works says."
      />
      <br />
      <Video />

      <br />
      <Benefits />
      <br />
      <Prizes />
      <br />
      <Footer />
      <br />
      <br />
      <Testimonials />
      <br />
    </div>
  );
}

export default App;
