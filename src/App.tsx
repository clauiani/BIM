import "./App.css";
import { Benefit } from "./components/Benefit/Benefit/Benefit";
import BenefitImg1 from "./assets/benefit1.png";
import Testimonial1 from "./assets/Testimonial1.png";
import { Testimonial } from "./components/Testimonial/Testimonial/Testimonial";
import Place1 from "./assets/Locul 1 (1).png";
import { Prize } from "./components/Prize/Prize/Prize";
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
function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navigation />
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
      <Benefit
        title="Benefit 1"
        description=" Create, edit, copy, move, download your files easily, everywhere, every time. Use it as your personal cloud. "
        image={BenefitImg1}
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

      <Prize image={Place1} place="1st Place" prize="1200$" />
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
    </div>
  );
}

export default App;
